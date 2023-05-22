import { useComposedRefs } from '@tamagui/compose-refs'
import {
  isClient,
  isRSC,
  isServer,
  isWeb,
  useIsomorphicLayoutEffect,
} from '@tamagui/constants'
import { stylePropsView, validStyles } from '@tamagui/helpers'
import React, {
  Children,
  Fragment,
  createElement,
  forwardRef,
  memo,
  useCallback,
  useContext,
  useId,
  useRef,
} from 'react'

import { getConfig, onConfiguredOnce } from './config'
import { stackDefaultStyles } from './constants/constants'
import { FontLanguageContext } from './contexts/FontLanguageContext'
import { TextAncestorContext } from './contexts/TextAncestorContext'
import { didGetVariableValue, setDidGetVariableValue } from './createVariable'
import { extendStaticConfig, parseStaticConfig } from './helpers/extendStaticConfig'
import { useSplitStyles } from './helpers/getSplitStyles'
import { mergeProps } from './helpers/mergeProps'
import { proxyThemeVariables } from './helpers/proxyThemeVariables'
import { themeable } from './helpers/themeable'
import { useShallowSetState } from './helpers/useShallowSetState'
import { useAnimationDriver } from './hooks/useAnimationDriver'
import { setMediaShouldUpdate, useMedia } from './hooks/useMedia'
import { useServerRef, useServerState } from './hooks/useServerHooks'
import { useThemeWithState } from './hooks/useTheme'
import { hooks } from './setupHooks'
import {
  DebugProp,
  SpaceDirection,
  SpaceTokens,
  SpacerProps,
  StaticConfig,
  StaticConfigParsed,
  StylableComponent,
  TamaguiComponent,
  TamaguiComponentEvents,
  TamaguiComponentState,
  TamaguiElement,
  TamaguiInternalConfig,
  UseAnimationHook,
  UseAnimationProps,
} from './types'
import { Slot } from './views/Slot'
import { useThemedChildren } from './views/Theme'
import { ThemeDebug } from './views/ThemeDebug'

// let t
// import { timer } from '@tamagui/timer'
// if (true || process.env.ANALYZE) {
//   t = require().timer()
//   setTimeout(() => {
//     const out = t.print()
//     if (isClient) {
//       alert(out)
//     }
//   }, 2000)
// }

// this appears to fix expo / babel not picking this up sometimes? really odd
process.env.TAMAGUI_TARGET

export const defaultComponentState: TamaguiComponentState = {
  hover: false,
  press: false,
  pressIn: false,
  focus: false,
  unmounted: true,
}

const defaultComponentStateMounted: TamaguiComponentState = {
  ...defaultComponentState,
  unmounted: false,
}

const HYDRATION_CUTOFF = process.env.TAMAGUI_ANIMATED_PRESENCE_HYDRATION_CUTOFF
  ? +process.env.TAMAGUI_ANIMATED_PRESENCE_HYDRATION_CUTOFF
  : 5

/**
 * All things that need one-time setup after createTamagui is called
 */
let tamaguiConfig: TamaguiInternalConfig
let AnimatedText: any
let AnimatedView: any
let initialTheme: any

export const mouseUps = new Set<Function>()
if (typeof document !== 'undefined') {
  const cancelTouches = () => {
    mouseUps.forEach((x) => x())
    mouseUps.clear()
  }
  addEventListener('mouseup', cancelTouches)
  addEventListener('touchend', cancelTouches)
  addEventListener('touchcancel', cancelTouches)
}

/**
 * Only on native do we need the actual underlying View/Text
 * On the web we avoid react-native dep altogether.
 */
let BaseText: any
let BaseView: any
let hasSetupBaseViews = false

const numRenderedOfType: Record<string, number> = {}

export function createComponent<
  ComponentPropTypes extends Object = {},
  Ref = TamaguiElement,
  BaseProps = never
>(
  staticConfigIn: Partial<StaticConfig> | StaticConfigParsed,
  ParentComponent?: StylableComponent
) {
  const staticConfig = (() => {
    const next = extendStaticConfig(staticConfigIn, ParentComponent)

    if ('parsed' in next) {
      return next
    } else {
      return parseStaticConfig(next)
    }
  })()

  const { isHOC } = staticConfig

  const defaultComponentClassName = `is_${staticConfig.componentName}`
  let defaultProps: any
  let defaultTag: string | undefined

  // see onConfiguredOnce below which attaches a name then to this component
  const component = forwardRef<Ref, ComponentPropTypes>((propsIn: any, forwardedRef) => {
    if (process.env.TAMAGUI_TARGET === 'native') {
      // todo this could be moved to a cleaner location
      if (!hasSetupBaseViews) {
        hasSetupBaseViews = true
        const baseViews = hooks.getBaseViews?.()
        if (baseViews) {
          BaseText = baseViews.Text
          BaseView = baseViews.View
        }
      }
    }

    // test only
    if (process.env.NODE_ENV === 'test') {
      if (propsIn['data-test-renders']) {
        propsIn['data-test-renders']['current'] ??= 0
        propsIn['data-test-renders']['current'] += 1
      }
    }
    // const time = t.start({ quiet: true })

    // set variants through context
    let contextProps: Object | undefined
    let overriddenContextProps: Object | undefined
    const { context } = staticConfig
    if (context) {
      const contextValue = useContext(context)
      const { inverseShorthands } = getConfig()
      for (const key in context.props) {
        const propVal = propsIn[key] || propsIn[inverseShorthands[key]]
        // if not set, use context
        if (propVal == null) {
          if (
            contextValue &&
            // is valid style or variant allow it
            ((staticConfig.validStyles && key in staticConfig.validStyles) ||
              (staticConfig.variants && key in staticConfig.variants))
          ) {
            contextProps ||= {}
            contextProps[key] = contextValue[key]
          }
        }
        // if set in props, update context
        else {
          overriddenContextProps ||= {}
          overriddenContextProps[key] = propVal
        }
      }
    }

    // context overrides defaults but not props
    const curDefaultProps = contextProps
      ? { ...defaultProps, ...contextProps }
      : defaultProps

    // React inserts default props after your props for some reason...
    // order important so we do loops, you can't just spread because JS does weird things
    let props: any

    if (curDefaultProps && !propsIn.asChild) {
      props = mergeProps(curDefaultProps, propsIn)[0]
    } else {
      props = propsIn
    }

    const debugProp = props['debug'] as DebugProp
    const { Component, isText, isZStack } = staticConfig
    const componentName = props.componentName || staticConfig.componentName

    // conditional but if ever true stays true
    // [animated, inversed]
    const stateRef = useRef(
      undefined as any as {
        hasAnimated?: boolean
        themeShallow?: boolean
        didAccessThemeVariableValue?: boolean
      }
    )
    stateRef.current ||= {}

    const hostRef = useServerRef<TamaguiElement>(null)

    /**
     * Component state for tracking animations, pseudos
     */
    const animationsConfig = useAnimationDriver()
    const useAnimations = animationsConfig?.useAnimations as UseAnimationHook | undefined

    // after we get states mount we need to turn off isAnimated for server side
    const hasAnimationProp =
      props.animation || (props.style && hasAnimatedStyleValue(props.style))
    const willBeAnimated = (() => {
      if (isServer) return false
      const next = !!(hasAnimationProp && !isHOC && useAnimations)
      if (next && !stateRef.current.hasAnimated) {
        stateRef.current.hasAnimated = true
      }
      return next || stateRef.current.hasAnimated
    })()

    const usePresence = animationsConfig?.usePresence
    const presence = !isRSC && willBeAnimated && usePresence ? usePresence() : null

    const hasEnterStyle = !!props.enterStyle
    const needsMount = Boolean((isWeb ? isClient : true) && willBeAnimated)

    const states = useServerState<TamaguiComponentState>(
      needsMount ? defaultComponentState! : defaultComponentStateMounted!
    )
    const state = propsIn.forceStyle
      ? { ...states[0], [propsIn.forceStyle]: true }
      : states[0]
    const setState = states[1]
    const setStateShallow = useShallowSetState(setState, debugProp, componentName)

    // cheat code
    let hasHydrated = false
    numRenderedOfType[componentName] ??= 0
    if (willBeAnimated) {
      if (++numRenderedOfType[componentName] > HYDRATION_CUTOFF) {
        hasHydrated = true
      }
    }

    let isAnimated = willBeAnimated

    // presence avoids ssr stuff
    if (presence && hasHydrated) {
      // no
    } else {
      if (isAnimated && (isServer || state.unmounted === true)) {
        isAnimated = false
      }
    }

    const componentClassName = props.asChild
      ? ''
      : props.componentName
      ? `is_${props.componentName}`
      : defaultComponentClassName
    const hasTextAncestor = !!(isWeb && isText ? useContext(TextAncestorContext) : false)
    const languageContext = isRSC ? null : useContext(FontLanguageContext)
    const isDisabled = props.disabled ?? props.accessibilityState?.disabled

    const isTaggable = !Component || typeof Component === 'string'
    // default to tag, fallback to component (when both strings)
    const element = isWeb
      ? isTaggable
        ? props.tag || defaultTag || Component
        : Component
      : Component

    const BaseTextComponent = BaseText || element || 'span'
    const BaseViewComponent = BaseView || element || (hasTextAncestor ? 'span' : 'div')

    AnimatedText = animationsConfig ? animationsConfig.Text : BaseTextComponent
    AnimatedView = animationsConfig ? animationsConfig.View : BaseViewComponent

    let elementType = isText
      ? (isAnimated ? AnimatedText : null) || BaseTextComponent
      : (isAnimated ? AnimatedView : null) || BaseViewComponent

    const avoidClassesWhileAnimating = animationsConfig?.isReactNative

    // set enter/exit variants onto our new props object
    if (isAnimated && presence) {
      const presenceState = presence[2]
      if (presenceState) {
        if (state.unmounted && presenceState.enterVariant) {
          props[presenceState.enterVariant] = true
        }
        if (!presenceState.isPresent && presenceState.exitVariant) {
          props[presenceState.exitVariant] = true
        }
      }
    }

    const isAnimatedReactNative = isAnimated && animationsConfig?.isReactNative
    const isReactNative = Boolean(staticConfig.isReactNative || isAnimatedReactNative)

    const shouldAvoidClasses =
      !isWeb ||
      !!(isAnimated && avoidClassesWhileAnimating) ||
      !staticConfig.acceptsClassName
    const shouldForcePseudo = !!propsIn.forceStyle
    const noClassNames = shouldAvoidClasses || shouldForcePseudo

    // internal use only
    const disableThemeProp = props['data-disable-theme']
    const disableTheme = (disableThemeProp && !willBeAnimated) || isHOC

    const themeStateProps = {
      name: props.theme,
      componentName,
      reset: props.reset,
      inverse: props.themeInverse,
      // @ts-ignore this is internal use only
      disable: disableTheme,
      shouldUpdate: () => !!stateRef.current.didAccessThemeVariableValue,
      debug: debugProp,
    }
    const themeState = useThemeWithState(themeStateProps)!

    elementType = Component || elementType
    const isStringElement = typeof elementType === 'string'

    const isExiting = presence?.[0] === false
    const mediaState = useMedia(
      // @ts-ignore, we just pass a stable object so we can get it later with
      // should match to the one used in `setMediaShouldUpdate` below
      stateRef,
      debugProp ? { props, staticConfig } : null
    )

    setDidGetVariableValue(false)

    if (process.env.NODE_ENV === 'development') {
      const id = useId()

      if (debugProp) {
        // prettier-ignore
        const name = `${componentName || Component?.displayName || Component?.name || '[Unnamed Component]'}`
        const type = isAnimatedReactNative ? '(animated)' : isReactNative ? '(rnw)' : ''
        const dataIs = propsIn['data-is'] || ''
        const banner = `${name}${dataIs ? ` ${dataIs}` : ''} ${type} id ${id}`
        const parentsLog = (conf: StaticConfig) =>
          conf.parentNames ? ` (${conf.parentNames?.join(' > ')})` : ''
        console.group(
          `%c ${banner}${parentsLog(staticConfig)} (unmounted: ${state.unmounted})`,
          'background: yellow;'
        )
        if (!isServer) {
          console.groupCollapsed(
            `Info (collapsed): ${state.press || state.pressIn ? 'PRESSED ' : ''}${
              state.hover ? 'HOVERED ' : ''
            }${state.focus ? 'FOCUSED' : ' '}`
          )
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log({
            props,
            state,
            staticConfig,
            elementType,
            themeStateProps,
            themeState,
            styledContext: { contextProps, overriddenContextProps },
          })
          console.groupEnd()
        }
      }
    }

    const resolveVariablesAs =
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      isAnimated || (isHOC && state.unmounted == false && hasAnimationProp)
        ? 'value'
        : 'auto'

    const splitStyles = useSplitStyles(
      props,
      staticConfig,
      themeState.theme,
      {
        ...state,
        mediaState,
        noClassNames,
        hasTextAncestor,
        resolveVariablesAs,
        isExiting,
      },
      null,
      languageContext || undefined,
      elementType,
      debugProp
    )

    // only listen for changes if we are using raw theme values or media space, or dynamic media (native)
    // array = space media breakpoints
    const isMediaSpaced = Array.isArray(splitStyles.hasMedia)
    const shouldListenForMedia =
      didGetVariableValue() ||
      isMediaSpaced ||
      (noClassNames && splitStyles.hasMedia === true)

    setMediaShouldUpdate(stateRef, {
      enabled: shouldListenForMedia,
      keys: noClassNames && isMediaSpaced ? (splitStyles.hasMedia as any) : null,
    })

    // animation setup
    const isAnimatedReactNativeWeb = isAnimated && avoidClassesWhileAnimating

    if (process.env.NODE_ENV === 'development') {
      if (!process.env.TAMAGUI_TARGET) {
        console.error(
          `No process.env.TAMAGUI_TARGET set, please set it to "native" or "web".`
        )
      }

      if (debugProp) {
        console.groupCollapsed('props')
        // prettier-ignore
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log('props in', propsIn, 'mapped to', props, 'in order', Object.keys(props))
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log('splitStyles', splitStyles)
        // rome-ignore lint/nursery/noConsoleLog: ok
        console.log('shouldListenForMedia', shouldListenForMedia)
        // rome-ignore lint/nursery/noConsoleLog: ok
        console.log('className', Object.values(splitStyles.classNames))
        if (isClient) {
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log('ref', hostRef, '(click to view)')
        }
        console.groupEnd()
        if (debugProp === 'break') {
          // rome-ignore lint/suspicious/noDebugger: ok
          debugger
        }
      }
    }

    const {
      viewProps: viewPropsIn,
      pseudos,
      style: splitStylesStyle,
      classNames,
      space,
    } = splitStyles

    const propsWithAnimation = props as UseAnimationProps

    // once you set animation prop don't remove it, you can set to undefined/false
    // reason is animations are heavy - no way around it, and must be run inline here (🙅 loading as a sub-component)
    let animationStyles: any
    if (!isRSC && willBeAnimated && useAnimations && !isHOC) {
      const animations = useAnimations({
        props: propsWithAnimation,
        style: splitStylesStyle,
        presence,
        state,
        theme: themeState.theme,
        pseudos: pseudos || null,
        onDidAnimate: props.onDidAnimate,
        hostRef,
        staticConfig,
      })
      if (isAnimated) {
        if (animations) {
          animationStyles = animations.style
        }
      }
    }

    const {
      asChild,
      children,
      onPress,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      themeShallow,
      spaceDirection: _spaceDirection,
      disabled: disabledProp,
      onMouseUp,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      separator,
      // ignore from here on out
      forceStyle: _forceStyle,
      // @ts-ignore  for next/link compat etc
      onClick,
      theme: _themeProp,
      // @ts-ignore
      defaultVariants,

      ...nonTamaguiProps
    } = viewPropsIn

    const disabled = props.accessibilityState?.disabled || props.accessibilityDisabled

    // these can ultimately be for DOM, react-native-web views, or animated views
    // so the type is pretty loose
    let viewProps = nonTamaguiProps

    if (isHOC && _themeProp) {
      viewProps.theme = _themeProp
    }

    // if react-native-web view just pass all props down
    if (
      process.env.TAMAGUI_TARGET === 'web' &&
      !isReactNative &&
      !willBeAnimated &&
      !asChild
    ) {
      viewProps = hooks.usePropsTransform?.(elementType, nonTamaguiProps, hostRef)
    } else {
      viewProps = nonTamaguiProps
    }

    viewProps.ref = useComposedRefs(hostRef as any, forwardedRef)

    if (process.env.NODE_ENV === 'development') {
      if (!isText && isWeb && !isHOC) {
        Children.toArray(props.children).forEach((item) => {
          // allow newlines because why not its annoying with mdx
          if (typeof item === 'string' && item !== '\n') {
            console.error(
              `Unexpected text node: ${item}. A text node cannot be a child of a <View>.`
            )
          }
        })
      }
    }

    const unPress = useCallback(() => {
      setStateShallow({
        press: false,
        pressIn: false,
      })
    }, [setStateShallow])

    const shouldSetMounted = needsMount && state.unmounted

    // combinined two effects into one for performance so be careful with logic
    // because no need for mouseUp removal effect if its not even mounted yet
    useIsomorphicLayoutEffect(() => {
      if (!shouldSetMounted) {
        return () => {
          mouseUps.delete(unPress)
        }
      }

      const unmounted = state.unmounted === true && hasEnterStyle ? 'should-enter' : false
      setStateShallow({
        unmounted,
      })
    }, [shouldSetMounted, state.unmounted])

    let styles: Record<string, any>[]

    if (isStringElement && shouldAvoidClasses && !shouldForcePseudo) {
      styles = {
        ...(animationStyles ?? splitStylesStyle),
      }
    } else {
      styles = [animationStyles ?? splitStylesStyle]

      // ugly but for now...
      if (shouldForcePseudo) {
        const next = {}
        styles.forEach((style) => Object.assign(next, style))
        // @ts-ignore
        Object.assign(splitStyles.style, next)
      }
    }

    let fontFamily = isText
      ? splitStyles.fontFamily || staticConfig.defaultProps.fontFamily
      : null
    if (fontFamily && fontFamily[0] === '$') {
      fontFamily = fontFamily.slice(1)
    }
    const fontFamilyClassName = fontFamily ? `font_${fontFamily}` : ''

    const classList = [
      hasEnterStyle && ((state.unmounted && needsMount) || !isClient)
        ? 't_will-mount'
        : '',
      componentName ? componentClassName : '',
      fontFamilyClassName,
      classNames ? Object.values(classNames).join(' ') : '',
    ]

    const className = classList.join(' ')

    if (process.env.TAMAGUI_TARGET === 'web') {
      const style = animationStyles ?? splitStyles.style

      if (isAnimatedReactNativeWeb) {
        viewProps.style = style
      } else if (isReactNative) {
        // TODO these shouldn't really return from getSplitStyles when in Native mode
        const cnStyles = { $$css: true }
        for (const name of className.split(' ')) {
          cnStyles[name] = name
        }
        viewProps.style = [...(Array.isArray(style) ? style : [style]), cnStyles]

        if (process.env.NODE_ENV === 'development') {
          // turn debug data- props into dataSet in dev mode
          Object.keys(viewProps).forEach((key) => {
            if (key.startsWith('data-')) {
              viewProps.dataSet ??= {}
              viewProps.dataSet[key.replace('data-', '')] = viewProps[key]
              delete viewProps[key]
            }
          })
        }
      } else {
        viewProps.className = className
        viewProps.style = style
      }
    }

    // TODO MOVE INTO HOOK
    if (process.env.TAMAGUI_TARGET === 'native') {
      // swap out the right family based on weight/style
      if (splitStyles.fontFamily) {
        const faceInfo = tamaguiConfig.fontsParsed[splitStyles.fontFamily]?.face
        if (faceInfo) {
          const [weight, style] = (() => {
            let weight: string | undefined
            let style: string | undefined
            for (let i = styles.length; i >= 0; i--) {
              weight ??= styles[i]?.fontWeight
              style ??= styles[i]?.fontStyle
            }
            return [weight || '400', style || 'normal'] as const
          })()
          const overrideFace = faceInfo[weight]?.[style]?.val
          if (overrideFace) {
            for (const style of styles) {
              if (style?.fontFamily) {
                style.fontFamily = overrideFace
                style.fontWeight = undefined
                style.fontStyle = undefined
              }
            }
          }
        }
      }

      // assign styles
      viewProps.style = styles
    }

    const runtimePressStyle = !disabled && noClassNames && pseudos?.pressStyle
    const attachPress = Boolean(
      runtimePressStyle || onPress || onPressOut || onPressIn || onClick
    )
    const runtimeHoverStyle = !disabled && noClassNames && pseudos?.hoverStyle
    const isHoverable =
      isWeb &&
      !!(runtimeHoverStyle || onHoverIn || onHoverOut || onMouseEnter || onMouseLeave)

    const handlesPressEvents = !(isWeb || asChild)

    // check presence rather than value to prevent reparenting bugs
    // allows for onPress={x ? function : undefined} without re-ordering dom
    const shouldAttach = Boolean(
      attachPress ||
        isHoverable ||
        (noClassNames && 'pressStyle' in props) ||
        (isWeb && noClassNames && 'hoverStyle' in props)
    )

    const events: TamaguiComponentEvents | null =
      shouldAttach && !isRSC && !isDisabled && !asChild
        ? {
            onPressOut: attachPress
              ? (e) => {
                  unPress()
                  onPressOut?.(e)
                  onMouseUp?.(e)
                }
              : undefined,
            ...(isHoverable && {
              onMouseEnter: isHoverable
                ? (e) => {
                    const next: Partial<typeof state> = {}
                    if (isHoverable) {
                      next.hover = true
                    }
                    if (state.pressIn) {
                      next.press = true
                    }
                    setStateShallow(next)
                    onHoverIn?.(e)
                    onMouseEnter?.(e)
                  }
                : undefined,
              onMouseLeave: isHoverable
                ? (e) => {
                    const next: Partial<typeof state> = {}
                    mouseUps.add(unPress)
                    if (isHoverable) {
                      next.hover = false
                    }
                    if (state.pressIn) {
                      next.press = false
                      next.pressIn = false
                    }
                    setStateShallow(next)
                    onHoverOut?.(e)
                    onMouseLeave?.(e)
                  }
                : undefined,
            }),
            onPressIn: attachPress
              ? (e) => {
                  setStateShallow({
                    press: true,
                    pressIn: true,
                    hover: false,
                  })
                  onPressIn?.(e)
                  onMouseDown?.(e)
                  if (isWeb) {
                    mouseUps.add(unPress)
                  }
                }
              : undefined,
            onPress: attachPress
              ? (e) => {
                  unPress()
                  // @ts-ignore
                  isWeb && onClick?.(e)
                  onPress?.(e)
                }
              : undefined,
          }
        : null

    if (process.env.TAMAGUI_TARGET === 'native') {
      if (events) {
        // replicating TouchableWithoutFeedback
        Object.assign(events, {
          cancelable: !props.rejectResponderTermination,
          disabled: isDisabled,
          hitSlop: props.hitSlop,
          delayLongPress: props.delayLongPress,
          delayPressIn: props.delayPressIn,
          delayPressOut: props.delayPressOut,
          focusable: viewProps.focusable ?? true,
          minPressDuration: 0,
        })
      }
    }

    // EVENTS native
    hooks.useEvents?.(viewProps, events, splitStyles, setStateShallow)

    const shouldReset = !!(themeShallow && themeState.isNewTheme)
    if (shouldReset) {
      stateRef.current.themeShallow = true
    }

    let content =
      !children || asChild
        ? children
        : spacedChildren({
            separator,
            children,
            space,
            direction: props.spaceDirection || 'both',
            isZStack,
            debug: debugProp,
          })

    if (asChild) {
      elementType = Slot
      viewProps = {
        ...viewProps,
        onPress,
        onPressIn,
        onPressOut,
      }
    }

    content = createElement(elementType, viewProps, content)

    // disable theme prop is deterministic so conditional hook ok here
    content = disableThemeProp
      ? content
      : useThemedChildren(themeState, content, {
          shallow: stateRef.current.themeShallow,
          // passPropsToChildren: true,
        })

    if (process.env.NODE_ENV === 'development') {
      if (props['debug'] === 'visualize') {
        content = (
          <ThemeDebug themeState={themeState} themeProps={props}>
            {content}
          </ThemeDebug>
        )
      }
    }

    if (process.env.TAMAGUI_TARGET === 'web') {
      if (events || isAnimatedReactNativeWeb) {
        content = (
          <span
            className={`${isAnimatedReactNativeWeb ? className : ''}  _dsp_contents`}
            {...(events && {
              onMouseEnter: events.onMouseEnter,
              onMouseLeave: events.onMouseLeave,
              onClick: events.onPress,
              onMouseDown: events.onPressIn,
              onMouseUp: events.onPressOut,
              onTouchStart: events.onPressIn,
              onTouchEnd: events.onPressOut,
            })}
          >
            {content}
          </span>
        )
      }
    }

    if (overriddenContextProps) {
      const Provider = staticConfig.context!.Provider!
      content = <Provider {...overriddenContextProps}>{content}</Provider>
    }

    if (process.env.NODE_ENV === 'development') {
      if (debugProp) {
        const element = typeof elementType === 'string' ? elementType : 'Component'
        console.groupCollapsed(`render <${element} /> with props`, viewProps)
        for (const key in viewProps) {
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log(key, viewProps[key])
        }
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log('children', content)
        if (typeof window !== 'undefined') {
          // prettier-ignore
          // rome-ignore lint/nursery/noConsoleLog: <explanation>
          console.log({ state, themeState, isAnimated, isAnimatedReactNativeWeb, defaultProps, viewProps, splitStyles, animationStyles, handlesPressEvents, isStringElement, classNamesIn: props.className?.split(' '), classNamesOut: viewProps.className?.split(' '), events, shouldAttach, styles, pseudos, content, shouldAvoidClasses, avoidClasses: avoidClassesWhileAnimating, animation: props.animation, style: splitStylesStyle, staticConfig, tamaguiConfig, shouldForcePseudo })
        }
        console.groupEnd()
        console.groupEnd()
      }
    }

    return content
  })

  if (staticConfig.componentName) {
    component.displayName = staticConfig.componentName
  }

  onConfiguredOnce((conf) => {
    // one time only setup
    if (!tamaguiConfig) {
      tamaguiConfig = conf

      if (!initialTheme) {
        const next = conf.themes[Object.keys(conf.themes)[0]]
        initialTheme = proxyThemeVariables(next)
        if (process.env.NODE_ENV === 'development') {
          if (!initialTheme) {
            // rome-ignore lint/nursery/noConsoleLog: <explanation>
            console.log('Warning: Missing theme')
          }
        }
      }
    }

    let defaultPropsIn = staticConfig.defaultProps || {}

    // because we run createTamagui after styled() defs, have to do some work here
    // gather defaults props one time and merge downwards
    // find last unprocessed and process
    const parentNames = [...(staticConfig.parentNames || []), staticConfig.componentName]

    if (tamaguiConfig.defaultProps && parentNames && staticConfig.componentName) {
      defaultPropsIn = mergeConfigDefaultProps(
        staticConfig.componentName,
        defaultPropsIn,
        tamaguiConfig.defaultProps,
        parentNames,
        tamaguiConfig
      )
    }

    const debug = defaultPropsIn['debug']

    if (defaultPropsIn.tag) {
      defaultTag = defaultPropsIn.tag
    }

    const noClassNames = !staticConfig.acceptsClassName
    const { name, variants, defaultVariants, ...restProps } = defaultPropsIn

    defaultProps = restProps

    if (staticConfig.isText && !defaultProps.fontFamily && conf.defaultFont) {
      defaultProps.fontFamily = `$${conf.defaultFont}`
    }

    // add debug logs
    if (process.env.NODE_ENV === 'development' && debug) {
      if (process.env.IS_STATIC !== 'is_static') {
        // rome-ignore lint/nursery/noConsoleLog: <explanation>
        console.log(`🐛 [${staticConfig.componentName || 'Component'}]`, {
          staticConfig,
          defaultPropsIn,
          defaultProps,
          defaultPropsKeyOrder: Object.keys(defaultProps),
          defaultTag,
          noClassNames,
        })
      }
    }
  })

  type ComponentType = TamaguiComponent<ComponentPropTypes, Ref, BaseProps>

  let res: ComponentType = component as any

  if (staticConfigIn.memo) {
    res = memo(res) as any
  }

  // is this necessary?
  res.staticConfig = {
    validStyles: staticConfig.validStyles || stylePropsView,
    ...staticConfig,
  }

  function extendStyledConfig() {
    return extendStaticConfig(
      {
        ...staticConfig,
        neverFlatten: true,
        isHOC: true,
      },
      res
    )
  }

  function extractable(Component: any) {
    Component.staticConfig = extendStyledConfig()
    Component.styleable = styleable
    return Component
  }

  function styleable(Component: any) {
    const isForwardedRefAlready = Component.render?.length === 2
    const ComponentForwardedRef = isForwardedRefAlready
      ? (Component as any)
      : forwardRef(Component as any)

    const extendedConfig = extendStyledConfig()
    const out = themeable(ComponentForwardedRef, extendedConfig) as any
    out.staticConfig = extendedConfig
    out.styleable = styleable
    return out
  }

  res.extractable = extractable
  res.styleable = styleable

  return res
}

// for elements to avoid spacing
export const Unspaced = (props: { children?: any }) => props.children
Unspaced['isUnspaced'] = true

// dont used styled() here to avoid circular deps
// keep inline to avoid circular deps

export const Spacer = createComponent<SpacerProps>({
  acceptsClassName: true,
  memo: true,
  componentName: 'Spacer',
  validStyles,

  defaultProps: {
    ...stackDefaultStyles,
    // avoid nesting issues
    tag: 'span',
    size: true,
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '...size': (size, { tokens }) => {
        size = size === true ? '$true' : size
        const sizePx = tokens.space[size] ?? size
        return {
          width: sizePx,
          height: sizePx,
          minWidth: sizePx,
          minHeight: sizePx,
        }
      },
    },

    flex: {
      true: {
        flexGrow: 1,
      },
    },

    direction: {
      horizontal: {
        height: 0,
        minHeight: 0,
      },
      vertical: {
        width: 0,
        minWidth: 0,
      },
      both: {},
    },
  } as const,
})

export type SpacedChildrenProps = {
  isZStack?: boolean
  children?: React.ReactNode
  space?: SpaceTokens | number | null
  spaceFlex?: boolean | number
  direction?: SpaceDirection
  separator?: React.ReactNode
  debug?: DebugProp
}

export function spacedChildren(props: SpacedChildrenProps) {
  const { isZStack, children, space, direction, spaceFlex, separator } = props
  const hasSpace = !!(space || spaceFlex)
  const hasSeparator = !(separator === undefined || separator === null)
  if (!(hasSpace || hasSeparator || isZStack)) {
    return children
  }

  const childrenList = Children.toArray(children)

  const len = childrenList.length
  if (len <= 1 && !isZStack && !childrenList[0]?.['type']?.['shouldForwardSpace']) {
    return childrenList
  }

  const final: React.ReactNode[] = []
  for (let [index, child] of childrenList.entries()) {
    const isEmpty =
      child === null ||
      child === undefined ||
      (Array.isArray(child) && child.length === 0)

    // forward space
    if (!isEmpty && React.isValidElement(child) && child.type?.['shouldForwardSpace']) {
      child = React.cloneElement(child, {
        space,
        spaceFlex,
        separator,
        key: child.key,
      } as any)
    }

    // push them all, but wrap some in Fragment
    if (isEmpty || !child || (child['key'] && !isZStack)) {
      final.push(child)
    } else {
      final.push(
        <Fragment key={index}>
          {isZStack ? <AbsoluteFill>{child}</AbsoluteFill> : child}
        </Fragment>
      )
    }

    // first child unspaced avoid insert space
    if (isUnspaced(child) && index === 0) continue
    // no spacing on ZStack
    if (isZStack) continue

    const next = childrenList[index + 1]

    if (next && !isUnspaced(next)) {
      if (separator) {
        if (hasSpace) {
          final.push(
            createSpacer({
              key: `_${index}_00tmgui`,
              direction,
              space,
              spaceFlex,
            })
          )
        }
        final.push(
          React.isValidElement(separator)
            ? React.cloneElement(separator, { key: `sep_${index}` })
            : separator
        )
        if (hasSpace) {
          final.push(
            createSpacer({
              key: `_${index}01tmgui`,
              direction,
              space,
              spaceFlex,
            })
          )
        }
      } else {
        final.push(
          createSpacer({
            key: `_${index}02tmgui`,
            direction,
            space,
            spaceFlex,
          })
        )
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    if (props.debug) {
      // rome-ignore lint/nursery/noConsoleLog: <explanation>
      console.log(`  Spaced children`, final, props)
    }
  }

  return final
}

type CreateSpacerProps = SpacedChildrenProps & { key: string }

function createSpacer({ key, direction, space, spaceFlex }: CreateSpacerProps) {
  return (
    <Spacer
      key={key}
      size={space}
      direction={direction}
      {...(typeof spaceFlex !== 'undefined' && {
        flex: spaceFlex === true ? 1 : spaceFlex === false ? 0 : spaceFlex,
      })}
    />
  )
}

function isUnspaced(child: React.ReactNode) {
  const t = child?.['type']
  return t?.['isVisuallyHidden'] || t?.['isUnspaced']
}

const DefaultProps = new Map()

function mergeConfigDefaultProps(
  name: string,
  props: Record<string, any>,
  configDefaults: Record<string, Object>,
  parentNames: (string | undefined)[],
  conf: TamaguiInternalConfig
) {
  const len = parentNames.length
  let prev

  for (let i = 0; i < len; i++) {
    const n = parentNames[i]
    if (!n) continue
    if (DefaultProps.has(n)) {
      prev = DefaultProps.get(n)
      continue
    }
    const props = configDefaults[n]
    if (!props) {
      if (prev) {
        DefaultProps.set(n, prev)
      }
      continue
    }
    prev = mergeProps(prev || {}, props, false, conf.inverseShorthands)[0]
    DefaultProps.set(n, prev)
  }

  // overwrite the user defined defaults on top of internal defined defaults
  const ourDefaultsMerged = DefaultProps.get(name)
  if (ourDefaultsMerged) {
    return mergeProps(props, ourDefaultsMerged, false, conf.inverseShorthands)[0]
  }
  return props
}

const AbsoluteFill: any = createComponent({
  defaultProps: {
    ...stackDefaultStyles,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'box-none',
  },
})

function hasAnimatedStyleValue(style: Object) {
  return Object.keys(style).some((k) => {
    const val = style[k]
    return val && typeof val === 'object' && '_animation' in val
  })
}
