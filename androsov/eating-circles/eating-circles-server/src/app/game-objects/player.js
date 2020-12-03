import { Circle } from '../geometry-objects/circle.js';
import { Vector } from '../geometry-objects/vector.js';
import { Rectangle } from '../geometry-objects/rectangle.js';
import { Point } from '../geometry-objects/point.js';

/**
 * Игрок ,перемещающийся по игровому полю и поедающий других игроков и еду.
 */
export class Player extends Circle {
  constructor(x, y, fieldWidth, fieldHeight, id) {
    super(x, y, 36);
    this.START_RADIUS = 36;
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.id = id;
    this.speed = 0.1;
    this.MIN_SPEED = 0.05;
  }

  /**
   * Смещение игрока.
   * @param {number} dx Изменение положения игрока относительно оси 0X.
   * @param {number} dy Изменение положения игрока относительно оси 0Y.
   * @param {number} time Время, за которое игрок должен переместится.
   */
  update(dx, dy, time) {
    this.prevX = this.x;
    this.prevY = this.y;

    const vect = new Vector(dx, dy),
      dist = time * this.speed;
    vect.length = dist;
    if ((this.x + vect.x > this.fieldWidth / 2 && vect.x > 0) || (this.x + vect.x < -this.fieldWidth / 2 && vect.x < 0) ||
      (this.y + vect.y > this.fieldHeight / 2 && vect.y > 0) || (this.y + vect.y < -this.fieldHeight / 2 && vect.y < 0)) {
      return;
    } else {
      this.x += vect.x;
      this.y += vect.y;
    }
  }

  /**
   * Поедание другого круга, если он находится на плоскости перемещения. 
   * У круга вызывается метод isEated, если поедание выполнено успешно. При поедании у игрока увеличивается радиус и уменьшается скорость.
   * @param {Circle} other Еда или другой игрок, которого текущий игрок пытается съесть.
   * @returns {boolean} True, усли поедание выполнено успешно.
   */
  eat(other) {
    if (other === this || this.r <= other.r) {
      return false;
    }

    let d = this.distanceFromAnotherCircle(other);
    const vect = new Vector(this.x - this.prevX, this.y - this.prevY);
    const area = new Rectangle(new Point(this.prevX, this.prevY + this.r), vect.length, this.r * 2);
    area.rotateOverPoint(new Point(this.prevX, this.prevY), vect.angle);

    if (area.isPointIn(new Point(other.x, other.y)) || d < this.r + other.r) {
      let sum = this.square + other.square;
      this.r = Math.sqrt(sum / Math.PI);
      if (this.speed > this.MIN_SPEED) {
        this.speed *= Math.pow(this.START_RADIUS / this.r, 0.001);
      }
      if (other.isEated) {
        other.isEated();
      }
      return true;
    } else {
      return false;
    }
  }
}
