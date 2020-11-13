"use strict";
exports.__esModule = true;
var Image_1 = require("./Image");
var first_jpg_1 = require("../img/puppies/first.jpg");
var second_jpg_1 = require("../img/puppies/second.jpg");
var third_jpg_1 = require("../img/puppies/third.jpg");
var fourth_jpg_1 = require("../img/puppies/fourth.jpg");
var fifth_jpg_1 = require("../img/puppies/fifth.jpg");
var first_jpg_2 = require("../img/landskapes/first.jpg");
var second_jpg_2 = require("../img/landskapes/second.jpg");
var third_jpg_2 = require("../img/landskapes/third.jpg");
var fourth_jpg_2 = require("../img/landskapes/fourth.jpg");
var fifth_jpg_2 = require("../img/landskapes/fifth.jpg");
var first_jpg_3 = require("../img/still-lifes/first.jpg");
var second_jpg_3 = require("../img/still-lifes/second.jpg");
var third_jpg_3 = require("../img/still-lifes/third.jpg");
var fourth_jpg_3 = require("../img/still-lifes/fourth.jpg");
var fifth_jpg_3 = require("../img/still-lifes/fifth.jpg");
var first_jpg_4 = require("../img/cars/first.jpg");
var second_jpg_4 = require("../img/cars/second.jpg");
var third_jpg_4 = require("../img/cars/third.jpg");
var fourth_jpg_4 = require("../img/cars/fourth.jpg");
var fifth_jpg_4 = require("../img/cars/fifth.jpg");
var first_jpg_5 = require("../img/animals/first.jpg");
var second_jpg_5 = require("../img/animals/second.jpg");
var third_jpg_5 = require("../img/animals/third.jpg");
var fourth_jpg_5 = require("../img/animals/fourth.jpg");
var fifth_jpg_5 = require("../img/animals/fifth.jpg");
function getImgSrc() {
    var createImg = function (src, classList) {
        if (classList === void 0) { classList = []; }
        var img = document.createElement('img');
        for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
            var className = classList_1[_i];
            img.classList.add(className);
        }
        img.setAttribute('src', src);
        return img;
    };
    return [{
            sources: [first_jpg_1["default"], second_jpg_1["default"], third_jpg_1["default"], fourth_jpg_1["default"], fifth_jpg_1["default"]],
            cathegory: 'puppies'
        },
        { sources: [first_jpg_2["default"], second_jpg_2["default"], third_jpg_2["default"], fourth_jpg_2["default"], fifth_jpg_2["default"]],
            cathegory: 'landscapes'
        },
        {
            sources: [first_jpg_3["default"], second_jpg_3["default"], third_jpg_3["default"], fourth_jpg_3["default"], fifth_jpg_3["default"]],
            cathegory: 'still-live'
        },
        {
            sources: [first_jpg_4["default"], second_jpg_4["default"], third_jpg_4["default"], fourth_jpg_4["default"], fifth_jpg_4["default"]],
            cathegory: 'cars'
        },
        {
            sources: [first_jpg_5["default"], second_jpg_5["default"], third_jpg_5["default"], fourth_jpg_5["default"], fifth_jpg_5["default"]],
            cathegory: 'animals'
        }].map(function (obj) {
        var arr = [];
        for (var _i = 0, _a = obj.sources; _i < _a.length; _i++) {
            var src = _a[_i];
            arr.push(new Image_1["default"](createImg(src, ['preview-image']), obj.cathegory));
        }
        return arr;
    });
}
exports["default"] = getImgSrc;
