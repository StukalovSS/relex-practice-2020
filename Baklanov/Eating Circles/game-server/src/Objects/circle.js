/**
 * Базовый класс для еды и игроков
 */
module.exports = class Circle {
    constructor(x, y, r,color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }
}