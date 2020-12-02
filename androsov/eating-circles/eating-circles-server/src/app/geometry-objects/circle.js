import { Point } from "./point";

/**
 * Окружность на двумерной плоскости.
 */
export class Circle {


  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  get center() {
    return new Point(this.x, this.y);
  }

  distanceFromAnotherCircle(circle) {
    return this.center.findDistanceFromAnotherPoint(circle.center);
  }

  get square() {
    return Math.PI * (this.r ** 2);
  }
}
