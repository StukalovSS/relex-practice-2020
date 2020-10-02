import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(s: any) {
        super(s.random(- 1990, 1990), 
            s.random(- 1990, 1990) , 10, s);
    }

    isEated() {
        this.pos.x = this.s.random(-1990, 1990);
        this.pos.y = this.s.random(-1990, 1990);
    }
}