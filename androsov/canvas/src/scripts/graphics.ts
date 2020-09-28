export function drawLine(x0: number, y0: number, x1: number, y1: number, gr: CanvasRenderingContext2D): void {
    gr.beginPath();
    gr.moveTo(x0, y0);
    gr.lineTo(x1, y1);
    gr.stroke();
}