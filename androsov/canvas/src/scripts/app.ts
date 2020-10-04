import Circle from './primitivs/circle';

const p5 = require('../../node_modules/p5/lib/p5'),
    http = require('http');

async function sendResponse(args: object, callback: (req: object) => void) {
    const options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: args === null ? '/' : `/?${Object.entries(args).map(([key, val]) => key + '=' + val).join('&')}`,
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
        sendResponse({}, (obj: object) => console.log(obj) );
    }

    s.draw = () => {
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
        
        sendResponse({}, (obj: object) => setTimeout((): void => console.log(obj), 1000) );
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
