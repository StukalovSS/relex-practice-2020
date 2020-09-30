import Circle from '../primitivs/circle';
import p5 from 'p5';

'use strict'

export default class Player extends Circle {
    constructor(x, y, s) {
        super(x, y, 36, s);
        this.distanceFromCentre = s.createVector(x, y).mag();

        this.update = function() {
            const newvel = s.createVector(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
            newvel.setMag(3);
            
            if ((Math.abs(newvel.x + this.pos.x) < 1990 && Math.abs(newvel.y + this.pos.y) < 1990 ) ||
                ((newvel.x > 0) && inRange(this.pos.x, -1990) || (newvel.x < 0) && inRange(this.pos.x, 1990) || 
                (newvel.y > 0) && inRange(this.pos.y, -1990) || (newvel.y < 0) && inRange(this.pos.y, 1990))) {
                        this.vel.lerp(newvel, 0.1);
                        this.pos.add(this.vel);
                    }
        }

        this.eat = function (other) {
            let d = p5.Vector.dist(this.pos, other.pos);
            if (d < this.r + other.r) {
                let sum = s.PI * this.r * this.r + s.PI * other.r * other.r;
                this.r = s.sqrt(sum / s.PI);
                other.isEated();
                return true;
            }
            else {
                return false;
            }
        };
    }
}

function inRange(number, point) {
    if (Math.abs(point - number) < 10)
        return true;
    else 
        return false;
}