

export default class Circle {
    public pos: any;
    public vel: any;
    
    constructor(x: number, y: number, public r: number, protected s: any) {
        this.pos = s.createVector(x, y);
        this.vel = s.createVector(0, 0); 
    }
}