const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const app = express();
app.use(function (require, response,next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin',require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

let player;
const food = [];

app.get("/",(request, response) => {
    // response.send('отправлен запрос');
    let obj = {
        "x": +request.query.x+10,
        "y" : +request.query.y+10
    }
    let string = JSON.stringify(obj);
    response.send(string);
}); app.listen(3000, function() {
    console.log("сервер запущен");
});