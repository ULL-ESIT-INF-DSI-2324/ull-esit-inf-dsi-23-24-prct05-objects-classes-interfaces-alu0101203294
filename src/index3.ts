import { TwoDimensionalFigure } from "./index2";

export class Rectangle extends TwoDimensionalFigure {
    constructor(public readonly name: string, public readonly sides: number,
      public color: string) {
      super(name, sides, color);
    }
  
    getArea(base: number, height: number) {
      return base * height;
    }
}
