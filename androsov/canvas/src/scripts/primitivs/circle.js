

export default class Circle {
    
    constructor(x, y, r, s) {
        this.pos = s.createVector(x, y);
        this.r = r;
        this.vel = s.createVector(0, 0);

        this.show = function() {
            s.fill(255);
            s.ellipse(this.pos.x, this.pos.y, this.r * 2)
        }
        
        
    }

}