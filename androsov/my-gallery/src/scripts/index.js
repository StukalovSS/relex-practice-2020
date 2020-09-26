"use strict";
exports.__esModule = true;
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
var Image_1 = require("./Image");
var prevues_1 = require("./prevues");
var divWithMainImage = document.createElement('div'), divWithPrevues = document.createElement('div'), gallery = document.getElementById('gallery'), mainImage = createImg('', ['main-image']), imageSources = [{
        sources: [first_jpg_1["default"], second_jpg_1["default"], third_jpg_1["default"], fourth_jpg_1["default"], fifth_jpg_1["default"]],
        cathegory: 'puppy'
    },
    { sources: [first_jpg_2["default"], second_jpg_2["default"], third_jpg_2["default"], fourth_jpg_2["default"], fifth_jpg_2["default"]],
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
    }].map(function (obj) {
    var arr = [];
    for (var _i = 0, _a = obj.sources; _i < _a.length; _i++) {
        var src = _a[_i];
        arr.push(new Image_1["default"](createImg(src, ['preview-image']), obj.cathegory));
    }
    return arr;
});
var prevues = new prevues_1["default"]([]);
function createImg(src, classList) {
    if (classList === void 0) { classList = []; }
    var img = document.createElement('img');
    for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {
        var className = classList_1[_i];
        img.classList.add(className);
    }
    img.setAttribute('src', src);
    return img;
}
function removeChildren(container) {
    removeChildren.curContainer = container;
    removeChildren.removedNodes = [];
    for (var _i = 0, _a = Array.from(container.children); _i < _a.length; _i++) {
        var elem = _a[_i];
        removeChildren.removedNodes.push(elem);
        elem.remove();
    }
}
removeChildren.curContainer = null;
removeChildren.removedNodes = [];
removeChildren["return"] = function () {
    for (var _i = 0, _a = removeChildren.removedNodes; _i < _a.length; _i++) {
        var elem = _a[_i];
        removeChildren.curContainer.appendChild(removeChildren.removedNodes.shift());
    }
};
function changeMainImage(src) {
    mainImage.src = src;
    prevues.changeCurImage(src);
}
function enlargeOnScroll(event) {
    var transform = event.target.style.transform, scale = transform === '' ? 1 : +transform.slice(6, transform.length - 1);
    if (event.deltaY < 0) {
        event.target.style.transform = "scale(" + scale * 1.05 + ")";
    }
    else if (scale > 1) {
        event.target.style.transform = "scale(" + scale * 0.95 + ")";
    }
}
function addPrevues(images) {
    for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
        var img = images_1[_i];
        divWithPrevues.appendChild(img.img);
        img.img.addEventListener('click', function (event) {
            changeMainImage(event.target.src);
        });
        prevues.add(img);
    }
}
function changePrevues(cathegories) {
    removeChildren(divWithPrevues);
    addPrevues(prevues.addVisibillity.apply(prevues, cathegories));
    mainImage.src = prevues.allVisibleImages[0].img.src;
}
function showNextElementByClicking(btn) {
    var nextSib = btn.nextElementSibling, displayStyle = nextSib.style.display, deleteList = function () {
        nextSib.style.display = 'none';
    };
    if (displayStyle === 'none' || displayStyle === '') {
        nextSib.style.display = 'block';
    }
    else {
        deleteList();
    }
}
function checkCheckboxes() {
    var cathegories = [];
    var container = Array.from(document.querySelectorAll('input'))
        .filter(function (elem) { return elem.type === 'checkbox'; });
    for (var _i = 0, _a = container; _i < _a.length; _i++) {
        var cb = _a[_i];
        if (cb.checked) {
            cathegories.push(cb.value);
        }
    }
    changePrevues(cathegories);
}
function appendCheckBox(cathegory) {
    if (cathegoryCheckBoxes
        .find(function (val) { return val.textContent.toLowerCase() === cathegory.toLowerCase(); }) === undefined) {
        var p = document.createElement('p'), cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = cathegory;
        cb.checked = true;
        p.appendChild(cb);
        p.innerHTML = p.innerHTML + ' ' + cathegory;
        checkboxes.appendChild(p);
        cb.addEventListener('change', checkCheckboxes);
        var option = document.createElement('option');
        option.textContent = cathegory;
        cathegoryNameField.nextElementSibling.appendChild(option);
    }
}
for (var _i = 0, imageSources_1 = imageSources; _i < imageSources_1.length; _i++) {
    var images = imageSources_1[_i];
    addPrevues(images);
}
divWithPrevues.id = 'container-preview';
gallery.appendChild(divWithMainImage);
gallery.appendChild(divWithPrevues);
divWithMainImage.appendChild(mainImage);
changeMainImage(prevues.allImages[0].img.src);
for (var _a = 0, _b = prevues.allImages; _a < _b.length; _a++) {
    var img = _b[_a];
    img.img.addEventListener('click', function (event) {
        prevues.changeCurImage(event.target.src);
        mainImage.src = event.target.src;
    });
}
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        changeMainImage(prevues.prev.img.src);
    }
    else if (event.code === 'ArrowRight') {
        changeMainImage(prevues.next.img.src);
    }
});
setInterval(function () {
    changeMainImage(prevues.next.img.src);
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
        removeChildren["return"]();
    });
    removeChildren(document.body);
    document.body.appendChild(img);
});
var cathegoryBtn = document.getElementById('cathegory-btn'), cathegoryCheckBoxes = Array.from(document.querySelectorAll('input')).filter(function (elem) { return elem.type === 'checkbox'; });
cathegoryBtn.addEventListener('click', function (event) {
    showNextElementByClicking(event.target);
});
for (var _c = 0, _d = Array.from(cathegoryCheckBoxes); _c < _d.length; _c++) {
    var checkBox = _d[_c];
    checkBox.addEventListener('click', checkCheckboxes);
}
document.getElementById('show-input-add-file-btn').addEventListener('click', function (event) {
    showNextElementByClicking(event.target);
});
var fileChooser = document.getElementById('img-file-chooser'), cathegoryNameField = document.getElementById('cathegory-textfield'), addFileBtn = document.getElementById('add-image'), checkboxes = document.getElementById('checkboxes');
addFileBtn.addEventListener('click', function () {
    var file = fileChooser.files[fileChooser.files.length - 1], reader = new FileReader(), cathegory = cathegoryNameField.value;
    if (file.type.startsWith('image/')) {
        var img_1 = document.createElement('img');
        reader.addEventListener('loadend', function (event) {
            img_1.src = event.target.result;
        });
        reader.readAsDataURL(file);
        appendCheckBox(cathegory);
        addPrevues([new Image_1["default"](img_1, cathegory)]);
    }
});
