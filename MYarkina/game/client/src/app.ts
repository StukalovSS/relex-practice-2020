const http = require("http");
const p5 = require('../node_modules/p5/lib/p5');
const Circle = require('./circle');

var players:any = [];
var eat:any = [];
var zoom = 1;


let code:string;
let options = {
    hostname:'127.0.0.1',
    port:'3000',
    path:`/createPlayer?name=Marina&ww=${window.innerWidth}&wh=${window.innerHeight}`,
    method:'GET'
};

let reqFirst = http.request( options, function(res:any){
    res.on('data', function(body:any){
        code = body != "" ? JSON.parse((new TextDecoder("utf-8").decode(body))).code : {};
    });
    res.on('end',function(){
        console.log(" Уникальный код игрока получен");
        options.path = `/getState?code=${code}&x=500&y=500`;
        reqToServer();
    });
});
reqFirst.end(); 


let arrayEat:any;
let arrayPlayers:any;
let currentPlayerIndex:any;
function reqToServer()
{
    let req = http.request(options,function(res:any){
        res.on('data',function(body:any){
            let dataFromServer =  body != "" ? JSON.parse(new TextDecoder("utf-8").decode(body)) : {};
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
            eat[i] = new Circle(arrayEat[i].x, arrayEat[i].y, arrayEat[i].r, s);
        }

        players = [];
        for (let i = 0; i < arrayPlayers.length; i++) {
            players[i] = new Circle(arrayPlayers[i].x, arrayPlayers[i].y, arrayPlayers[i].r, s,arrayPlayers[i].living);
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
      
        for (let i = -2*arrayPlayers[currentPlayerIndex].r; i < 3000; i = i + 200) {
            s.line(i, -2*arrayPlayers[currentPlayerIndex].r, i, 3000);
            s.stroke('#483D8B');
        }
        for (let i = -2*arrayPlayers[currentPlayerIndex].r; i < 3000; i = i + 200) {
            s.line(-2*arrayPlayers[currentPlayerIndex].r, i, 3000, i);
            s.stroke('#483D8B');
        }

        arrayPlayers[currentPlayerIndex].x = s.constrain(arrayPlayers[currentPlayerIndex].x, 0, 3000);
        arrayPlayers[currentPlayerIndex].y = s.constrain(arrayPlayers[currentPlayerIndex].y, 0, 3000);

        for (let i = players.length - 1; i >= 0; i--) {
            if(players[i].living){
                players[i].show();
            }
        }

        options.path = `/getState?code=${code}&x=${s.mouseX}&y=${s.mouseY}`;
        reqToServer();      
    }
}
const sketchInst = new p5(sketch);
