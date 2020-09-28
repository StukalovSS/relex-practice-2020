export function drawLine(x0: number, y0: number, x1: number, y1: number, gr: CanvasRenderingContext2D): void {
    gr.beginPath();
    gr.moveTo(x0, y0);
    gr.lineTo(x1, y1);
    gr.stroke();
}

export function drawCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
    gr.beginPath();
    gr.arc(x, y, r, 0, 2 * Math.PI);
    gr.stroke();
}

export function fillCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
    gr.beginPath();
    gr.arc(x, y, r, 0, 2 * Math.PI);
    gr.fill();
    gr.closePath();
}
