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
        let fi = Math.asin(this.y / this.length);
        return fi > 0 ? fi : 2 * Math.PI - fi;
    }

    set angle(angle) {
        length = this.length;
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
    __prevVect = new Vector(0, 0);
    
    constructor(x, y) {
        super(x, y, 36);
    }

    get distanceFromCentre() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    update(dx, dy) {
        this.__prevVect.length = 3;
        this.__prevVect.lerp(new Vector(dx, dy), 0.1); 
        // this.pos.x = this.s.constrain(this.pos.x, -2000, 2000);
        // this.pos.y = this.s.constrain(this.pos.y, -2000, 2000);
        this.x += curVect.x;
        this.y += curVect.y;
    }

    eat(other) {
        let d = this.distanceFromAnotherCircle(other);
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

const player = new Player(random(-1950, 1950), random(-1950, 1950)),
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

app.get("/", (request, response) => {
        if (request.query.x == undefined || request.query.y == undefined) {
            response.send(JSON.stringify({
                player: player,
                food: food
            }));
        } else {
            player.update(request.query.x, request.query.y);
            response.send( JSON.stringify({
                player: player,
                food: food
            }) );
        }
    });

app.listen(3000, function() {
    console.log("Start server");
});
