import p5 from 'p5';
import {Circle} from './circle.js';

let player;
const food = [];
let colors = ['red', 'green'];
let zoom = 1;
const sketch = (s) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(220);
        player = new Circle(0, 0, 36, s);
        for(let i = 0; i < 100; i++) {
            let obj = new Circle(s.random(-s.width, s.width), s.random(-s.height, s.height), 20, s);
            food.push(obj);
        }
       
    }

    s.draw = () => {
        s.background(220);
        s.translate(s.width/2, s.height/2);
        const newZoom = 36 / player.r;
        zoom = s.lerp(zoom, newZoom, 0.1);
        s.scale(zoom);
        s.translate(-player.pos.x, -player.pos.y);

        for(let i = -s.width; i < s.width; i = i + 180) {
            s.line(i, -s.height, i, s.height);
            s.stroke(126);
        }

        for(let i = -s.height; i < s.height; i = i + 180) {
            s.line(-s.width, i, s.width, i);
            s.stroke(126);
        }
        

        player.show();
        player.update();

        for(let i = food.length - 1; i >= 0; i--) {
            food[i].show();
            if(player.eats(food[i])) {
                // food.splice(i, 1);
                food[i].pos.x = s.random(-s.width, s.width);
                food[i].pos.y = s.random(-s.height, s.height);
            }
        }
    }

}

const sketchInst = new p5(sketch);

