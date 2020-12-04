import { v4 as uuidv4 } from 'uuid';
import express from 'express';
const app = express();
import { GameState } from './gameplay-elements/GameState';

app.use(function(req, res, next) {
  var origin = 'http://127.0.0.1:3000';
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const WIDTH = 2560,
  HEIGHT = 1440,
  RADIUSFOOD = 20,
  RADIUSPLAYER = 36;

const COLORS = ['#ADFF2F', '#7FFF00', '#32CD32', '#3CB371', '#008000', '#9ACD32', '#556B2F'];

const gameState = new GameState(WIDTH, HEIGHT, COLORS);
gameState.init(RADIUSFOOD);
setInterval(() => gameState.updateState(), 15);

app.get('/createPlayer', (req, res) => {
    let keyPlayer = uuidv4();
    gameState.addPlayer(keyPlayer, req.query.name, RADIUSPLAYER);
  
    res.send(JSON.stringify({ "keyPlayer": keyPlayer, "w": WIDTH, "h": HEIGHT }));
});

app.get('/getState', (req, res) => {
  if (req.query.key) {
    let keyPlayer = req.query.key;
      gameState.addTarget(+req.query.x, +req.query.y, keyPlayer);
      res.send(JSON.stringify({
        "playerState": { "food": gameState.food, "players": gameState.players },
        "currentPlayerIndex": gameState.map.get(keyPlayer)
      }));
  }
  else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен');
});