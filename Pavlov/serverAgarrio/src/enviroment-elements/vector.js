/**
 * Вектор на игровом поле.
 */
export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  /**
   * Вычисление косинуса угла между вектором движения и осью OX.
   */
  get cosAngle() {
    return this.x / this.length;
  }

  /**
   * Вычисление синуса угла между вектором движения и осью OX.
   */
  get sinAngle() {
    return this.y / this.length;
  }
}