const p5 = require('../node_modules/p5/lib/p5');

export class Circle {
    pos: any;
    r: any;

    constructor(public x: number, public y: number, r: number, public s: any, public eaten: boolean, public color: any) {
        this.pos = s.createVector(x, y);
        this.r = r;
    }

    show() {
        let c = this.s.color(this.color);
        this.s.fill(c);
        this.s.noStroke();
        this.s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }
}
