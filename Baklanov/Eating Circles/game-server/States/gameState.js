const Circle = require('../Objects/circle');
const Player = require('../Objects/player');


module.exports = class GameState {
    food = [];
    players = [];
    index = 0;
    map = new Map();
    targets = [];
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    addTargetCoords(player_id, tarX, tarY) {
        this.targets[this.map.get(player_id)] = { 'tarX': tarX, 'tarY': tarY };
    }
    init(foodSize, AmountOfFood, grainsColors) {
        for (let i = 0; i < AmountOfFood; i++) {
            let color = grainsColors[this.random(0, grainsColors.length)];
            let grain = new Circle(this.random(-this.width, this.width), this.random(-this.height, this.height), foodSize, color);
            this.food.push(grain);
        }
    }
    addPlayer(playerId, R_PLAYER, nickname, pColor) {
        this.map.set(playerId, this.index);
        let player = new Player(this.random(-this.width, this.width), this.random(-this.height, this.height), R_PLAYER, nickname, pColor, 0);
        this.players.push(player);
        this.targets.push({ 'tarX': player.x, 'tarY': player.y });
        this.index++;
    }
    updateSt() {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isLife) {
                this.players[i].updatePosition(this.targets[i].tarX, this.targets[i].tarY, this.width, this.height);
            }
            this.food.forEach((grain, j) => {
                if (this.players[i].isLife) {
                    if (this.players[i].eats(grain, 'food')) {
                        this.food.splice(j, 1);
                    }
                }
            });
            this.players.forEach((otherPlayer) => {
                if (otherPlayer.isLife) {
                    if (this.players[i].eats(otherPlayer, 'player')) {
                        otherPlayer.eaten = true;
                    }
                }
            });
        }
    }
}