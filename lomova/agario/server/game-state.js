const Player = require('./player');
const Circle = require('./circle');
const Vector = require('./vector');

module.exports = class GameState {
    food = [];
    players = [];
    index_player = 0;
    targets = [];
    map = new Map();

    constructor(width, height, colors) {
        this.width = width;
        this.height = height;
        this.colors = colors;
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    color() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    init(rFood) {
        for (let i = 0; i < 100; i++) {
            this.food.push(new Circle(this.random(-this.width + rFood, this.width - rFood), this.random(-this.height + rFood, this.height - rFood), rFood, this.color()));
        }
    }

    addPlayer(codePlayer, namePlayer, rPlayer) {
        this.map.set(codePlayer, this.index_player);

        let x_0 = this.random(-this.width + rPlayer, this.width - rPlayer),
            y_0 = this.random(-this.height + rPlayer, this.height - rPlayer);

        this.players.push(new Player(x_0, y_0, rPlayer, this.color(), namePlayer));
        this.targets.push(new Vector(x_0, y_0));

        this.index_player++;
    }

    addTarget(x_1, y_1, code) {
        this.targets[this.map.get(code)] = new Vector(x_1, y_1);
    }

    updateState() {
        for (let i = 0; i < this.players.length; i++) {
            if (!this.players[i].eaten) {
                this.players[i].update(this.targets[i].x, this.targets[i].y, this.width, this.height);
            }

            this.food.forEach((foodItem, j) => {
                if (!this.players[i].eaten) {
                    if (this.players[i].eatsFood(foodItem, this.width, this.height)) {
                        this.food.splice(j, 1);
                    }
                }
            })

            this.players.forEach((otherPlayer) => {
                if (!otherPlayer.eaten) {
                    if (this.players[i].eatsOtherPlayer(otherPlayer)) {
                        otherPlayer.eaten = true;
                    }
                }
            })
        }
    }
}