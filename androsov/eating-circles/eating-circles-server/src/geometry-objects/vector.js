/**
 * Класс двумерного вектора для работы с движущимеся объектами.
 * Вектор строится от центра координат.
 */
export class Vector {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  set length(length) {
      let angle = this.angle;
      this.x = length * Math.cos(angle);
      this.y = length * Math.sin(angle);
  }

  get angle() {
      if (this.length === 0) {
          return 0;
      } else if (this.y > 0) {
          return Math.acos(this.x / this.length);
      } else {
          return 2 * Math.PI - Math.acos( this.x / this.length );
      }
  }

  set angle(angle) {
      let length = this.length;
      this.x = length * Math.cos(angle);
      this.y = length * Math.sin(angle);
  }

  scalarMultiply(vect) {
      return this.x * vect.x + this.y * vect.y;
  }

  angleBetweenVectors(vect) {
      return Math.acos(this.scalarMultiply(vect) / (this.length * vect.length));
  }
}
