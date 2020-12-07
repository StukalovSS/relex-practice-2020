const Rectangle = require('../geometry-objects/rectangle');
const Vector = require('../geometry-objects/vector');

/**
 * Игрок.
 */
module.exports = class Player{
    
    constructor (x, y, r, name, living, color){
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;
        this.r = r;
        this.name = name.substr(0,8); // не более 8 символов в нике игрока
        this.living = living;
    }


    /**
     * Обновление координат игрока
     * @param targetX Целевая координата x.
     * @param targetY Целевая координата y.
     * @param minX Минимальное значение x.
     * @param minY Минимальное значение y.
     * @param maxX Максимальное значение x.
     * @param maxY Максимальное значение y.
     */
    newСoordinates(targetX, targetY, minX, minY, maxX, maxY){
        let curVector = new Vector(targetX, targetY);
        curVector = curVector.normalize();
        curVector = curVector.mult(3);
        
        if (this.living) {
            curVector = curVector.mult(64/(this.r*4/3));
        } else {
            curVector = curVector.mult(1);
        }
            
        if ((this.x + curVector.x + this.r) > minX && 
            (this.x + curVector.x + this.r) < maxX){
                this.prevX = this.x;
                this.x += curVector.x;
        } 
        if ((this.y + curVector.y + this.r) > minY && 
            (this.y + curVector.y + this.r) < maxY){
                this.prevY = this.y;
                this.y += curVector.y;
        }
    }

    /**
     * Поедание игроком корма или другого игрока.
     * @param iObj Корм или другой игрок.
     * 
     * Возвращает true/false - объект съеден/не съеден игроком.
     */
    eat(iObj) {
        if ((this.eatNear(iObj) || this.eatInSegment(iObj)) && iObj.r < this.r){
            const sum = Math.PI*Math.pow(this.r, 2) + Math.PI*Math.pow(iObj.r, 2);
            this.r = Math.sqrt(sum/Math.PI);
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Поедание объекта рядом с игроком.
     * @param iObj Корм или другой игрок.
     * 
     * Возвращает true/false - объект рядом съеден/не съеден игроком.
     */
    eatNear(iObj) {
        const d = Math.sqrt( Math.pow((this.x - iObj.x),2) + Math.pow((this.y - iObj.y),2) );
        return d < Math.max(this.r, iObj.r);
    }



    /**
     * Поедание объекта в отрезке перемещения.
     * @param iObj Корм или другой игрок.
     * 
     * Возвращает true/false - объект в отрезке перемещения съеден/не съеден игроком.
     */
    eatInSegment(iObj) {
        const curVector = new Vector(this.x - this.prevX, this.y - this.prevY);
        const d = Math.sqrt(curVector.x*curVector.x + curVector.y*curVector.y);
        const cosa = curVector.x/d;
        const sina = curVector.y/d;
        const xm = this.x*cosa + this.y * sina;
        const ym = -this.x*sina + this.y * cosa;

        const Reg = new Rectangle(d, 2*(iObj.r + this.r), { x: xm, y: ym + iObj.r + this.r} )
        if (Reg.isPointInRectangle({ 
            x: iObj.x*cosa + iObj.y*sina,
            y: -iObj.x*sina + iObj.y*cosa
        })){
            return true;
        }
        else {
            return false;
        }
    }
}