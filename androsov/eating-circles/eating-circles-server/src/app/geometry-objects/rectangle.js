import { Segment } from './segment.js';
import { Point } from './point.js'

/**
 * Прямоугольник вида:
 * A -------- B
 *   |      |
 *   |      |
 *   |      |
 *  C--------D
 */
export class Rectangle {
  constructor(leftUpPoint, width, height) {
      this.pointA = leftUpPoint;
      this.pointB = new Point(leftUpPoint.x + width, leftUpPoint.y);
      this.pointC = new Point(leftUpPoint.x, leftUpPoint.y - height);
      this.pointD = new Point(leftUpPoint.x + width, leftUpPoint.y - height);
  }

  /**
   * Повернуть прямоугольник вокруг определенной точки.
   * @param {Point} point Точка, вокруг которой вращается прямоугольник.
   * @param {number} angle Угол в радианах, на который вращается прямоугольник.
   */
  rotateOverPoint(point, angle) {
      this.pointA.rotateOverPoint(point, angle);
      this.pointB.rotateOverPoint(point, angle);
      this.pointC.rotateOverPoint(point, angle);
      this.pointD.rotateOverPoint(point, angle);
  }

  /**
   * Проверить точку на принадлежность прямоугольнику.
   * @param {Point} point Точка, которая проверется на принадлежность прямоугольнику.
   * @returns {boolean} True если точка внутри прямоугольника.
   */
  isPointIn(point) {
      if (this.pointA.x === this.pointB.x || this.pointA.x === this.pointD.x) {
          return this.isPointInStraightRectangle(point);
      }

      return (new Segment(this.downPoint, this.leftPoint).isPointAbove(point)) &&
          (!new Segment(this.leftPoint, this.upPoint).isPointAbove(point)) &&
          (!new Segment(this.upPoint, this.rightPoint).isPointAbove(point)) &&
          (new Segment(this.downPoint, this.rightPoint).isPointAbove(point));
  }

  get downPoint() {
      const p1 = this.pointA.y < this.pointB.y ? this.pointA : this.pointB,
          p2 = this.pointC.y < this.pointD.y ? this.pointC : this.pointD;
      return p1.y < p2.y ? p1 : p2;
  }

  get upPoint() {
      const p1 = this.pointA.y > this.pointB.y ? this.pointA : this.pointB,
          p2 = this.pointC.y > this.pointD.y ? this.pointC : this.pointD;
      return p1.y > p2.y ? p1 : p2;
  }

  get leftPoint() {
      const p1 = this.pointA.x < this.pointB.x ? this.pointA : this.pointB,
          p2 = this.pointC.x < this.pointD.x ? this.pointC : this.pointD;
      return p1.x < p2.x ? p1 : p2;
  }

  get rightPoint() {
      const p1 = this.pointA.x > this.pointB.x ? this.pointA : this.pointB,
          p2 = this.pointC.x > this.pointD.x ? this.pointC : this.pointD;
      return p1.x > p2.x ? p1 : p2;
  }

  /**
   * Проверить точку на принадлежность прямоугольнику, стороны которого лежат паралельо осям координат.
   * @param {Point} point Точка, которая проверется на принадлежность прямоугольнику.
   * @returns {boolean} True если точка внутри прямоугольника.
   */
  isPointInStraightRectangle(point) {
      const leftX = Math.min(this.pointA.x, this.pointC.x),
          rightX = Math.max(this.pointA.x, this.pointC.x),
          downY = Math.min(this.pointA.y, this.pointC.y),
          upY = Math.min(this.pointA.y, this.pointC.y);

      return point.x >= leftX && point.x <= rightX && point.y >= downY && point.y <= upY;
  }
}
