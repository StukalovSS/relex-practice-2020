import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(s) {
        super(s.random(- 1990, 1990), 
            s.random(- 1990, 1990) , 10, s);

        this.isEated = function() {
            this.pos.x = s.random(-1990, 1990);
            this.pos.y = s.random(-1990, 1990);
        }
    }
}