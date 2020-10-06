const p5 = require('../node_modules/p5/lib/p5');
import { Circle } from './circle';
const http = require('http');

let player: any, food: Circle[] = [];
// let zoom: number = 1;
let mx = 0, my = 0;
let player_id = 0;

let foodx: number[] = [];
let foodr: number[] = [];
let foody: number[] = [];
let players: any = [];

let playersServer: any = [];

let tempP = { "x": 0, "y": 0, "r": 0 };

let options =
{
    hostname: '127.0.0.1',
    port: 3000,
    path: '/new_player',
    method: 'GET'
};

let req = http.request(options, function (res: any) {
    res.on('data', function (body: any) {
        let newp = JSON.parse(new TextDecoder("utf-8").decode(body));
        player_id = newp.id;
    });
    res.on('end', function () {
        console.log('Response Ended');
    });
});
req.end();


function sendCoord(x: number, y: number, s: any) {
    mx = x;
    my = y;
    let req = http.request({
        hostname: '127.0.0.1',
        port: 3000,
        path: '/state?player_id=' + player_id + '&x=' + mx + '&y=' + my,
        method: 'GET'
    }, function (res: any) {
        res.on('data', function (body: any) {
            let newObj = JSON.parse(new TextDecoder("utf-8").decode(body));
            // текущий игрок
            tempP.x = +newObj.pCurr.x;
            tempP.y = +newObj.pCurr.y;
            tempP.r = +newObj.pCurr.r;
            // все игроки
            for (let i = 0; i < newObj.allP.length; i++) {
                playersServer[i] = newObj.allP[i];
            }
            // еда
            for (let i = 0; i < 100; i++) {
                foody[i] = +newObj.f[i].y;
                foodx[i] = +newObj.f[i].x;
                foodr[i] = +newObj.f[i].r;
            }
        });
        res.on('end', function (chunck: any) {
            sendCoord(s.mouseX - s.width / 2, s.mouseY - s.height / 2, s);
            console.log(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
            console.log('Response Ended');
        });
    });
    req.end();
}

const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(220);
        sendCoord(0, 0, s);
        // все игроки
        for (let i = 0; i < playersServer.length; i++) {
            players[i] = new Circle(playersServer[i].x, playersServer.y, playersServer.r, s);
        }
        // текущий
        player = new Circle(tempP.x, tempP.y, tempP.r, s);
        // еда
        for (let i = 0; i < 100; i++) {
            food[i] = new Circle(foodx[i], foody[i], foodr[i], s);
        }
    }

    s.draw = () => {
        s.background(220);
        for (let i = -s.width; i < s.width; i = i + 50) {
            s.line(i, -s.height, i, s.height);
            s.stroke(126);
        }
        for (let i = -s.height; i < s.height; i = i + 50) {
            s.line(-s.width, i, s.width, i);
            s.stroke(126);
        }
        s.translate(s.width / 2, s.height / 2);

        // все игроки
        for (let i = 0; i < playersServer.length; i++) {
            players[i] = new Circle(playersServer[i].x, playersServer.y, playersServer.r, s);
        }
        // текущий
        player = new Circle(tempP.x, tempP.y, tempP.r, s);
        // еда
        for (let i = 0; i < 100; i++) {
            food[i] = new Circle(foodx[i], foody[i], foodr[i], s);
        }
        s.translate(-player.pos.x, -player.pos.y);

        player.show();

        for(let i = 0; i < players.length; i++) {
            players[i].show();
        }

        for (let i = food.length - 1; i >= 0; i--) {
            food[i].show();
        }
    }
}
const sketchInst = new p5(sketch);
