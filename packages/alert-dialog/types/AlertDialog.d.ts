import { TamaguiElement } from '@tamagui/core';
import { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogProps, DialogTitleProps, DialogTriggerProps } from '@tamagui/dialog';
import * as React from 'react';
declare const createAlertDialogScope: import("@tamagui/create-context").CreateScope;
type AlertDialogProps = DialogProps & {
    native?: boolean;
};
interface AlertDialogTriggerProps extends DialogTriggerProps {
}
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogTriggerProps & React.RefAttributes<TamaguiElement>>;
interface AlertDialogPortalProps extends DialogPortalProps {
}
declare const AlertDialogPortal: React.FC<AlertDialogPortalProps>;
interface AlertDialogOverlayProps extends DialogOverlayProps {
}
declare const AlertDialogOverlay: React.ForwardRefExoticComponent<AlertDialogOverlayProps & React.RefAttributes<TamaguiElement>>;
interface AlertDialogContentProps extends Omit<DialogContentProps, 'onPointerDownOutside' | 'onInteractOutside'> {
}
declare const AlertDialogContent: React.ForwardRefExoticComponent<AlertDialogContentProps & React.RefAttributes<TamaguiElement>>;
type AlertDialogTitleProps = DialogTitleProps;
declare const AlertDialogTitle: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
})) & ({} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
} | {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref">) & React.RefAttributes<TamaguiElement>>;
type AlertDialogDescriptionProps = DialogDescriptionProps;
declare const AlertDialogDescription: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}>>) | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} | ({
    readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
} & {
    [x: string]: undefined;
}), string | number> & {
    [x: string]: undefined;
}>>, "ref">) & React.RefAttributes<TamaguiElement>>;
type AlertDialogActionProps = DialogCloseProps;
declare const AlertDialogAction: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>> & {
    displayWhenAdapted?: boolean | undefined;
} & React.RefAttributes<TamaguiElement>>;
interface AlertDialogCancelProps extends DialogCloseProps {
}
declare const AlertDialogCancel: React.ForwardRefExoticComponent<AlertDialogCancelProps & React.RefAttributes<TamaguiElement>>;
declare const AlertDialog: React.FC<AlertDialogProps> & {
    Trigger: React.ForwardRefExoticComponent<AlertDialogTriggerProps & React.RefAttributes<TamaguiElement>>;
    Portal: React.FC<AlertDialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<AlertDialogOverlayProps & React.RefAttributes<TamaguiElement>>;
    Content: React.ForwardRefExoticComponent<AlertDialogContentProps & React.RefAttributes<TamaguiElement>>;
    Action: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & {
        displayWhenAdapted?: boolean | undefined;
    } & React.RefAttributes<TamaguiElement>>;
    Cancel: React.ForwardRefExoticComponent<AlertDialogCancelProps & React.RefAttributes<TamaguiElement>>;
    Title: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>>) | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<(({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    })) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & React.RefAttributes<TamaguiElement>>;
    Description: React.ForwardRefExoticComponent<((Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }>>) | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref"> | Omit<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").TextProps, "children" | "onLayout" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } | ({
        readonly size?: import("@tamagui/core").FontSizeTokens | undefined;
    } & {
        [x: string]: undefined;
    }), string | number> & {
        [x: string]: undefined;
    }>>, "ref">) & React.RefAttributes<TamaguiElement>>;
};
export { createAlertDialogScope, AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogAction, AlertDialogCancel, AlertDialogTitle, AlertDialogDescription, };
export type { AlertDialogProps, AlertDialogTriggerProps, AlertDialogPortalProps, AlertDialogOverlayProps, AlertDialogContentProps, AlertDialogActionProps, AlertDialogCancelProps, AlertDialogTitleProps, AlertDialogDescriptionProps, };
//# sourceMappingURL=AlertDialog.d.ts.map