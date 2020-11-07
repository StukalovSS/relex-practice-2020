const Eat = require('./eat');
const Player = require('./player');

class Vector{
    x;
    y;

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        let len = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector(this.x/len,this.y/len);
    }
    
    mult(k) {
        return new Vector(this.x*k, this.y*k);
    }
}

module.exports = class GamaState{
    x1;y1;
    x2;y2;
    arrayEat = [];
    arrayPlayer = [];
    targets = [];
    idPlayer = 0;
    map = [];

    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    init(){
        for(let i = 0; i < 200; i++){
            let newEat = new Eat(Math.random() * (this.x2 - this.x1) + this.x1,Math.random() * (this.y2 - this.y1) + this.y1,10);
            this.arrayEat.push(newEat);
        }
    }

    addNewPlayer(r,name,code,ww,wh){
        let x = Math.random() * (this.x2 - this.x1) + this.x1; 
        let y = Math.random() * (this.y2 - this.y1) + this.y1
        this.targets.push({
            x:x,
            y:y
        });
        this.arrayPlayer.push(new Player(x,y,r,name,true,ww,wh));
        this.addPlayerOnMap(code);
    }

    addPlayerOnMap(code){
        this.map.push({
            key:code,
            id:this.idPlayer++
        });
    }

    findIdPlayerByCode(code) {
        let id;
        this.map.forEach(element => {
            if(element.key === code){
                id = element.id;
            }
        });
        return id;
    }

    update(){
        for(let i = 0; i < this.arrayPlayer.length; i++){
            if(this.arrayPlayer[i].living){
                for(let j = 0; j < this.arrayEat.length; j++){
                    if(this.eating(i,j)){
                        this.arrayEat.splice(j,1);
                        j = -1;
                    }
                }
                
                for(let j = 0; j < this.arrayPlayer.length; j++){
                    if(i != j){
                        if(this.arrayPlayer[j].living){
                            if(this.eatingPlayers(i,j)){
                                this.arrayPlayer[j].living = false;
                            }
                        }
                    }
                }
            }

            let curVector = new Vector(this.targets[i].x - this.arrayPlayer[i].ww/2, this.targets[i].y - this.arrayPlayer[i].wh/2);
            curVector = curVector.normalize();
            curVector = curVector.mult(3);
            if(this.arrayPlayer[i].living){
                curVector = curVector.mult(64/(this.arrayPlayer[i].r*4/3));
            }
            else{
                curVector = curVector.mult(1);
            }
            if((this.arrayPlayer[i].x + curVector.x + this.arrayPlayer[i].r) > 0 && (this.arrayPlayer[i].x + curVector.x + this.arrayPlayer[i].r)<3000){
                this.arrayPlayer[i].x += curVector.x;
            }
            if((this.arrayPlayer[i].y + curVector.y + this.arrayPlayer[i].r) > 0 && (this.arrayPlayer[i].y + curVector.y + this.arrayPlayer[i].r)<3000){
                this.arrayPlayer[i].y += curVector.y;
            }
        }
    }

    eating(iPlayer,iEat){
        let d = Math.sqrt( Math.pow((this.arrayPlayer[iPlayer].x - this.arrayEat[iEat].x),2) + Math.pow((this.arrayPlayer[iPlayer].y - this.arrayEat[iEat].y),2) );
        if (d < (this.arrayPlayer[iPlayer].r + this.arrayEat[iEat].r)){
            let sum = Math.PI*Math.pow(this.arrayPlayer[iPlayer].r,2) + Math.PI*Math.pow(this.arrayEat[iEat].r,2);
            this.arrayPlayer[iPlayer].r = Math.sqrt(sum/Math.PI);
            return true;
        }else{
            return false;
        }
    }

    eatingPlayers(iPlayer1,iPlayer2){
        let d = Math.sqrt( Math.pow((this.arrayPlayer[iPlayer1].x - this.arrayPlayer[iPlayer2].x),2) + Math.pow((this.arrayPlayer[iPlayer1].y - this.arrayPlayer[iPlayer2].y),2) );
        if (d < (this.arrayPlayer[iPlayer1].r + this.arrayPlayer[iPlayer2].r))
        {
            if(this.arrayPlayer[iPlayer1].r > this.arrayPlayer[iPlayer2].r){
                this.arrayPlayer[iPlayer1].r += this.arrayPlayer[iPlayer2].r/10;
                    return true;
            }else{
                return false;
            }
        }
        else {
            return false;
        }
    }

}