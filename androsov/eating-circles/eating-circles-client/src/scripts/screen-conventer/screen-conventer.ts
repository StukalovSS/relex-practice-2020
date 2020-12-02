export class Point {
  constructor(public x: number, public y: number) { }
}

/**
 * Класс конвертирует реальные точки в экранные и обратно
 */
export class ScreenConventor {
  private width: number;
  private height: number;
  private x = 0;
  private y = 0;
  private x0: number;
  private y0: number;

  constructor() {
    this.width = document.body.clientWidth;
    this.height = document.documentElement.clientHeight - 9;
    this.x0 = this.width / 2;
    this.y0 = this.height / 2;
  }

  set centre(p: Point) {
    this.x = p.x;
    this.y = p.y;
  }

  /**
   * Конвертирует экранные точки в реальные
   * @param p 
   *  Экранная точка
   */
  s2r(p: Point): Point {
    return new Point(p.x - this.x0 + this.x, p.y - this.y0 + this.y);
  }

  /**
   * Конвертирует реальные точки в экранные.
   * @param p 
   *  Реальная точка
   */
  r2s(p: Point): Point {
    return new Point(p.x + this.x0 - this.x, this.y0 - p.y + this.y);
  }
}