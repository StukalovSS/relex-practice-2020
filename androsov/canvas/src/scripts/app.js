import p5 from 'p5';
import Circle from './primitivs/circle';
import Player from './game-objects/player';
import Food from './game-objects/food';

'use strict'

let player,
    food = [],
    zoom = 1;


const sketch = (s) => {
    s.setup = () => {
        s.createCanvas(document.body.clientWidth -  9, document.documentElement.clientHeight - 9);
        s.background(197, 227, 200);
        player = new Player(0, 0, s);
        for (let i = 0; i < 1000; i++) {
            food[i] = new Food(s);
        }
        // s.line(10, 10, s.width - 10, 10);
        // s.line(10, 10, 10, s.height - 10);
        // s.line(10, s.height - 10, s.width - 10, s.height - 10);
        // s.line(s.width - 10, 10, s.width - 10, s.height - 10);
        //circle.show(s.width / 2, s.height / 2, 80);
    }

    s.draw = () => {

        s.background(197, 227, 200);
        s.translate(s.width / 2, s.height / 2);
        const newZoom = 36 / player.r;
        zoom = s.lerp(zoom, newZoom, 0.1);

        s.translate(-player.pos.x, -player.pos.y);
        for (let i = -2000; i < s.width + 2000; i += s.width / 15) {
            s.line(i, -2000, i, s.height + 2000);
        }

        for (let i = -2000; i < s.height + 2000; i += s.width / 15) {
            s.line(- 2000, i, 2000, i);
        }

        
        player.show();
        for (let el of food) {
            el.show();
        }
        player.update();
        
        for(let i = food.length - 1; i >= 0; i--) {
            food[i].show();
            player.eat(food[i]);
        }
    }
}

const sketchInst = new p5(sketch);
