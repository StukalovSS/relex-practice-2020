/**
 * Точка на двумерной плоскости.
 */
export class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  /**
   * Находит растояние до точки.
   * @param {Point} point Точка, расточние до которой необходимо вычислить.
   * @returns {number} Растояние между точками.
   */
  findDistanceFromAnotherPoint(point) {
    return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
  }

  move(dx, dy) {
      this.x += dx;
      this.y += dy;
  }

  /**
   * Поворот точки вокруг центра координат.
   * 
   * Для поворота нужно ввести угол a, на который поворачивается точка, вектор точки v = (x, y, 1)
   * И матрицу преобразований 
   *      cos(a) sin(a) 0
   * M = -sin(a) cos(a) 0
   *        0      0    1
   * 
   * Затем умножаем v на M. Получаем новый вектор vres = (xres, yres, 1), где xres и yres новые координаты точки.
   * После умножения вектора на матрицу получаем формулу для xres и yres.
   * xres = x * cos(a) - y * sin(a) + 0
   * yres = x * sin(a) + y * cos(a) + 0
   * @param {number} angle Угол в радианах, на который поворачивается точка.
   */
  rotate(angle) {
      this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
      this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
  }

  /**
   * Поворот вокруг другой точки.
   * 
   * Сначала текущая точка смещается к центру координат, относительно переданноой точки так, 
   * чтобы переданная точка была в центре координат. Затем поворачиваем текущую точку на угол и возращаем текущую точку на место.
   * @param {Point} point Точка, вокруг которой поворачивается текущая точка.
   * @param {number} angle Угол, на который поворачивается текущая точка.
   */
  rotateOverPoint(point, angle) {
      this.move(-point.x, -point.y);
      this.rotate(angle);
      this.move(point.x, point.y);
  }
}
