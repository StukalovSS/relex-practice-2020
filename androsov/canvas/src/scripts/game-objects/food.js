import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(s) {
        super(s.random(-s.width / 2 - 3000, s.width + 3000), 
            s.random(-s.height / 2 - 3000, s.height + 3000) , 10, s);

        this.isEated = function() {
            this.pos.x = s.random(-s.width / 2 - 3000, s.width + 3000);
            this.pos.y = s.random(-s.height / 2 - 3000, s.height + 3000);
        }
    }
}