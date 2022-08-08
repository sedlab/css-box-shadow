# css-box-shadow

Библиотека для анализа в CSS свойства box-shadow.

## Установка

`npm i -s dsedinkin/css-box-shadow#latest` или `yarn add dsedinkin/css-box-shadow#latest`

## Использование

> ES6

```js
import { cssBoxShadow } from "css-box-shadow";
```

> ES5

```js
const { cssBoxShadow } = require("css-box-shadow");
```

## Пример

```js
console.log(cssBoxShadow("none")); // [{ "inset": false, "x": undefined, "y": undefined, "blur": undefined, "spread": undefined, "color": "none" }]
console.log(cssBoxShadow("60px -16px teal")); // [{ "inset": false, "x": 60, "y": -16, "blur": undefined, "spread": undefined, "color": "teal" }]
console.log(cssBoxShadow("10px 5px 5px black")); // [{ "inset": false, "x": 10, "y": 5, "blur": 5, "spread": undefined, "color": "black" }]
console.log(cssBoxShadow("2px 2px 2px 1px rgba(0, 0, 0, 0.2)")); // [{ "inset": false, "x": 2, "y": 2, "blur": 2, "spread": 1, "color": "rgba(0, 0, 0, 0.2)" }]
console.log(cssBoxShadow("inset 5em 1em gold")); // [{ "inset": true, "x": 5, "y": 1, "blur": undefined, "spread": undefined, "color": "gold" }]
console.log(cssBoxShadow("3px 3px red, -1em 0 0.4em olive")); // [{ "inset": false, "x": 3, "y": 3, "blur": undefined, "spread": undefined, "color": "red" }, { "inset": false, "x": -1, "y": 0, "blur": 0.4, "spread": undefined, "color": "olive" }]
```