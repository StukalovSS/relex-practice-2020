const Eat = require('./eat');
const Player = require('./player');

/**
 * Состояние игры.
 * Хранит данные игры и действия над ними.
 */
module.exports = class GamaState{

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.arrayEat = [];
        this.arrayPlayer = [];
        this.targets = []; // Целевое положение игроков.
        this.map = [];
    }

    /**
     * Инициализирует координаты корма на поле.
     */
    init() {
        for (let i = 0; i < 200; i++){
            const newEat = new Eat(Math.random() * (this.x2 - this.x1) + this.x1, Math.random() * (this.y2 - this.y1) + this.y1, 10);
            this.arrayEat.push(newEat);
        }
    }

    /**
     * Добавление нового игрока.
     * @param r Радиус игрока.
     * @param name Имя игрока.
     * @param code Уникальный код игрока.
     * @param ww Ширина рабочей области окна браузера клиента.
     * @param wh Высота рабочей области окна браузера клиента.
     */
    addNewPlayer(r, name, code) {
        const x = Math.random() * (this.x2 - this.x1 - r) + this.x1; 
        const y = Math.random() * (this.y2 - this.y1 - r) + this.y1;
        this.targets.push({
            x: x,
            y: y
        });
        this.arrayPlayer.push(new Player(x, y, r, name, true ));
        this.addPlayerOnMap(code);
    }

    addPlayerOnMap(code) {
        this.map.push( {
            key: code,
            index: this.arrayPlayer.length - 1
        });
    }

    /**
     * Поиск индекса игрока в массиве игроков.
     * @param code Уникальный код игрока.
     */
    findIndexPlayerByCode(code) {
        let index = -1;
        this.map.forEach(element => {
            if (element.key === code){
                index = element.index;
            }
        });
        return index;
    }

    /**
     * Обновление данных о состоянии игры. 
     */
    update() {
        this.arrayPlayer.forEach( (curPlayer, indexPlayer)  => {
            curPlayer.newСoordinates(this.targets[indexPlayer].x, this.targets[indexPlayer].y, Math.min(this.x1,this.x2), Math.min(this.y1,this.y2), Math.max(this.x1,this.x2), Math.max(this.y1,this.y2));

            if (curPlayer.living) {
                this.arrayEat.forEach( (eat, index) => {
                    if (curPlayer.eat(eat)) {
                        this.arrayEat.splice(index, 1);
                    }
                });

                this.arrayPlayer.forEach( (player, index) => {
                    if (this.arrayPlayer[index].living && indexPlayer != index){
                        if (curPlayer.eat(player)) {
                            this.arrayPlayer[index].living = false;
                        }
                    }
                });
            }
        });
    }

}