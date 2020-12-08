const p5 = require('../../node_modules/p5/lib/p5');

/**
 * Игрок на поле
 */
export class Player {
    pos: any;
    r: any;
    nickname: string;
    color: string;

    constructor(
        public x: number,
        public y: number,
        r: number,
        public s: any,
        nickname: string,
        color: string,
        public isLife: boolean
    ) {
        this.pos = s.createVector(x, y);
        this.r = r;
        this.nickname = nickname;
        this.color = color;
    }

    /**
     * Отображает игрока и его ник
     */
    show(): void {
        this.s.fill(this.color);
        this.s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        this.s.textSize(this.r / 2);
        this.s.fill(255, 255, 255);
        this.s.textAlign(this.s.CENTER, this.s.CENTER);
        this.s.text(this.nickname, this.pos.x, this.pos.y);
    }
}
