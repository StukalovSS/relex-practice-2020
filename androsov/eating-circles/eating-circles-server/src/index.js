import express from 'express';
import { Food } from './app/game-objects/food.js';
import { Player } from './app/game-objects/player.js';
import { random } from './app/utils/random.js'


const app = express();

const players = new Map();
const food = [];

for (let i = 0; i < 1000; i++) {
    food.push(new Food( random(-2000, 2000), random(-2000, 2000) ));
}

app.use(function (require, response, next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

app.get("/get_state", (request, response) => {
    const player = players.get( +request.query.id );
    player.update( +request.query.x, +request.query.y );
    for (let el of food) {
        player.eat(el);
    }

    for (let [id, enemy] of Array.from(players.entries()) ) {
        if (player.eat(enemy)) {
            players.delete(id);
        }
    }

    let answer = JSON.stringify({
        player: {
            x: player.x,
            y: player.y,
            r: player.r
        },
        players: Array.from( players.values() ).filter( obj => obj.id !== player.id )
        .map( obj => {
            obj.id = undefined;
            obj.prevResponceTime = undefined;
            return obj;
        } ),
        food: food.filter( obj =>  
             Math.sqrt( (obj.x - player.x) ** 2 + (obj.y - player.y) ** 2 ) < 600 
        )
    });

    response.send( answer );

});


app.get("/new_player", (_request, response) => {
        let player = new Player( random(-2000, 2000), random(-2000, 2000), players.size);
        players.set( players.size, player );

        response.send( JSON.stringify({
            player: players.get(players.size - 1),
            players: Array.from( players.values() ).filter( obj => obj.id !== player.id )
            .map( obj => {
                obj.id = undefined;
                obj.prevResponceTime = undefined;
                return obj;
            } ),
            food: food.filter( obj =>  
                Math.sqrt( (obj.x - player.x) ** 2 + (obj.y - player.y) ** 2 ) < 600 
            )
        }) );
});

app.listen(3000, function() {
    console.log("Start server");
});
