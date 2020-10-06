// import p5 from 'p5';
const express = require('express');
const app = express();


function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

class Circle {
    x;
    y;
    r;
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r; 
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Player {
    constructor(x, y, r, id) {
        this.x = x;
        this.y = y;
        this.r = r; 
        this.id = id; 
    }
    update(a, b) {
        const vect = new Vector(a, b);
        vect.length = 3;
        this.x = this.x +  (vect.x - this.x)*0.01; // 0.009
        this.y = this.y +  (vect.y - this.y)*0.01; 
    }
}


let players = [];
let food = [];
let min = Math.ceil(-700);
let max = Math.floor(700);

let minP = Math.ceil(-300);
let maxP = Math.floor(300);

let currId = 0;
for (let i = 0; i < 100; i++) {
    let obj = new Circle(Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min, 20);
    food.push(obj);
}

app.use(function (req, res, next) {
    var origin = 'http://127.0.0.1:8080';
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/new_player', (req, res) => {
    let newId = currId++;
    let newPlayer = new Player(Math.floor(Math.random() * (maxP - minP)) + minP, Math.floor(Math.random() * (maxP - minP)) + minP, 36, newId);
    players.push(newPlayer);
    res.send(JSON.stringify({"id": newId}));
})

app.get('/state', (req, res) => {
    let player_id = +req.query.player_id;
    let playerCurr;
    console.log(player_id);
    players.forEach(element => {
        if(element.id == player_id){
            playerCurr = element;
        }
    });
    console.log(playerCurr);
    console.log(playerCurr.x, playerCurr.y);
    playerCurr.update(+req.query.x, +req.query.y);
    console.log(playerCurr);
    let resPlayers = players.filter(el => el != playerCurr);
    res.send(JSON.stringify({"f": food, "allP": resPlayers, "pCurr": {"x": playerCurr.x, "y": playerCurr.y, "r": playerCurr.r}}));
    console.log(playerCurr.x, playerCurr.y);
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});