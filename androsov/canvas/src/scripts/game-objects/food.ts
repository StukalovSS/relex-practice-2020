import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(gr: CanvasRenderingContext2D) {
        super(-1990 + Math.random() * 3980, -1990 + Math.random() * 3980 , 10, gr);
        this.fill();
        this.stroke();
    }

    isEated = function() {
        this.x = -1990 + Math.random() * 3980;
        this.y = -1990 + Math.random() * 3980;
    }
}