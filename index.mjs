const toNumber = (v) => isFinite(+v) ? +v : v;
const parseUnit = (v) => {
  const match = v.match(/^(0?[-.]?\d+)(r?e[m|x]|v[h|w|min|max]+|p[x|t|c]|[c|m]m|%|s|in|ch)$/);
  const res = match ? parseFloat(match[1]) || match[1] : v;
  return toNumber(res);
};
const boxShadowParse = (string) => string.split(/\s(?![^(]*\))/).map((v) => parseUnit(v));
const getColor = (values) => values.find((v) => !isFinite(+v));
const cssBoxShadow = (stringBoxShadows) => {
  try {
    if (typeof stringBoxShadows !== "string")
      throw new Error("\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 box-shadow.");
    return stringBoxShadows.split(/,(?![^\(]*\))/).map((stringBoxShadow) => {
      const inset = stringBoxShadow.includes("inset");
      stringBoxShadow = stringBoxShadow.replace("inset", "").trim();
      const valuesParsed = boxShadowParse(stringBoxShadow);
      const color = getColor(valuesParsed);
      const [x, y, blur, spread] = valuesParsed.filter((v) => v !== color);
      return { inset, x, y, blur, spread, color };
    });
  } catch (err) {
    return void 0;
  }
};

export { cssBoxShadow };
