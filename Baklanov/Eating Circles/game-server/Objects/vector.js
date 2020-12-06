module.exports =  class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    get cosA() {
        return this.x / this.length;
    }

    get sinA() {
        return this.y / this.length;
    }
}