const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const GameState = require('./classes/gameState');

const x1 = 0, y1 = 0, x2 = 3000, y2 = 3000;
const R_PLAYER = 64;
const gameState = new GameState(x1,y1,x2,y2);
gameState.init();

setInterval(() => gameState.update(),10);

app.use(function (require, response,next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin',require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

app.get("/createPlayer",(request, response) => {
    let code = uuidv4();
    gameState.addNewPlayer(R_PLAYER, request.query.name,code, request.query.ww, request.query.wh);
    let obj = { code: code};
    response.send(obj);
}); 

app.get("/getState",(request, response) => {
    let code = request.query.code;
    if(code){
        let x = request.query.x;
        let y = request.query.y;
        let id = gameState.findIdPlayerByCode(code);
        gameState.targets[id].x = x;
        gameState.targets[id].y = y;
        let playerState = { 
            eat: gameState.arrayEat, 
            players: gameState.arrayPlayer, 
            currentPlayerIndex: id
        }
        response.send(playerState);
    }
}); 

app.listen(3000, function() {
    console.log("Начало работы сервера");
});