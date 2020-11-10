const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const GameState = require('./Objects/gameState');
app.use(function (require, response, next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});
const R_PLAYER = 40;
const height = 927;
const width = 1980;
const foodSize = 20;
const AmountOfFood = 100;

let gameSt = new GameState(width,height);
gameSt.init(foodSize,AmountOfFood);
app.get("/get_state", (request, response) => {
    let index = state.players.findIndex(player => player.id == request.query.id);
    if (index >= 0) {
        let playerState = new PlayerState;
        playerState.players = state.players[index];
        playerState.food = state.food;
        response.send(JSON.stringify(playerState));
    }
    else {
        response.send(404);
    }
});
app.get("/create_player", (request, response) => {
    let playerId = uuidv4();
    gameSt.addPlayer(playerId, R_PLAYER);
    response.send(JSON.stringify(gameSt.players));
});
app.listen(3000, function () {
    console.log("сервер запущен");
});
// const players =[];
// const food = [];
// let player = {
//     "id":0,
//     "x": 0,
//     "y" :0,
// }

// for(let i = 0; i < 100; i++) {
//     let obj = new Circle(s.random(-s.width, s.width), s.random(-s.height, s.height), 7, s);
//     food.push(obj);
// }
// app.get("/new_player", (request, response) => {
//     players.push(player);
//     players[players.length-1].id = players.length -1;
//     let string = JSON.stringify(players[players.length-1]);
//     console.log('послали' + string);
//     response.send(string);
// });
// app.get("/state?", (request,response) => {
//     //console.log(JSON.parse(request.body));
//     console.log("ok");
//     let obj = {
//         "newX": request.query.mx,
//         "newY" : request.query.my
//     }
//     let string = JSON.stringify(obj);
//     response.send(string);
// }); app.listen(3000, function() {
//     console.log("Сервер запущен.")
// })


// // app.get("/",(request, response) => {
// //     // response.send('отправлен запрос');
// //     let obj = {
// //         "x": request.query.x,
// //         "y" : request.query.y
// //     }
// //     let string = JSON.stringify(obj);
// //     response.send(string);
// // }); app.listen(3000, function() {
// //     console.log("сервер запущен");
// // });


// // sessionStorage для того чтобы при обнолении страницы не генерировался новый id 
// // sessionStorage.getItem(id)