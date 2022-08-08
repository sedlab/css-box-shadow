import { cssBoxShadow } from "./index";
import { TCssBoxShadow } from "./type";

const stringify = (obj: TCssBoxShadow) => JSON.stringify(obj, function replacer(key, value) {
    if (value === undefined) return null;
    return value;
});

test("cssBoxShadow", () => {
    expect(stringify(cssBoxShadow("none"))).toEqual('[{"inset":false,"x":null,"y":null,"blur":null,"spread":null,"color":"none"}]');
    expect(stringify(cssBoxShadow("60px -16px teal"))).toEqual('[{"inset":false,"x":60,"y":-16,"blur":null,"spread":null,"color":"teal"}]');
    expect(stringify(cssBoxShadow("10px 5px 5px black"))).toEqual('[{"inset":false,"x":10,"y":5,"blur":5,"spread":null,"color":"black"}]');
    expect(stringify(cssBoxShadow("2px 2px 2px 1px rgba(0, 0, 0, 0.2)"))).toEqual('[{"inset":false,"x":2,"y":2,"blur":2,"spread":1,"color":"rgba(0, 0, 0, 0.2)"}]');
    expect(stringify(cssBoxShadow("inset 5em 1em gold"))).toEqual('[{"inset":true,"x":5,"y":1,"blur":null,"spread":null,"color":"gold"}]');
    expect(stringify(cssBoxShadow("3px 3px red, -1em 0 0.4em olive"))).toEqual('[{"inset":false,"x":3,"y":3,"blur":null,"spread":null,"color":"red"},{"inset":false,"x":-1,"y":0,"blur":0.4,"spread":null,"color":"olive"}]');
});