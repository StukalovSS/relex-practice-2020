const p5 = require('../../node_modules/p5/lib/p5');

/**
 * Класс для крошек на поле
 */
export class Circle {
    pos: any;
    r: any;
    nickname: string;
    color: string;

    constructor(public x: number, public y: number, r: number, public s: any, color: string) {
        this.pos = s.createVector(x, y);
        this.r = r;
        this.color = color;
    }

    /**
     * Отображает еду на поле
     */
    show(): void {
        this.s.fill(this.color);
        this.s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}
