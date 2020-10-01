export default class Circle {
    constructor(protected x: number, protected y: number, 
        protected r: number, protected gr: CanvasRenderingContext2D, color = 'white') {
            this.color = color;
        }
    
    set color(color: string) {
        this.gr.fillStyle = color;
    }

    fill() {
        this.gr.beginPath();
        this.gr.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.gr.fill();
        this.gr.closePath();
    }

    stroke() {
        this.gr.beginPath();
        this.gr.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.gr.stroke();
        this.gr.closePath();
    }
}