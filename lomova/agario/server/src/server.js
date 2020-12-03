import { v4 as uuidv4 } from 'uuid';
import express from 'express';
const app = express();
import { GameState } from './game-objects/game-state';

app.use(function(req, res, next) {
  var origin = 'http://127.0.0.1:3000';
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const WIDTH = 2000,
  HEIGHT = 950,
  R_FOOD = 20,
  R_PLAYER = 36;

const COLORS = ['#d91a1a', '#1ad93a', '#1a27d9', '#d9cc1a', '#29cae3', '#a529e3', '#e37929'];

const gameState = new GameState(WIDTH, HEIGHT, COLORS);
gameState.init(R_FOOD);
setInterval(() => gameState.updateState(), 15);

app.get('/createPlayer', (req, res) => {
    let codePlayer = uuidv4();
    gameState.addPlayer(codePlayer, req.query.name, R_PLAYER);
  
    res.send(JSON.stringify({ "codePlayer": codePlayer, "w": WIDTH, "h": HEIGHT }));
});

app.get('/getState', (req, res) => {
  if (req.query.code) {
    let codePlayer = req.query.code;
      gameState.addTarget(+req.query.x, +req.query.y, codePlayer);
      res.send(JSON.stringify({
        "playerState": { "food": gameState.food, "players": gameState.players },
        "currentPlayerIndex": gameState.map.get(codePlayer)
      }));
  }
  else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен');
});