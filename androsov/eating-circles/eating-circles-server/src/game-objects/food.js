import { Circle } from '../geometry-objects/circle.js';
import { random } from '../utils/random.js';

export class Food extends Circle {
  constructor() {
      super(random(- 1990, 1990), 
          random(- 1990, 1990) , 10);
  }

  /**
   * Поедание еды.
   * При поедании объект изменяет свое полдожение.
   */
  isEated() {
      this.x = random(-1990, 1990);
      this.y = random(-1990, 1990);
  }
}
