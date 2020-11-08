const Circle = require('./circle');
const lerp = require('lerp');

module.exports = class Player extends Circle {
    minSpeed = 2.7;
    constructor(x, y, r, color, name) {
        super(x, y, r, color);
        this.name = name;
        this.vx = 0;
        this.vy = 0;
        this.speed = 4.2;
        this.eaten = false;
    }

    update(x_0, y_0, w, h) {
        let d = Math.sqrt(x_0 * x_0 + y_0 * y_0);
        if (d == 0) {
            return;
        }
        let nx = x_0 * this.speed / d;
        let ny = y_0 * this.speed / d;
        this.vx = lerp(this.vx, nx, 0.1);
        this.vy = lerp(this.vy, ny, 0.1);

        let prevX = this.x;
        let prevY = this.y;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x > w - this.r || this.x < -w + this.r) {
            this.x = prevX;
        }
        if (this.y > h - this.r || this.y < -h + this.r) {
            this.y = prevY;
        }
    }

    changeSpeed() {
        if (this.speed > this.minSpeed) {
            this.speed -= 0.09;
        }
        if (this.speed <= this.minSpeed) {
            this.speed = this.minSpeed;
        }
    }

    eatsFood(food, w, h) {
        if (this.r <= food.r) {
            return false;
        }
        let dist = Math.sqrt(Math.pow(this.x - food.x, 2) + Math.pow(this.y - food.y, 2));
        if (dist < this.r + food.r) {
            let s = this.r * this.r * Math.PI + food.r * food.r * Math.PI;
            this.r = Math.sqrt(s / Math.PI);
            this.changeSpeed();
            return true;
        } else {
            return false;
        }
    }

    eatsOtherPlayer(other) {
        if (this.r <= other.r) {
            return false;
        }
        let dist = Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
        if (dist < this.r + other.r) {
            if (this.r > other.r) {
                this.r += other.r / 10;
                this.changeSpeed();
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}