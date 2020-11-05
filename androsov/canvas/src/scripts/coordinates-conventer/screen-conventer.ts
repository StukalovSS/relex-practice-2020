export class Point {
    constructor(public x: number, public y: number) {}
}

/**
 * Класс конвертирует реальные точки в экранные и обратно
 */
export class ScreenConventor {
    constructor(public x: number,public y: number, public w: number,public h: number, public screenW: number, public screenH: number) {}

    convertRealPointToScreen(p: Point): Point {
        const px = (p.x - this.x) * this.screenW / this.w;
        const py = (this.y - p.y) * this.screenH / this.h;
        return new Point(px, py);
    }

    convertScreenpointToReal(p: Point): Point {
        const px = p.x * this.w / this.screenW + this.x;
        const py = y - p.y * this.h / this.screenH;
        return new Point(px, py);
    }
}