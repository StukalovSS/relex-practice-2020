const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const GameState = require('./classes/gameState');



// Координаты поля
const x1 = 0, y1 = 0, x2 = 3000, y2 = 3000;
// Начальный радиус игроков
const R_PLAYER = 64;

const gameState = new GameState(x1,y1,x2,y2);
gameState.init();

// Интервал обновления данных о состоянии игры
setInterval(() => gameState.update(), 10);

app.use(function (require, response, next) {
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});


/**
 * Добавление нового игрока на карту.
 * Принимает имя игрока, размер рабочей области окна браузера клиента.
 * Возвращает уникальный код для игрока, размер поля.
 */
app.get("/createPlayer", (request, response) => {
    let code = uuidv4();
    gameState.addNewPlayer(R_PLAYER, request.query.name,code, request.query.ww, request.query.wh);
    const obj = { 
        code: code,
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1)
    };
    response.send(obj);
}); 


/**
 * Получение текущего состояние игры.
 * Принимает уникальный код игрока.
 * Возвращает состояние игры для данного игрока.
 */
app.get("/getState",(request, response) => {
    const code = request.query.code;
    if (code) {
        // Индекс текущего игрока в массиве игроков
        const index = gameState.findIndexPlayerByCode(code);

        gameState.targets[index].x = request.query.x;
        gameState.targets[index].y = request.query.y;

        const playerState = { 
            eat: gameState.arrayEat, 
            players: gameState.arrayPlayer, 
            currentPlayerIndex: index
        };
        response.send(playerState);
    }
}); 

app.listen(3000, function() {
    console.log("Начало работы сервера");
});