class Circle {
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

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    rotate(angle) {
        this.x = this.x * Math.cos(angle) + this.y * Math.cos(angle);
        this.x = this.x * Math.sin(angle) - this.y * Math.sin(angle);
    }

    rotateOverPoint(point, angle) {
        this.move(-point.x, -point.y);
        this.rotate(angle);
        this.move(point.x, point.y);
    }
}


/**
 * Отрезок вида ax + by + c = 0 между 2-умя точками.
 */
class Segment {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this.a = point2.y - point1.y;
        this.b = point1.x - point2.x;
        this.c = point2.x * point1.y - point1.x * point2.y;
    }

    /**
     * Проверка точки на принадлежность отрезку.
     * @param {Point} point Точка, которая проверяется на принадлежность отрезку.
     * @returns {boolean} True усли точка лежит на отрезке.
     */
    isPointOnSegment(point) {
        return Math.min(point1.x, point2.x) < point.x &&
            Math.max(point1.x, point2.x) > point.x &&
            Math.min(point1.y, point2.y) < point.y &&
            Math.max(point1.y, point2.y) > point.y &&
            Math.abs(this.a * point.x + this.b * point.b + this.c) <= 1e-10;
    }

    /**
     * Проверка точки на принадлежность области над отрезком.
     * @param {Point} point Точка, которая проверяется на принадлежность области над отрезком.
     * @returns {boolean} True усли точка лежит над отрезком.
     */
    isPointAbove(point) {
        return this.b != 0 && this.a * point.x + this.b * point.b + this.c < 0;
    }
}

/**
 * Прямоугольник вида:
 * A -------- B
 *   |      |
 *   |      |
 *   |      |
 *  C--------D
 */
class Rectangle {
    constructor(leftUpPoint, width, height) {
        this.pointA = leftUpPoint;
        this.pointB = new Point(leftUpPoint.x + width, leftUpPoint.y);
        this.pointC = new Point(leftUpPoint.x, leftUpPoint.y - height);
        this.pointD = new Point(leftUpPoint.x + width, leftUpPoint.y - height);
    }

    /**
     * Повернуть прямоугольник вокруг определенной точки.
     * @param {Point} point Точка, вокруг которой вращается прямоугольник.
     * @param {number} angle Угол в радианах, на который вращается прямоугольник.
     */
    rotateOverPoint(point, angle) {
        this.pointA.rotateOverPoint(point, angle);
        this.pointB.rotateOverPoint(point, angle);
        this.pointC.rotateOverPoint(point, angle);
        this.pointD.rotateOverPoint(point, angle);
    }

    /**
     * Проверить точку на принадлежность прямоугольнику.
     * @param {Point} point Точка, которая проверется на принадлежность прямоугольнику.
     * @returns {boolean} True если точка внутри прямоугольника.
     */
    isPointIn(point) {
        if (this.pointA.x === this.pointB.x || this.pointA.x === this.pointD.x) {
            return this.isPointInStraightRectangle(point);
        }

        return (new Segment(this.downPoint, this.leftPoint).isPointAbove(point)) &&
            (!new Segment(this.leftPoint, this.upPoint).isPointAbove(point)) &&
            (!new Segment(this.upPoint, this.rightPoint).isPointAbove(point)) &&
            (new Segment(this.downPoint, this.rightPoint).isPointAbove(point));
    }

    get downPoint() {
        const p1 = this.pointA.y < this.pointB.y ? this.pointA : this.pointB,
            p2 = this.pointC.y < this.pointD.y ? this.pointC : this.pointD;
        return p1.y < p2.y ? p1 : p2;
    }

    get upPoint() {
        const p1 = this.pointA.y > this.pointB.y ? this.pointA : this.pointB,
            p2 = this.pointC.y > this.pointD.y ? this.pointC : this.pointD;
        return p1.y > p2.y ? p1 : p2;
    }

    get leftPoint() {
        const p1 = this.pointA.x < this.pointB.x ? this.pointA : this.pointB,
            p2 = this.pointC.x < this.pointD.x ? this.pointC : this.pointD;
        return p1.x < p2.x ? p1 : p2;
    }

    get rightPoint() {
        const p1 = this.pointA.x > this.pointB.x ? this.pointA : this.pointB,
            p2 = this.pointC.x > this.pointD.x ? this.pointC : this.pointD;
        return p1.x > p2.x ? p1 : p2;
    }

    /**
     * Проверить точку на принадлежность прямоугольнику, стороны которого лежат паралельо осям координат.
     * @param {Point} point Точка, которая проверется на принадлежность прямоугольнику.
     * @returns {boolean} True если точка внутри прямоугольника.
     */
    isPointInStraightRectangle(point) {
        const leftX = Math.min(this.pointA.x, this.pointC.x),
            rightX = Math.max(this.pointA.x, this.pointC.x),
            downY = Math.min(this.pointA.y, this.pointC.y),
            upY = Math.min(this.pointA.y, this.pointC.y);

        return point.x >= leftX && point.x <= rightX && point.y >= downY && point.y <= upY;
    }
}

class Vector {
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
    constructor(x, y, id) {
        super(x, y, 36);
        this.id = id;
        this.prevResponceTime = Date.now();
    }

    get distanceFromCentre() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    update(dx, dy) {
        this.prevX = this.x;
        this.prevY = this.y

        const vect = new Vector(dx, dy),
            dist = (Date.now() - this.prevResponceTime) * 0.1;
        this.prevResponceTime = Date.now();
        vect.length = dist;
        if ((this.x + vect.x > 2000 && vect.x > 0) || (this.x + vect.x < -2000 && vect.x < 0) ||
        (this.y + vect.y > 2000 && vect.y > 0) || (this.y + vect.y < -2000 && vect.y < 0)) {
            return;
        }
        this.x += vect.x;
        this.y += vect.y;
    }

    /**
     * Поедание другого круга, если он находится на плоскости перемещения. 
     * У круга вызывается метод isEated, если поедание выполнено успешно.
     * @param {Circle} other Еда или другой игрок, которого текущий игрок пытается съесть.
     * @returns {boolean} True, усли поедание выполнено успешно.
     */
    eat(other) {
        if (other === this || this.r <= other.r) {
            return false;
        }
        
        let d = this.distanceFromAnotherCircle(other);
        const vect = new Vector(this.x - this.prevX, this.y - this.prevY);
        const area = new Rectangle(new Point(this.prevX, this.prevY + this.r), vect.length, this.r * 2);
        area.rotateOverPoint(new Point(this.prevX, this.prevY), vect.angle);

        if (area.isPointIn(new Point(other.x, other.y)) || d < this.r + other.r) {
            let sum = this.square + other.square;
            this.r = Math.sqrt(sum / Math.PI);
            other.isEated();
            return true;
        } else {
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


const express = require('express');
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
