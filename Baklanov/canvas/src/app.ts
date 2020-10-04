const p5 = require('../node_modules/p5/lib/p5');
const http = require('http');

import {Circle} from './circle';

let player: any;
const food: any = [];
let zoom: number = 1;
const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(220);
        player = new Circle(0, 0, 36, s);
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
        
        player.show();
        player.update();

        for(let i = food.length - 1; i >= 0; i--) {
            food[i].show();
            if(player.eats(food[i])) {
                food.splice(i, 1);
            }
        }
    }

}

const sketchInst = new p5(sketch);

const options = {
    hostname:'127.0.0.1',
    port: 3000,
    path: '',
    method :'Get'
}
document.addEventListener("mousemove", function(event) {
    options.path =  '/?x=' + event.clientX +'&y=' + event.clientY;
    console.log("что посылали   " +options.path);
    let req = http.request(options, function send (response :any) {
        response.on('data', function (body:any) {
            let string = new TextDecoder("utf-8").decode(body);
            //let obj = JSON.parse(body);
            console.log("что приняли   " + string);
        });
        response.on ('end', function(chunck:any) {
            console.log('Response ended');
            req;
        });
    });
    req.end();
})