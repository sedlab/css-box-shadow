export type TToNumberValue = string | number;
export type TToNumber = string | number;
export type TParseUnitValue = string;
export type TParseUnit = string | number;
export type TBoxShadowParseValue = string;
export type TBoxShadowParse = Array<string | number>;
export type TGetColorValue = Array<string | number>;
export type TGetColor = string | number | undefined;
export type TCssBoxShadowValue = string;
export type TCssBoxShadow = Array<{
    inset: boolean;
    x: string | number;
    y: string | number;
    blur: string | number;
    spread: string | number;
    color: TGetColor;
}> | undefined;