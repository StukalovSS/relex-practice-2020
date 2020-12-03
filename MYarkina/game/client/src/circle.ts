const p5lib = require('../node_modules/p5/lib/p5');


module.exports = class Circle{
  
    pos:any;
    r:any;
    living:boolean;
    namePlayer:string;
    
    constructor(public x:number, public y:number, r:number, public s:any, living:boolean, namePlayer:string){
      this.pos = s.createVector(x,y);
      this.r = r;
      this.living = living;
      this.namePlayer = namePlayer;
    }
  
    show() {
        this.s.fill(255);
        this.s.ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
        if(this.namePlayer){
          this.s.fill(255, 204, 0);
          this.s.textSize(25);
          this.s.text(this.namePlayer, this.pos.x - this.namePlayer.length*4, this.pos.y)
        }
    }
  }