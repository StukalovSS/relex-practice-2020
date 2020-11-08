//const {p5} = require('./node_modules/p5/lib/p5');
const { json } = require("body-parser");
//const p5 = require('./node_modules/p5/lib/p5.min.js');
const { response, request, query } = require("express");
const express = require("express");
const app = express();
app.use(function (require, response,next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin',require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class Circle {
    constructor(x, y, r) {
        x = x;
        y = y;
        r = r;
    }
}
class Player extends Circle {
    constructor(x, y, r, name) {
        super(x, y, r);
        name = '';
    }
}
class GameState {
    food = [];
    init() {
        this.food = [];
        for (let i = 0; i < 100; i++) {
            let height = 927;
            let width = 1980;
            let grain = new Circle(random(-height, height), random(-width, width), 20);
            this.food.push(grain);
        }
    }
}
app.get("/get_state", (request, response) => {
    let state = new GameState;
    state.init()
    response.send(JSON.stringify(state));
});
app.get("/create_player", (request, response) => {
    let state = new GameState;
    state.init()
    response.send(JSON.stringify(state));
});
app.listen(3000, function() {
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