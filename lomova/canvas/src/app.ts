<<<<<<< HEAD
// import p5 from 'p5';
import { Circle } from './circle';
const p5 = require('../node_modules/p5/lib/p5');
const http = require('http');
import { send } from 'process';
// import { Circle } from './circle';

let mx, my;
let newObj: any = [];
let player: any;
const food: any = [];
let zoom: number = 1;
=======
const p5 = require('../node_modules/p5/lib/p5');
const http = require('http');
const lerp = require('lerp');
import { Circle } from './circle';




let id: any = 0; //id текущего клиента
//Первый запрос 
let reqFirst = http.request(
    {
        hostname: '127.0.0.1',
        port: '3000',
        path: '/new_player',
        method: 'GET'
    }, function (res: any) {
        res.on('data', function (body: any) {
            id = JSON.parse((new TextDecoder("utf-8").decode(body))).id;
            console.log(id);
        });
        res.on('end', function (ch: any) {
            console.log("succesfull");
        });
    });
reqFirst.end();





let newData: any; // инфа с сервера о еде и игроках
let tempPlayer = { x: 0, y: 0, r: 0 }; // текущий игрок с сервера
let otherPlayers: any = [];  //остальные игроки 
let foodX: any = [], foodY: any = [], foodR: any = []; // еда с сервера

function coordPlayer(mx: number, my: number, s: any) {
    // console.log(mx, my);
    let options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/state?player_id=' + id + '&x=' + mx + '&y=' + my,
        method: 'GET'
    };
    let req = http.request(options, (res: any) => {
        res.on('data', (body: any) => {
            newData = JSON.parse(new TextDecoder("utf-8").decode(body));
            console.log(newData);
            // текущий игрок с сервера
            tempPlayer.x = newData.p.x;
            tempPlayer.y = newData.p.y;
            tempPlayer.r = newData.p.r;

            // еда с сервера
            for (let i = 0; i < newData.f.length; i++) {
                foodX[i] = newData.f[i].x;
                foodY[i] = newData.f[i].y;
                foodR[i] = newData.f[i].r;
            }

            // остальные игроки
            otherPlayers = newData.op;

        });
        res.on('end', () => {
            coordPlayer(s.mouseX - s.width / 2, s.mouseY - s.height / 2, s);
            console.log('Response Ended');
        });
    });
    req.end();
}
>>>>>>> c6c5835105c9d8c2375aa32fe2bd698588dcd8f4


let player: any; // текущий игрок
const food: any = []; // еда
let zoom = 1;

const sketch = (s: typeof p5) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.background(220);
<<<<<<< HEAD
        mx = s.mouseX;
        my = s.mouseY;

        const options = {
            hostname: '127.0.0.1',
            port: 3000,
            path: '/?x=' + mx + '&y=' + my,
            method: 'GET'
        };
        
        let req = http.request(options, function (res: any) {
            res.on('data', function (body: any) {
                var string = new TextDecoder("utf-8").decode(body);
                newObj = JSON.parse(string);

                for (let i = newObj.f.length - 1; i >= 0; i--) {
                    let obj = new Circle(newObj.f[i].x, newObj.f[i].y, newObj.f[i].r, s);
                    food.push(obj);
                }
                // если присваивать значение player здесь, то его не видно за пределами req
                // player = new Circle(newObj.p.x, newObj.p.y, newObj.p.r, s);
                // console.log(player);
            });
            res.on('end', function (chunck: any) {
                player = new Circle(newObj.p.x, newObj.p.y, newObj.p.r, s);
                console.log('Response ended');
            });
        });
        req.end();
    }
=======

        coordPlayer(s.mouseX, s.mouseY, s);

        player = new Circle(tempPlayer.x, tempPlayer.y, tempPlayer.r, s);
        for (let i = 0; i < foodX.length; i++) {
            food[i] = new Circle(foodX[i], foodY[i], foodR[i], s);
        }
>>>>>>> c6c5835105c9d8c2375aa32fe2bd698588dcd8f4


    }
    s.draw = () => {
        
        s.background(220);
        s.translate(s.width / 2, s.height / 2);

<<<<<<< HEAD
        // const newZoom: number = 36 / player.r;
        // zoom = s.lerp(zoom, newZoom, 0.0001);
        // s.scale(zoom);
        // s.translate(-player.pos.x, -player.pos.y);

=======
        player = new Circle(tempPlayer.x, tempPlayer.y, tempPlayer.r, s);
        for (let i = 0; i < foodX.length; i++) {
            food[i] = new Circle(foodX[i], foodY[i], foodR[i], s);
        }

        // console.log(zoom);
        // const newZoom = 36 / player.r;
        // console.log(newZoom);
        // zoom = lerp(newZoom, zoom, 0.1);
        // console.log(zoom);
        // s.scale(zoom);

        s.translate(-player.pos.x, -player.pos.y);
        // сетка
>>>>>>> c6c5835105c9d8c2375aa32fe2bd698588dcd8f4
        for (let i = -s.width; i < s.width; i = i + 50) {
            s.line(i, -s.height, i, s.height);
            s.stroke(126);
        }
        for (let i = -s.height; i < s.height; i = i + 50) {
            s.line(-s.width, i, s.width, i);
            s.stroke(126);
        }

<<<<<<< HEAD
        console.log(player);
        player.show();
        // player.update();
=======
        // показать текущего игрока
        player.pos.x = s.constrain(player.pos.x, -s.width + player.r, s.width - player.r);
        player.pos.y = s.constrain(player.pos.y, -s.height + player.r, s.height - player.r);
        player.show();

        // показать остальных игроков
        for (let i = 0; i < otherPlayers.length; i++) {
            let otherNewPlayer = new Circle(otherPlayers[i].x, otherPlayers[i].y, otherPlayers[i].r, s);
            otherNewPlayer.show();
        }
>>>>>>> c6c5835105c9d8c2375aa32fe2bd698588dcd8f4

        // показать еду
        for (let i = food.length - 1; i >= 0; i--) {
            food[i].show();
        }
    }

}

<<<<<<< HEAD
const sketchInst = new p5(sketch);

=======
const sketchInst = new p5(sketch);
>>>>>>> c6c5835105c9d8c2375aa32fe2bd698588dcd8f4
