import Circle from '../primitivs/circle';
import Vector from '../primitivs/vector';

export default class Player extends Circle {
    constructor(x: number, y: number, gr: CanvasRenderingContext2D, color: string) {
        super(x, y, 36, gr, color);
        this.fill();
    }

    update(x: number, y: number) {
        const newvel = new Vector(x, y);
        newvel.mag = 3;
        
        if (this.distanceFromCentre <= 1990 ||
            ((newvel.x > 0) && inRange(this.x, -2000) || (newvel.x < 0) && inRange(this.x, 2000) || 
            (newvel.y > 0) && inRange(this.y, -2000) || (newvel.y < 0) && inRange(this.y, 2000))) {
                let vel = new Vector(this.x, this.y);
                vel.lerp(newvel, 0.1);
                this.x += vel.x;
                this.y += vel.y;
        }
        this.fill();
    }

    // eat(other) {
    //     let d = p5.Vector.dist(this.pos, other.pos);
    //     if (d < this.r + other.r) {
    //         let sum = s.PI * this.r * this.r + s.PI * other.r * other.r;
    //         this.r = s.sqrt(sum / s.PI);
    //         other.isEated();
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    get distanceFromCentre(): number {
        return Math.sqrt(this.x **2 + this.y ** 2);
    }
}



function inRange(number: number, point: number): boolean {
    if (Math.abs(point - number) < 10)
        return true;
    else 
        return false;
}
