const express = require("express");
const app = express();
app.use(function (require, response, next) {
    let origin = 'http://127.0.0.1/8080/';
    response.header('Access-Control-Allow-Origin', require.headers.origin);
    response.header('Access-Control-Allow-Origin-Methods', 'GET');
    response.header('Access-Control-Allow-Origin-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

app.get("/", (request, response) => {
    let obj = {
        x: Math.round( -2000 + Math.random() * 3000 ),
        y: Math.round( -2000 + Math.random() * 3000 )
    }
    response.send(JSON.stringify(obj));
});

app.listen(5000, function() {
    console.log("Start server");
});
