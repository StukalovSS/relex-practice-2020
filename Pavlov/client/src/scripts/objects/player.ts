import { ICircle } from '../ICircle';

export class Player implements ICircle {
  constructor(public x: number, public y: number,
  public r: number, public s: any,
  public color: string, private name: string,
  public eaten: boolean) { }

  public show() {
    const colorPlayer = this.s.color(this.color);
    this.s.fill(colorPlayer);
    this.s.noStroke();
    this.s.ellipse(this.x, this.y, this.r * 2, this.r * 2);

    this.s.textSize(this.r / 2);
    const colorName = this.s.color('#12a212');
    this.s.fill(colorName);
    this.s.textAlign(this.s.CENTER, this.s.CENTER);
    this.s.text(this.name, this.x, this.y);
  }
}