import { v4 as uuidv4 } from 'uuid';
import express from 'express';
const app = express();
import { GameState } from './game-objects/GameState';

app.use(function(req, res, next) {
  var origin = 'http://127.0.0.1:3000';
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const WIDTH = 2560,
  HEIGHT = 1440,
  R_FOOD = 20,
  R_PLAYER = 36;

const COLORS = ['#ADFF2F', '#7FFF00', '#32CD32', '#3CB371', '#008000', '#9ACD32', '#556B2F'];

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