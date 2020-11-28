/**
 * Точка на двумерной плоскости.
 */
export class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  move(dx, dy) {
      this.x += dx;
      this.y += dy;
  }

  /**
   * Поворот точки вокруг центра координат.
   * @param {number} angle Угол в радианах, на который поворачивается точка.
   */
  rotate(angle) {
      this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
      this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
  }

  /**
   * Поворот вокруг другой точки.
   * @param {Point} point Точка, вокруг которой поворачивается текущая точка.
   * @param {number} angle Угол, на который поворачивается текущая точка.
   */
  rotateOverPoint(point, angle) {
      this.move(-point.x, -point.y);
      this.rotate(angle);
      this.move(point.x, point.y);
  }
}
