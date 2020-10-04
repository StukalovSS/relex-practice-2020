// const { response } = require("express");
// const { response } = require("express");
// const http = require ("http");

// http.createServer((request, response)=> {
//     response.end("hello world");
// }).listen (3000, "127.0.0.1", () => {
//     console.log("сервер начал слушать запросы на порту 3000" );
// })

// const os = require("os");
// let username = os.userInfo().username;
// console.log(username);

const express = require("express");
const { request } = require("http");

const app = express();
app.use(express.json());
// app.get("/",(request, response) => {
//     response.end('hello express');
// });
// app.listen(3000);
app.post('/ser', (request,response) => {
    console.log('Получен POST запрос.')
    console.log(request.body);
    response.end();
}); app.listen(3000);