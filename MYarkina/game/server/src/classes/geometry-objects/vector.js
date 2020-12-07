/**
 * Двумерный вектор.
 */
module.exports = class Vector{

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Нормализация вектора.
     */
    normalize() {
        const len = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector(this.x/len,this.y/len);
    }
    
    /**
     * Умножение вектора на число.
     * @param k Число, на которое необходимо умножить вектор.
     */
    mult(k) {
        return new Vector(this.x*k, this.y*k);
    }
}