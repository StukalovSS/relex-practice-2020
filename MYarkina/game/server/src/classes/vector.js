/**
 * Двумерный вектор.
 */
module.exports = class Vector{
    //x;
    //y;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Нормализация вектора.
     */
    normalize() {
        let len = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector(this.x/len,this.y/len);
    }
    
    /**
     * Умножение вектора на число.
     * @param {Число, на которое необходимо умножить вектор} k 
     */
    mult(k) {
        return new Vector(this.x*k, this.y*k);
    }
}