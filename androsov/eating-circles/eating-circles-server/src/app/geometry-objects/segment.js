import { Point } from './point.js';

/**
 * Отрезок вида ax + by + c = 0 между 2-умя точками.
 */
export class Segment {
  constructor(point1, point2) {
      this.point1 = point1;
      this.point2 = point2;
      this.a = point2.y - point1.y;
      this.b = point1.x - point2.x;
      this.c = point2.x * point1.y - point1.x * point2.y;
  }

  /**
   * Проверка точки на принадлежность отрезку.
   * @param {Point} point Точка, которая проверяется на принадлежность отрезку.
   * @returns {boolean} True усли точка лежит на отрезке.
   */
  isPointOnSegment(point) {
      return Math.min(point1.x, point2.x) <= point.x &&
          Math.max(point1.x, point2.x) >= point.x &&
          Math.min(point1.y, point2.y) <= point.y &&
          Math.max(point1.y, point2.y) >= point.y &&
          Math.abs(this.a * point.x + this.b * point.y + this.c) <= 1e-10;
  }

  /**
   * Проверка точки на принадлежность области над отрезком.
   * @param {Point} point Точка, которая проверяется на принадлежность области над отрезком.
   * @returns {boolean} True усли точка лежит над отрезком.
   */
  isPointAbove(point) {
      return this.b != 0 && this.a * point.x + this.b * point.b + this.c < 0;
  }
}
