import '../style/style.css';
const p5 = require('../../node_modules/p5/lib/p5');
const http = require('http');
import { Food } from './objects/food';
import { Player } from './objects/player';

let code: string,
  players: any = [],
  food: any = [],

  serverPlayers: any = [],
  serverFood: any = [],
  indCurrPlayer: number,
  zoom: number = 1,
  newZoom = zoom,
  w: number, h: number,
  prevR: number;

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET'
};

let namePlayer: string;
let serverData: any;

/**
 * Обновление координат игрока.
 * @param mx положение курсора по оси OX
 * @param my положение курсора по оси OY
 */
function updateCoordPlayer(mx: number, my: number) {
  options.path = `/getState?code=${code}&x=${mx}&y=${my}`;
  let req = http.request(options, (res: any) => {
    res.on('data', (body: any) => {
      serverData = JSON.parse(new TextDecoder("utf-8").decode(body));
      indCurrPlayer = serverData.currentPlayerIndex;
      serverFood = serverData.playerState.food;
      serverPlayers = serverData.playerState.players;
    });
    res.on('end', () => { });
  });
  req.end();
}

const sketch = (s: typeof p5) => {
  /**
   * Получение предварительных данных для отрисовки.
   */
  s.preload = () => {
    s.loadJSON(`http://127.0.0.1:3000/createPlayer?name=${namePlayer}`, (data: any) => {
      code = data.codePlayer;
      w = data.w;
      h = data.h;
      s.loadJSON(`http://127.0.0.1:3000/getState?code=${code}&x=0&y=0`, (d: any) => {
        indCurrPlayer = d.currentPlayerIndex;
        serverFood = d.playerState.food;
        serverPlayers = d.playerState.players;
      })
    });
  }
  s.setup = () => {
    s.createCanvas(w, h); 
    s.background(255);
  }
  s.draw = () => {
    s.background(255);

    food = [];
    for (let i = 0; i < serverFood.length; i++) {
      food[i] = new Food(serverFood[i].x, serverFood[i].y, serverFood[i].r, s, serverFood[i].color);
    }

    players = [];
    for (let i = 0; i < serverPlayers.length; i++) {
      players[i] = new Player
        (serverPlayers[i].x,
          serverPlayers[i].y,
          serverPlayers[i].r,
          s,
          serverPlayers[i].color,
          serverPlayers[i].name,
          serverPlayers[i].eaten
        );
    }

    s.translate(s.width / 2, s.height / 2);

    if (prevR != serverPlayers[indCurrPlayer].r) {
      newZoom -= 0.0065; 
    }
    zoom = s.lerp(zoom, newZoom, 0.1);
    s.scale(zoom);

    s.translate(-serverPlayers[indCurrPlayer].x, -serverPlayers[indCurrPlayer].y);

    for (let i = -s.width * 2; i < s.width * 2; i = i + 50) {
      s.line(i, -s.height * 2, i, s.height * 2);
      s.stroke(126);
    }
    for (let i = -s.height * 2; i < s.height * 2; i = i + 50) {
      s.line(-s.width * 2, i, s.width * 2, i);
      s.stroke(126);
    }

    for (let i = 0; i < food.length; i++) {
      food[i].show();
    }

    for (let i = players.length - 1; i >= 0; i--) {
      if (!players[i].eaten) {
        players[i].show();
      }
    }

    prevR = serverPlayers[indCurrPlayer].r;
    updateCoordPlayer(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
  }
}


/**
 * Создание модального окна для ввода имени игрока
 */
const modal = document.createElement('div');
document.body.appendChild(modal);
modal.classList.add('modal-name');

const modalInner = document.createElement('div');
modal.appendChild(modalInner);
modalInner.classList.add('modal-name__inner');

const title = document.createElement('h2');
modalInner.appendChild(title);
title.classList.add('modal-name__title');
title.innerHTML = 'Sign in';

const nameField = document.createElement('input');
modalInner.appendChild(nameField);
nameField.classList.add('modal-name__input');
nameField.setAttribute('placeholder', 'Your name');

const setNameBtn = document.createElement('button');
modalInner.appendChild(setNameBtn);
setNameBtn.classList.add('modal-name__btn');
setNameBtn.innerHTML = 'Lets play!';

setNameBtn.addEventListener('click', () => {
  if (nameField.value) {
    namePlayer = nameField.value;
    modal.remove();
    const sketchInst = new p5(sketch);
  }
});