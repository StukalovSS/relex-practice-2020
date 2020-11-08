const p5 = require('../node_modules/p5/lib/p5');
const http = require('http');
import { resolve } from 'path';
import { Circle } from './circle';

let code: string,
    players: any = [],
    food: any = [],

    serverPlayers: any = [],
    serverFood: any = [],

    indCurrPlayer: number,
    zoom: number = 1,
    w: number, h: number;

let options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '',
    method: 'GET'
};

const sketch = (s: typeof p5) => {
    s.preload = () => {
        s.loadJSON('http://127.0.0.1:3000/createPlayer?name=first', (data: any) => {
            code = data.codePlayer;
            w = data.w;
            h = data.h;

            s.loadJSON(`http://127.0.0.1:3000/getState?code=${code}&x=0&y=0`, (d: any) => {
                indCurrPlayer = d.currentPlayerIndex;
                serverFood = d.playerState.food;
                serverPlayers = d.playerState.players;
            })
        });
    }
    s.setup = () => {
        s.createCanvas(w, h);
        s.background(255);
    }
    s.draw = () => {
        s.background(255);

        food = [];
        for (let i = 0; i < serverFood.length; i++) {
            food[i] = new Circle(serverFood[i].x, serverFood[i].y, serverFood[i].r, s, false, serverFood[i].color);
        }

        players = [];
        for (let i = 0; i < serverPlayers.length; i++) {
            players[i] = new Circle(serverPlayers[i].x, serverPlayers[i].y, serverPlayers[i].r, s, serverPlayers[i].eaten, serverPlayers[i].color);
        }

        s.translate(s.width / 2, s.height / 2);

        let newzoom = 36 / serverPlayers[indCurrPlayer].r;
        zoom = s.lerp(zoom, newzoom, 0.0004);
        s.scale(zoom);

        s.translate(-serverPlayers[indCurrPlayer].x, -serverPlayers[indCurrPlayer].y);

        // for (let i = -s.width - 1000; i < s.width + 1000; i = i + 50) {
        //     s.line(i, -s.height - 1000, i, s.height + 1000);
        //     s.stroke(126);
        // }
        // for (let i = -s.height - 1000; i < s.height + 1000; i = i + 50) {
        //     s.line(-s.width - 1000, i, s.width + 1000, i);
        //     s.stroke(126);
        // }
        for (let i = -s.width; i < s.width; i = i + 50) {
            s.line(i, -s.height, i, s.height);
            s.stroke(126);
        }
        for (let i = -s.height; i < s.height; i = i + 50) {
            s.line(-s.width, i, s.width, i);
            s.stroke(126);
        }

        for (let i = 0; i < food.length; i++) {
            food[i].show();
        }

        for (let i = players.length - 1; i >= 0; i--) {
            if (!players[i].eaten) {
                players[i].show();
            }
        }

        coordPlayer(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
    }
}
const sketchInst = new p5(sketch);

let serverData: any;
function coordPlayer(mx: number, my: number) {
    options.path = '/getState?code=' + code + '&x=' + mx + '&y=' + my;
    let req = http.request(options, (res: any) => {
        res.on('data', (body: any) => {
            serverData = JSON.parse(new TextDecoder("utf-8").decode(body));
            indCurrPlayer = serverData.currentPlayerIndex;
            serverFood = serverData.playerState.food;
            serverPlayers = serverData.playerState.players;
        });
        res.on('end', () => {
            console.log('req');
        });
    });
    req.end();
}
