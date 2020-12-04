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
   * Косинус угла A между вектором и положительным направлением оси OX.
   * Вычисление костинуса 
   */
  get cosAngle() {
    return this.x / this.length;
  }

  /**
   * Синус угла A между вектором и положительным направлением оси OX.
   */
  get sinAngle() {
    return this.y / this.length;
  }
}