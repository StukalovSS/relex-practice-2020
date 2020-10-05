const express = require("express");
const app = express();

let food = [];
for(let i=0;i<100;i++){
    food.push({
        x:Math.random() * 2000 - 1000,
        y:Math.random() * 1000 - 500,
        r:10
    });
}

function updateCoord(x,y){

}

app.use(function (require, response,next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin',require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

let players = [];
let id = -1;//id игрока на карте
let t = true;
let changeFood;
app.get("/",(request, response) => {
    let x = +request.query.x;
    let y = +request.query.y;
    let r = +request.query.r;
    if(request.query.id){
        players[id].x = x;
        players[id].y = y;
        players[id].r = r;
    }
    if(x == -1 && y == -1 && t){
        id++;
        players.push({
            x:Math.random() * 2000 -1000,
            y:Math.random() * 2000 -1000,
            r:36,
            id:id
        });
        t = false;
        console.log("Игроков на поле - " + (id+1));
    }else{
        t = true;
    }

    if(request.query.del){
        food.splice(request.query.del,1);
    }

    let obj ={
        food,
        players,
        changeFood,
        id
    }
    response.send(obj);
}); 

app.listen(3000, function() {
    console.log("Начало работы сервера");
});