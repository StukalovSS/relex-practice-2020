/**
 * Доска лидеров
 */
export class LeaderBoard {
    leadersBoard: HTMLElement;
    players: any;
    maxPlayers = 7;
    prevCountOfPlayers: number;

    private getPlayerIndex(nickname: string): number {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].nickname == nickname) { return i };
        }
    }

    constructor() {
        this.leadersBoard = (document.getElementById('leader-board-players') as HTMLElement);
    }

    /**
     * Выполянет создание строчек доски
     * @param nick ник игрока
     */
    init(nick: string): void {
        this.prevCountOfPlayers = this.players.length;
        const Playerindex = this.getPlayerIndex(nick);
        if (Playerindex < this.maxPlayers) {
            for (let i = 0; i < this.players.length; i++) {
                if (i != Playerindex) {
                    const inner = `${i + 1}. ` + this.players[i].nickname;
                    this.leadersBoard.appendChild(document.createElement('span')).innerHTML = inner;
                }
                if (i == Playerindex) {
                    const inner = `${i + 1}. ` + this.players[i].nickname;
                    this.leadersBoard.appendChild(document.createElement('span')).innerHTML = inner;
                    this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
                }
            }
            if (this.players.length < this.maxPlayers) {
                for (let i = 0; i < this.maxPlayers - this.players.length; i++) {
                    this.leadersBoard.appendChild(document.createElement('span'));
                }
            }
        }
        if (Playerindex >= this.maxPlayers) {
            for (let i = 0; i < this.maxPlayers - 1; i++) {
                const inner = `${i + 1}. ` + this.players[i].nickname;
                this.leadersBoard.appendChild(document.createElement('span')).innerHTML = inner;
            }
            const inner = `${Playerindex + 1}. ` + this.players[Playerindex].nickname;
            this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
            this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
        }
    }

    /**
     * Отображает доску и запускает инициализацию 
     */
    showBoard(nickname: string): void {
        const leadersBoardCon = document.getElementById('leader-board-container') as HTMLElement;
        leadersBoardCon.classList.add('showBoard');
        this.init(nickname);
    }

    private clearRows(): void {
        const LeadersBordsRows = this.leadersBoard.getElementsByTagName('span');
        for (let i = 0; i < LeadersBordsRows.length; i++) {
            LeadersBordsRows[i].innerHTML = '';
        }
    }

    private insertInner(LeadersBordsRows: any, numberOfPlayer: number, Playerindex: number): void {
        
    }

    /**
     * Обновляет данные на доске
     */
    update(nick: string): void {
        if (this.players.length != this.prevCountOfPlayers) {
            this.prevCountOfPlayers = this.players.length;
            this.clearRows();
        }
        const Playerindex = this.getPlayerIndex(nick);
        const LeadersBordsRows = this.leadersBoard.getElementsByTagName('span');
        if (Playerindex < this.maxPlayers) {
            let numberOfPlayers: number;
            if (this.players.length < this.maxPlayers) {
                numberOfPlayers = this.players.length;
                // for (let i = 0; i < this.players.length; i++) {
                //     if (i != Playerindex) {
                //         const inner: string = `${i + 1}. ` + this.players[i].nickname;
                //         if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                //             LeadersBordsRows[i].classList.remove('leader-board-current-player');
                //         }
                //         LeadersBordsRows[i].innerHTML = inner;
                //     }
                //     if (i == Playerindex) {
                //         const inner = `${i + 1}. ` + this.players[i].nickname;
                //         LeadersBordsRows[i].innerHTML = inner;
                //         LeadersBordsRows[i].classList.add('leader-board-current-player');
                //     }
                // }
            }

            if (this.players.length >= this.maxPlayers) {
                numberOfPlayers = this.maxPlayers;
                // for (let i = 0; i < this.maxPlayers; i++) {
                //     if (i != Playerindex) {
                //         const inner: string = `${i + 1}. ` + this.players[i].nickname;
                //         if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                //             LeadersBordsRows[i].classList.remove('leader-board-current-player');
                //         }
                //         LeadersBordsRows[i].innerHTML = inner;
                //     }
                //     if (i == Playerindex) {
                //         const inner = `${i + 1}. ` + this.players[i].nickname;
                //         LeadersBordsRows[i].innerHTML = inner;
                //         LeadersBordsRows[i].classList.add('leader-board-current-player');
                //     }
                // }
            }
            for (let i = 0; i < numberOfPlayers; i++) {
                    if (i != Playerindex) {
                        const inner: string = `${i + 1}. ` + this.players[i].nickname;
                        if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                            LeadersBordsRows[i].classList.remove('leader-board-current-player');
                        }
                        LeadersBordsRows[i].innerHTML = inner;
                    }
                    if (i == Playerindex) {
                        const inner = `${i + 1}. ` + this.players[i].nickname;
                        LeadersBordsRows[i].innerHTML = inner;
                        LeadersBordsRows[i].classList.add('leader-board-current-player');
                    }
                }
        }

        if (Playerindex >= this.maxPlayers) {
            for (let i = 0; i < this.maxPlayers - 1; i++) {
                const inner = `${i + 1}. ` + this.players[i].nickname;
                if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                    LeadersBordsRows[i].classList.remove('leader-board-current-player');
                }
                LeadersBordsRows[i].innerHTML = inner;
            }
            const inner = `${Playerindex + 1}. ` + this.players[Playerindex].nickname;
            LeadersBordsRows[LeadersBordsRows.length - 1].innerHTML = inner;
            LeadersBordsRows[LeadersBordsRows.length - 1].classList.add('leader-board-current-player');
        }
    }
}