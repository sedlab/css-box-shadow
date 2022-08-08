import { TToNumberValue, TToNumber, TParseUnitValue, TParseUnit, TBoxShadowParseValue, TBoxShadowParse, TGetColorValue, TGetColor, TCssBoxShadowValue, TCssBoxShadow } from "./type";

const toNumber = (v: TToNumberValue): TToNumber => isFinite(+v) ? +v : v;

const parseUnit = (v: TParseUnitValue): TParseUnit => {
    const match = v.match(/^(0?[-.]?\d+)(r?e[m|x]|v[h|w|min|max]+|p[x|t|c]|[c|m]m|%|s|in|ch)$/);
    const res = match ? parseFloat(match[1]) || match[1] : v;
    return toNumber(res);
};

const boxShadowParse = (string: TBoxShadowParseValue): TBoxShadowParse => string.split(/\s(?![^(]*\))/).map((v: string) => parseUnit(v));

const getColor = (values: TGetColorValue): TGetColor => values.find((v: string | number) => !isFinite(+v));

export const cssBoxShadow = (stringBoxShadows: TCssBoxShadowValue): TCssBoxShadow => {
    try {
        return stringBoxShadows.split(/,(?![^\(]*\))/).map(stringBoxShadow => {
            const inset = stringBoxShadow.includes("inset");
            stringBoxShadow = stringBoxShadow.replace("inset", "").trim();
            const valuesParsed = boxShadowParse(stringBoxShadow);
            const color = getColor(valuesParsed);
            const [x, y, blur, spread] = valuesParsed.filter((v: string | number) => v !== color);
            return { inset, x, y, blur, spread, color };
        });
    } catch (err) {
        console.error("lib hexToRgb: ", err);
        return undefined;
    }
}