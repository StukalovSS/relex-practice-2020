/**
 * Прямоугольник, часть области поедания.
 */
export class Rectangle {
 constructor(playerCoord, playerR, otherR, a) {
   this.A = {
    x: playerCoord.x,
    y: playerCoord.y + playerR + otherR
   };

   this.B = {
    x: playerCoord.x + a.length,
    y: playerCoord.y + playerR + otherR
   };

   this.C = {
    x: playerCoord.x + a.length,
    y: playerCoord.y - playerR - otherR
   }

   this.D = {
    x: playerCoord.x,
    y: playerCoord.y - playerR - otherR
   }
 };

 /**
  * Проверка точки на принадлежность прямоугольнику.
  * Возвращает true, если точка принадлежит прямоугольнику, иначе - false.
  * @param {object} point точка
  */
 isPointInRectangle(point) {
   return point.x >= Math.min(this.B.x, this.D.x) && point.x <= Math.max(this.B.x, this.D.x) 
          && point.y >= Math.min(this.A.y, this.C.y) && point.y <= Math.max(this.A.y, this.C.y);
 }
}