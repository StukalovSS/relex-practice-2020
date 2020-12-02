import { Circle } from '../geometry-objects/circle.js';
import { random } from '../utils/random.js';

/**
 * Единичная порция еды.
 */
export class Food extends Circle {
  constructor(x, y, fieldWidth, fieldHeight) {
    super(x, y, 10);
    this._fieldWidth = fieldWidth;
    this._fieldHeight = fieldHeight;
  }

  /**
   * Поедание еды.
   * При поедании объект изменяет свое положение.
   */
  isEated() {
    this.x = random(-this._fieldWidth / 2, this._fieldWidth / 2);
    this.y = random(-this._fieldHeight / 2, this._fieldHeight / 2);
  }
}
