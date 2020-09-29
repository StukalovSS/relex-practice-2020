import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(s) {
        super(s.random(-s.width / 2 - 2000, s.width + 2000), 
            s.random(-s.height / 2 - 2000, s.height + 2000) , 10, s);

        this.isEated = function() {
            this.pos.x = s.random(-s.width / 2 - 2000, s.width + 2000);
            this.pos.y = s.random(-s.height / 2 - 2000, s.height + 2000);
        }
    }
}