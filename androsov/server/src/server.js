// let player = new Player( Math.round( -2000 + Math.random() * 4000 ), Math.round( -2000 + Math.random() * 4000 )),
//     food = [];

// for (let i = 0; i < 1000; i++) {
//     food[i] = new Food(s);
// }



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
    let food = [];
    for (let i = 0; i < 1000; i++) {
        food[i] = {
            x: Math.round( -2000 + Math.random() * 4000 ),
            y: Math.round( -2000 + Math.random() * 4000 )
        };
    }

    
    response.send(JSON.stringify({
        x: Math.round( -2000 + Math.random() * 4000 ),
        y: Math.round( -2000 + Math.random() * 4000 ),
        food: food
    }));
});

app.listen(6000, function() {
    console.log("Start server");
});
