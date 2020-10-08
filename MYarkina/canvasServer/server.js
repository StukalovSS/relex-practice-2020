const express = require("express");
const { compilation } = require("webpack");
const app = express();

let food = [];
for(let i=0;i<100;i++){
    food.push({
        x:Math.random() * 2000 - 1000,
        y:Math.random() * 1000 - 500  
    });
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

app.get("/new_player",(request, response) => {
    id++;
    players.push({
        x:Math.random() * 2000 - 1000,
        y:Math.random() * 1000 - 500,
        r:36,
        id:id    
    });
    obj = {id};
    response.send(obj);
}); 

function eats(mx,my,other){
    var d = Math.sqrt((mx-other.x)*(mx-other.x) + (my-other.y)*(my-other.y));
    if(d < (36+10)){
        console.log("true");
        //var sum = Math.PI*cur.r*cur.r + Math.PI*100;
        //cur.r = Math.sqrt(sum/Math.PI);
        return true;
    }else{
        return false;
    }
}

app.get("/state",(request, response) => {
    let mx = +request.query.mx;
    let my = +request.query.my;
    let idCurPlayer = +request.query.playerid;
    
    let otherPlayers = [];
    if(idCurPlayer == null){
        idCurPlayer = id;
    }
    let prevX,prevY;
    for(let i=0;i<players.length;i++){
        if(players[i].id === idCurPlayer){
            prevX = players[i].x;
            prevY = players[i].y;
            players[i].x = mx - 1280/2;
            players[i].y = my - 578/2;
        }
        else
        {
            otherPlayers.push({
                x:players[i].x,
                y:players[i].y,
                r:players[i].r
            });
        }
    }
    let k = -1;
    for(let i=0;i<food.length;i++){
        if(eats(mx,my,food[i])){
            k = i;
        }
    }
    if(k!=-1){
        food.splice(k,1);
    }

 let curPlayer = players[idCurPlayer];
    let obj ={
        food,
        curPlayer,
        otherPlayers
    };

    response.send(obj);
}); 

app.listen(3000, function() {
    console.log("Начало работы сервера");
});