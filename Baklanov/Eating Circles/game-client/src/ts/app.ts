const p5 = require('../../node_modules/p5/lib/p5');
const http = require('http');
import { Circle } from './circle';
import { LeaderBoard } from './leaders-board';
import { Player } from './player';
import { StartPage } from './start-page';

/**
 * Стили
 */
const documentStyles = require('../styles/document.css');
const leadersBoardStyles = require('../styles/leaders-board.css');
const startPageStyles = require('../styles/start-page.css');
const gameOverScreenStyles = require('../styles/game-over-screen.css')

window.location.href = '/?#';
const leaderBoard = new LeaderBoard();
const startPage = new StartPage();
const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '',
    method: 'Get'
};

let playerId: string;
let width: number;
let height: number;
let playerIndex: number;
let food: any;
let players: any;
let serverPlayers: any;
let serverFood: any;
let zoom = 1.8; // оптимальное значение: 1.8
let newzoom = zoom;
let serverResp: any;
let prevR: number;
let nickname: string;
let color: any;

/**
 * Обрабатывает форму и инициализирует игру, если форма заполнена правильно.
 */
document.getElementById('playerForm').addEventListener('submit', () => {
    nickname = startPage.getNickname();
    color = startPage.getColor();
    startPage.hide();
    const sketchInst = new p5(sketch);
});

/**
 * Отправляет координаты курсора мыши и получает новые координаты игрока
 * @param mx положение мыши по X
 * @param my положение мыши по Y
 */
function sendData(mx: number, my: number): void {
    options.path = '/get_state?id=' + playerId + '&x=' + mx + '&y=' + my;
    const req = http.request(options, (res: any) => {
        let data: any;
        res.on('data', (body: any) => {
            if (!data) {
                data = body;
            }
            else {
                data += body;
            }
        });
        res.on('end', () => {
            serverResp = JSON.parse(data);
            playerIndex = serverResp.playerIndex;
            serverFood = serverResp.food;
            serverPlayers = serverResp.players;
            leaderBoard.players = serverResp.leadersBoardPlayers;
        });
    });
    req.end();
}

const sketch = (s: typeof p5) => {
    let FixedsysFont: any;
    /**
     * Перед началом отрисовки получает все необходимые данные
     */
    s.preload = () => {
        FixedsysFont = s.loadFont('./assets/Fixedsys.ttf');
        s.loadJSON(`http://127.0.0.1:3000/create_player?nickname=${nickname}&color=${color}`, (response: any) => {
            playerId = response.playerId;
            width = response.width;
            height = response.height;

            s.loadJSON(`http://127.0.0.1:3000/get_state?id=${playerId}&x=${Number.EPSILON}&y=${Number.EPSILON}`, (response: any) => {
                serverFood = response.food;
                playerIndex = response.playerIndex;
                serverPlayers = response.players;
                leaderBoard.players = response.leadersBoardPlayers;
            })
        });
    }
    s.setup = () => {
        s.createCanvas(width, height);
        s.background('#f2fbff');
        s.frameRate(64);
        s.textFont(FixedsysFont);
        leaderBoard.showBoard(nickname);
    }

    function stopDraw(): void {
        s.noLoop();
    }

    /**
     * Выполняет отрисовку 
     */
    s.draw = () => {
        s.background('#f2fbff');
        if (!serverPlayers[playerIndex].isLife) {
            stopDraw();
        }
        food = [];
        for (let i = 0; i < serverFood.length; i++) {
            food[i] = new Circle(
                serverFood[i].x, serverFood[i].y,
                serverFood[i].r, s, serverFood[i].color);
        }
        players = [];
        for (let i = 0; i < serverPlayers.length; i++) {
            if (serverPlayers[i].isLife) {
                const player = new Player(
                    serverPlayers[i].x, serverPlayers[i].y,
                    serverPlayers[i].r, s, serverPlayers[i].nickname,
                    serverPlayers[i].color, serverPlayers[i].isLife);
                players.push(player);
            }
        }
        s.translate(s.width / 2, s.height / 2);
        if (prevR != serverPlayers[playerIndex].r) {
            newzoom -= 0.0065;
        }
        zoom = s.lerp(zoom, newzoom, 0.1);
        s.scale(zoom);
        s.translate(-serverPlayers[playerIndex].x, -serverPlayers[playerIndex].y);
        for (let i = -s.width; i < s.width; i = i + 50) {
            s.line(i, -s.height, i, s.height);
            s.stroke('#c8d0d3');
        }
        for (let i = -s.height; i < s.height; i = i + 50) {
            s.line(-s.width, i, s.width, i);
            s.stroke('#c8d0d3');
        }

        for (let i = 0; i < food.length; i++) {
            food[i].show();
        }
        for (let i = players.length - 1; i >= 0; i--) {
            players[i].show();
        }
        prevR = serverPlayers[playerIndex].r;

        leaderBoard.update(nickname);

        sendData(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
    };

};
