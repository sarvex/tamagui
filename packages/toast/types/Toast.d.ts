import { GetProps, NativePlatform, NativeValue, TamaguiElement } from '@tamagui/core';
import * as React from 'react';
import { CustomData, useToast, useToastController, useToastState } from './ToastImperative';
import { ToastProps } from './ToastImpl';
import { ToastProvider, ToastProviderProps, createToastScope } from './ToastProvider';
import { ToastViewport, ToastViewportProps } from './ToastViewport';
declare const ToastTitleFrame: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    readonly unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
}>;
type PrimitiveDivProps = GetProps<typeof ToastTitleFrame>;
type ToastTitleProps = PrimitiveDivProps & {};
declare const ToastDescriptionFrame: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    readonly unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
}>;
type ToastDescriptionFrameProps = GetProps<typeof ToastDescriptionFrame>;
type ToastDescriptionProps = ToastDescriptionFrameProps & {};
type ToastActionProps = ToastCloseProps & {
    /**
     * A short description for an alternate way to carry out the action. For screen reader users
     * who will not be able to navigate to the button easily/quickly.
     * @example <ToastAction altText="Goto account settings to updgrade">Upgrade</ToastAction>
     * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
     */
    altText: string;
};
declare const ToastCloseFrame: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
}>>) | (Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
}, string | number> & {
    [x: string]: undefined;
}>>), TamaguiElement, Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
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
} & ({} | {
    [x: string]: undefined;
}), {
    displayName: string | undefined;
}>;
type ToastCloseFrameProps = GetProps<typeof ToastCloseFrame>;
type ToastCloseProps = ToastCloseFrameProps & {};
declare const Toast: ((props: Omit<ToastProps & React.RefAttributes<TamaguiElement>, "theme" | "themeInverse"> & import("@tamagui/core").ThemeableProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
    Title: React.ForwardRefExoticComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & React.RefAttributes<TamaguiElement>>;
    Description: React.ForwardRefExoticComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & React.RefAttributes<TamaguiElement>>;
    Action: React.ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>> & {
        /**
         * A short description for an alternate way to carry out the action. For screen reader users
         * who will not be able to navigate to the button easily/quickly.
         * @example <ToastAction altText="Goto account settings to updgrade">Upgrade</ToastAction>
         * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
         */
        altText: string;
    }) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    }>> & {
        /**
         * A short description for an alternate way to carry out the action. For screen reader users
         * who will not be able to navigate to the button easily/quickly.
         * @example <ToastAction altText="Goto account settings to updgrade">Upgrade</ToastAction>
         * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
         */
        altText: string;
    }, "ref">) & React.RefAttributes<TamaguiElement>>;
    Close: React.ForwardRefExoticComponent<((Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }>>) | Omit<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "children" | "display" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
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
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & React.RefAttributes<TamaguiElement>>;
};
export { Toast, ToastProvider, ToastViewport, createToastScope, useToast, useToastController, useToastState, };
export type { ToastActionProps, ToastCloseProps, ToastDescriptionProps, ToastProps, ToastProviderProps, ToastTitleProps, ToastViewportProps, CustomData, NativeValue as ToastNativeValue, NativePlatform as ToastNativePlatform, };
//# sourceMappingURL=Toast.d.ts.map