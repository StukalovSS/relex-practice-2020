const Circle = require('./circle');
const Rectangle = require('./rectangle');
const Vector = require('./vector');
const lerp = require('lerp');

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
    updatePosition(tarX, tarY, width, height) {
        let len = Math.sqrt(tarX * tarX + tarY * tarY);
        let newX = tarX * this.speed / len;
        let newY = tarY * this.speed / len;
        this.vector.x = lerp(this.vector.x, newX, 0.1);
        this.vector.y = lerp(this.vector.y, newY, 0.1);
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
    newCoordinate(circle, moving) {
        return {
            x: circle.x * moving.cosA + circle.y * moving.sinA,
            y: - circle.x * moving.sinA + circle.y * moving.cosA
        }
    }
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
    eatsGrains(grain) {
        const s = this.r * this.r * Math.PI + grain.r * grain.r * Math.PI;
        this.r = Math.sqrt(s / Math.PI);
        this.changeSpeed();
        return true;
    }
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