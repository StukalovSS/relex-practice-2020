import { ICircle } from '../icircle';

export class Food implements ICircle {
  constructor(public x: number, public y: number, public r: number, public s: any, public color: string) { }

  public show() {
    let c = this.s.color(this.color);
    this.s.fill(c);
    this.s.noStroke();
    this.s.ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}