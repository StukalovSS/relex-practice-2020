const p5 = require('../node_modules/p5/lib/p5');
<<<<<<< HEAD

export class Circle {
    eats: (other: any) => boolean;
    pos: any;
    r: any;
    vel: any;
    show: () => void;
    update: () => void;
    constructor(x:any, y:any, r:any, s:any, color:any ) {
=======
export class Circle {
    pos: number;
    r: number;
    vel: number;
    show: Function;
    update: Function;
    eats: Function;

    constructor(public x: number, public y: number, r: number, public s: any) {
>>>>>>> 9ab1556a6c8b27ed07eec21bdc1726d43ac61dde
        this.pos = s.createVector(x, y);
        this.r = r;
        this.vel = s.createVector(0, 0);

        this.show = function () {
<<<<<<< HEAD
            s.fill(color);
=======
            s.fill(255);
>>>>>>> 9ab1556a6c8b27ed07eec21bdc1726d43ac61dde
            s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        };

        this.update = function () {
            const newvel = s.createVector(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
            newvel.setMag(3);
<<<<<<< HEAD
            this.vel.lerp(newvel, 0.1);
            this.pos.add(this.vel);
        };

        this.eats = function (other) {
=======

            this.vel.lerp(newvel, 0.1);
            this.pos.x = s.constrain(this.pos.x, -s.width + this.r, s.width - this.r);
            this.pos.y = s.constrain(this.pos.y, -s.height + this.r, s.height - this.r);
            this.pos.add(this.vel);
        };

        this.eats = function (other: any) {
>>>>>>> 9ab1556a6c8b27ed07eec21bdc1726d43ac61dde
            var d = p5.Vector.dist(this.pos, other.pos);
            if (d < this.r + other.r) {
                var sum = s.PI * this.r * this.r + s.PI * other.r * other.r;
                this.r = s.sqrt(sum / s.PI);
                return true;
            }
            else {
                return false;
            }
        };
    }
}