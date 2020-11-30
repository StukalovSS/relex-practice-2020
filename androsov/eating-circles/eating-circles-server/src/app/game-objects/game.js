import express from 'express';
import { Food } from './food.js';
import { Player } from './player.js';
import { random } from '../utils/random';

export class Game {
  constructor(fieldWidth, fieldHeight) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.players = new Map();
    this.responceTime = new Map();
    this.food = [];
    for (let i = 0; i < 1000; i++) {
      this.food.push(new Food(random(-fieldWidth / 2, fieldWidth / 2), random(-fieldHeight / 2, fieldHeight / 2),
        fieldWidth, fieldHeight));
    }
    this.playerId = 0;
  }

  /**
   * Запустить игру.
   */
  start() {
    const app = express();
    app.use(this.allowOrigin);
    app.get("/get_state", (request, responce) => {
      this.reactOnClientGetStateRequest(request, responce);
    });
    app.get("/new_player", (_request, response) => {
      this.sendNewPlayerToClient(response);
    });

    app.listen(3000, function() {
      console.log("Start server");
    });
  }

  /**
   * Создание и отправка нового игрока на клиент.
   * @param {any} response Объект ответа с сервера.
   */
  sendNewPlayerToClient(response) {
    const id = this.createNewPlayerId();
    let player = new Player(random(-this.fieldWidth / 2, this.fieldWidth / 2), random(-this.fieldHeight / 2, this.fieldHeight / 2),
      this.fieldWidth, this.fieldHeight, id);
    this.players.set(id, player);
    this.responceTime.set(id, Date.now());

    response.send(JSON.stringify({
      player: this.players.get(id),
      players: Array.from(this.players.values()).filter(obj => obj.id !== player.id)
        .map(obj => {
          obj.id = undefined;
          obj.fieldHeight = undefined;
          obj.fieldWidth = undefined;
          return obj;
        }),
      food: this.food.filter(obj => Math.sqrt((obj.x - player.x) ** 2 + (obj.y - player.y) ** 2) < 600
      ).map(obj => {
        obj.fieldHeight = undefined;
        obj.fieldWidth = undefined;
        return obj;
      })
    }));
  }

    /**
   * Обновлить состояние игры в соответствии с отправленными с клиента данными.
   * @param {any} request Запрос с игрового клиента на сервер. Должен содержать информацию об id игрока, и координатами x y 
   * в сторону которых он будет перемещаться.
   * @return Игрок, принадлежащий клиенту.
   */
  updateState(request) {
    const player = this.players.get(+request.query.id);
    player.update(+request.query.x, +request.query.y, Date.now() - this.responceTime.get(+request.query.id));
    this.responceTime.set(+request.query.id, Date.now());
    for (let el of this.food) {
      player.eat(el);
    }

    for (let [id, enemy] of Array.from(this.players.entries())) {
      if (player.eat(enemy)) {
        this.players.delete(id);
      }
    }
    return player;
  }

  /**
   * Получить с клиента данные о его перемещении и отправить ему данные он новом состоянии игры.ы
   * @param {any} request Запрос с игрового клиента клиента на сервер. Должен содержать информацию об id игрока, и координатами x y 
   * в сторону которых он будет перемещаться.
   * @param {any} response Ответ сервера клиенту.
   */
  reactOnClientGetStateRequest(request, response) {
    const player = this.updateState(request);
    this.returnStateToClient(player, response);
  }

  /**
   * Вернуть клиенту информацию о состоянии игры.
   * @param {Player} player Игрок, отправивший запрос.
   * @param {any} response Объект ответа сервера.
   */
  returnStateToClient(player, response) {
    let answer = JSON.stringify({
      player: {
        x: player.x,
        y: player.y,
        r: player.r
      },
      players: Array.from(this.players.values()).filter(obj => obj.id !== player.id)
        .map(obj => {
          obj.id = undefined;
          obj.fieldHeight = undefined;
          obj.fieldWidth = undefined;
          return obj;
        }),
      food: this.food
        .filter(obj => Math.sqrt((obj.x - player.x) ** 2 + (obj.y - player.y) ** 2) < 600)
        .map(obj => {
          obj.fieldHeight = undefined;
          obj.fieldWidth = undefined;
          return obj;
        })
    });

    response.send(answer);
  }

  /**
   * Разрешить доступ к игре всем клиентам.
   * @param {any} require Запрос с клиента. 
   * @param {any} response Ответ сервера.
   * @param {any} next Функция, которая передает управление приложением дальше по цепочке.
   */
  allowOrigin(require, response, next) {
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
  }

  /**
   * Создать новый id для игрока
   */
  createNewPlayerId() {
    this.playerId += 1;
    return this.playerId;
  }
}