import FunctionGraph from './function-graph';

const canvas: HTMLCanvasElement = document.getElementById( 'graph' ) as HTMLCanvasElement;

canvas.width = document.body.clientWidth -  9;
canvas.height = document.documentElement.clientHeight - 9;

const fg: FunctionGraph = new FunctionGraph( canvas, 10);

fg.drawGraphic( n => Math.sqrt(n ** 2 - n + 10) );
