const http = require("http");
const p5 = require('../../node_modules/p5/lib/p5');
const Circle = require('./circle');

const namePlayer = prompt('Введите ваше имя');
let players: any = [];
let eat: any = [];
let zoom = 1;


let code: string;
let width: number;
let height: number;
let options = {
    hostname:'127.0.0.1',
    port:'3000',
    path:`/createPlayer?name=${namePlayer}`,
    method:'GET'
};

/**
 * Первый запрос на сервер.
 * Получает уникальный код игрока на сервере, размер поля.
 */
let reqFirst = http.request( options, function(res:any){
    res.on('data', function(body:any){
        code = body != "" ? JSON.parse((new TextDecoder("utf-8").decode(body))).code : {};
        width = body != "" ? JSON.parse((new TextDecoder("utf-8").decode(body))).width : {};
        height = body != "" ? JSON.parse((new TextDecoder("utf-8").decode(body))).height : {};
    });
    res.on('end',function(){
        options.path = `/getState?code=${code}&x=500&y=500`;
        reqToServer();
    });
});
reqFirst.end(); 


let arrayEat:any;
let arrayPlayers:any;
let currentPlayerIndex:any;

/**
 * Запрос на сервер для обновления данных.
 * Передает уникальный код клиента, целевые координаты.
 * Получает координады еды, игроков, индекс позиции клиента для отображения.
 */
function reqToServer()
{
    const req = http.request(options,function(res:any){
        res.on('data',function(body:any){
            const dataFromServer =  body != "" ? JSON.parse(new TextDecoder("utf-8").decode(body)) : {};
            arrayEat = dataFromServer.eat;
            arrayPlayers = dataFromServer.players;
            currentPlayerIndex = dataFromServer.currentPlayerIndex;
        });
        res.on('end',function(){ 
        });
    });
    req.end();
}

const sketch = (s:typeof p5) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
    }

    s.draw = () => {
        eat = [];
        for (let i = 0; i < arrayEat.length; i++) {
            eat[i] = new Circle(arrayEat[i].x, arrayEat[i].y, arrayEat[i].r, s, '');
        }

        players = [];
        for (let i = 0; i < arrayPlayers.length; i++) {
            players[i] = new Circle(arrayPlayers[i].x, arrayPlayers[i].y, arrayPlayers[i].r, s, arrayPlayers[i].living, arrayPlayers[i].name);
        }
  
        s.background('#191970');

        s.translate(s.width / 2, s.height / 2);
        var newzoom = 64 / arrayPlayers[currentPlayerIndex].r;
        zoom = s.lerp(zoom, newzoom, 0.2);
        s.scale(zoom);
        s.translate(-arrayPlayers[currentPlayerIndex].x, -arrayPlayers[currentPlayerIndex].y);

        for (let i = eat.length - 1; i >= 0; i--) {
          eat[i].show();
        }
      
        for (let i = -2*arrayPlayers[currentPlayerIndex].r; i < width; i = i + width/5) {
            s.line(i, -2*arrayPlayers[currentPlayerIndex].r, i, width);
            s.stroke('#483D8B');
        }
        for (let i = -2*arrayPlayers[currentPlayerIndex].r; i < height; i = i + height/5) {
            s.line(-2*arrayPlayers[currentPlayerIndex].r, i, height, i);
            s.stroke('#483D8B');
        }

        for (let i = players.length - 1; i >= 0; i--) {
            if(players[i].visible){
                players[i].show();
            }
        }

        options.path = `/getState?code=${code}&x=${s.mouseX - window.innerWidth/2}&y=${s.mouseY - window.innerHeight/2}`;
        reqToServer();      
    }
}
const sketchInst = new p5(sketch);
