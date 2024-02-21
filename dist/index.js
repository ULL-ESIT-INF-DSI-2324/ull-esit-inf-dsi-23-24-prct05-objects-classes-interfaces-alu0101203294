"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index3_1 = require("./index3");
let rectangle = new index3_1.Rectangle("RedRectangle", 4, "red");
let rectangle2 = new index3_1.Rectangle("BlueRectangle", 5, "blue");
let figures = [rectangle, rectangle2];
figures.forEach((figure) => {
    console.log(`I am a ${figure.name}, I have ${figure.sides} sides ` +
        `and my area is ${figure.getArea(5, 4).toFixed(2)}`, `and my color is ${figure.color}`);
});
