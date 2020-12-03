const Eat = require('./eat');
const Player = require('./player');
const Vector = require('./vector');

/**
 * Состояние игры.
 * Хранит данные игры и действия над ними.
 */
module.exports = class GamaState{
    // Размер поля.
    //x1;
    //y1;
    //x2;
    //y2;

    //arrayEat = [];
    //arrayPlayer = [];
   // targets = []; // Целевое положение игроков.
    //map = []; 


    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.arrayEat = [];
        this.arrayPlayer = [];
        this.targets = []; // Целевое положение игроков.
        this.map = []; 
    }

    /**
     * Инициализирует координаты корма на поле.
     */
    init() {
        for (let i = 0; i < 200; i++){
            const newEat = new Eat(Math.random() * (this.x2 - this.x1) + this.x1, Math.random() * (this.y2 - this.y1) + this.y1, 10);
            this.arrayEat.push(newEat);
        }
    }

    /**
     * Добавление нового игрока.
     * @param r Радиус игрока.
     * @param name Имя игрока.
     * @param code Уникальный код игрока.
     * @param ww Ширина рабочей области окна браузера клиента.
     * @param wh Высота рабочей области окна браузера клиента.
     */
    addNewPlayer(r, name, code, ww, wh) {
        const x = Math.random() * (this.x2 - this.x1 - r) + this.x1; 
        const y = Math.random() * (this.y2 - this.y1 - r) + this.y1
        this.targets.push({
            x: x,
            y: y
        });
        this.arrayPlayer.push(new Player(x, y, r, name, true, ww, wh));
        this.addPlayerOnMap(code);
    }

    addPlayerOnMap(code) {
        this.map.push( {
            key: code,
            index: this.arrayPlayer.length - 1
        });
    }

    /**
     * Поиск индекса игрока в массиве игроков.
     * @param code Уникальный код игрока.
     */
    findIndexPlayerByCode(code) {
        let index = -1;
        this.map.forEach(element => {
            if (element.key === code){
                index = element.index;
            }
        });
        return index;
    }

    /**
     * Обновление данных о состоянии игры. 
     */
    update() {
        for (let i = 0; i < this.arrayPlayer.length; i++) {
            if (this.arrayPlayer[i].living) {
                for (let j = 0; j < this.arrayEat.length; j++) {
                    if(this.eating(i, j)) {
                        this.arrayEat.splice(j, 1);
                        j--;
                    }
                }
                
                for (let j = 0; j < this.arrayPlayer.length; j++) {
                    if (this.arrayPlayer[j].living && i != j) {
                        if (this.eatingPlayers(i, j)) {
                            this.arrayPlayer[j].living = false;
                        }
                    }
                    
                }
            }

            let curVector = new Vector(this.targets[i].x - this.arrayPlayer[i].ww/2, this.targets[i].y - this.arrayPlayer[i].wh/2);
            curVector = curVector.normalize();
            curVector = curVector.mult(3);
            if (this.arrayPlayer[i].living) {
                curVector = curVector.mult(64/(this.arrayPlayer[i].r*4/3));
            }
            else {
                curVector = curVector.mult(1);
            }

            if ((this.arrayPlayer[i].x + curVector.x + this.arrayPlayer[i].r) > Math.min(this.x1,this.x2) && (this.arrayPlayer[i].x + curVector.x + this.arrayPlayer[i].r) < Math.max(this.x1,this.x2)){
                this.arrayPlayer[i].x += curVector.x;
            } 
            if ((this.arrayPlayer[i].y + curVector.y + this.arrayPlayer[i].r) > Math.min(this.y1,this.y2) && (this.arrayPlayer[i].y + curVector.y + this.arrayPlayer[i].r) < Math.max(this.y1,this.y2)){
                this.arrayPlayer[i].y += curVector.y;
            }
        }
    }

    /**
     * Поедание корма.
     * @param iPlayer Индекс игрока в массиве с игроками.
     * @param iEat Индекс еды в массиве с едой.
     * Возвращает true/false - корм съеден/не съеден игроком.
     */
    eating(iPlayer, iEat) {
        const d = Math.sqrt( Math.pow((this.arrayPlayer[iPlayer].x - this.arrayEat[iEat].x),2) + Math.pow((this.arrayPlayer[iPlayer].y - this.arrayEat[iEat].y),2) );
        if (d < this.arrayPlayer[iPlayer].r) {
            const sum = Math.PI*Math.pow(this.arrayPlayer[iPlayer].r, 2) + Math.PI*Math.pow(this.arrayEat[iEat].r, 2);
            this.arrayPlayer[iPlayer].r = Math.sqrt(sum/Math.PI);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Поедание игроком другого игрока.
     * @param iPlayer1 Индекс первого игрока.
     * @param iPlayer2 Индекс второго игрока.
     * 
     * Возвращает true/false - второй игрок съеден/не съеден первым игроком.
     */
    eatingPlayers(iPlayer1, iPlayer2) {
        const d = Math.sqrt( Math.pow((this.arrayPlayer[iPlayer1].x - this.arrayPlayer[iPlayer2].x), 2) + Math.pow((this.arrayPlayer[iPlayer1].y - this.arrayPlayer[iPlayer2].y), 2) );
        if (d < Math.max(this.arrayPlayer[iPlayer1].r,this.arrayPlayer[iPlayer2].r)) {
            if (this.arrayPlayer[iPlayer1].r > this.arrayPlayer[iPlayer2].r) {
                this.arrayPlayer[iPlayer1].r += this.arrayPlayer[iPlayer2].r/10;
                    return true;
            } else {
                return false;
            }
        }
        else {
            return false;
        }
    }



    /**
     * НАХОДИТСЯ В РАЗРАБОТКЕ
     * Поедание корма на отрезке.
     * @param iPlayer Индекс игрока в массиве с игроками.
     * @param iEat Индекс еды в массиве с едой.
     * Возвращает true/false - корм съеден/не съеден игроком.
     */
    eatInSegment(iPlayer, iEat) {
        let curVector = new Vector(this.targets[iPlayer].x - this.arrayPlayer[iPlayer].ww/2, this.targets[iPlayer].y - this.arrayPlayer[iPlayer].wh/2);
        curVector = curVector.normalize();
        curVector = curVector.mult(3);
        curVector = curVector.mult(64/(this.arrayPlayer[iPlayer].r*4/3));
        curVector.x += this.arrayPlayer[iPlayer].x;
        curVector.y += this.arrayPlayer[iPlayer].y;

        let xa = curVector.x - this.arrayPlayer[iPlayer].x;
        let ya = curVector.y - this.arrayPlayer[iPlayer].y;
        const d = Math.sqrt(xa*xa + ya*ya);
        let cosa = xa/d;
        let sina = ya/d;
        let xm = this.arrayPlayer[iPlayer].x*cosa + this.arrayPlayer[iPlayer].y * sina;
        let ym = -this.arrayPlayer[iPlayer].x*sina + this.arrayPlayer[iPlayer].y * cosa;
        
        //return this.eating(iPlayer, iEat);
    
        const dd = Math.sqrt( Math.pow((this.arrayPlayer[iPlayer].x - this.arrayEat[iEat].x),2) + Math.pow((this.arrayPlayer[iPlayer].y - this.arrayEat[iEat].y),2) );
        if (dd < this.arrayPlayer[iPlayer].r) {
            console.log(this.arrayEat[iEat].x);
            console.log(this.arrayPlayer[iPlayer].x + d, this.arrayPlayer[iPlayer].x);
            console.log(curVector);
            console.log(this.arrayEat[iEat].x <= Math.max(this.arrayPlayer[iPlayer].x+ d, this.arrayPlayer[iPlayer].x));
        }
        if (this.arrayEat[iEat].x*cosa+this.arrayEat[iEat].y*sina >= Math.min(xm + d, xm) && 
        this.arrayEat[iEat].x*cosa+this.arrayEat[iEat].y*sina <= Math.max(xm + d, xm) && 
        -this.arrayEat[iEat].x*sina+this.arrayEat[iEat].y*cosa >= Math.min(ym + this.arrayEat[iEat].r + this.arrayPlayer[iPlayer].r, ym - this.arrayEat[iEat].r - this.arrayPlayer[iPlayer].r) && 
        -this.arrayEat[iEat].x*sina+this.arrayEat[iEat].y*cosa <= Math.max(ym + this.arrayEat[iEat].r + this.arrayPlayer[iPlayer].r, ym - this.arrayEat[iEat].r - this.arrayPlayer[iPlayer].r)) {
            console.log('*');
            return this.eating(iPlayer, iEat);
        } else {
            return false;
        } 
    }

}