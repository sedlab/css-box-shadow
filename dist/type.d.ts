export declare type TToNumberValue = string | number;
export declare type TToNumber = string | number;
export declare type TParseUnitValue = string;
export declare type TParseUnit = string | number;
export declare type TBoxShadowParseValue = string;
export declare type TBoxShadowParse = Array<string | number>;
export declare type TGetColorValue = Array<string | number>;
export declare type TGetColor = string | number | undefined;
export declare type TCssBoxShadowValue = string;
export declare type TCssBoxShadow = {
    inset: boolean;
    x: string | number;
    y: string | number;
    blur: string | number;
    spread: string | number;
    color: TGetColor;
};
