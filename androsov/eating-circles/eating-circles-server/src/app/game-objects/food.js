import { Circle } from '../geometry-objects/circle.js';
import { random } from '../utils/random.js';

/**
 * Единичная порция еды.
 */
export class Food extends Circle {
  constructor(x, y, fieldWidth, fieldHeight) {
      super(x, y , 10);
      this.fieldWidth = fieldWidth;
      this.fieldHeight = fieldHeight;
  }

  /**
   * Поедание еды.
   * При поедании объект изменяет свое положение.
   */
  isEated() {
      this.x = random(-this.fieldWidth / 2, this.fieldWidth / 2);
      this.y = random(-this.fieldHeight / 2, this.fieldHeight / 2);
  }
}
