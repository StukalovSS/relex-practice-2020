import Circle from '../primitivs/circle';

export default class Food extends Circle{
    constructor(s) {
        super(-s.width / 2 + s.random() * s.width , -s.height / 2 + s.random() * s.height , 10, s);

        this.isEated = function() {
            const newvel = s.createVector(-s.width / 2 + s.random() * s.width ,  -s.height / 2 + s.random() * s.height);
            newvel.setMag(3);
            this.vel.lerp(newvel, 0.1);
            this.pos.add(this.vel);
        }
    }
}