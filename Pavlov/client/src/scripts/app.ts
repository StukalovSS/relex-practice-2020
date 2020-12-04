import '../style/style.css';
import { Food } from './objects/food';
import { Player } from './objects/player';

const p5 = require('../../node_modules/p5/lib/p5');
const http = require('http');


let key: string,
  players: any = [],
  food: any = [],

  ServerPlayers: any = [],
  SFood: any = [],

  currentID: number,
  precRadius: number,

  zoom: number = 1,
  newZoom = zoom,
  w: number,
  h: number;

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET'
};

let namePlayer: string;
let SData: any;

/**
 * Обновление координат игрока.
 * @param mx положение курсора по оси OX
 * @param my положение курсора по оси OY
 */
function updatePositionPlayer(mx: number, my: number) {
  options.path = `/getState?key=${key}&x=${mx}&y=${my}`;
  
  let req = http.request(options, (res: any) => {
    res.on('data', (body: any) => {
      SData = JSON.parse(new TextDecoder("utf-8").decode(body));

      currentID = SData.currentPlayerIndex;
      SFood = SData.playerState.food;
      ServerPlayers = SData.playerState.players;
    });
    res.on('end', () => { });
  });
  req.end();
}

const sketch = (s: typeof p5) => {
  /**
   * Получение данных для первоначального отображения.
   */
  s.preload = () => {
    s.loadJSON(`http://127.0.0.1:3000/createPlayer?name=${namePlayer}`, (data: any) => {
      key = data.keyPlayer;
      w = data.w;
      h = data.h;

      s.loadJSON(`http://127.0.0.1:3000/getState?key=${key}&x=0&y=0`, (data: any) => {
        currentID = data.currentPlayerIndex;
        SFood = data.playerState.food;
        ServerPlayers = data.playerState.players;
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
    for (let i = 0; i < SFood.length; i++) {
      food[i] = new Food(SFood[i].x, SFood[i].y, SFood[i].r, s, SFood[i].color);
    }

    players = [];
    for (let i = 0; i < ServerPlayers.length; i++) {
      players[i] = new Player
        (ServerPlayers[i].x,
          ServerPlayers[i].y,
          ServerPlayers[i].r,
          s,
          ServerPlayers[i].color,
          ServerPlayers[i].name,
          ServerPlayers[i].eaten
        );
    }

    s.translate(s.width / 2, s.height / 2);

    if (precRadius != ServerPlayers[currentID].r) {
      newZoom -= 0.01; 
    }
    zoom = s.lerp(zoom, newZoom, 0.1);
    s.scale(zoom);

    s.translate(-ServerPlayers[currentID].x, -ServerPlayers[currentID].y);

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

    precRadius = ServerPlayers[currentID].r;
    updatePositionPlayer(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
  }
}


/**
 * Создание модального окна для ввода имени игрока
 */
const modal = document.createElement('div');
document.body.appendChild(modal);
modal.classList.add('modal');

const modalInner = document.createElement('div');
modal.appendChild(modalInner);
modalInner.classList.add('modal__inner');

const title = document.createElement('h2');
modalInner.appendChild(title);
title.classList.add('modal__title');
title.innerHTML = 'Sign in';

const nameField = document.createElement('input');
modalInner.appendChild(nameField);
nameField.classList.add('modal__input');
nameField.setAttribute('placeholder', 'Your name');

const setNamebutton = document.createElement('button');
modalInner.appendChild(setNamebutton);
setNamebutton.classList.add('modal__button');
setNamebutton.innerHTML = 'gogogo!';

setNamebutton.addEventListener('click', () => {
  if (nameField.value) {
    namePlayer = nameField.value;
    modal.remove();
    const sketchInst = new p5(sketch);
  }
});