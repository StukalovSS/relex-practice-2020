import { Food } from './food.js';
import { Player } from './player.js';
import { random } from '../utils/random';
import { PlayerNotExisrError } from './game-errors.js';

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

  createNewPlayer() {
    const id = this.createNewPlayerId();
    let player = new Player(random(-this.fieldWidth / 2, this.fieldWidth / 2), random(-this.fieldHeight / 2, this.fieldHeight / 2),
      this.fieldWidth, this.fieldHeight, id);
    this.players.set(id, player);
    this.playersResponceTime.set(id, Date.now());
    return this.players.get(id);
  }

  /**
 * Обновлить состояние игры в соответствии с отправленными с клиента данными.
 * @param {any} request Запрос с игрового клиента на сервер. Должен содержать информацию об id игрока, и координатами x y 
 * в сторону которых он будет перемещаться.
 * @return Игрок, принадлежащий клиенту.
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