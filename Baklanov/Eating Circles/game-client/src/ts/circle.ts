const p5 = require('../../node_modules/p5/lib/p5');
export class Circle {
    pos: any;
    r: any;
    nickname: string;
    color: string;

    constructor(public x: number, public y: number, r: number, public s: any, nickname:string, color:string) {
        this.pos = s.createVector(x, y);
        this.r = r;
        this.nickname = nickname;
        this.color = color;
    }
    show() {
        this.s.fill(this.color);
        this.s.ellipse(this.pos.x, this.pos.y,  this.r*2, this.r*2);
        if(this.r > 20 && this.r < 80) {
        this.s.textSize(18);
        this.s.fill(255,255,255);
        this.s.text(this.nickname, this.x - this.r/2, this.y);
        }
        if(this.r >= 80 && this.r < 120) {
            this.s.textSize(36);
            this.s.fill(255,255,255);
            this.s.text(this.nickname, this.x- this.r/2, this.y);
        }
        if(this.r >=120) {
            this.s.textSize(52);
            this.s.fill(255,255,255);
            this.s.text(this.nickname, this.x- this.r/2, this.y);
        }
    };
}