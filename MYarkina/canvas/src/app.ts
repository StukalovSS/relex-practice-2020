const css = require('./css/style.css')
const p5 = require('../node_modules/p5/lib/p5');
const http = require("http");
import {Circle} from './circle';




let id:any = 0;//id текущего клиента
//Первый запрос от нового клиента к серверу
let reqFirst =http.request(
    {hostname:'127.0.0.1',
    port:'3000',
    path:`/new_player?wid=${window.innerWidth}&heig=${window.innerHeight}`,
    method:'GET'
},function(res:any){
    res.on('data',function(body:any){
        id = body != "" ? JSON.parse((new TextDecoder("utf-8").decode(body))).id : {};
        console.log(id);
    });
    res.on('end',function(ch:any){
        console.log("id получен");
    });
});
reqFirst.end();
//


let arrayFood:any;//массив с координатами еды с сервера
let playerServer:any;//массив с координатами игроков с сервера
let otherPlayers:any = [];//остальные игроки сессии
function reqToServer()//запрос для обновления данных 
{
    let req =http.request(options,function(res:any){
        res.on('data',function(body:any){
            let array =  body != "" ? JSON.parse(new TextDecoder("utf-8").decode(body)) : {};
            arrayFood = array.food;
            playerServer = array.curPlayer;
            otherPlayers = array.otherPlayers;
        });
        res.on('end',function(ch:any){
        });
    });
    req.end();
}

let options = {
    hostname:'127.0.0.1',
    port:'3000',
    path:`/state?playerid=${id}&mx=500&my=500`,
    method:'GET'
}
reqToServer();
let player:any;//main игрок сессии
let food:any = [];//еда
let zoom:number = 1;
const sketch = (s:typeof p5) => {
    s.setup = () =>{
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background('#fae');
        player = new Circle(playerServer.x,playerServer.y,playerServer.r,s);
        for(let i = 0; i < arrayFood.length; i++){
            let newFood = new Circle(arrayFood[i].x,arrayFood[i].y,10,s);
            food.push(newFood);
        }
    }

    s.draw = ()=>{
        food = [];
        for(let i = 0;i < arrayFood.length;i++){
            let newFood = new Circle(arrayFood[i].x,arrayFood[i].y,10,s);
            food.push(newFood);
        }
        
        s.background('#fae');
        s.translate(s.width/2,s.height/2);
        mark(s);//разметка поля
        

        const newZoom = 36/player.r;
        zoom = s.lerp(zoom,newZoom,0.01);
        s.scale(zoom);


        s.translate(-player.pos.x,-player.pos.y);
        player.show();
        for(let i = 0; i < otherPlayers.length;i++){
            new Circle(otherPlayers[i].x,otherPlayers[i].y,otherPlayers[i].r,s).show();
        }

    

        player.pos.x = playerServer.x;
        player.pos.y = playerServer.y;
        player.r = playerServer.r;
        //player.update();

        options.path = `/state?playerid=${id}&mx=${s.mouseX}&my=${s.mouseY}`;

        for(let i = 0;i < food.length; i++){
            food[i].show();
        }   

        reqToServer();
     }
 }

 const sketchInst = new p5(sketch);


 function mark(s:any){
    for(let i = -s.width; i < s.width; i += 80){
        s.stroke('rgba(100%,0%,100%,0.5)');
        s.line(i,-s.height,i,s.height);
     }
 
     for(let i = -s.height+36; i < s.height+36; i += 80) {
         s.stroke('rgba(100%,0%,100%,0.5)');
         s.line(-s.width, i, s.width, i);
     }
 }