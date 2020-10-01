export default class Rectangle {
    constructor(private x: number, private y: number, private width: number, private height: number, 
        private gr: CanvasRenderingContext2D, color: string = 'white') {
            this.color = color;
        }

    set color(color: string) {
        this.gr.fillStyle = color;
    }

    draw() {
        this.gr.beginPath();
        this.gr.fillRect(this.x, this.y, this.width, this.height);
        this.gr.closePath();
    }
}