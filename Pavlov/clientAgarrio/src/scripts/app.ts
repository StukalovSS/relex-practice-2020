import '../style/style.css';
import { Food } from './objects/food';
import { Player } from './objects/player';

const p5 = require('../../node_modules/p5/lib/p5');
const http = require('http');


let key: string,
  players: any = [],
  food: any = [],

  ServerPlayers: any = [],
  ServerFood: any = [],

  zoom: number = 1,
  newZoom = zoom,

  w: number,
  h: number,

  currentID: number,
  precRadius: number;



const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET'
};

let namePlayer: string;
let ServerData: any;

/**
 * Обновление координат игрока.
 * @param mx координата OX курсора
 * @param my координата OУ курсора
 */
function updatePositionPlayer(mx: number, my: number) {
  options.path = `/getState?key=${key}&x=${mx}&y=${my}`;
  
  let req = http.request(options, (res: any) => {
    res.on('data', (body: any) => {
      ServerData = JSON.parse(new TextDecoder("utf-8").decode(body));

      currentID = ServerData.currentPlayerIndex;
      ServerFood = ServerData.playerState.food;
      ServerPlayers = ServerData.playerState.players;
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
        ServerFood = data.playerState.food;
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

    // заполнение едой
    food = [];
    for (let i = 0; i < ServerFood.length; i++) {
      food[i] = new Food(ServerFood[i].x, ServerFood[i].y, ServerFood[i].r, s, ServerFood[i].color);
    }

    //заполнение игроков
    players = [];
    for (let i = 0; i < ServerPlayers.length; i++) {
      players[i] = new Player
        (ServerPlayers[i].x,
          ServerPlayers[i].y,
          ServerPlayers[i].r,
          s,
          ServerPlayers[i].color,
          ServerPlayers[i].name,
          ServerPlayers[i].isEaten
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
      if (!players[i].isEaten) {
        players[i].show();
      }
    }

    precRadius = ServerPlayers[currentID].r;
    updatePositionPlayer(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
  }
}


/**
 * Создание модального окна для идентификации
 */
const identWindow = document.createElement('div');
document.body.appendChild(identWindow);
identWindow.classList.add('identWindow');

const identWindowInner = document.createElement('div');
identWindow.appendChild(identWindowInner);
identWindowInner.classList.add('identWindow__inner');

const title = document.createElement('h2');
identWindowInner.appendChild(title);
title.classList.add('identWindow__title');
title.innerHTML = 'Sign in';

const nickName = document.createElement('input');
identWindowInner.appendChild(nickName);
nickName.classList.add('identWindow__input');
nickName.setAttribute('placeholder', 'Enter Nick-Name');

const namebtn = document.createElement('button');
identWindowInner.appendChild(namebtn);
namebtn.classList.add('identWindow__button');
namebtn.innerHTML = 'gogogo!';

namebtn.addEventListener('click', () => {
  if (nickName.value) {
    namePlayer = nickName.value;
    identWindow.remove();
    const sketchInst = new p5(sketch);
  }
});