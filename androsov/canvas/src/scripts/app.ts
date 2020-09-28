import FunctionGraph from './function-graph';

function increaseStepInGraph() {
    fg.setStep( fg.getStep() + 1 );
}

function decreaseeStepInGraph() {
    try {
        fg.setStep( fg.getStep() - 1 );
    } catch (error) {
        
    }
}

const canvas: HTMLCanvasElement = document.getElementById( 'graph' ) as HTMLCanvasElement;

canvas.width = document.body.clientWidth -  9;
canvas.height = document.documentElement.clientHeight - 9;

const fg: FunctionGraph = new FunctionGraph( canvas, 10);

fg.drawGraphic( n => Math.sqrt(n ** 2 - n + 10) );

canvas.addEventListener('wheel', event => {
    if(event.deltaY > 0)
        decreaseeStepInGraph();
    else
        increaseStepInGraph();
});
