import {drawLine} from './graphics';


export default class Functioncanvas {
    private gr: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x0: number;
    private y0: number;

    constructor(canvas: HTMLCanvasElement, private step: number) {
        if (step <= 0)
            throw new Error("Step can't be 0 or less");
        

        this.gr = canvas.getContext( '2d' );
        this.width = canvas.width;
        this.height = canvas.height;
        this.x0 = this.width / 2;
        this.y0 = this.height / 2;
        
        drawLine(this.x0, 0, this.x0, this.height, this.gr);
        drawLine(0, this.y0, this.width, this.y0, this.gr);
        drawLine(this.x0, 0, this.x0 - 15, 15, this.gr);
        drawLine(this.x0, 0, this.x0 + 15, 15, this.gr);
        drawLine(this.width, this.y0, this.width - 15, this.y0 - 15, this.gr);
        drawLine(this.width, this.y0, this.width - 15, this.y0 + 15, this.gr);

        for (let i = 0; i < this.width / 2; i += this.step) {
            drawLine(this.x0 - i, this.y0,  this.x0 - i, this.y0 - 5, this.gr);
            drawLine(canvas.width / 2 + i, canvas.height / 2, canvas.width / 2 + i, canvas.height / 2 - 5, this.gr);
        }

        for (let i = 0; i < this.height; i += this.step) {
            drawLine(this.x0, this.y0 + i,  this.x0 + 5, this.y0 + i, this.gr);
            drawLine(this.x0, this.y0 - i, this.x0 + 5, this.y0 - i, this.gr);
        }
    }

    drawGraphic( f: (n: number) => number ): void {
        let prevX: number = this.x0,
            prevY: number = f(this.x0),
            prevMinusX = prevX,
            prevYFromMinusX = prevY;
    
        
        for (let i = 1; i < this.width / 2; i += 1) {
            drawLine(prevX, prevY, this.width / 2 + i, this.height / 2 - f(i / 10), this.gr);
            drawLine(prevMinusX, prevYFromMinusX, this.width / 2 - i, this.height / 2 - f(-i / 10), this.gr);
            prevX = this.width / 2 + i;
            prevY = this.height / 2 - f(i / 10);
            prevMinusX = this.width / 2 - i;
            prevYFromMinusX = this.height / 2 - f(-i / 10);
        }
    }
}