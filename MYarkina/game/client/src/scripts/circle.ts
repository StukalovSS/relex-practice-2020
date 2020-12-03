const p5lib = require('../../node_modules/p5/lib/p5');

/**
 * Круг.
 */
module.exports = class Circle{
  
    pos:any;
    r:any;
    visible:boolean;
    text:string;
    
    constructor(public x:number, public y:number, r:number, public s:any, visible:boolean, text:string){
      this.pos = s.createVector(x,y);
      this.r = r;
      this.visible = visible;
      this.text = text;
    }
  
    show() {
        this.s.fill(255);
        this.s.ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
        if (this.text){
          this.s.fill(255, 204, 0);
          this.s.textSize(25);
          this.s.textAlign(this.s.CENTER, this.s.CENTER);
          this.s.text(this.text, this.pos.x , this.pos.y)
        }
    }
  }