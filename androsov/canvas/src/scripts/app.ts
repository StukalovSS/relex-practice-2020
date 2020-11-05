import { Point, ScreenConventor } from './coordinates-conventer/screen-conventer';
import Line from './primitivs/line';
import Circle from './primitivs/circle';

const http = require('http');

/**
 * Отправка и обработка GET запроса на сервер.
 * 
 * @param path 
 *  Путь до ресурса.
 * @param args 
 *  Аргументы запроса.
 * @param callback 
 *  Функция, которая обрабатывае ответ сервера. В качестве аргумента принимает ответ.
 */
async function sendResponse(path: string, args: object, callback: (req: any) => void) {
    const options = {
        hostname: '127.0.0.1',
        port: 3000,
        path: `/${path}?${Object.entries(args).map(([key, val]) => key + '=' + val).join('&')}`,
        method: 'GET'
    };

    const req = http.request(options, (res: any) => {
        res.on('data', (body: any) => {
            let decode = new TextDecoder("utf-8").decode(body),
                fromJSON = JSON.parse(decode);
            
            callback(fromJSON);
        });

        res.on('end', () => console.log('Response end'));
    }).end();
}

function drawField(): void {
    render.fillStyle = '#4e9c5c';
    render.fillRect(leftupcorner.x, leftupcorner.y, 4000 + document.body.clientWidth, 4000 + document.body.clientHeight);
    for (let i = -2000; i <= 2000; i += 100) {
        new Line(sc.r2s(new Point(i, -2000)), sc.r2s(new Point(i, 2000))).draw(render);
    }
    for (let i = -2000; i <= 2000; i += 100) {
        new Line(sc.r2s(new Point(-2000, i)), sc.r2s(new Point(2000, i))).draw(render);
    }
}

function drawCirclesFromResponse(req: any) {
    for (const f of req.food) {
        render.fillStyle = 'white';
        const foodPos: Point = sc.r2s(new Point(f.x, f.y));
        new Circle(foodPos.x, foodPos.y, f.r).show(render);
    }

    for (const enemy of req.players) {
        render.fillStyle = '#ff4a4a';
        const anotherPlayerPos: Point = sc.r2s(new Point(enemy.x, enemy.y));
        new Circle(anotherPlayerPos.x, anotherPlayerPos.y, enemy.r).show(render);
    }

    const playerPos: Point = sc.r2s(new Point(req.player.x, req.player.y));
    player.x = playerPos.x;
    player.y = playerPos.y;
    player.r = req.player.r;
    render.fillStyle = '#72ff4f';
    player.show(render);
}

const canvas = document.getElementById('field') as HTMLCanvasElement;
canvas.width = document.body.clientWidth -  9;
canvas.height = document.documentElement.clientHeight - 9;
const render = canvas.getContext('2d');
const sc: ScreenConventor = new ScreenConventor();
const leftupcorner = sc.r2s(new Point(-2000 - document.body.clientWidth / 2, 2000 + document.body.clientHeight / 2));
const player: Circle = new Circle(0, 0, 36);

sendResponse('new_player', {}, req => {
    sc.centre = new Point(req.player.x, req.player.y);
    drawField();
    drawCirclesFromResponse(req);
});
