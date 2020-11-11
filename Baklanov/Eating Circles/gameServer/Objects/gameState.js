const Circle = require('./circle');
const Player = require('./player');


module.exports = class GameState {
    food = [];
    players = [];
    index = 0;
    map = new Map();
    targets =[];
    constructor(height,width, foodSize) {
        this.height = height;
        this.width = width;
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    addTargetCoords (player_id,tarX,tarY) {
        this.targets[this.map.get(player_id)] = {'tarX':tarX, 'tarY':tarY};
    }
    init(foodSize,AmountOfFood) {
        for (let i = 0; i < AmountOfFood; i++) {
            let grain = new Circle(this.random(-this.height, this.height), this.random(-this.width, this.width), foodSize);
            this.food.push(grain);
        }
    }
    addPlayer(playerId, R_PLAYER) {
        this.map.set(playerId,this.index);
        let player = new Player(this.random(-this.height, this.height), this.random(-this.width, this.width), R_PLAYER, playerId);
        this.players.push(player);
        this.targets.push({'tarX':player.x, 'tarY':player.y});
        this.index++;
    }
}