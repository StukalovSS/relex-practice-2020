import { Point, ScreenConventor } from './screen-conventer/screen-conventer';
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

function drawField(width: number, height: number, scale: number): void {
    render.fillStyle = '#4e9c5c';
    leftupcorner.x *= scale;
    leftupcorner.y *= scale;
    render.fillRect(leftupcorner.x, leftupcorner.y, width, height);
    for (let i = -width / 2 * scale; i <= width / 2 * scale; i += 100 * scale) {
        new Line(sc.r2s(new Point(i, -height / 2 * scale)), sc.r2s(new Point(i, height / 2 * scale))).draw(render);
    }
    for (let i = -height / 2 * scale; i <= height / 2 * scale; i += 100 * scale) {
        new Line(sc.r2s(new Point(-width / 2 * scale, i)), sc.r2s(new Point(width / 2 * scale, i))).draw(render);
    }
}


function drawCircles(player: Circle, food: Circle[], enemies: Circle[]) {
    if (player.r > 200) {
        scale = 200 / player.r;
    }

    for (const f of food) {
        render.fillStyle = 'white';
        const foodPos: Point = sc.r2s(new Point(f.x * scale, f.y * scale));
        new Circle(foodPos.x, foodPos.y, f.r * scale).show(render);
    }

    for (const enemy of enemies) {
        render.fillStyle = '#ff4a4a';
        const anotherPlayerPos: Point = sc.r2s(new Point(enemy.x * scale, enemy.y * scale));
        new Circle(anotherPlayerPos.x, anotherPlayerPos.y, enemy.r * scale).show(render);
    }

    const playerPos: Point = sc.r2s(new Point(player.x * scale, player.y * scale));
    render.fillStyle = '#72ff4f';
    new Circle(playerPos.x, playerPos.y, player.r * scale).show(render);
}


/**
 * Отрисовка поля и кругов на поле.
 */
async function updateState(fieldWidth: number, fieldHeight: number) {
    const mouseScreenConventer = new ScreenConventor();
    const mousePos = mouseScreenConventer.s2r(new Point(mouseX, mouseY));
    sendResponse('get_state', {
        id: playerId,
        x: mousePos.x,
        y: -mousePos.y
    }, req => {
        sc.centre = new Point(req.player.x * scale, req.player.y * scale);
        drawField(fieldWidth, fieldHeight, scale);
        drawCircles(req.player, req.food, req.players);
        updateState(fieldWidth, fieldHeight);
    })
}

const FIELD_WIDTH = 4000;
const FIELD_HEIGHT = 4000;

const canvas = document.getElementById('field') as HTMLCanvasElement;
canvas.width = document.body.clientWidth -  9;
canvas.height = document.documentElement.clientHeight - 9;
const render = canvas.getContext('2d');
const sc: ScreenConventor = new ScreenConventor();
const leftupcorner = sc.r2s(new Point((-FIELD_WIDTH  - document.body.clientWidth) / 2 , (FIELD_HEIGHT + document.body.clientHeight) / 2));
let playerId: number = +sessionStorage.getItem('playerId');
let mouseX = 0;
let mouseY = 0;
let scale = 1;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

if (!playerId){
    sendResponse('new_player', {}, req => {
        sc.centre = new Point(req.player.x, req.player.y);
        playerId = req.player.id;
        sessionStorage.setItem('playerId', '' + playerId);
        drawField(FIELD_WIDTH, FIELD_HEIGHT, scale);
        drawCircles(req.player, req.food, req.players);
        updateState(FIELD_WIDTH, FIELD_HEIGHT);
    });
} else {
    updateState(FIELD_WIDTH, FIELD_HEIGHT);
}
