/**
 * Состояние игрока которое отправляется в ответ на запрос /get_state
 */
module.exports = class PlayerState {
    constructor(food = [], players = [], playerIndex) {
        this.food = food;
        this.players = players;
        this.leadersBoardPlayers = this.prepareToSort(this.players);
        this.leadersBoardPlayers = Array.prototype.slice.call(this.leadersBoardPlayers).sort(this.compare('points', -1));
        this.playerIndex = playerIndex;
    }

    /**
     * Метод для сортировки массива объектов, по определённому полю.
     * @param {string} field по какому полю объекта будет сортировка 
     * @param {number} order порядок сортировки -1 - по убыванию 1 - по возрастанию
     */
    compare(field, order) {
        let len = arguments.length;
        if (len === 0) {
            return (a, b) => (a < b && -1) || (a > b && 1) || 0;
        }
        if (len === 1) {
            switch (typeof field) {
                case 'number':
                    return field < 0 ?
                        ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
                        ((a, b) => (a < b && -1) || (a > b && 1) || 0);
                case 'string':
                    return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
            }
        }
        if (len === 2 && typeof order === 'number') {
            return order < 0 ?
                ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
                ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
        }
        let fields, orders;
        if (typeof field === 'object') {
            fields = Object.getOwnPropertyNames(field);
            orders = fields.map(key => field[key]);
            len = fields.length;
        } else {
            fields = new Array(len);
            orders = new Array(len);
            for (let i = len; i--;) {
                fields[i] = arguments[i];
                orders[i] = 1;
            }
        }
        return (a, b) => {
            for (let i = 0; i < len; i++) {
                if (a[fields[i]] < b[fields[i]]) return orders[i];
                if (a[fields[i]] > b[fields[i]]) return -orders[i];
            }
            return 0;
        };
    }

    /**
     * Выделяет из общего массива с игроками их ники и кол-во очков
     * @param {*} players массив игроков
     */
    prepareToSort(players) {
        let leaderBoardPlayers = [];
        players.forEach((player) => {
            if (player.isLife) {
                leaderBoardPlayers.push({
                    "nickname": player.nickname,
                    "points": player.points
                });
            }
        });
        return leaderBoardPlayers;
    }
}