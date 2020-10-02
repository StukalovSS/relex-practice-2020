import Circle from '../primitivs/circle';
import Food from './food';
const p5 = require('../../../node_modules/p5/lib/p5')

'use strict'

export default class Player extends Circle {
    private distanceFromCentre: number;
    
    constructor(x: number, y: number, s: any) {
        super(x, y, 36, s);
        this.distanceFromCentre = s.createVector(x, y).mag();
    }

    update() {
        const newvel = this.s.createVector(this.s.mouseX - this.s.width / 2, this.s.mouseY - this.s.height / 2);
        newvel.setMag(3);
        
        if ((Math.abs(newvel.x + this.pos.x) < 1990 && Math.abs(newvel.y + this.pos.y) < 1990 ) ||
            ((newvel.x > 0) && inRange(this.pos.x, -1990) || (newvel.x < 0) && inRange(this.pos.x, 1990) || 
            (newvel.y > 0) && inRange(this.pos.y, -1990) || (newvel.y < 0) && inRange(this.pos.y, 1990))) {
                    this.vel.lerp(newvel, 0.1); 
                    this.pos.add(this.vel);
                }
    }

    eat(other: Food) {
        let d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            let sum = this.s.PI * this.r * this.r + this.s.PI * other.r * other.r;
            this.r = this.s.sqrt(sum / this.s.PI);
            other.isEated();
            return true;
        }
        else {
            return false;
        }
    }
}

function inRange(number: number, point: number): boolean {
    if (Math.abs(point - number) < 10)
        return true;
    else 
        return false;
}