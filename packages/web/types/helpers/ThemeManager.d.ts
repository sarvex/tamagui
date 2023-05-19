import { ThemeParsed, ThemeProps } from '../types';
type ThemeListener = (name: string | null, themeManager: ThemeManager, forced: boolean) => void;
export type SetActiveThemeProps = {
    className?: string;
    parentManager?: ThemeManager | null;
    name?: string | null;
    theme?: any;
    reset?: boolean;
};
export type ThemeManagerState = {
    name: string;
    theme?: ThemeParsed | null;
    className?: string;
    parentName?: string;
};
export declare function hasNoThemeUpdatingProps(props: ThemeProps): boolean;
export declare class ThemeManager {
    props: ThemeProps;
    id: number;
    isComponent: boolean;
    themeListeners: Set<ThemeListener>;
    parentManager: ThemeManager | null;
    state: ThemeManagerState;
    constructor(props?: ThemeProps, parentManagerIn?: ThemeManager | 'root' | null | undefined);
    updateState(props?: ThemeProps & {
        forceTheme?: ThemeParsed;
    }, shouldNotify?: boolean): ThemeManagerState | undefined;
    getStateIfChanged(props?: ThemeProps, state?: ThemeManagerState | null, parentManager?: ThemeManager | null): ThemeManagerState | null | undefined;
    getStateShouldChange(nextState: ThemeManagerState | null, state?: ThemeManagerState | null): boolean;
    getState(props?: ThemeProps, parentManager?: ThemeManager | null): ThemeManagerState | null;
    _allKeys: Set<string> | null;
    get allKeys(): Set<string>;
    getValue(key: string, state?: ThemeManagerState): string | number | import("..").Variable<any> | undefined;
    notify(forced?: boolean): void;
    onChangeTheme(cb: ThemeListener, debugId?: number): () => void;
}
export declare function getNonComponentParentManager(themeManager?: ThemeManager | null): ThemeManager | null;
export {};
//# sourceMappingURL=ThemeManager.d.ts.map