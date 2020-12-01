import { Game } from './app/game-objects/game.js';
import express from 'express';

/**
   * Разрешить доступ к игре всем клиентам.
   * @param {any} require Запрос с клиента. 
   * @param {any} response Ответ сервера.
   * @param {any} next Функция, которая передает управление приложением дальше по цепочке.
 */
function allowOrigin(require, response, next) {
  response.header('Access-Control-Allow-Origin', require.headers.origin);
  response.header('Access-Control-Allow-Origin-Methods', 'GET');
  response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  next();
}

const game = new Game(4000, 4000);
const app = express();

app.use(allowOrigin);
app.listen(3000, function () {
  console.log("Start server");
});

app.get("/new_player", (_request, response) => {
  const player = game.createNewPlayer();
  response.send(JSON.stringify({
    player: player,
    players: Array.from(game.players.values()).filter(player => player !== player)
      .map(obj => {
        obj.id = undefined;
        obj.fieldHeight = undefined;
        obj.fieldWidth = undefined;
        return obj;
      }),
    food: game.food.filter(obj => Math.sqrt((obj.x - player.x) ** 2 + (obj.y - player.y) ** 2) < 600
    ).map(obj => {
      obj.fieldHeight = undefined;
      obj.fieldWidth = undefined;
      return obj;
    })
  }));
});

app.get("/get_state", (request, response) => {
  try {
    game.updateState(+request.query.id, +request.query.x, +request.query.y);
    const player = game.getPlayer(+request.query.id)
    response.send(JSON.stringify({
      player: {
        x: player.x,
        y: player.y,
        r: player.r
      },
      players: Array.from(game.players.values()).filter(player => player !== player)
        .map(obj => {
          obj.id = undefined;
          obj.fieldHeight = undefined;
          obj.fieldWidth = undefined;
          return obj;
        }),
      food: game.food.filter(obj => Math.sqrt((obj.x - player.x) ** 2 + (obj.y - player.y) ** 2) < 600
      ).map(obj => {
        obj.fieldHeight = undefined;
        obj.fieldWidth = undefined;
        return obj;
      })
    }));
  } catch (_) {
    response.send('error');
  }
});
