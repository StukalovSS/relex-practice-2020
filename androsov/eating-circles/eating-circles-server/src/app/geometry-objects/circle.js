export class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r; 
    }

    distanceFromAnotherCircle(circle) {
        return Math.sqrt((this.x - circle.x) ** 2 + (this.y - circle.y) ** 2);
    }

    get square() {
        return Math.PI * (this.r ** 2);
    }
}
