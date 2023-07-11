type TGetColor = string | number | undefined;
type TCssBoxShadowValue = string;
type TCssBoxShadow = Array<{
    inset: boolean;
    x: string | number;
    y: string | number;
    blur: string | number;
    spread: string | number;
    color: TGetColor;
}> | undefined;

declare const cssBoxShadow: (stringBoxShadows: TCssBoxShadowValue) => TCssBoxShadow;

export { cssBoxShadow };
