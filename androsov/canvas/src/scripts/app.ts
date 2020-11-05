import { drawLine } from './function-graph/graphics';
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
async function sendResponse(path: string, args: object, callback: (req: object) => void) {
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

const canvas = document.getElementById('field') as HTMLCanvasElement;
canvas.width = document.body.clientWidth -  9;
canvas.height = document.documentElement.clientHeight - 9;
const render = canvas.getContext('2d');
render.fillStyle = '#4e9c5c';
render.fillRect(0, 0, canvas.width, canvas.height);
for (let i = 0; i < canvas.width; i += 100) {
    drawLine(i, 0, i, canvas.height, render);
}
for (let i = 0; i < canvas.height; i += 100) {
    drawLine(0, i, canvas.width, i, render);
}
