const css = require('./css/style.css')
const p5 = require('../node_modules/p5/lib/p5');
const http = require("http");
import {Circle} from './circle';

//проверка налиичия еды на поле
function checkFood(){

}


let options = {
    hostname:'127.0.0.1',
    port:'3000',
    path:`/?x=-1&y=-1`,
    method:'GET'
}

let array;
let arrayFood:any;//массив для данных с сервера о еде
let arrayPlayer:any;//массив для данных с сервера о игроках
let id:any;//id текущего клиента
let t = true;//если у текущего клиента нет id
function reqToServer(){
    let req =http.request(options,function(res:any){
        res.on('data',function(body:any){
            array = JSON.parse(new TextDecoder("utf-8").decode(body));
            arrayFood = array.food;
            arrayPlayer = array.players;
            if(t){
                t = false;
                id = array.id;
                options.path = `/?id=${id}&x=-1&y=-1`
            }
        });
        res.on('end',function(ch:any){
        });
    });
    req.end();
}

let player:any;//игрок
let otherPlayers:any = [];//остальные игроки сессии
let food:any = [];//еда
let zoom:number = 1;
reqToServer();
const sketch = (s:typeof p5) => {
    s.setup = () =>{
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background('#fae');
        player = new Circle(arrayPlayer[id].x,arrayPlayer[id].y,arrayPlayer[id].r,s); 
        for(let i = 0;i < arrayFood.length;i++){
            let newFood = new Circle(arrayFood[i].x,arrayFood[i].y,arrayFood[i].r,s);
            food.push(newFood);
        }
    }

    s.draw = ()=>{
        for(let i=0;i<arrayFood.length;i++){
            food[i].pos.x=arrayFood[i].x;
            food[i].pos.y=arrayFood[i].y;
        }
        let k = food.length-arrayFood.length;
        while(k != 0){
            food.pop();
            k--;
        }
        options.path = `/?id=${id}&x=${s.mouseX}&y=${s.mouseY}`;
        s.background('#fae');
        s.translate(s.width/2,s.height/2);

        mark(s);//разметка поля
        
        const newZoom = 36/player.r;
        zoom = s.lerp(zoom,newZoom,0.001);
        s.scale(zoom);


        s.translate(-player.pos.x,-player.pos.y);
        player.show();
        player.update();

        for(let i = 0;i < food.length; i++){
            food[i].show();
            if(player.eats(food[i])){
                options.path += `&del=${i}&delx=${food[i].pos.x}`
                food.splice(i,1);
            }
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