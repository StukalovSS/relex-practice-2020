const Circle = require('./circle');
const lerp = require('lerp');

module.exports = class Player extends Circle {
    constructor(x, y, r, id) {
        super(x, y, r);
        this.id = id;
    }

}