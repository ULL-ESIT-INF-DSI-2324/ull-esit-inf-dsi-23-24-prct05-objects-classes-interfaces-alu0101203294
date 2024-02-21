import { TwoDimensionalFigure } from "./index2";
import { Rectangle } from "./index3";

let rectangle = new Rectangle("RedRectangle", 4, "red");
let rectangle2 = new Rectangle("BlueRectangle", 5, "blue");

let figures = [rectangle, rectangle2];
  
figures.forEach((figure) => {
    console.log(`I am a ${figure.name}, I have ${figure.sides} sides ` +
                `and my area is ${figure.getArea(5, 4).toFixed(2)}`, `and my color is ${figure.color}`);
});
