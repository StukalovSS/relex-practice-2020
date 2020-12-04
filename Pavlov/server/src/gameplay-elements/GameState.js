import { Player } from './player.js'
import { Circle } from './circle.js';
import { Vector } from '../enviroment-elements/vector';

/**
 * Класс отвечающий за текущее состояние игры.
 */
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
  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Возвращает случайный цвет из массива COLORS.
   */
  getColor() {
    return this.colors[Math.floor(this.getRandom(0,this.colors.length))];
  }

  /**
   * Инициализирует координаты корма на поле.
   * @param {number} rFood радиус корма
   */
  init(rFood) {
    for (let i = 0; i < 100; i++) {
      this.food.push(new Circle(this.getRandom(-this.width + rFood, this.width - rFood), this.getRandom(-this.height + rFood, this.height - rFood), rFood, this.getColor()));
    }
  }

  /**
   * Добавляет нового игрока на поле.
   * @param {string} keyPlayer код игрока
   * @param {string} namePlayer имя игрока
   * @param {number} radiusPlayer радиус игрока
   */
  addPlayer(keyPlayer, namePlayer, radiusPlayer) {
    this.map.set(keyPlayer, this.index_player);

    let x0 = this.getRandom(-this.width + radiusPlayer, this.width - radiusPlayer);
    let y0 = this.getRandom(-this.height + radiusPlayer, this.height - radiusPlayer);

    this.players.push(new Player(x0, y0, radiusPlayer, this.getColor(), namePlayer));
    this.targets.push(new Vector(x0, y0));
    this.index_player++;
  }

  /**
   * Добавляет целевые координаты игрока.
   * @param {number} x1 целевая координата x
   * @param {number} y1 целевая координата y
   * @param {string} key код игрока
   */
  addTarget(x1, y1, key) {
    this.targets[this.map.get(key)] = new Vector(x1, y1);
  }

  /**
   * Обновляет состояние игры.
   * Реализует обновление координат игроков, поедание корма и игроков.
   */
  updateState() {
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i].isEaten) {
        this.players[i].update(this.targets[i].x, this.targets[i].y, this.width, this.height);
      }

      this.food.forEach((foodItem, j) => {
        if (!this.players[i].isEaten) {
          if (this.players[i].eats(foodItem, 'food')) {
            this.food.splice(j, 1);
          }
        }
      });

      this.players.forEach((otheRadiusPlayer) => {
        if (!otheRadiusPlayer.isEaten) {
          if (this.players[i].eats(otheRadiusPlayer, 'player')) {
            otheRadiusPlayer.isEaten = true;
          }
        }
      });
    }
  }
}