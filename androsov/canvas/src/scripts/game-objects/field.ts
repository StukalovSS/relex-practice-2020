import Rectangle from '../primitivs/rectangle';
import Player from './player';
import Food from './food';

export default class Field {
    private x0: number;
    private y0: number;
    private player: Player;
    private food: Food[] = [];

    constructor(private width: number,private height: number,
         private color: string, private gr: CanvasRenderingContext2D) {
            
        this.x0 = (document.body.clientWidth -  9) / 2;
        this.y0 = (document.documentElement.clientHeight - 9) / 2;
        gr.fillStyle = this.color;

        new Rectangle( this.x( -this.width / 2), this.y( this.height / 2), 
            this.width, this.height, this.gr, '#b8ffd9').draw();
        this.player = new Player(this.x(0), this.y(0), gr, '#a8adad');

        for (let i = 0; i < 1000; i++) {
            this.food[i] = new Food(gr);
        }
    }

    private x(x: number): number {
        return this.x0 + x;
    }

    private y(y: number): number {
        return this.y0 - y;
    }
}