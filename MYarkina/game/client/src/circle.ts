const p5lib = require('../node_modules/p5/lib/p5');


module.exports = class Circle{
    pos:any;
    r:any;
    living:boolean;
    
    constructor(public x:number,public y:number,r:number,public s:any,living:boolean){
      this.pos = s.createVector(x,y);
      this.r = r;
      this.living = living;
    }
  
    show() {
        this.s.fill(255);
        this.s.ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }
  }