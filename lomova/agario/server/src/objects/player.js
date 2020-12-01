import { Circle } from './circle.js';
import { Vector } from './vector.js';
import lerp from 'lerp';
import { Rectangle } from './rectangle';
import Point from './point';

export class Player extends Circle {
  constructor(x, y, r, color, name) {
    super(x, y, r, color);
    this.name = name;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 5.3;
    this.eaten = false;
    this.prevPos = new Point(x, y);
    this.minSpeed = 2;
  }

  changeSpeed() {
    if (this.speed > this.minSpeed) {
      this.speed -= 0.05;
    }
    else {
      this.speed = this.minSpeed;
    }
  }

  /**
   * Обновляет координаты игрока на поле.
   * @param {number} x_0 целевая координата x
   * @param {number} y_0 целевая координата y
   * @param {number} w ширина поля
   * @param {number} h высота поля
   */
  update(x_0, y_0, w, h) {
    let d = Math.sqrt(x_0 * x_0 + y_0 * y_0);
    if (d == 0) {
      return;
    }
    let nx = x_0 * this.speed / d;
    let ny = y_0 * this.speed / d;
    this.directionX = lerp(this.directionX, nx, 0.1);
    this.directionY = lerp(this.directionY, ny, 0.1);

    this.prevPos.x = this.x;
    this.prevPos.y = this.y;

    if (this.x + this.directionX < w && this.x + this.directionX > -w) {
      this.x += this.directionX;
    }
    if (this.y + this.directionY < h && this.y + this.directionY > -h) {
      this.y += this.directionY;
    }
  }

  /**
   * Возвращает координаты игрока или корма в новой системе координат,
   * полученной в резултате поворота старой системы координат 
   * на A - угол между вектором перемещения и положительным направлением оси OX.
   * @param {*} circle игрок или корм
   * @param {Vector} moving вектор перемещения
   */
  newCoordinate(circle, moving) {
    return {
      x: circle.x * moving.cosA + circle.y * moving.sinA,
      y: - circle.x * moving.sinA + circle.y * moving.cosA
    }
  }

  /**
   * Поедание объекта игроком на отрезке перемещения.
   * Возвращает true, если объект (корм или игрок) съеден, иначе - false.
   * @param {Circle} other объект корма или игрока
   * @param {string} type тип объекта: food или player)
   */
  eats(other, type) {
    const dist = Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    const moving = new Vector(this.x - this.prevPos.x, this.y - this.prevPos.y);
    const rect = new Rectangle(this.newCoordinate(this, moving), this.r, other.r, moving);

    if (rect.isPointInRectangle(this.newCoordinate(other, moving)) || dist < this.r + other.r) {
      if (type === 'food') {
        return this.eatsFood(other);
      }
      if (type === 'player') {
        return this.eatsOtherPlayer(other);
      }
    } 
    else {
      return false;
    }
  }

  /**
   * Поедание игроком корма.
   * Изменяет радиус и скорость игрока в зависимости от съеденного корма.
   * @param {Circle} food единица корма
   */
  eatsFood(food) {
    const s = this.r * this.r * Math.PI + food.r * food.r * Math.PI;
    this.r = Math.sqrt(s / Math.PI);
    this.changeSpeed();
    return true;
  }
  
  /**
   * Поедание игроком другого игрока.
   * Если другой игрок съеден - изменяется радиус 
   * и скорость текущего игрока, возвращается true, иначе - false.
   * @param {Player} other другой игрок
   */
  eatsOtherPlayer(other) {
    if (this.r === other.r) {
      return false;
    }
    if (this.r > other.r) {
      this.r += other.r / 10;
      this.changeSpeed();
      return true;
    } else {
      return false;
    }
  }
}