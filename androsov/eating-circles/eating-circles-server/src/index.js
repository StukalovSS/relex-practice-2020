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
  const curPlayer = game.createNewPlayer();
  response.send(JSON.stringify({
    player: {
      x: curPlayer.x,
      y: curPlayer.y,
      r: curPlayer.r,
      id: curPlayer.id
    },
    players: Array.from(game.players.values()).filter(player => player !== curPlayer)
      .map(player => {
        return {
          x: player.x,
          y: player.y,
          r: player.r
        };
      }),
    food: game.food.filter(obj => Math.sqrt((obj.x - curPlayer.x) ** 2 + (obj.y - curPlayer.y) ** 2) < 600
    ).map(obj => {
      return {
        x: obj.x,
        y: obj.y,
        r: obj.r
      };
    })
  }));
});

app.get("/get_state", (request, response) => {
  try {
    game.updateState(+request.query.id, +request.query.x, +request.query.y);
    const curPlayer = game.getPlayer(+request.query.id);

    response.send(JSON.stringify({
      player: {
        x: curPlayer.x,
        y: curPlayer.y,
        r: curPlayer.r
      },
      players: Array.from(game.players.values()).filter(player => player !== curPlayer)
        .map(player => {
          return {
            x: player.x,
            y: player.y,
            r: player.r
          };
        }),
      food: game.food.filter(obj => Math.sqrt((obj.x - curPlayer.x) ** 2 + (obj.y - curPlayer.y) ** 2) < 600)
        .map(obj => {
          return {
            x: obj.x,
            y: obj.y,
            r: obj.r
          };
        })
    }));
  } catch (_) {
    response.send('error');
  }
});
