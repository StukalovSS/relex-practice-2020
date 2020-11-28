export class LeaderBoard {
    leadersBoard: HTMLElement;
    players: any;
    maxPlayers: number = 7;

    constructor() {
        this.leadersBoard = <HTMLElement>document.getElementById("leader-board-players");
    }

    boardInit(nickname: string): void {
        if (this.players.length <= this.maxPlayers) {
            for (let i = 0; i < this.players.length; i++) {
                let inner: string = `${i + 1}. ` + this.players[i].nickname;
                this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
            }
        }
        else {
            for (let i = 0; i < this.maxPlayers; i++) {
                if (i < this.maxPlayers - 2) {
                    if (this.players[i].nickname == nickname) {
                        let inner: string = `${i + 1}. ` + this.players[i].nickname;
                        this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                        this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
                    }
                    else {
                        let inner: string = `${i + 1}. ` + this.players[i].nickname;
                        this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                    }
                }
                if (i == this.maxPlayers - 2) {
                    let inner: string = '###';
                    this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                    if (this.players[this.players.length-1].nickname == nickname) {
                        inner = `${this.players.length + 1}. ` + this.players[this.players.length-1].nickname
                        this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                        this.leadersBoard.lastElementChild.classList.add('leader-board-current-player');
                    }
                    else {
                        inner = `${this.players.length + 1}. ` + this.players[i].nickname
                        this.leadersBoard.appendChild(document.createElement("span")).innerHTML = inner;
                    }
                }
            }
        }
    }

    showBoard(nickname: string): void {
        let leadersBoardCon = <HTMLElement>document.getElementById("leader-board-container");
        leadersBoardCon.classList.add('showBoard');
        this.boardInit(nickname);
    };

    update(): void {
        if (this.players.length <= 7) {
            if (this.players.length == this.leadersBoard.childNodes.length) {
                for (let i = 0; i < this.leadersBoard.childNodes.length; i++) {

                }
            }
        }
    };
}