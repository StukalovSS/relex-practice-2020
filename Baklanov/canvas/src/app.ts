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
    canvasContextElem.fillStyle="red";
    canvasContextElem.fillRect(innerWidth/2+i*10,innerHeight/2-10-Math.pow(i,2),3,3);
}