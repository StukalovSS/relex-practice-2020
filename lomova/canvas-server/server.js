const express = require('express');
const app = express();
const lerp = require('lerp');

// еда
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r; 
    }
}

// игрок
class Player extends Circle {
    constructor(x, y, r, id) {
        super(x, y, r);
        this.id = id;
        this.vx = 0;
        this.vy = 0;
    }
    
    update(x_0, y_0) {
        let d = Math.sqrt(x_0 * x_0 + y_0 * y_0);
        if(d == 0) {
            return;
        }
        let nx = x_0 * 3 / d;
        let ny = y_0 * 3 / d;
        this.vx = lerp(this.vx, nx, 0.1);
        this.vy = lerp(this.vy, ny, 0.1);
        this.x += this.vx;
        this.y += this.vy;
    }

    eats(other) {
        if(this.r == other.r) {
            return false;
        }

        let dist = Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
        if (dist < this.r + other.r) {
          let s = this.r * this.r * Math.PI + other.r * other.r * Math.PI;
          this.r = Math.sqrt(s / Math.PI);
          return true;
        } 
        else {
          return false;
        }
    }
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

app.use(function (req, res, next) {
    var origin = 'http://127.0.0.1:8080';
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


let food = [];
for (let i = 0; i < 100; i++) {
    let n = new Circle(random(-1536, 1536), random(-720, 720), 20);
    food.push(n);
}

let allPlayers = []; 
let playerId = -1; 
app.get('/new_player', (req, res) => {
    playerId++; 
    // новый игрок с новым id
    let newPlayer = new Player(random(-1536, 1536), random(-720, 720), 36, playerId);
    allPlayers.push(newPlayer);

    res.send(JSON.stringify({"id": playerId}));
});



app.get('/state', (req, res) => {
    let otherPlayers = []; 
    let idCurr = req.query.player_id;
    let playerCurr;
    
    for(let i = 0; i < allPlayers.length; i++){
        if(allPlayers[i].id == idCurr){ 
            playerCurr = allPlayers[i];
            playerCurr.update(+req.query.x, +req.query.y);
            // игрок ест корм
            for(let i = 0; i < food.length; i++) {
                if(playerCurr.eats(food[i])){
                    food.splice(i, 1);
                }
            }
            // игрок ест игрока
            for(let i = 0; i < otherPlayers.length; i++) {
                if(playerCurr.eats(otherPlayers[i])) {
                    otherPlayers.splice(i, 1);
                }
            }
        }
        else
        {
            otherPlayers.push(allPlayers[i]);
        }
    }

    res.send(JSON.stringify({"p": playerCurr, "f": food, "op": otherPlayers}));
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});

