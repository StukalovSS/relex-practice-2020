const Circle = require('./circle');
const lerp = require('lerp');

module.exports = class Player extends Circle {
    constructor(x, y, r,nickname, color,points) {
        super(x, y, r);
        this.vectorX = 0;
        this.vectorY = 0;
        this.isLife = true;
        this.speed = 8.1;
        this.nickname = nickname;
        this.color = color;
        this.points = points;
    }
    speedMin = 1.9;
    updatePosition(tarX, tarY, width, height) {
        let len = Math.sqrt(tarX * tarX + tarY * tarY);
        let newX = tarX * this.speed / len;
        let newY = tarY * this.speed / len;
        this.vectorX = lerp(this.vectorX, newX, 0.1);
        this.vectorY = lerp(this.vectorY, newY, 0.1);
        if (this.x + this.vectorX < width && this.x + this.vectorX > -width) {
            this.x += this.vectorX;
        }
        if (this.y + this.vectorY < height && this.y + this.vectorY > -height) {
            this.y += this.vectorY;
        }
    }
    eatingGrains(grain) {
        let line = Math.sqrt(Math.pow(this.x - grain.x, 2) + Math.pow(this.y - grain.y, 2));
        if (line < this.r + grain.r) {
            this.points +=16;
            let sPlayer = Math.pow(this.r, 2) * Math.PI + Math.pow(grain.r, 2) * Math.PI;
            this.r = Math.sqrt(sPlayer / Math.PI);
            if (this.speed > this.speedMin) {
                this.speed -= 0.078;
            }
            else {
                this.speed = this.speedMin;
            }
            return true;
        }
    }
}