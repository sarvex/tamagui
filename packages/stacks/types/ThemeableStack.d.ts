/// <reference types="react" />
import { GetProps } from '@tamagui/core';
export declare const themeableVariants: {
    readonly backgrounded: {
        readonly true: {
            readonly backgroundColor: "$background";
        };
    };
    readonly radiused: {
        true: (_: any, extras: any) => {
            borderRadius: any;
        };
    };
    readonly hoverTheme: {
        true: {
            hoverStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly pressTheme: {
        true: {
            cursor: string;
            pressStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly focusTheme: {
        true: {
            focusStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly circular: {
        true: (_: any, { props, tokens }: {
            props: any;
            tokens: any;
        }) => {
            width: any;
            height: any;
            maxWidth: any;
            maxHeight: any;
            minWidth: any;
            minHeight: any;
            borderRadius: number;
            padding: number;
        };
    };
    readonly padded: {
        true: (_: any, extras: any) => {
            padding: any;
        };
    };
    readonly elevate: {
        true: (_: boolean, extras: any) => {
            [x: `$${string}`]: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>) | import("@tamagui/core").Variable<any> | undefined;
            [x: `$${number}`]: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>) | import("@tamagui/core").Variable<any> | undefined;
            hitSlop?: import("react-native/types").Insets | (import("react-native/types").Insets & number) | import("@tamagui/core").Variable<any> | undefined;
            id?: string | import("@tamagui/core").Variable<any> | undefined;
            pointerEvents?: "box-none" | "none" | "box-only" | "auto" | import("@tamagui/core").Variable<any> | undefined;
            removeClippedSubviews?: boolean | import("@tamagui/core").Variable<any> | undefined;
            style?: import("@tamagui/core").Variable<any> | import("react-native/types").StyleProp<import("react-native/types").ViewStyle>;
            testID?: string | import("@tamagui/core").Variable<any> | undefined;
            nativeID?: string | import("@tamagui/core").Variable<any> | undefined;
            collapsable?: boolean | import("@tamagui/core").Variable<any> | undefined;
            needsOffscreenAlphaCompositing?: boolean | import("@tamagui/core").Variable<any> | undefined;
            renderToHardwareTextureAndroid?: boolean | import("@tamagui/core").Variable<any> | undefined;
            focusable?: boolean | import("@tamagui/core").Variable<any> | undefined;
            shouldRasterizeIOS?: boolean | import("@tamagui/core").Variable<any> | undefined;
            isTVSelectable?: boolean | import("@tamagui/core").Variable<any> | undefined;
            hasTVPreferredFocus?: boolean | import("@tamagui/core").Variable<any> | undefined;
            tvParallaxProperties?: import("@tamagui/core").Variable<any> | import("react-native/types").TVParallaxProperties | undefined;
            tvParallaxShiftDistanceX?: number | import("@tamagui/core").Variable<any> | undefined;
            tvParallaxShiftDistanceY?: number | import("@tamagui/core").Variable<any> | undefined;
            tvParallaxTiltAngle?: number | import("@tamagui/core").Variable<any> | undefined;
            tvParallaxMagnification?: number | import("@tamagui/core").Variable<any> | undefined;
            onTouchStart?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
            onTouchMove?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
            onTouchEnd?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
            onTouchCancel?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
            onTouchEndCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
            onPointerEnter?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerEnterCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerLeave?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerLeaveCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerMove?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerMoveCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerCancel?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerCancelCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerDown?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerDownCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerUp?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            onPointerUpCapture?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").PointerEvent) => void) | undefined;
            accessible?: boolean | import("@tamagui/core").Variable<any> | undefined;
            accessibilityActions?: import("@tamagui/core").Variable<any> | readonly Readonly<{
                name: string;
                label?: string | undefined;
            }>[] | undefined;
            accessibilityLabel?: string | import("@tamagui/core").Variable<any> | undefined;
            'aria-label'?: string | import("@tamagui/core").Variable<any> | undefined;
            accessibilityRole?: import("@tamagui/core").Variable<any> | import("react-native/types").AccessibilityRole | undefined;
            accessibilityState?: import("@tamagui/core").Variable<any> | import("react-native/types").AccessibilityState | undefined;
            'aria-busy'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            'aria-checked'?: boolean | import("@tamagui/core").Variable<any> | "mixed" | undefined;
            'aria-disabled'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            'aria-expanded'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            'aria-selected'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            'aria-labelledby'?: string | import("@tamagui/core").Variable<any> | undefined;
            accessibilityHint?: string | import("@tamagui/core").Variable<any> | undefined;
            accessibilityValue?: import("@tamagui/core").Variable<any> | import("react-native/types").AccessibilityValue | undefined;
            'aria-valuemax'?: number | import("@tamagui/core").Variable<any> | undefined;
            'aria-valuemin'?: number | import("@tamagui/core").Variable<any> | undefined;
            'aria-valuenow'?: number | import("@tamagui/core").Variable<any> | undefined;
            'aria-valuetext'?: string | import("@tamagui/core").Variable<any> | undefined;
            onAccessibilityAction?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").AccessibilityActionEvent) => void) | undefined;
            importantForAccessibility?: "auto" | import("@tamagui/core").Variable<any> | "yes" | "no" | "no-hide-descendants" | undefined;
            'aria-hidden'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            'aria-live'?: import("@tamagui/core").Variable<any> | "polite" | "assertive" | "off" | undefined;
            'aria-modal'?: boolean | import("@tamagui/core").Variable<any> | undefined;
            role?: "none" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "group" | "heading" | "img" | "link" | "list" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "meter" | "navigation" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "summary" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | import("@tamagui/core").Variable<any> | undefined;
            accessibilityLiveRegion?: "none" | import("@tamagui/core").Variable<any> | "polite" | "assertive" | undefined;
            accessibilityLabelledBy?: string | import("@tamagui/core").Variable<any> | string[] | undefined;
            accessibilityElementsHidden?: boolean | import("@tamagui/core").Variable<any> | undefined;
            accessibilityViewIsModal?: boolean | import("@tamagui/core").Variable<any> | undefined;
            onAccessibilityEscape?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
            onAccessibilityTap?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
            onMagicTap?: import("@tamagui/core").Variable<any> | (() => void) | undefined;
            accessibilityIgnoresInvertColors?: boolean | import("@tamagui/core").Variable<any> | undefined;
            accessibilityLanguage?: string | import("@tamagui/core").Variable<any> | undefined;
            target?: string | import("@tamagui/core").Variable<any> | undefined;
            asChild?: boolean | import("@tamagui/core").Variable<any> | undefined;
            space?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | null | undefined;
            spaceDirection?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceDirection | undefined;
            separator?: import("@tamagui/core").Variable<any> | import("react").ReactNode;
            dangerouslySetInnerHTML?: import("@tamagui/core").Variable<any> | {
                __html: string;
            } | undefined;
            animation?: import("@tamagui/core").Variable<any> | import("@tamagui/core").AnimationProp | null | undefined;
            animateOnly?: import("@tamagui/core").Variable<any> | string[] | undefined;
            children?: any;
            debug?: import("@tamagui/core").Variable<any> | import("@tamagui/core").DebugProp | undefined;
            disabled?: boolean | import("@tamagui/core").Variable<any> | undefined;
            className?: string | import("@tamagui/core").Variable<any> | undefined;
            themeShallow?: boolean | import("@tamagui/core").Variable<any> | undefined;
            tag?: string | import("@tamagui/core").Variable<any> | undefined;
            theme?: string | import("@tamagui/core").Variable<any> | null | undefined;
            componentName?: string | import("@tamagui/core").Variable<any> | undefined;
            tabIndex?: string | number | import("@tamagui/core").Variable<any> | undefined;
            forceStyle?: import("@tamagui/core").Variable<any> | "hover" | "press" | "focus" | undefined;
            onPress?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
            onPressIn?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
            onPressOut?: import("@tamagui/core").Variable<any> | ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
            onHoverIn?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onHoverOut?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onMouseEnter?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onMouseLeave?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onMouseDown?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUp?: import("@tamagui/core").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
            onFocus?: import("@tamagui/core").Variable<any> | ((event: import("react").FocusEvent<HTMLDivElement, Element>) => void) | undefined;
            onScroll?: import("@tamagui/core").Variable<any> | ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
            backgroundColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderBottomColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderBottomEndRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderBottomLeftRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderBottomRightRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderBottomStartRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderBottomWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            borderColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderEndColor?: import("@tamagui/core").Variable<any> | import("react-native/types").ColorValue | undefined;
            borderLeftColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderLeftWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            borderRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderRightColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderRightWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            borderStartColor?: import("@tamagui/core").Variable<any> | import("react-native/types").ColorValue | undefined;
            borderStyle?: import("@tamagui/core").Variable<any> | "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            borderTopEndRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderTopLeftRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderTopRightRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderTopStartRadius?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
            borderTopWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            borderWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            opacity?: number | import("@tamagui/core").Variable<any> | undefined;
            alignContent?: import("@tamagui/core").Variable<any> | "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("@tamagui/core").Variable<any> | import("react-native/types").FlexAlignType | undefined;
            alignSelf?: "auto" | import("@tamagui/core").Variable<any> | import("react-native/types").FlexAlignType | undefined;
            aspectRatio?: string | number | import("@tamagui/core").Variable<any> | undefined;
            borderEndWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            borderStartWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            bottom?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            end?: string | number | import("@tamagui/core").Variable<any> | undefined;
            flex?: number | import("@tamagui/core").Variable<any> | undefined;
            flexBasis?: string | number | import("@tamagui/core").Variable<any> | undefined;
            flexDirection?: "row" | import("@tamagui/core").Variable<any> | "column" | "row-reverse" | "column-reverse" | undefined;
            flexGrow?: number | import("@tamagui/core").Variable<any> | undefined;
            flexShrink?: number | import("@tamagui/core").Variable<any> | undefined;
            flexWrap?: import("@tamagui/core").Variable<any> | "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            justifyContent?: import("@tamagui/core").Variable<any> | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            margin?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginBottom?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginEnd?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginHorizontal?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginLeft?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginRight?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginStart?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginTop?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            marginVertical?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            maxHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            maxWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            minHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            minWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            overflow?: import("@tamagui/core").Variable<any> | "visible" | "hidden" | "scroll" | undefined;
            padding?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingBottom?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingEnd?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingHorizontal?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingLeft?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingRight?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingStart?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingTop?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            paddingVertical?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            position?: import("@tamagui/core").Variable<any> | "absolute" | "relative" | undefined;
            right?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            start?: string | number | import("@tamagui/core").Variable<any> | undefined;
            top?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            width?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            zIndex?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ZIndexTokens | undefined;
            direction?: import("@tamagui/core").Variable<any> | "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallback | import("react-native/types").OpaqueColorValue | undefined;
            shadowOffset?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | {
                width: import("@tamagui/core").SpaceTokens;
                height: import("@tamagui/core").SpaceTokens;
            } | {
                width: number;
                height: number;
            } | undefined;
            shadowOpacity?: number | import("@tamagui/core").Variable<any> | undefined;
            shadowRadius?: import("@tamagui/core").SizeTokens | import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | undefined;
            transform?: import("@tamagui/core").Variable<any> | (import("react-native/types").PerpectiveTransform | import("react-native/types").RotateTransform | import("react-native/types").RotateXTransform | import("react-native/types").RotateYTransform | import("react-native/types").RotateZTransform | import("react-native/types").ScaleTransform | import("react-native/types").ScaleXTransform | import("react-native/types").ScaleYTransform | import("react-native/types").TranslateXTransform | import("react-native/types").TranslateYTransform | import("react-native/types").SkewXTransform | import("react-native/types").SkewYTransform | import("react-native/types").MatrixTransform)[] | undefined;
            transformMatrix?: import("@tamagui/core").Variable<any> | number[] | undefined;
            rotation?: number | import("@tamagui/core").Variable<any> | undefined;
            scaleX?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            scaleY?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            translateX?: number | import("@tamagui/core").Variable<any> | undefined;
            translateY?: number | import("@tamagui/core").Variable<any> | undefined;
            x?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            y?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            perspective?: number | import("@tamagui/core").Variable<any> | undefined;
            scale?: import("@tamagui/core").Variable<any> | import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
            skewX?: string | import("@tamagui/core").Variable<any> | undefined;
            skewY?: string | import("@tamagui/core").Variable<any> | undefined;
            matrix?: import("@tamagui/core").Variable<any> | number[] | undefined;
            rotate?: string | import("@tamagui/core").Variable<any> | undefined;
            rotateY?: string | import("@tamagui/core").Variable<any> | undefined;
            rotateX?: string | import("@tamagui/core").Variable<any> | undefined;
            rotateZ?: string | import("@tamagui/core").Variable<any> | undefined;
            cursor?: import("@tamagui/core").Variable<any> | import("csstype").Property.Cursor | undefined;
            contain?: import("@tamagui/core").Variable<any> | import("csstype").Property.Contain | undefined;
            display?: "flex" | "none" | import("@tamagui/core").Variable<any> | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
            gap?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | undefined;
            columnGap?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | undefined;
            rowGap?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | undefined;
            userSelect?: import("@tamagui/core").Variable<any> | import("csstype").Property.UserSelect | undefined;
            outlineColor?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineColor | undefined;
            outlineStyle?: import("@tamagui/core").Variable<any> | import("csstype").Property.OutlineStyle | undefined;
            outlineOffset?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | undefined;
            outlineWidth?: import("@tamagui/core").Variable<any> | import("@tamagui/core").SpaceTokens | undefined;
            hoverStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
            pressStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
            focusStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
            exitStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
            enterStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | import("@tamagui/core").Variable<any> | null | undefined;
        } | null | undefined;
    };
    readonly bordered: (val: number | boolean, { props }: {
        props: any;
    }) => any;
    readonly transparent: {
        readonly true: {
            readonly backgroundColor: "transparent";
        };
    };
    readonly chromeless: {
        readonly true: {
            backgroundColor: string;
            borderColor: string;
            shadowColor: string;
        };
        readonly all: {
            readonly hoverStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
            };
            readonly pressStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
            };
            readonly focusStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
            };
            readonly backgroundColor: string;
            readonly borderColor: string;
            readonly shadowColor: string;
        };
    };
};
export declare const ThemeableStack: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}>>, import("@tamagui/core").TamaguiElement, Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, {
    displayName: string | undefined;
}>;
export type ThemeableStackProps = GetProps<typeof ThemeableStack>;
//# sourceMappingURL=ThemeableStack.d.ts.map