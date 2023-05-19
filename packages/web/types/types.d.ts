import type { StyleObject } from '@tamagui/helpers';
import type { Properties } from 'csstype';
import type { ComponentType, ForwardRefExoticComponent, FunctionComponent, HTMLAttributes, ReactNode, RefAttributes, RefObject } from 'react';
import type { GestureResponderHandlers, PressableProps, TextProps as ReactTextProps, TextStyle, View, ViewProps, ViewStyle } from 'react-native';
import type { Variable } from './createVariable';
import type { ResolveVariableTypes } from './helpers/createPropMapper';
import { StyledContext } from './helpers/createStyledContext';
import type { FontLanguageProps } from './views/FontLanguage.types';
import type { ThemeProviderProps } from './views/ThemeProvider';
export type { MediaStyleObject, StyleObject } from '@tamagui/helpers';
export type SpaceDirection = 'vertical' | 'horizontal' | 'both';
export type TamaguiElement = HTMLElement | View;
export type DebugProp = boolean | 'break' | 'verbose' | 'visualize';
/**
 * For static / studio
 */
type NameToPaths = {
    [key: string]: Set<string>;
};
export type LoadedComponents = {
    moduleName: string;
    nameToInfo: Record<string, {
        staticConfig: StaticConfigParsed;
    }>;
};
export type TamaguiProjectInfo = {
    components: LoadedComponents[];
    tamaguiConfig: TamaguiInternalConfig;
    nameToPaths: NameToPaths;
};
export type Role = 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'summary' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem';
type DivAttributes = HTMLAttributes<HTMLDivElement>;
export type TamaguiReactElement<P = {}> = React.ReactElement<P> & {
    type: TamaguiComponent;
};
export type TamaguiComponentPropsBase = {
    target?: string;
    hitSlop?: PressableProps['hitSlop'];
    asChild?: boolean;
    space?: SpaceTokens | null;
    spaceDirection?: SpaceDirection;
    separator?: ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    };
    animation?: AnimationProp | null;
    animateOnly?: string[];
    children?: any | any[];
    debug?: DebugProp;
    disabled?: boolean;
    className?: string;
    themeShallow?: boolean;
    id?: string;
    tag?: string;
    theme?: ThemeName | null;
    componentName?: string;
    tabIndex?: string | number;
    role?: Role;
    /**
     * Forces the pseudo style state to be on
     */
    forceStyle?: 'hover' | 'press' | 'focus';
    onPress?: PressableProps['onPress'];
    onPressIn?: PressableProps['onPress'];
    onPressOut?: PressableProps['onPress'];
    onHoverIn?: DivAttributes['onMouseEnter'];
    onHoverOut?: DivAttributes['onMouseLeave'];
    onMouseEnter?: DivAttributes['onMouseEnter'];
    onMouseLeave?: DivAttributes['onMouseLeave'];
    onMouseDown?: DivAttributes['onMouseDown'];
    onMouseUp?: DivAttributes['onMouseUp'];
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
};
export type ReactComponentWithRef<Props, Ref> = ForwardRefExoticComponent<Props & RefAttributes<Ref>>;
export type ConfigListener = (conf: TamaguiInternalConfig) => void;
export type VariableVal = number | string | Variable;
export type VariableColorVal = string | Variable;
type GenericKey = string;
export interface CreateTokens<Val extends VariableVal = VariableVal> {
    color: {
        [key: GenericKey]: Val;
    };
    space: {
        [key: GenericKey]: Val;
    };
    size: {
        [key: GenericKey]: Val;
    };
    radius: {
        [key: GenericKey]: Val;
    };
    zIndex: {
        [key: GenericKey]: Val;
    };
}
type Tokenify<A extends GenericTokens> = {
    color: TokenifyRecord<A['color']>;
    space: TokenifyRecord<A['space']>;
    size: TokenifyRecord<A['size']>;
    radius: TokenifyRecord<A['radius']>;
    zIndex: TokenifyRecord<A['zIndex']>;
};
type TokenifyRecord<A extends CreateTokens[keyof CreateTokens]> = {
    [Key in keyof A]: A[Key] extends Variable ? A[Key] : Variable<A[Key]>;
};
export type TamaguiBaseTheme = {
    background: VariableColorVal;
    backgroundHover: VariableColorVal;
    backgroundPress: VariableColorVal;
    backgroundFocus: VariableColorVal;
    color: VariableColorVal;
    colorHover: VariableColorVal;
    colorPress: VariableColorVal;
    colorFocus: VariableColorVal;
    borderColor: VariableColorVal;
    borderColorHover: VariableColorVal;
    borderColorPress: VariableColorVal;
    borderColorFocus: VariableColorVal;
    shadowColor: VariableColorVal;
    shadowColorHover: VariableColorVal;
    shadowColorPress: VariableColorVal;
    shadowColorFocus: VariableColorVal;
};
type GenericTokens = CreateTokens;
type GenericThemes = {
    [key: string]: (Partial<TamaguiBaseTheme> & {
        [key: string]: VariableVal;
    });
};
export type CreateShorthands = {
    [key: string]: string;
};
export type GenericShorthands = {};
type GenericMedia = {
    [key: string]: {
        [key: string]: number | string;
    };
};
export type GenericFonts = Record<string, GenericFont>;
type GenericAnimations = {
    [key: string]: string | {
        [key: string]: any;
    } | any[];
};
export interface TamaguiCustomConfig {
}
export interface TamaguiConfig extends Omit<GenericTamaguiConfig, keyof TamaguiCustomConfig>, TamaguiCustomConfig {
}
type OnlyAllowShorthandsSetting = boolean | undefined;
type DefaultFontSetting = string | undefined;
export type CreateTamaguiConfig<A extends GenericTokens, B extends GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia, E extends GenericAnimations = GenericAnimations, F extends GenericFonts = GenericFonts, G extends OnlyAllowShorthandsSetting = OnlyAllowShorthandsSetting, H extends DefaultFontSetting = DefaultFontSetting> = {
    fonts: RemoveLanguagePostfixes<F>;
    fontLanguages: GetLanguagePostfixes<F> extends never ? string[] : GetLanguagePostfixes<F>[];
    tokens: A;
    themes: {
        [Name in keyof B]: {
            [Key in keyof B[Name]]: Variable;
        };
    };
    shorthands: C;
    media: D;
    animations: AnimationDriver<E>;
    onlyAllowShorthands: G;
    defaultFont: H;
};
type GetLanguagePostfix<Set> = Set extends string ? Set extends `${string}_${infer Postfix}` ? Postfix : never : never;
type OmitLanguagePostfix<Set> = Set extends string ? Set extends `${infer Prefix}_${string}` ? Prefix : Set : never;
type RemoveLanguagePostfixes<F extends GenericFonts> = {
    [Key in OmitLanguagePostfix<keyof F>]: F[Key];
};
type GetLanguagePostfixes<F extends GenericFonts> = GetLanguagePostfix<keyof F>;
type ConfProps<A extends GenericTokens, B extends GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia, E extends GenericAnimations = GenericAnimations, F extends GenericFonts = GenericFonts, G extends OnlyAllowShorthandsSetting = OnlyAllowShorthandsSetting, H extends DefaultFontSetting = DefaultFontSetting> = {
    tokens: A;
    themes: B;
    shorthands?: C;
    media?: D;
    animations?: AnimationDriver<E>;
    fonts: F;
    onlyAllowShorthands?: G;
    defaultFont?: H;
};
export type InferTamaguiConfig<Conf> = Conf extends ConfProps<infer A, infer B, infer C, infer D, infer E, infer F, infer G, infer H> ? TamaguiInternalConfig<A, B, C, D, E, F, G, H> : unknown;
export type GenericTamaguiConfig = CreateTamaguiConfig<GenericTokens, GenericThemes, GenericShorthands, GenericMedia, GenericAnimations, GenericFonts>;
type NonSubThemeNames<A extends string | number> = A extends `${string}_${string}` ? never : A;
type BaseThemeDefinitions = TamaguiConfig['themes'][NonSubThemeNames<keyof TamaguiConfig['themes']>];
type GenericThemeDefinition = TamaguiConfig['themes'][keyof TamaguiConfig['themes']];
export type ThemeDefinition = BaseThemeDefinitions extends never ? GenericThemeDefinition : BaseThemeDefinitions;
export type ThemeKeys = keyof ThemeDefinition;
export type ThemeParsed = {
    [key in ThemeKeys]: Variable<any>;
};
export type Tokens = TamaguiConfig['tokens'];
export type TokensParsed = {
    size: TokenPrefixed<Tokens['size']>;
    color: TokenPrefixed<Tokens['color']>;
    radius: TokenPrefixed<Tokens['radius']>;
    zIndex: TokenPrefixed<Tokens['zIndex']>;
    space: TokenPrefixed<Tokens['space']>;
};
type TokenPrefixed<A extends {
    [key: string]: any;
}> = {
    [key in Ensure$Prefix<keyof A>]: A[keyof A];
};
type Ensure$Prefix<A extends string | number | symbol> = A extends string ? A extends `$${string}` ? A : `$${A}` : never;
export type TokensMerged = {
    size: TokensParsed['size'] & Tokens['size'];
    color: TokensParsed['color'] & Tokens['color'];
    radius: TokensParsed['radius'] & Tokens['radius'];
    zIndex: TokensParsed['zIndex'] & Tokens['zIndex'];
    space: TokensParsed['space'] & Tokens['space'];
};
export type Shorthands = TamaguiConfig['shorthands'];
export type Media = TamaguiConfig['media'];
export type Themes = TamaguiConfig['themes'];
export type ThemeName = Exclude<GetAltThemeNames<keyof Themes>, number>;
export type ThemeTokens = `$${ThemeKeys}`;
export type AnimationKeys = TamaguiConfig['animations'] extends AnimationDriver<infer Config> ? keyof Config : string;
export type FontLanguages = ArrayIntersection<TamaguiConfig['fontLanguages']>;
export interface ThemeProps {
    className?: string;
    name?: Exclude<ThemeName, number> | null;
    componentName?: string;
    children?: any;
    reset?: boolean;
    debug?: DebugProp | any;
    inverse?: boolean;
    forceClassName?: boolean;
    shouldUpdate?: () => boolean;
}
type ArrayIntersection<A extends any[]> = A[keyof A];
type GetAltThemeNames<S> = (S extends `${string}_${infer Alt}` ? GetAltThemeNames<Alt> : S) | S;
type SpacerPropsBase = {
    size?: number | SpaceTokens | null;
    flex?: boolean | number;
    direction?: SpaceDirection;
};
type SpacerOwnProps = SpacerPropsBase & WithThemeShorthandsPseudosMediaAnimation<SpacerPropsBase>;
export type SpacerProps = Omit<StackProps, 'flex' | 'direction' | 'size'> & SpacerOwnProps;
export type CreateTamaguiProps = {
    reactNative?: any;
    shorthands?: CreateShorthands;
    media?: GenericTamaguiConfig['media'];
    animations?: AnimationDriver<any>;
    fonts: GenericTamaguiConfig['fonts'];
    tokens: GenericTamaguiConfig['tokens'];
    themes: {
        [key: string]: {
            [key: string]: string | number | Variable;
        };
    };
    /**
     * Define a default font, for better types and default font on Text
     */
    defaultFont?: string;
    /**
     * Web-only: define text-selection CSS
     */
    selectionStyles?: (theme: ThemeParsed) => {
        backgroundColor?: ColorStyleProp;
        color?: ColorStyleProp;
    };
    /**
     * *Advanced use case* For all CSS extracted views, this has no effect.
     *
     * For SSR compatibility on the web, Tamagui will render once with the settings
     * from `mediaQueryDefaultActive` set for all media queries. Then, it will render
     * again after the initial render using the proper media query values. This is so that
     * hydration will match perfectly with the server.
     *
     * Setting disableSSR will avoid this second render by setting the media query state
     * to the actual browser dimensions on initial load. This is only useful for client-only
     * apps.
     *
     */
    disableSSR?: boolean;
    /**
     * Disable inserting a theme class in the DOM or context, allowing you to manually place it higher.
     * For custom use cases like integration with next-theme.
     */
    disableRootThemeClass?: boolean;
    defaultProps?: Record<string, any> & {
        Stack?: StackProps;
        Text?: TextProps;
        Spacer?: SpacerProps;
    };
    mediaQueryDefaultActive?: Record<MediaQueryKey, boolean>;
    cssStyleSeparator?: string;
    maxDarkLightNesting?: number;
    shouldAddPrefersColorThemes?: boolean;
    themeClassNameOnRoot?: boolean;
    /**
     * Only allow shorthands when enabled
     */
    onlyAllowShorthands?: OnlyAllowShorthandsSetting;
};
export type GetCSS = (opts?: {
    separator?: string;
    excludeThemes?: boolean;
    sinceLastCall?: boolean;
}) => string;
export type TamaguiInternalConfig<A extends GenericTokens = GenericTokens, B extends GenericThemes = GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia, E extends GenericAnimations = GenericAnimations, F extends GenericFonts = GenericFonts, G extends OnlyAllowShorthandsSetting = OnlyAllowShorthandsSetting, H extends DefaultFontSetting = DefaultFontSetting> = Omit<CreateTamaguiProps, keyof GenericTamaguiConfig> & Omit<CreateTamaguiConfig<A, B, C, D, E, F, G>, 'tokens'> & {
    tokens: Tokenify<A>;
    tokensParsed: Tokenify<A>;
    themeConfig: any;
    fontsParsed: GenericFonts;
    getCSS: GetCSS;
    getNewCSS: GetCSS;
    parsed: boolean;
    inverseShorthands: Record<string, string>;
    reactNative?: any;
    defaultFont?: H;
    fontSizeTokens: Set<string>;
};
export type GetAnimationKeys<A extends GenericTamaguiConfig> = keyof A['animations'];
export type UnionableString = string & {};
export type UnionableNumber = number & {};
export type GenericFont<Key extends string | number = string | number> = {
    size: {
        [key in Key]: number | Variable;
    };
    lineHeight?: Partial<{
        [key in Key]: number | Variable;
    }>;
    letterSpacing?: Partial<{
        [key in Key]: number | Variable;
    }>;
    weight?: Partial<{
        [key in Key]: number | string | Variable;
    }>;
    family?: string | Variable;
    style?: Partial<{
        [key in Key]: TextStyle['fontStyle'] | Variable;
    }>;
    transform?: Partial<{
        [key in Key]: TextStyle['textTransform'] | Variable;
    }>;
    color?: Partial<{
        [key in Key]: string | Variable;
    }>;
    face?: Partial<{
        [key in FontWeightSteps]: {
            normal?: string;
            italic?: string;
        };
    }>;
};
export type MediaQueryObject = {
    [key: string]: string | number | string;
};
export type MediaQueryKey = keyof Media;
export type MediaPropKeys = `$${MediaQueryKey}`;
export type MediaQueryState = {
    [key in MediaQueryKey]: boolean;
};
export type MediaProps<A> = {
    [key in MediaPropKeys]?: A;
};
export type MediaQueries = {
    [key in MediaQueryKey]: MediaQueryObject;
};
export interface MediaQueryList {
    addListener(listener?: any): void;
    removeListener(listener?: any): void;
    matches: boolean;
}
export type MatchMedia = (query: string) => MediaQueryList;
export type TransformStyleProps = {
    x?: number;
    y?: number;
    perspective?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: string;
    skewY?: string;
    matrix?: number[];
    rotate?: string;
    rotateY?: string;
    rotateX?: string;
    rotateZ?: string;
};
export type AnimationConfigType = any;
export type AnimationProp = AnimationKeys | {
    [key: string]: AnimationKeys | {
        type: AnimationKeys;
        [key: string]: any;
    };
} | [
    AnimationKeys,
    {
        [key: string]: AnimationKeys | {
            type?: AnimationKeys;
            [key: string]: any;
        };
    }
];
type GetTokenFontKeysFor<A extends 'size' | 'weight' | 'letterSpacing' | 'family' | 'lineHeight' | 'transform' | 'style' | 'color'> = keyof TamaguiConfig['fonts']['body'][A];
type GetTokenString<A> = A extends string | number ? `$${A}` : `$${string}`;
export type SizeTokens = GetTokenString<keyof Tokens['size']> | number;
export type SpaceTokens = GetTokenString<keyof Tokens['space']> | number | boolean;
export type ColorTokens = GetTokenString<keyof Tokens['color']> | GetTokenString<keyof ThemeParsed> | CSSColorNames;
export type ZIndexTokens = GetTokenString<keyof Tokens['zIndex']> | number;
export type RadiusTokens = GetTokenString<keyof Tokens['radius']> | number;
type DefaultFont = TamaguiConfig['defaultFont'];
export type Fonts = DefaultFont extends string ? TamaguiConfig['fonts'][DefaultFont] : never;
export type Font = ParseFont<Fonts>;
export type FontTokens = GetTokenString<keyof TamaguiConfig['fonts']>;
export type FontFamilyTokens = GetTokenString<GetTokenFontKeysFor<'family'>>;
export type FontSizeTokens = GetTokenString<GetTokenFontKeysFor<'size'>> | number;
export type FontLineHeightTokens = `$${GetTokenFontKeysFor<'lineHeight'>}` | number;
export type FontWeightSteps = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00`;
export type FontWeightTokens = `$${GetTokenFontKeysFor<'weight'>}` | FontWeightSteps;
export type FontColorTokens = `$${GetTokenFontKeysFor<'color'>}` | number;
export type FontLetterSpacingTokens = `$${GetTokenFontKeysFor<'letterSpacing'>}` | number;
export type FontStyleTokens = `$${GetTokenFontKeysFor<'style'>}` | TextStyle['fontStyle'];
export type FontTransformTokens = `$${GetTokenFontKeysFor<'transform'>}` | TextStyle['textTransform'];
type ParseFont<A extends GenericFont> = {
    size: TokenPrefixed<A['size']>;
    lineHeight: TokenPrefixedIfExists<A['lineHeight']>;
    letterSpacing: TokenPrefixedIfExists<A['letterSpacing']>;
    weight: TokenPrefixedIfExists<A['weight']>;
    family: TokenPrefixedIfExists<A['family']>;
    style: TokenPrefixedIfExists<A['style']>;
    transform: TokenPrefixedIfExists<A['transform']>;
    color: TokenPrefixedIfExists<A['color']>;
    face: TokenPrefixedIfExists<A['face']>;
};
type TokenPrefixedIfExists<A> = A extends Object ? TokenPrefixed<A> : {};
export type ThemeValueByCategory<K extends string | number | symbol> = K extends 'theme' ? ThemeTokens : K extends 'size' ? SizeTokens : K extends 'font' ? FontTokens : K extends 'fontSize' ? FontSizeTokens : K extends 'space' ? SpaceTokens : K extends 'color' ? ColorTokens : K extends 'zIndex' ? ZIndexTokens : K extends 'lineHeight' ? FontLineHeightTokens : K extends 'fontWeight' ? FontWeightTokens : K extends 'letterSpacing' ? FontLetterSpacingTokens : {};
type FontKeys = 'fontFamily';
type FontSizeKeys = 'fontSize';
type FontWeightKeys = 'fontWeight';
type FontLetterSpacingKeys = 'letterSpacing';
type LineHeightKeys = 'lineHeight';
type ZIndexKeys = 'zIndex';
export type ThemeValueGet<K extends string | number | symbol> = K extends 'theme' ? ThemeTokens : K extends SizeKeys ? SizeTokens : K extends FontKeys ? FontTokens : K extends FontSizeKeys ? FontSizeTokens : K extends `${`border${string | ''}Radius`}` ? RadiusTokens : K extends SpaceKeys ? K extends 'shadowOffset' ? {
    width: SpaceTokens;
    height: SpaceTokens;
} : SpaceTokens : K extends ColorKeys ? ColorTokens : K extends ZIndexKeys ? ZIndexTokens : K extends LineHeightKeys ? FontLineHeightTokens : K extends FontWeightKeys ? FontWeightTokens : K extends FontLetterSpacingKeys ? FontLetterSpacingTokens : never;
export type ThemeValueFallback = UnionableString | Variable;
export type ColorStyleProp = ThemeValueFallback | ColorTokens;
export type WithThemeValues<T extends object> = {
    [K in keyof T]: ThemeValueGet<K> extends never ? T[K] : ThemeValueGet<K> | Exclude<T[K], string> | ThemeValueFallback;
};
type NarrowShorthands = Narrow<Shorthands>;
export type Longhands = NarrowShorthands[keyof NarrowShorthands];
export type OmitLonghands<R extends Record<string, any>> = TamaguiConfig['onlyAllowShorthands'] extends true ? Omit<R, Longhands> : R;
export type WithShorthands<StyleProps> = {
    [Key in keyof Shorthands]?: Shorthands[Key] extends keyof StyleProps ? StyleProps[Shorthands[Key]] | null : undefined;
};
export type PseudoProps<A> = {
    hoverStyle?: A | null;
    pressStyle?: A | null;
    focusStyle?: A | null;
    exitStyle?: A | null;
    enterStyle?: A | null;
};
export type PseudoPropKeys = keyof PseudoProps<any>;
export type PseudoStyles = {
    hoverStyle?: ViewStyle;
    pressStyle?: ViewStyle;
    focusStyle?: ViewStyle;
    enterStyle?: ViewStyle;
    exitStyle?: ViewStyle;
};
type WithThemeAndShorthands<A extends object> = WithThemeValues<OmitLonghands<A>> & WithShorthands<WithThemeValues<A>>;
type WithThemeShorthandsAndPseudos<A extends object> = WithThemeAndShorthands<A> & PseudoProps<WithThemeAndShorthands<A>>;
type WithThemeShorthandsPseudosMediaAnimation<A extends object> = WithThemeShorthandsAndPseudos<A> & MediaProps<WithThemeShorthandsAndPseudos<A>>;
/**
 * Base style-only props (no media, pseudo):
 */
type SharedBaseExtraStyleProps = {
    pointerEvents?: ViewProps['pointerEvents'];
    cursor?: Properties['cursor'];
    contain?: Properties['contain'];
    display?: 'inherit' | 'none' | 'inline' | 'block' | 'contents' | 'flex' | 'inline-flex';
    gap?: number | SpaceTokens;
    columnGap?: number | SpaceTokens;
    rowGap?: number | SpaceTokens;
    userSelect?: Properties['userSelect'];
    outlineColor?: Properties['outlineColor'];
    outlineStyle?: Properties['outlineStyle'];
    outlineOffset?: number | SpaceTokens;
    outlineWidth?: number | SpaceTokens;
};
type OverrideRNStyleProps = 'display' | 'backfaceVisibility' | 'elevation' | 'gap' | 'columnGap' | 'rowGap';
export type StackStylePropsBase = Omit<ViewStyle, OverrideRNStyleProps> & TransformStyleProps & SharedBaseExtraStyleProps;
export type TextStylePropsBase = Omit<TextStyle, OverrideRNStyleProps> & TransformStyleProps & SharedBaseExtraStyleProps & {
    ellipse?: boolean;
    textDecorationDistance?: number;
    textOverflow?: Properties['textOverflow'];
    whiteSpace?: Properties['whiteSpace'];
    wordWrap?: Properties['wordWrap'];
};
export interface ExtendBaseStackProps {
}
export interface ExtendsBaseTextProps {
}
type OmitRemovedNonWebProps = 'onLayout' | keyof GestureResponderHandlers;
export type StackNonStyleProps = Omit<ViewProps, 'display' | 'children' | OmitRemovedNonWebProps> & ExtendBaseStackProps & TamaguiComponentPropsBase;
export type StackStyleProps = WithThemeShorthandsPseudosMediaAnimation<StackStylePropsBase>;
export type StackPropsBase = StackNonStyleProps & WithThemeAndShorthands<StackStylePropsBase>;
export type StackProps = StackNonStyleProps & StackStyleProps;
export type TextNonStyleProps = Omit<ReactTextProps, 'children' | OmitRemovedNonWebProps> & ExtendsBaseTextProps & TamaguiComponentPropsBase;
export type TextPropsBase = TextNonStyleProps & WithThemeAndShorthands<TextStylePropsBase>;
export type TextStyleProps = WithThemeShorthandsPseudosMediaAnimation<TextStylePropsBase>;
export type TextProps = TextNonStyleProps & TextStyleProps;
export type Styleable<Props, Ref> = <CustomProps extends Object, X extends FunctionComponent<Props & CustomProps> = FunctionComponent<Props & CustomProps>>(a: X) => ReactComponentWithRef<CustomProps & Omit<Props, keyof CustomProps>, Ref> & {
    staticConfig: StaticConfigParsed;
    styleable: Styleable<Props, Ref>;
};
export type TamaguiComponent<Props = any, Ref = any, BaseProps = {}, VariantProps = {}, ParentStaticProperties = {}> = ReactComponentWithRef<Props, Ref> & StaticComponentObject<Props, Ref> & ParentStaticProperties;
type StaticComponentObject<Props, Ref> = {
    staticConfig: StaticConfigParsed;
    /** @deprecated use `styleable` instead (same functionality, better name) */
    extractable: <X>(a: X, opts?: Partial<StaticConfig>) => X;
    styleable: Styleable<Props, Ref>;
};
export type TamaguiComponentExpectingVariants<Props = {}, Variants = {}> = TamaguiComponent<Props, any, any, Variants>;
export type TamaguiProviderProps = Partial<Omit<ThemeProviderProps, 'children'>> & {
    config: TamaguiInternalConfig;
    disableInjectCSS?: boolean;
    children?: ReactNode;
};
export type PropMapper = (key: string, value: any, theme: ThemeParsed, props: Record<string, any>, state: Partial<SplitStyleState>, languageContext?: FontLanguageProps, avoidDefaultProps?: boolean, debug?: DebugProp) => undefined | [string, any][];
export type StaticConfigParsed = StaticConfig & {
    parsed: true;
    propMapper: PropMapper;
    variantsParsed?: {
        [key: string]: {
            [key: string]: any;
        };
    };
};
export type GenericVariantDefinitions = {
    [key: string]: {
        [key: string]: ((a: any, b: any) => any) | {
            [key: string]: any;
        };
    };
};
export type StaticConfigPublic = {
    /**
     * (compiler) If you need to pass context or something, prevents from ever
     * flattening. The 'jsx' option means it will never flatten. if you
     * pass JSX as a children (if its purely string, it will still flatten).
     */
    neverFlatten?: boolean | 'jsx';
    /**
     * Determines ultimate output tag (Text vs View)
     */
    isText?: boolean;
    /**
     * Which style keys are allowed to be extracted.
     */
    validStyles?: {
        [key: string]: boolean;
    };
    /**
     * (compiler) If these props are encountered, bail on all optimization.
     */
    deoptProps?: Set<string>;
    /**
     * (compiler) If these props are encountered, leave them un-extracted.
     */
    inlineProps?: Set<string>;
    /**
     * (compiler) If not flattening, leave this prop as original value.
     * Only applies to style attributes
     */
    inlineWhenUnflattened?: Set<string>;
    /**
     * (compiler) A bit odd, only for more advanced heirarchies.
     * Indicates that the component will set this prop so the
     * static extraction can ensure it sets them to ={undefined}
     * so they get overriddent. In the future, this can be smarter.
     */
    ensureOverriddenProp?: {
        [key: string]: boolean;
    };
    /**
     * Auto-detected, but can ovverride. Wraps children to space them on top
     */
    isZStack?: boolean;
    /**
     * Auto-detect, but can override, passes styles properly to react-native-web
     */
    isReactNative?: boolean;
    /**
     * By default if styled() doesn't recognize a parent Tamagui compoent or specific react-native views,
     * it will assume the passed in component only accepts style={} for react-native compatibility.
     * Setting `acceptsClassName: true` indicates Tamagui can pass in className props.
     */
    acceptsClassName?: boolean;
};
type StaticConfigBase = StaticConfigPublic & {
    Component?: FunctionComponent<any> & StaticComponentObject<any, any>;
    variants?: GenericVariantDefinitions;
    context?: StyledContext;
    /**
     * Used for applying sub theme style
     */
    componentName?: string;
    /**
     * Same as React.defaultProps, be sure to sync
     */
    defaultProps: Record<string, any>;
    /**
     * Merges into defaultProps later on, used internally yonly
     */
    defaultVariants?: {
        [key: string]: any;
    };
    /**
     * Memoize the component
     */
    memo?: boolean;
    /**
     * Used insternally to attach default props to names
     */
    parentNames?: string[];
    /**
     * By default if styled() doesn't recognize a parent Tamagui compoent or specific react-native views,
     * it will assume the passed in component only accepts style={} for react-native compatibility.
     * Setting `acceptsClassName: true` indicates Tamagui can pass in className props.
     */
    acceptsClassName?: boolean;
    /**
     * Used internally for handling focus
     */
    isInput?: boolean;
    /**
     * Used internally for knowing how to handle when a HOC is in-between styled()
     */
    isHOC?: boolean;
};
export type StaticConfig = StaticConfigBase & {
    parentStaticConfig?: StaticConfigBase;
};
export type ViewStyleWithPseudos = TextStyleProps | (TextStyleProps & {
    hoverStyle?: TextStyleProps;
    pressStyle?: TextStyleProps;
    focusStyle?: TextStyleProps;
});
/**
 * --------------------------------------------
 *   variants
 * --------------------------------------------
 */
export type StylableComponent = TamaguiComponent | ComponentType<any> | ForwardRefExoticComponent<any> | ReactComponentWithRef<any, any> | (new (props: any) => any);
export type GetStyledVariants<A extends TamaguiComponent> = A extends TamaguiComponent<any, any, any, infer Variants> ? Variants : never;
export type GetBaseProps<A extends StylableComponent> = A extends TamaguiComponent<any, any, infer BaseProps> ? BaseProps : never;
export type GetProps<A extends StylableComponent> = A extends TamaguiComponent<infer Props> ? Props : A extends TamaguiReactElement<infer Props> ? Props : A extends ComponentType<infer Props> ? GetGenericComponentTamaguiProps<Props> : A extends new (props: infer Props) => any ? GetGenericComponentTamaguiProps<Props> : {};
type GetGenericComponentTamaguiProps<P> = P & Omit<'textAlign' extends keyof P ? TextProps : StackProps, keyof P>;
export type SpreadKeys = '...fontSize' | '...fontStyle' | '...fontTransform' | '...lineHeight' | '...letterSpacing' | '...size' | '...space' | '...color' | '...zIndex' | '...theme' | '...radius';
export type VariantDefinitions<Parent extends StylableComponent = TamaguiComponent, MyProps extends Object = GetProps<Parent>, Val = any> = VariantDefinitionFromProps<MyProps, Val>;
export type VariantDefinitionFromProps<MyProps, Val> = MyProps extends Object ? {
    [propName: string]: VariantSpreadFunction<MyProps, Val> | ({
        [Key in SpreadKeys]?: Key extends '...fontSize' ? FontSizeVariantSpreadFunction<MyProps> : Key extends '...size' ? SizeVariantSpreadFunction<MyProps> : Key extends '...space' ? SpaceVariantSpreadFunction<MyProps> : Key extends '...color' ? ColorVariantSpreadFunction<MyProps> : Key extends '...lineHeight' ? FontLineHeightVariantSpreadFunction<MyProps> : Key extends '...fontTransform' ? FontTransformVariantSpreadFunction<MyProps> : Key extends '...fontStyle' ? FontStyleVariantSpreadFunction<MyProps> : Key extends '...letterSpacing' ? FontLetterSpacingVariantSpreadFunction<MyProps> : Key extends '...zIndex' ? ZIndexVariantSpreadFunction<MyProps> : Key extends '...radius' ? RadiusVariantSpreadFunction<MyProps> : Key extends '...theme' ? ThemeVariantSpreadFunction<MyProps> : never;
    } & {
        [Key in string | number | 'true' | 'false']?: MyProps | VariantSpreadFunction<MyProps, Val>;
    } & {
        [Key in VariantTypeKeys]?: Key extends ':number' ? VariantSpreadFunction<MyProps, number> : Key extends ':boolean' ? VariantSpreadFunction<MyProps, boolean> : Key extends ':string' ? VariantSpreadFunction<MyProps, string> : never;
    });
} : never;
export type GenericStackVariants = VariantDefinitionFromProps<StackProps, any>;
export type GenericTextVariants = VariantDefinitionFromProps<StackProps, any>;
export type GetVariantProps<Variants> = {
    [Key in keyof Variants]?: Variants[Key] extends VariantSpreadFunction<any, infer Val> ? Val : GetVariantValues<keyof Variants[Key]>;
};
export type VariantSpreadExtras<Props> = {
    fonts: TamaguiConfig['fonts'];
    tokens: TamaguiConfig['tokens'];
    theme: Themes extends {
        [key: string]: infer B;
    } ? B : unknown;
    props: Props;
    fontFamily?: FontFamilyTokens;
    font?: Font;
};
type PropLike = {
    [key: string]: any;
};
export type VariantSpreadFunction<Props extends PropLike, Val = any> = (val: Val, config: VariantSpreadExtras<Props>) => {
    [Key in keyof Props]: Props[Key] | Variable;
} | null | undefined;
export type VariantTypeKeys = ':string' | ':boolean' | ':number';
export type GetVariantValues<Key> = Key extends `...${infer VariantSpread}` ? ThemeValueByCategory<VariantSpread> : Key extends 'true' | 'false' ? boolean : Key extends ':string' ? string : Key extends ':boolean' ? boolean : Key extends ':number' ? number : Key;
export type FontSizeVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, FontSizeTokens>;
export type SizeVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, SizeTokens>;
export type SpaceVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, SpaceTokens>;
export type ColorVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, ColorTokens>;
export type FontLineHeightVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, FontLineHeightTokens>;
export type FontLetterSpacingVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, FontLetterSpacingTokens>;
export type FontStyleVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, FontStyleTokens>;
export type FontTransformVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, FontTransformTokens>;
export type ZIndexVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, ZIndexTokens>;
export type RadiusVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, RadiusTokens>;
export type ThemeVariantSpreadFunction<A extends PropLike> = VariantSpreadFunction<A, ThemeTokens>;
/**
 * --------------------------------------------
 *   end variants
 * --------------------------------------------
 */
type SizeKeys = 'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight' | 'shadowRadius';
type ColorKeys = 'color' | 'backgroundColor' | 'borderColor' | 'borderBottomColor' | 'borderTopColor' | 'borderLeftColor' | 'borderRightColor' | 'shadowColor' | 'textShadowColor';
type SpaceKeys = 'space' | 'padding' | 'paddingHorizontal' | 'paddingVertical' | 'paddingLeft' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingEnd' | 'paddingStart' | 'margin' | 'marginHorizontal' | 'marginVertical' | 'marginLeft' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginEnd' | 'marginStart' | 'x' | 'y' | 'scale' | 'scaleX' | 'scaleY' | 'borderTopEndRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderTopStartRadius' | 'borderBottomEndRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderBottomStartRadius' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRadius' | 'borderRightWidth' | 'borderTopEndRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderEndWidth' | 'borderStartWidth' | 'borderTopStartRadius' | 'borderTopWidth' | 'borderWidth' | 'left' | 'top' | 'right' | 'bottom' | 'shadowOffset';
type CSSColorNames = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'honeydew' | 'hotpink' | 'indianred ' | 'indigo  ' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgrey' | 'lightgreen' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export type TamaguiComponentState = {
    hover: boolean;
    press: boolean;
    pressIn: boolean;
    focus: boolean;
    unmounted: boolean | 'should-enter';
    animation?: null | {
        style?: any;
        avoidClasses?: boolean;
    };
};
export type SplitStyleState = TamaguiComponentState & {
    mediaState?: Record<string, boolean>;
    noClassNames?: boolean;
    resolveVariablesAs?: ResolveVariableTypes;
    fallbackProps?: Record<string, any>;
    hasTextAncestor?: boolean;
    isExiting?: boolean;
    exitVariant?: string;
    enterVariant?: string;
};
export interface PresenceContextProps {
    id: string;
    isPresent: boolean;
    register: (id: string) => () => void;
    onExitComplete?: (id: string) => void;
    initial?: false | string | string[];
    custom?: any;
    exitVariant?: string | null;
    enterVariant?: string | null;
}
type SafeToRemoveCallback = () => void;
type AlwaysPresent = [true, null, null];
type Present = [true, undefined, PresenceContextProps];
type NotPresent = [false, SafeToRemoveCallback, PresenceContextProps];
export type UsePresenceResult = AlwaysPresent | Present | NotPresent;
type AnimationConfig = {
    [key: string]: any;
};
export type AnimatedNumberStrategy = {
    type: 'spring';
    stiffness?: number;
    damping?: number;
    mass?: number;
    overshootClamping?: boolean;
    restSpeedThreshold?: number;
    restDisplacementThreshold?: number;
} | {
    type: 'timing';
    duration: number;
} | {
    type: 'direct';
};
export type UniversalAnimatedNumber<A> = {
    getInstance(): A;
    getValue(): number;
    setValue(next: number, config?: AnimatedNumberStrategy): void;
    stop(): void;
};
export type AnimationDriver<A extends AnimationConfig = AnimationConfig> = {
    isReactNative?: boolean;
    useAnimations: UseAnimationHook;
    usePresence: () => UsePresenceResult;
    useAnimatedNumber: (initial: number) => UniversalAnimatedNumber<any>;
    useAnimatedNumberStyle: <V extends UniversalAnimatedNumber<any>>(val: V, getStyle: (current: any) => any) => any;
    useAnimatedNumberReaction: <V extends UniversalAnimatedNumber<any>>(opts: {
        value: V;
        hostRef: RefObject<HTMLElement | View>;
    }, onValue: (current: number) => void) => void;
    animations: A;
    View?: any;
    Text?: any;
};
export type UseAnimationProps = TamaguiComponentPropsBase & Record<string, any>;
export type UseAnimationHook = (props: {
    style: Record<string, any>;
    props: Record<string, any>;
    presence?: UsePresenceResult | null;
    hostRef: RefObject<HTMLElement | View>;
    staticConfig: StaticConfigParsed;
    state: SplitStyleState;
    theme: ThemeParsed;
    pseudos: PseudoProps<ViewStyle> | null;
    onDidAnimate?: any;
    delay?: number;
}) => null | {
    style?: StackStylePropsBase | StackStylePropsBase[];
};
export type GestureReponderEvent = Exclude<View['props']['onResponderMove'], void> extends (event: infer Event) => void ? Event : never;
export type RulesToInsert = StyleObject[];
export type GetStyleResult = {
    pseudos?: PseudoStyles | null;
    style: ViewStyle;
    classNames: ClassNamesObject;
    rulesToInsert: RulesToInsert;
    viewProps: StackProps & Record<string, any>;
    fontFamily: string | undefined;
    space?: any;
    hasMedia: boolean | 'space';
};
export type ClassNamesObject = Record<string, string>;
export type TamaguiComponentEvents = {
    cancelable?: boolean | undefined;
    disabled?: any;
    hitSlop?: any;
    delayLongPress?: any;
    delayPressIn?: any;
    delayPressOut?: any;
    focusable?: any;
    minPressDuration?: number | undefined;
    onPressIn: ((e: any) => void) | undefined;
    onPress: ((e: any) => void) | undefined;
    onMouseEnter?: ((e: any) => void) | undefined;
    onMouseLeave?: ((e: any) => void) | undefined;
    onPressOut: ((e: any) => void) | undefined;
};
export type ModifyTamaguiComponentStyleProps<Comp extends TamaguiComponent, ChangedProps extends Object> = Comp extends TamaguiComponent<infer A, infer B, infer C, infer D, infer E> ? A extends Object ? TamaguiComponent<Omit<A, keyof ChangedProps> & ChangedProps, B, C, D, E> : never : never;
/**
 * Narrow copied from ts-toolbelt
 * https://github.com/millsp/ts-toolbelt/blob/master/sources/Function/Narrow.ts
 */
export type Try<A1 extends any, A2 extends any, Catch = never> = A1 extends A2 ? A1 : Catch;
type Narrowable = string | number | bigint | boolean;
type NarrowRaw<A> = (A extends [] ? [] : never) | (A extends Narrowable ? A : never) | {
    [K in keyof A]: A[K] extends Function ? A[K] : NarrowRaw<A[K]>;
};
export type Narrow<A extends any> = Try<A, [], NarrowRaw<A>>;
export type NativePlatform = 'web' | 'mobile' | 'android' | 'ios';
export type NativeValue<Platform extends NativePlatform = NativePlatform> = boolean | Platform | Platform[];
//# sourceMappingURL=types.d.ts.map