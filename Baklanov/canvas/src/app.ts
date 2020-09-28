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
let size = 20;
 for (let i =innerHeight/2; i < innerHeight; i+=30) {
drawLine(innerWidth/2+size,i,innerWidth/2-size,i );
 }
 for (let i =innerHeight/2; i >0; i-=30) {
    drawLine(innerWidth/2+size,i,innerWidth/2-size,i );
 }
 for (let i =innerHeight/2; i >0; i-=30) {
     
 }
// for (let i =0; i < innerHeight; i+=30) {
// drawLine(innerWidth/2,i,innerWidth/2+20,i);
// drawLine(innerWidth/2,i,innerWidth/2-20,i);
// for (let i =0; i < innerWidth; i+=30) { 
//     drawLine(i,innerHeight/2,i,innerHeight/2+20);
//     drawLine(i,innerHeight/2,i,innerHeight/2-20);
//     }
// }
//canvasContextElem.fill();

