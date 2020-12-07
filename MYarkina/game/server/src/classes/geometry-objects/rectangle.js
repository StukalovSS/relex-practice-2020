/**
 * Прямоугольник.
 * A - левая верхняя точка.
 * B - правая верхняя точка.
 * C - правая нижняя точка.
 * D - левая нижняя точка.
 */
module.exports = class Rectangle{

    constructor(width, height, leftTopPoint){
        this.A = leftTopPoint;
        this.B = {
            x: leftTopPoint + width,
            y: leftTopPoint.y
        };
        this.C = {
            x: this.B.x,
            y: leftTopPoint.y - height 
        };
        this.D = {
            x: this.A.x,
            y: this.C.y
        };
    }

    /**
     * Проверяет принадлежность точки прямоугольнику.
     * Возвращает true/false - принадлежит/не принадлежит.
     * @param point Точка, которую необходимо проверить на принадлежность прямоугольнику.
     */
    isPointInRectangle(point){
        if (point.x >= Math.min(this.B.x, this.D.x) && 
        point.x <= Math.max(this.B.x, this.D.x) &&
        point.y >= Math.min(this.A.y, this.C.y) &&
        point.y <= Math.min(this.A.y, this.C.y) )
        {
            return true;
        }
        else return false;
    }
}