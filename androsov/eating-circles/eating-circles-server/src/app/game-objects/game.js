import { Food } from './food.js';
import { Player } from './player.js';
import { random } from '../utils/random';
import { PlayerNotExisrError } from './game-errors.js';

/**
 * Игра "кушающие кружочки".
 */
export class Game {
  constructor(fieldWidth, fieldHeight) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.players = new Map();
    this.playersResponceTime = new Map();
    this.food = [];
    for (let i = 0; i < 1000; i++) {
      this.food.push(new Food(random(-fieldWidth / 2, fieldWidth / 2), random(-fieldHeight / 2, fieldHeight / 2),
        fieldWidth, fieldHeight));
    }
    this.playerId = 0;
  }

  /**
   * Создать нового игрока с уникальным id.
   */
  createNewPlayer() {
    const id = this.createNewPlayerId();
    let player = new Player(random(-this.fieldWidth / 2, this.fieldWidth / 2), random(-this.fieldHeight / 2, this.fieldHeight / 2),
      this.fieldWidth, this.fieldHeight, id);
    this.players.set(id, player);
    this.playersResponceTime.set(id, Date.now());
    return this.players.get(id);
  }

  /**
   * Обновить состояние всей игры.
   * 
   * Изменить положение игрока. Изменить положение еды, если игрок ее коснулся. Удалить других игроков, если они меньше текущего и 
   * текущий игрок к ним прикоснулся.
   * @param {number} id Уникальный id игрока, который будет совершать перемещение.
   * @param {number} dx Изменение положения игрока по оси OX.
   * @param {number} dy Изменение положения игрока по оси OY.
   */
  updateState(id, dx, dy) {
    const player = this.getPlayer(id);
    player.update(dx, dy, Date.now() - this.playersResponceTime.get(id));
    this.playersResponceTime.set(id, Date.now());
    for (let el of this.food) {
      player.eat(el);
    }

    for (let [id, enemy] of Array.from(this.players.entries())) {
      if (player.eat(enemy)) {
        this.players.delete(id);
      }
    }
  }

  /**
   * Получить игрока по его id.
   * @param {number} id Уникальный id игрока.
   */
  getPlayer(id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    }
    throw PlayerNotExisrError('Player with this id does not exist');
  }

  /**
   * Создать новый id для игрока
   */
  createNewPlayerId() {
    this.playerId += 1;
    return this.playerId;
  }
}