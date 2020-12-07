/**
 * Логика поедания между обновлением координаты игрока 
 * во всем прямоугольнике ABCD
 */
export class Area {
 constructor(playerPosition, playerR, otherR, a) {
   this.A = {
    x: playerPosition.x,
    y: playerPosition.y + playerR + otherR
   };

   this.B = {
    x: playerPosition.x + a.length,
    y: playerPosition.y + playerR + otherR
   };

   this.C = {
    x: playerPosition.x + a.length,
    y: playerPosition.y - playerR - otherR
   }

   this.D = {
    x: playerPosition.x,
    y: playerPosition.y - playerR - otherR
   }
 };

 /**
  * Проверка точки на принадлежность прямоугольнику ABCD
  * в случае принадлежности возвращает true 
  * в противном случае false
  * @param {object} point точка
  */
 isPointInArea(point) {
   return point.x >= Math.min(this.B.x, this.D.x) && point.x <= Math.max(this.B.x, this.D.x) 
          && point.y >= Math.min(this.A.y, this.C.y) && point.y <= Math.max(this.A.y, this.C.y);
 }
}