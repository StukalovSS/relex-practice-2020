module.exports = class Player{
    x;
    y;
    r;
    name;
    living;
    ww;
    wh;
    
    constructor(x,y,r,name,living,ww,wh){
        this.x = x;
        this.y = y;
        this.r = r;
        this.name = name;
        this.living = living;
        this.ww = ww;
        this.wh = wh;
    }
}