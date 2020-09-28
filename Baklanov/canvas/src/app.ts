let canvasElem = document.getElementById("HTMLCanvasElement") as HTMLCanvasElement;
canvasElem.height = window.innerHeight;
canvasElem.width = window.innerWidth;
let canvasContextElem = canvasElem.getContext('2d');
canvasContextElem.beginPath();
function drawLine (x1:number,y1:number, x2:number, y2:number) {
    canvasContextElem.moveTo(x1,y1);
    canvasContextElem.lineTo(x2,y2);
    canvasContextElem.stroke();
}
drawLine(innerWidth/2,0,innerWidth/2,innerHeight);
drawLine(0,innerHeight/2, innerWidth, innerHeight/2);
let size = 10;
let step = 50;
 for (let i =innerHeight/2; i < innerHeight; i+=step) {
drawLine(innerWidth/2+size,i,innerWidth/2-size,i );
 }
 for (let i =innerHeight/2; i >0; i-=step) {
    drawLine(innerWidth/2+size,i,innerWidth/2-size,i );
 }
 for (let i =innerWidth/2; i <innerWidth; i+=step) {
     drawLine(i,innerHeight/2+size,i,innerHeight/2-size )
 }
 for (let i =innerWidth/2; i >0; i-=step) {
    drawLine(i,innerHeight/2-size,i,innerHeight/2+size )
}
for(var i=-20;i<20;i+=0.01){
    canvasContextElem.moveTo(0,0);
    canvasContextElem.fillStyle="red"; // цвет квадратической параболы
    canvasContextElem.fillRect(innerWidth/2+i*10,innerHeight/2-10-Math.pow(i,2),3,3);
}
// for (let i =0; i < innerHeight; i+=30) {
// drawLine(innerWidth/2,i,innerWidth/2+20,i);
// drawLine(innerWidth/2,i,innerWidth/2-20,i);
// for (let i =0; i < innerWidth; i+=30) { 
//     drawLine(i,innerHeight/2,i,innerHeight/2+20);
//     drawLine(i,innerHeight/2,i,innerHeight/2-20);
//     }
// }
// //canvasContextElem.fill();

// function drawLine(x0: number, y0: number, x1: number, y1: number, gr: CanvasRenderingContext2D): void {
//     gr.beginPath();
//     gr.moveTo(x0, y0);
//     gr.lineTo(x1, y1);
//     gr.stroke();
//     gr.closePath();
// }

// function drawCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
//     gr.beginPath();
//     gr.arc(x, y, r, 0, 2 * Math.PI);
//     gr.stroke();
// }

// function fillCircle(x: number, y: number, r: number, gr: CanvasRenderingContext2D) {
//     gr.beginPath();
//     gr.arc(x, y, r, 0, 2 * Math.PI);
//     gr.fill();
//     gr.closePath();
// }

// function drawGraphic( funct: (n: number) => number ): void {
//     let prevX: number = graph.width / 2,
//         prevY: number = funct(0),
//         prevMinusX = prevX,
//         prevYFromMinusX = prevY;

    
//     for (let i = 1; i < (graph.width - 30) / 2; i += 1) {
//         drawLine(prevX, prevY, graph.width / 2 + i, graph.height / 2 - funct(i / 10), graphContexts);
//         drawLine(prevMinusX, prevYFromMinusX, graph.width / 2 - i, graph.height / 2 - funct(-i / 10), graphContexts);
//         prevX = graph.width / 2 + i;
//         prevY = graph.height / 2 - funct(i / 10);
//         prevMinusX = graph.width / 2 - i;
//         prevYFromMinusX = graph.height / 2 - funct(-i / 10);
//         console.log(i);
//         console.log(funct(i / 10));
//     }
// }

// const graph: HTMLCanvasElement = document.getElementById( 'HTMLCanvasElement' ) as HTMLCanvasElement,
//     graphContexts: CanvasRenderingContext2D = graph.getContext( '2d' );

// document.body.style.width = "100%";
// document.body.style.height = "100vh";

// graph.width = document.body.scrollWidth;
// graph.height = document.body.clientHeight;

// drawLine(graph.width / 2, 0, graph.width / 2, graph.height, graphContexts);
// drawLine(0, graph.height / 2, graph.width - 15, graph.height / 2, graphContexts);
// drawLine(graph.width / 2, 0, graph.width / 2 - 15, 15, graphContexts);
// drawLine(graph.width / 2, 0, graph.width / 2 + 15, 15, graphContexts);
// drawLine(graph.width - 15, graph.height / 2, graph.width - 30, graph.height / 2 - 15, graphContexts);
// drawLine(graph.width - 15, graph.height / 2, graph.width - 30, graph.height / 2 + 15, graphContexts);

// for (let i = 0; i < (graph.width - 30) / 2; i += 10) {
//     drawLine(graph.width / 2 - i, graph.height / 2,  graph.width / 2 - i, graph.height / 2 - 5, graphContexts);
//     drawLine(graph.width / 2 + i, graph.height / 2, graph.width / 2 + i, graph.height / 2 - 5, graphContexts);
// }

// for (let i = 0; i < (graph.height) / 2; i += 10) {
//     drawLine(graph.width / 2, graph.height / 2 + i,  graph.width / 2 + 5, graph.height / 2 + i, graphContexts);
//     drawLine(graph.width / 2, graph.height / 2 - i, graph.width / 2 + 5, graph.height / 2 - i, graphContexts);
// }

// drawGraphic(n => n ** 2 );

