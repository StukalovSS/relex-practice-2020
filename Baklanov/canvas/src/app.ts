const p5 = require('../node_modules/p5/lib/p5');
const http = require('http');
import {Circle} from './circle';

const options = {
    hostname:'127.0.0.1',
    port: 3000,
    path: '',
    method :'Get'
}
let player: any;
const food: any = [];
let obj = {
    "x": 0,
    "y" : 0
}
let zoom: number = 1;
const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(220);
        player = new Circle(obj.x, obj.y, 36,s);
        for(let i = 0; i < 100; i++) {
            let obj = new Circle(s.random(-s.width, s.width), s.random(-s.height, s.height), 7, s);
            food.push(obj);
        }
    }

    s.draw = () => {
        s.background(220);
        s.translate(s.width/2, s.height/2);
        const newZoom: number = 36 / player.r;
        zoom = s.lerp(zoom, newZoom, 0.0001);
        s.scale(zoom);

        s.translate(-player.pos.x, -player.pos.y);

        for(let i = -s.width; i < s.width; i = i + 50) {
            s.line(i, -s.height, i, s.height);
            s.stroke(126);
        }
        for(let i = -s.height; i < s.height; i = i + 50) {
            s.line(-s.width, i, s.width, i);
            s.stroke(126);
        }
            options.path =  '/?x=' + s.mouseX +'&y=' + s.mouseY;
            console.log("что посылали   " +options.path);
            let req = http.request(options, function (response :any) {
                response.on('data', function (body:any) {
                    let string = new TextDecoder("utf-8").decode(body);
                    console.log("получили   "+string);
                    obj = JSON.parse(body);
                });
                response.on ('end', function(chunck:any) {
                    console.log('Response ended');
                });
            });
            req.end();
       player.show();
        player.update(obj.x, obj.y);

        for(let i = food.length - 1; i >= 0; i--) {
            food[i].show();
            if(player.eats(food[i])) {
                food.splice(i, 1);
            }
        }
    }

}

const sketchInst = new p5(sketch);
