"use strict";
exports.__esModule = true;
var accordion_1 = require("./accordion");
require("../css/style.css");
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
var Image = /** @class */ (function () {
    function Image(img, cathegory) {
        this.img = img;
        this.cathegory = cathegory;
    }
    return Image;
}());
var divWithMainImage = document.createElement('div'), divWithPrevues = document.createElement('div'), gallery = document.getElementById('gallery'), mainImage = createImg('', ['main-image']), imageSources = [{
        sources: [first_jpg_1["default"], second_jpg_1["default"], third_jpg_1["default"], fourth_jpg_1["default"], fifth_jpg_1["default"]],
        cathegory: 'puppy'
    },
    {
        sources: [first_jpg_2["default"], second_jpg_2["default"], third_jpg_2["default"], fourth_jpg_2["default"], fifth_jpg_2["default"]],
        cathegory: 'landskape'
    },
    {
        sources: [first_jpg_3["default"], second_jpg_3["default"], third_jpg_3["default"], fourth_jpg_3["default"], fifth_jpg_3["default"]],
        cathegory: 'still-live'
    },
    {
        sources: [first_jpg_4["default"], second_jpg_4["default"], third_jpg_4["default"], fourth_jpg_4["default"], fifth_jpg_4["default"]],
        cathegory: 'car'
    },
    {
        sources: [first_jpg_5["default"], second_jpg_5["default"], third_jpg_5["default"], fourth_jpg_5["default"], fifth_jpg_5["default"]],
        cathegory: 'animal'
    }], allImages = [];
function createImg(src, classList) {
    if (classList === void 0) { classList = []; }
    var img = document.createElement('img');
    for (var _i = 0, _a = Array.from(classList); _i < _a.length; _i++) {
        var className = _a[_i];
        img.classList.add(className);
    }
    img.setAttribute('src', src);
    return img;
}
function askCaptcha() {
    var a = Math.round(Math.random() * 100), b = Math.round(Math.random() * 100), operations = ['+', '-', '*'], operationIndex = Math.round(Math.random() * 3 - 0.5), userAnswer = +prompt(a + ' ' + operations[operationIndex] + ' ' + b), res;
    switch (operationIndex) {
        case 0:
            res = a + b;
            break;
        case 1:
            res = a - b;
            break;
        case 2:
            res = a * b;
            break;
    }
    if (userAnswer !== res) {
        deleteBodyElements(document.body);
    }
}
function deleteBodyElements(container) {
    for (var _i = 0, _a = Array.from(container.children); _i < _a.length; _i++) {
        var elem = _a[_i];
        deleteBodyElements.displeysStyles.push(elem.style.display);
        elem.style.display = 'none';
    }
}
deleteBodyElements.displeysStyles = [];
deleteBodyElements["return"] = function () {
    for (var _i = 0, _a = Array.from(document.body.children); _i < _a.length; _i++) {
        var elem = _a[_i];
        elem.style.display = deleteBodyElements.displeysStyles.shift();
    }
};
function changeImage(src) {
    allImages[changeImage.curIndex].img.classList.remove('curent-image');
    changeImage.curIndex = Array.from(allImages).map(function (image) { return image.img.src; }).indexOf(src);
    allImages[changeImage.curIndex].img.classList.add('curent-image');
    mainImage.src = src;
}
changeImage.curIndex = 0;
function enlargeOnScroll(event) {
    var transform = event.target.style.transform, scale = transform === '' ? 1 : +transform.slice(6, transform.length - 1);
    if (event.deltaY < 0) {
        event.target.style.transform = "scale(" + scale * 1.05 + ")";
    }
    else if (scale > 1) {
        event.target.style.transform = "scale(" + scale * 0.95 + ")";
    }
}
function addImages(imageSources) {
    allImages.splice(0, allImages.length);
    for (var _i = 0, _a = imageSources.sources; _i < _a.length; _i++) {
        var src = _a[_i];
        var img = new Image(createImg(src, ['preview-image']), imageSources.cathegory);
        divWithPrevues.appendChild(img.img);
        allImages.push(img);
    }
}
for (var _i = 0, imageSources_1 = imageSources; _i < imageSources_1.length; _i++) {
    var images = imageSources_1[_i];
    Object.defineProperty(images, 'cathegory', {
        enumerable: false
    });
}
for (var _a = 0, imageSources_2 = imageSources; _a < imageSources_2.length; _a++) {
    var images = imageSources_2[_a];
    addImages(images);
}
divWithPrevues.id = 'container-preview';
gallery.appendChild(divWithMainImage);
gallery.appendChild(divWithPrevues);
divWithMainImage.appendChild(mainImage);
changeImage(allImages[0].img.src);
for (var _b = 0, allImages_1 = allImages; _b < allImages_1.length; _b++) {
    var img = allImages_1[_b];
    img.img.addEventListener('click', function (event) {
        changeImage(event.target.src);
    });
}
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        var index = (changeImage.curIndex + allImages.length - 1) % allImages.length;
        changeImage(allImages[index].img.src);
    }
    else if (event.code === 'ArrowRight') {
        var index = (changeImage.curIndex + 1) % allImages.length;
        changeImage(allImages[index].img.src);
    }
});
setInterval(function () {
    var index = (changeImage.curIndex + 1) % allImages.length;
    changeImage(allImages[index].img.src);
}, 10000);
mainImage.addEventListener('click', function (event) {
    var img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = '100vh';
    img.src = event.target.src;
    img.addEventListener('wheel', function (event) {
        enlargeOnScroll(event);
    });
    img.addEventListener('click', function (event) {
        event.target.remove();
        deleteBodyElements["return"]();
    });
    deleteBodyElements(document.body);
    document.body.appendChild(img);
});
var cathegoryCont = document.getElementById('container-with-cathegories'), cathegoryBtn = document.getElementById('cathegory-btn'), cathegoryCheckBoxes = cathegoryCont.children[1].children;
cathegoryBtn.addEventListener('click', function () {
    var divWithCheckBoxes = cathegoryCont.children[1], displayStyle = divWithCheckBoxes.style.display, deleteList = function () {
        //document.removeEventListener( 'mousedown', deleteList );
        divWithCheckBoxes.style.display = 'none';
    };
    if (displayStyle === 'none' || displayStyle === '') {
        //document.addEventListener( 'mousedown', deleteList);
        divWithCheckBoxes.style.display = 'block';
    }
    else {
        deleteList();
    }
});
for (var _c = 0, _d = Array.from(cathegoryCheckBoxes); _c < _d.length; _c++) {
    var checkBox = _d[_c];
    checkBox.addEventListener('change', function (event) {
        // deleteBodyElements(divWithPrevues);
        // let cathegories: Image[] = [];
        // for (let cb of Array.from( cathegoryCheckBoxes ){
        // 	if (cb.isChecked)
        // }
        console.log(event);
    });
}
document.body.appendChild(accordion_1["default"](['Button 1', 'Button 2', 'Button 3'], ['Example 1', 'Example 2', 'Example 3']));
//askCaptcha();
