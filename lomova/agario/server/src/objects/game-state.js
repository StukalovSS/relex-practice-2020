import { Player } from './player.js'
import { Circle } from './circle.js';
import { Vector } from './vector.js';

export class GameState {
  

  constructor(width, height, colors) {
    this.width = width;
    this.height = height;
    this.colors = colors;
    this.food = [];
    this.players = [];
    this.index_player = 0;
    this.targets = [];
    this.map = new Map();
  }

  /**
   * Возвращает случайное число из интервала (min; max).
   * @param {number} min наименьшее возможное число
   * @param {number} max наибольшое возможное число
   */
  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Возвращает случайный цвет из массива colors.
   */
  getColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  /**
   * Инициализирует координаты корма на поле.
   * @param {number} rFood радиус корма
   */
  init(rFood) {
    for (let i = 0; i < 100; i++) {
      this.food.push(new Circle(this.random(-this.width + rFood, this.width - rFood), this.random(-this.height + rFood, this.height - rFood), rFood, this.getColor()));
    }
  }

  /**
   * Добавляет нового игрока на поле.
   * @param {string} codePlayer код игрока
   * @param {string} namePlayer имя игрока
   * @param {number} rPlayer радиус игрока
   */
  addPlayer(codePlayer, namePlayer, rPlayer) {
    this.map.set(codePlayer, this.index_player);

    let x_0 = this.random(-this.width + rPlayer, this.width - rPlayer),
      y_0 = this.random(-this.height + rPlayer, this.height - rPlayer);

    this.players.push(new Player(x_0, y_0, rPlayer, this.getColor(), namePlayer));
    this.targets.push(new Vector(x_0, y_0));

    this.index_player++;
  }

  /**
   * Добавляет целевые координаты игрока.
   * @param {number} x_1 целевая координата x
   * @param {number} y_1 целевая координата y
   * @param {string} code код игрока
   */
  addTarget(x_1, y_1, code) {
    this.targets[this.map.get(code)] = new Vector(x_1, y_1);
  }

  /**
   * Обновляет состояние игры.
   * Реализует обновление координат игроков, поедание корма и игроков.
   */
  updateState() {
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i].eaten) {
        this.players[i].update(this.targets[i].x, this.targets[i].y, this.width, this.height);
      }

      this.food.forEach((foodItem, j) => {
        if (!this.players[i].eaten) {
          if (this.players[i].eats(foodItem, 'food')) {
            this.food.splice(j, 1);
          }
        }
      });

      this.players.forEach((otherPlayer) => {
        if (!otherPlayer.eaten) {
          if (this.players[i].eats(otherPlayer, 'player')) {
            otherPlayer.eaten = true;
          }
        }
      });
    }
  }
}