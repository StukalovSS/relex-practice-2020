const express = require("express");
const { compilation } = require("webpack");
const app = express();

let width;
let height;


let food = [];
for(let i=0;i<100;i++){
    food.push({
        x:Math.random() * 2000 - 1000,
        y:Math.random() * 1000 - 500,
        r:10  
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
    width = +request.query.wid;
    height = +request.query.heig;
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

function test (mx,my,pos,r){
    let vel = {
        x:0,
        y:0};
    let newvel = {
        x:mx,
        y:my};

    newvel.x = mx *3;
    newvel.y = my *3;

    var length = Math.sqrt(newvel.x*newvel.x+newvel.y*newvel.y);
    newvel.x = newvel.x/length;
    newvel.y= newvel.y/length;

    //vel.lerp(newvel,0.1);
    pos.x += newvel.x;
    pos.y += newvel.y;
    

}

function eats(player,other){
    var d = Math.sqrt((player.x-other.x)*(player.x-other.x) + (player.y-other.y)*(player.y-other.y));
    if(d < (player.r+other.r)){
        var sum = Math.PI*player.r*player.r + Math.PI*100;
        player.r = Math.sqrt(sum/Math.PI);
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
            let pos = {
                x:prevX,
                y:prevY};
            test(mx - width/2,my - height/2,pos,players[i].r);
            players[i].x = pos.x;
            players[i].y = pos.y;
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
        if(eats(players[idCurPlayer],food[i])){
            k = i;
        }
    }
    if(k!=-1){
        food.splice(k,1);
    }
    
    for(let i=0;i<otherPlayers.length;i++){
        if(eats(players[idCurPlayer],otherPlayers[i])){
            otherPlayers.splice(i,1);
        }
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