function drawLine(x0: number, y0: number, x1: number, y1: number, gr: CanvasRenderingContext2D): void {
    gr.beginPath();
    gr.moveTo(x0, y0);
    gr.lineTo(x1, y1);
    gr.stroke();
    gr.closePath();
}

function drawCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
    gr.beginPath();
    gr.arc(x, y, r, 0, 2 * Math.PI);
    gr.stroke();
}

function fillCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
    gr.beginPath();
    gr.arc(x, y, r, 0, 2 * Math.PI);
    gr.fill();
    gr.closePath();
}

function drawGraphic( funct: (n: number) => number ): void {
    let prevX: number = graph.width / 2,
        prevY: number = funct(0),
        prevMinusX = prevX,
        prevYFromMinusX = prevY;

    
    for (let i = 1; i < (graph.width - 30) / 2; i += 1) {
        drawLine(prevX, prevY, graph.width / 2 + i, graph.height / 2 - funct(i / 10), graphContexts);
        drawLine(prevMinusX, prevYFromMinusX, graph.width / 2 - i, graph.height / 2 - funct(-i / 10), graphContexts);
        prevX = graph.width / 2 + i;
        prevY = graph.height / 2 - funct(i / 10);
        prevMinusX = graph.width / 2 - i;
        prevYFromMinusX = graph.height / 2 - funct(-i / 10);
        console.log(i);
        console.log(funct(i / 10));
    }
}

const graph: HTMLCanvasElement = document.getElementById( 'graph' ) as HTMLCanvasElement,
    graphContexts: CanvasRenderingContext2D = graph.getContext( '2d' );

document.body.style.width = "100%";
document.body.style.height = "100vh";

graph.width = document.body.scrollWidth;
graph.height = document.body.clientHeight;

drawLine(graph.width / 2, 0, graph.width / 2, graph.height, graphContexts);
drawLine(0, graph.height / 2, graph.width - 15, graph.height / 2, graphContexts);
drawLine(graph.width / 2, 0, graph.width / 2 - 15, 15, graphContexts);
drawLine(graph.width / 2, 0, graph.width / 2 + 15, 15, graphContexts);
drawLine(graph.width - 15, graph.height / 2, graph.width - 30, graph.height / 2 - 15, graphContexts);
drawLine(graph.width - 15, graph.height / 2, graph.width - 30, graph.height / 2 + 15, graphContexts);

for (let i = 0; i < (graph.width - 30) / 2; i += 10) {
    drawLine(graph.width / 2 - i, graph.height / 2,  graph.width / 2 - i, graph.height / 2 - 5, graphContexts);
    drawLine(graph.width / 2 + i, graph.height / 2, graph.width / 2 + i, graph.height / 2 - 5, graphContexts);
}

for (let i = 0; i < (graph.height) / 2; i += 10) {
    drawLine(graph.width / 2, graph.height / 2 + i,  graph.width / 2 + 5, graph.height / 2 + i, graphContexts);
    drawLine(graph.width / 2, graph.height / 2 - i, graph.width / 2 + 5, graph.height / 2 - i, graphContexts);
}

drawGraphic(n => n ** 2 );
