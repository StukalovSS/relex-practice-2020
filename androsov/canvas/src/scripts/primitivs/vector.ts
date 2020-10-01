export default class Vector {
    constructor(public x: number, public y: number) {}

    get angle() {
        return Math.asin( this.y / this.x );
    }

    set angle(angle: number) {
        this.x *= Math.cos(angle);
        this.y *= Math.sin(angle);
    }
    
    set mag(mag: number) {
        this.x = mag * Math.cos(this.angle);
        this.y = mag * Math.sin(this.angle);
    }

    get length() {
        return Math.sqrt( this.x ** 2 + this.y ** 2);
    }

    scalarMiltiply(vect: Vector): number {
        return this.x * vect.x + this.y * vect.y;
    }

    angleBetweenVectors(vect: Vector): number {
        return Math.acos( this.scalarMiltiply(vect) / (this.length * vect.length) );
    }

    lerp(vect: Vector, step: number) {
        step = step < 0 ? 0 : step;
        step = step > 1 ? 1 : step;
        if (this.angle >= vect.angle) {
            this.angle -= this.angleBetweenVectors(vect) * step;
        } else {
            this.angle += this.angleBetweenVectors(vect) * step;
        }
    }
}