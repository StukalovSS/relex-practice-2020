export default class Circle {
    constructor(public x: number, public y: number, public r: number) {}

    show(gr: CanvasRenderingContext2D) {
        gr.beginPath();
        gr.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        gr.fill();
    } 
}