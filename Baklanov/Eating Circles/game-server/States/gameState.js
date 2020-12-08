const Circle = require('../Objects/circle');
const Player = require('../Objects/player');
const Vector = require('../Objects/vector');

/**
 * Состояние игры.
 */
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

    /**
     * Добавляет целевые координаты игрока
     * @param {string} player_id ID игрока 
     * @param {number} tarX целевая координата x
     * @param {number} tarY целевая координата y
     */
    addTargetCoords(player_id, tarX, tarY) {
        this.targets[this.map.get(player_id)] = new Vector(tarX, tarY);
    }

    /**
     * Выполняет случайное распределение корма на игровом поле.
     * @param {number} foodSize размер одной еденицы еды
     * @param {number} AmountOfFood кол-во еды на поле
     * @param {array} grainsColors цвета доступные для еды
     */
    init(foodSize, AmountOfFood, grainsColors) {
        for (let i = 0; i < AmountOfFood; i++) {
            let color = grainsColors[this.random(0, grainsColors.length)];
            let grain = new Circle(
                this.random(-this.width, this.width),
                this.random(-this.height, this.height), foodSize, color);
            this.food.push(grain);
        }
    }

    /**
     * Выполняет добавление игрока на поле
     * @param {string} playerId ID игрока
     * @param {number} R_PLAYER радиус 
     * @param {*} nickname ник
     * @param {*} pColor цвет 
     */
    addPlayer(playerId, R_PLAYER, nickname, pColor) {
        this.map.set(playerId, this.index);
        let player = new Player(
            this.random(-this.width, this.width),
            this.random(-this.height, this.height), R_PLAYER, nickname, pColor, 0);
        this.players.push(player);
        this.targets.push(new Vector(player.x, player.y));
        this.index++;
    }

    /**
     * Реализует обновление координат игроков, поедание корма и игроков.
     */
    updateSt() {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isLife) {
                this.players[i].updatePosition(this.targets[i].x, this.targets[i].y, this.width, this.height);
            }
            else {
                this.players[i].r = 0;
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
                        otherPlayer.isLife = false;
                    }
                }
            });
        }
    }
}