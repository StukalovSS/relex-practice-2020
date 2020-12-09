const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const PlayerState = require('./States/playerState');
const GameState = require('./States/gameState');

app.use(function (require, response, next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

const R_PLAYER = 30;
const HEIGTH = 1041;
const WIDTH = 2844;
const FOOD_SIZE = 18;
const AMOUNT_OF_FOOD = 250;
const GRAINS_COLORS=['#00cff1','#fe0000','#26a733','#d5e64c','#f87421','#fffa78','#dbeaaf'];


let gameSt = new GameState(WIDTH, HEIGTH);
gameSt.init(FOOD_SIZE, AMOUNT_OF_FOOD, GRAINS_COLORS);
setInterval(() => gameSt.updateSt(), 15.625);

app.get("/get_state", (request, response) => {
    let player_id = request.query.id;
    if (gameSt.map.get(player_id) || gameSt.map.get(player_id) == 0) {
        gameSt.addTargetCoords(player_id, +request.query.x, +request.query.y);
        let playerState = new PlayerState(gameSt.food, gameSt.players,gameSt.map.get(player_id));
        response.send(JSON.stringify(playerState));
    }
    else {
        response.send(404);
    }
});

app.get("/create_player", (request, response) => {
    let playerId = uuidv4();
    let playerNickname = request.query.nickname;
    let playerColor ='#'+ request.query.color;
    gameSt.addPlayer(playerId, R_PLAYER,playerNickname,playerColor);
    response.send(JSON.stringify({ "playerId": playerId, 'width': WIDTH, 'height': HEIGTH }));
});

app.get("/check_nick", (request, response) => {
    isNicknameValid = gameSt.checkNickName(request.query.nickname);
    response.send(JSON.stringify(isNicknameValid));
});

app.listen(3000, function () {
    console.log("сервер запущен");
});
