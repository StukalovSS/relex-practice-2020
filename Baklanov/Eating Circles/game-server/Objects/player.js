const Circle = require('./circle');
const Rectangle = require('./rectangle');
const Vector = require('./vector');
const lerp = require('lerp');

/**
 * Класс игрока.
 * Содержит реализацию передвижения и поедания еды и игроков.
 */
module.exports = class Player extends Circle {
    constructor(x, y, r, nickname, color, points) {
        super(x, y, r);
        this.vector = new Vector(0, 0);
        this.prevPos = { x: x, y: y };
        this.isLife = true;
        this.speed = 8.1;
        this.speedMin = 1.9;
        this.nickname = nickname;
        this.color = color;
        this.points = points;
    }

    /**
   * Обновляет координаты игрока на поле.
   * @param {number} tarX целевая координата x
   * @param {number} tarY целевая координата y
   * @param {number} width ширина поля
   * @param {number} height высота поля
   */
    updatePosition(tarX, tarY, width, height) {
        let len = Math.sqrt(tarX * tarX + tarY * tarY);
        let newX = tarX * this.speed / len;
        let newY = tarY * this.speed / len;
        this.vector.x = lerp(this.vector.x, newX, 0.1);
        this.vector.y = lerp(this.vector.y, newY, 0.1);
        this.prevPos.x = this.x;
        this.prevPos.y = this.y;
        if (this.x + this.vector.x < width && this.x + this.vector.x > -width) {
            this.x += this.vector.x;
        }
        if (this.y + this.vector.y < height && this.y + this.vector.y > -height) {
            this.y += this.vector.y;
        }
    }
    
    changeSpeed() {
        if (this.speed > this.speedMin) {
            this.speed -= 0.078;
        }
        else {
            this.speed = this.speedMin;
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
  * @param {string} type тип объекта: food или player
  */
    eats(other, type) {
        let line = Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
        const moving = new Vector(this.x - this.prevPos.x, this.y - this.prevPos.y);
        const rect = new Rectangle(this.newCoordinate(this, moving), this.r, other.r, moving);

        if (rect.isPointInRectangle(this.newCoordinate(other, moving)) || line < this.r + other.r) {
            if (type === 'food') {
                return this.eatsGrains(other);
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
    eatsGrains(grain) {
        const s = this.r * this.r * Math.PI + grain.r * grain.r * Math.PI;
        this.r = Math.sqrt(s / Math.PI);
        this.points += 12;
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
        if (this.r > other.r && other.r != 0) {
            this.r += other.r / 10;
            this.changeSpeed();
            return true;
        } else {
            return false;
        }
    }
}