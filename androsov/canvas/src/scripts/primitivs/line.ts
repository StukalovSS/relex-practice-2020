import { Point } from '../coordinates-conventer/screen-conventer';

export default class Line {
    constructor(public p1: Point, public p2: Point) {}

    draw(gr: CanvasRenderingContext2D) {
        gr.beginPath();
        gr.moveTo(this.p1.x, this.p1.y);
        gr.lineTo(this.p2.x, this.p2.y);
        gr.stroke();
    }
}