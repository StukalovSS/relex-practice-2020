export class LeaderBoard {
    leadersBoard: HTMLElement;
    players: any;
    maxPlayers: number = 7;

    private getPlayerIndex(nickname: string): number {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].nickname == nickname) { return i };
        }
    }

    constructor() {
        this.leadersBoard = <HTMLElement>document.getElementById("leader-board-players");
    }

    init(nick: string): void {
        let Playerindex = this.getPlayerIndex(nick);
        if (Playerindex < this.maxPlayers) {
            for (let i = 0; i < this.players.length; i++) {
                if (i != Playerindex) {
                    let inner: string = `${i + 1}. ` + this.players[i].nickname;
                    this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                }
                if (i == Playerindex) {
                    let inner = `${i + 1}. ` + this.players[i].nickname
                    this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                    this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
                }
            }
            if (this.players.length < this.maxPlayers) {
                for (let i = 0; i < this.maxPlayers - this.players.length; i++) {
                    this.leadersBoard.appendChild(document.createElement("span"));
                }
            }
        }
        if (Playerindex >= this.maxPlayers) {
            for (let i = 0; i < this.maxPlayers - 1; i++) {
                let inner: string = `${i + 1}. ` + this.players[i].nickname;
                this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
            }
            let inner = `${Playerindex + 1}. ` + this.players[Playerindex].nickname
            this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
            this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
        }
    }

    showBoard(nickname: string): void {
        let leadersBoardCon = <HTMLElement>document.getElementById("leader-board-container");
        leadersBoardCon.classList.add('showBoard');
        this.init(nickname);
    };

    update(nick: string): void {
        let Playerindex = this.getPlayerIndex(nick);
        let LeadersBordsRows = this.leadersBoard.getElementsByTagName('span');
        if (Playerindex < this.maxPlayers) {
            
            if (this.players.length < this.maxPlayers) {
                for (let i = 0; i < this.players.length; i++) {
                    if (i != Playerindex) {
                        let inner: string = `${i + 1}. ` + this.players[i].nickname;
                        if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                            LeadersBordsRows[i].classList.remove('leader-board-current-player');
                        }
                        LeadersBordsRows[i].innerHTML = inner;
                    }
                    if (i == Playerindex) {
                        let inner = `${i + 1}. ` + this.players[i].nickname
                        LeadersBordsRows[i].innerHTML = inner;
                        LeadersBordsRows[i].classList.add('leader-board-current-player');
                    }
                }
            } 
            
            if (this.players.length >= this.maxPlayers) {
                for (let i = 0; i < this.maxPlayers; i++) {
                    if (i != Playerindex) {
                        let inner: string = `${i + 1}. ` + this.players[i].nickname;
                        if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                            LeadersBordsRows[i].classList.remove('leader-board-current-player');
                        }
                        LeadersBordsRows[i].innerHTML = inner;
                    }
                    if (i == Playerindex) {
                        let inner = `${i + 1}. ` + this.players[i].nickname
                        LeadersBordsRows[i].innerHTML = inner;
                        LeadersBordsRows[i].classList.add('leader-board-current-player');
                    }
                }
            }
        }

        if (Playerindex >= this.maxPlayers) {
            for (let i = 0; i < this.maxPlayers - 1; i++) {
                let inner: string = `${i + 1}. ` + this.players[i].nickname;
                if (LeadersBordsRows[i].classList.contains('leader-board-current-player')) {
                    LeadersBordsRows[i].classList.remove('leader-board-current-player');
                }
                LeadersBordsRows[i].innerHTML = inner;
            }
            let inner = `${Playerindex + 1}. ` + this.players[Playerindex].nickname
            LeadersBordsRows[LeadersBordsRows.length - 1].innerHTML = inner;
            LeadersBordsRows[LeadersBordsRows.length - 1].classList.add('leader-board-current-player');
        }
    }
}