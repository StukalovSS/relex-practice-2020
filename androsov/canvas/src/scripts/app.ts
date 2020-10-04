import Circle from './primitivs/circle';

const p5 = require('../../node_modules/p5/lib/p5'),
    http = require('http');


let responseForbiden: boolean = true;

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

function drawField(s: any, player: Circle, food: Circle[]): void {
    responseForbiden = true;

    s.background(197, 227, 200);
    const newZoom = 36 / player.r;
    zoom = s.lerp(zoom, newZoom, 0.1);

    for (let i = -2000; i <= 2000; i += s.width / 15) {
        s.line(i, -2000, i, 2000);
    }

    for (let i = -2000; i <= 2000; i += s.width / 15) {
        s.line(- 2000, i, 2000, i);
    }

    s.translate(-player.pos.x, -player.pos.y);

    player.show();
    for (let el of food) {
        el.show();
    }
}

let zoom: number = 1;


const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(document.body.clientWidth -  9, document.documentElement.clientHeight - 9);
        s.translate(s.width / 2, s.height / 2);
        sendResponse(null, (obj: any) => {
            const player = new Circle(obj.player.x, obj.player.y, obj.player.r, s),
            food: Circle[] = [];
            for (let el of obj.food) {
                food.push(new Circle(el.x, el.y, el.r, s));
            }
            drawField(s, player, food);
        } );
    }

    s.draw = () => {    
        s.translate(s.width / 2, s.height / 2);
        sendResponse({
            x: s.mouseX - s.width / 2, 
            y: s.mouseY - s.height / 2
        }, (obj: any) => {
            const player = new Circle(obj.player.x, obj.player.y, obj.player.r, s),
                food: Circle[] = [];

            for (let el of obj.food) {
                food.push(new Circle(el.x, el.y, el.r, s));
            }
            
            if (responseForbiden) {
                responseForbiden = false;
                drawField(s, player, food);
            }
            
        } );
    }
}

const sketchInst = new p5(sketch);
