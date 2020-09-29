import p5 from 'p5';
export class Circle {
    constructor(x, y, r, s, color) {
        this.pos = s.createVector(x, y);
        this.r = r;
        this.vel = s.createVector(0, 0);
        // this.color = color;

        this.show = function () {
            // let c = s.color(s.random(colors));
            // s.fill(c);
            // s.fill(this.color);
            s.fill(255);
            s.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
        };

        this.update = function () {
            const newvel = s.createVector(s.mouseX - s.width / 2, s.mouseY - s.height / 2);
            newvel.setMag(3);
            this.vel.lerp(newvel, 0.1);
            this.pos.add(this.vel);
        };

        this.eats = function (other) {
            var d = p5.Vector.dist(this.pos, other.pos);
            if (d < this.r + other.r) {
                var sum = s.PI * this.r * this.r + s.PI * other.r * other.r;
                this.r = s.sqrt(sum / s.PI);
                return true;
            }
            else {
                return false;
            }
        };
    }
}