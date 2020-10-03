import Player from './game-objects/player';
import Food from './game-objects/food';

const p5 = require('../../node_modules/p5/lib/p5'),
    http = require('http'),
    options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/',
        method: 'GET'
    };

const req = http.request(options, (res: any) => {
    res.on('end', (chunck: any) => console.log('Response end'));

    res.on('data', (body: any) => {
        console.log('second')
        console.log(JSON.parse(new TextDecoder("utf-8").decode(body)));
    });
}).end();

async function drawField(x: number, y: number, callback: (req: object) => void) {
    const options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: `/?x=${x}&y=${y}`,
        method: 'GET'
    };

    const req = http.request(options, (res: any) => {
        res.on('data', (body: any) => {
            callback( JSON.parse(new TextDecoder("utf-8").decode(body)) );
        });

        res.on('end', (chunck: any) => console.log('Response end'));
    }).end();
}

let zoom: number = 1;


const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(document.body.clientWidth -  9, document.documentElement.clientHeight - 9);
        s.background(197, 227, 200);
    }

    s.draw = () => {

        drawField(0, 0, (object: object) => console.log(object));

        s.background(197, 227, 200);
        s.translate(s.width / 2, s.height / 2);
        // const newZoom = 36 / player.r;
        // zoom = s.lerp(zoom, newZoom, 0.1);

        // s.translate(-player.pos.x, -player.pos.y);
        for (let i = -2000; i <= 2000; i += s.width / 15) {
            s.line(i, -2000, i, 2000);
        }

        for (let i = -2000; i <= 2000; i += s.width / 15) {
            s.line(- 2000, i, 2000, i);
        }

        //console.log(s.mouseX, s.mouseY);
        
        // player.show();
        // for (let el of food) {
        //     el.show();
        // }
        // player.update();
        
        // for(let i = food.length - 1; i >= 0; i--) {
        //     food[i].show();
        //     player.eat(food[i]);
        // }
    }
}

const sketchInst = new p5(sketch);
