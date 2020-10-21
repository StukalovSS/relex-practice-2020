class Circle {
    x;
    y;
    r;

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r; 
    }

    distanceFromAnotherCircle(circle) {
        return Math.sqrt((this.x - circle.x) ** 2 + (this.y - circle.y) ** 2);
    }

    get square() {
        return Math.PI * (this.r ** 2);
    }
}

class Vector {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    set length(length) {
        let angle = this.angle;
        this.x = length * Math.cos(angle);
        this.y = length * Math.sin(angle);
    }

    get angle() {
        if (this.length === 0) {
            return 0;
        } else if (this.y > 0) {
            return Math.acos(this.x / this.length);
        } else {
            return 2 * Math.PI - Math.acos( this.x / this.length );
        }
    }

    set angle(angle) {
        let length = this.length;
        this.x = length * Math.cos(angle);
        this.y = length * Math.sin(angle);
    }

    scalarMultiply(vect) {
        return this.x * vect.x + this.y * vect.y;
    }

    angleBetweenVectors(vect) {
        return Math.acos(this.scalarMultiply(vect) / (this.length * vect.length));
    }

    lerp(vect, delta) {
        delta = delta > 1 ? 1 : delta;
        delta = delta < 0 ? 0 : delta;

        let dAngle = this.angleBetweenVectors(vect) * delta;

        if ( (vect.y > 0 && this.angle > vect.angle && this.angle < vect.angle + Math.PI) ||
                (vect.y < 0 && (this.angle > vect.angle || this.angle < vect.angle - Math.PI)) ) {
            
            this.angle -= dAngle;
        } else {
            this.angle += dAngle;
        }
    }
}

class Player extends Circle {
    id;
    prevResponceTime = Date.now();

    constructor(x, y, id) {
        super(x, y, 36);
        this.id = id;
    }

    get distanceFromCentre() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    update(dx, dy) {
        const vect = new Vector(dx, dy),
            dist = (Date.now() - this.prevResponceTime) * 0.1;
        this.prevResponceTime = Date.now();
        vect.length = dist;
        this.x += vect.x;
        this.y += vect.y;
    }

    eat(other) {
        let d = this.distanceFromAnotherCircle(other);
        if (other === this) {
            return false;
        }

        if (d < this.r + other.r) {
            let sum = this.square + other.square;
            this.r = Math.sqrt(sum / Math.PI);
            other.isEated();
            return true;
        }
        else {
            return false;
        }
    }

    isEated() {

    }
}

class Food extends Circle {
    constructor() {
        super(random(- 1990, 1990), 
            random(- 1990, 1990) , 10);
    }

    isEated() {
        this.x = random(-1990, 1990);
        this.y = random(-1990, 1990);
    }
}

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}



import express from "express";

const app = express();

const players = new Map(),
    food = [];

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
            return obj;
        } ),
        food: food.filter( obj =>  
             Math.sqrt( (obj.x - player.x) ** 2 + (obj.y - player.y) ** 2 ) < 600 
        )
    });


    response.send( answer );

});


app.get("/new_player", (request, response) => {
        let player = new Player( random(-2000, 2000), random(-2000, 2000), players.size);
        players.set( players.size, player );

        response.send( JSON.stringify({
            player: players.get(players.size - 1),
            players: Array.from( players.values() ).filter( obj => obj.id !== player.id )
            .map( obj => {
                obj.id = undefined;
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
