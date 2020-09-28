import {drawLine} from './graphics';
import {writeString} from './graphics'

export default class Functioncanvas {
    private gr: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private x0: number;
    private y0: number;

    constructor(canvas: HTMLCanvasElement, private step: number,
             private funct: (n: number) => number = n => n) {
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
            drawLine(this.x0 + i, this.y0, this.x0 + i, this.y0 - 5, this.gr);
            if (i != 0) {
                writeString('-' + i, this.x(-i), this.y(1), this.gr);
                writeString('' + i, this.x(i), this.y(1), this.gr);
            }
        }

        for (let i = 0; i < this.height; i += this.step) {
            
                
            drawLine(this.x0, this.y0 + i,  this.x0 + 5, this.y0 + i, this.gr);
            drawLine(this.x0, this.y0 - i, this.x0 + 5, this.y0 - i, this.gr);
            if (i != 0) {
                writeString('-' + i, this.x(1), this.y(-i), this.gr);
                writeString('' + i, this.x(1), this.y(i), this.gr);
            }
        }
    }

    private x(x: number): number {
        return Math.round( x * this.step + this.x0 );
    }

    private y(x: number): number {
        return this.y0 - this.funct(x) * this.step;
    }

    drawGraphic( f: (n: number) => number = this.funct ): void {
        this.funct = f;
        let prevX: number = 0;

        for (let x = 1; this.x(x) < this.width; x += 1) {
            drawLine(this.x(prevX), this.y(prevX), this.x(x), this.y(x), this.gr);
            drawLine(this.x(-prevX), this.y(-prevX), this.x(-x), this.y(-x), this.gr);
            prevX = x;
        }
    }
}