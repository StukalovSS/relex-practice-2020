"use strict";
exports.__esModule = true;
var PrevueContainer = /** @class */ (function () {
    function PrevueContainer(images) {
        this.sortedImages = new Map();
        this.curIndex = 0;
        this.add.apply(this, images);
    }
    PrevueContainer.prototype.add = function () {
        var images = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            images[_i] = arguments[_i];
        }
        for (var _a = 0, images_1 = images; _a < images_1.length; _a++) {
            var img = images_1[_a];
            img.img.classList.add('preview-image');
            if (this.sortedImages.has(img.cathegory))
                this.sortedImages.get(img.cathegory).images.push(img);
            else
                this.sortedImages.set(img.cathegory, new Cathegory([img]));
        }
    };
    PrevueContainer.prototype.addVisibillity = function () {
        var cathegories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cathegories[_i] = arguments[_i];
        }
        this.curIndex = 0;
        var result = [];
        for (var _a = 0, _b = Array.from(this.sortedImages.keys()); _a < _b.length; _a++) {
            var cathegoryName = _b[_a];
            if (cathegories.includes(cathegoryName)) {
                this.sortedImages.get(cathegoryName).isShown = true;
                result.push.apply(result, this.sortedImages.get(cathegoryName).images);
            }
            else {
                this.sortedImages.get(cathegoryName).isShown = false;
            }
        }
        return result;
    };
    Object.defineProperty(PrevueContainer.prototype, "allVisibleImages", {
        get: function () {
            var result = [];
            for (var _i = 0, _a = Array.from(this.sortedImages.values()); _i < _a.length; _i++) {
                var cathegory = _a[_i];
                if (cathegory.isShown)
                    result.push.apply(result, cathegory.images);
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrevueContainer.prototype, "allImages", {
        get: function () {
            var result = [];
            for (var _i = 0, _a = Array.from(this.sortedImages.values()); _i < _a.length; _i++) {
                var cathegory = _a[_i];
                result.push.apply(result, cathegory.images);
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrevueContainer.prototype, "length", {
        get: function () {
            return this.allImages.length;
        },
        enumerable: false,
        configurable: true
    });
    PrevueContainer.prototype.changeCurImage = function (src) {
        for (var _i = 0, _a = this.allImages; _i < _a.length; _i++) {
            var image = _a[_i];
            image.img.classList.remove('curent-image');
        }
        this.curIndex = this.allVisibleImages.map(function (image) { return image.img.src; }).indexOf(src);
        if (this.curIndex === -1)
            throw new Error('No image with this src');
        this.allVisibleImages[this.curIndex].img.classList.add('curent-image');
    };
    Object.defineProperty(PrevueContainer.prototype, "curImage", {
        get: function () {
            return this.allVisibleImages[this.curIndex];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrevueContainer.prototype, "next", {
        get: function () {
            return this.allVisibleImages[(this.curIndex + 1) % this.allVisibleImages.length];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrevueContainer.prototype, "prev", {
        get: function () {
            var index = (this.curIndex + this.allVisibleImages.length - 1) % this.allVisibleImages.length;
            return this.allVisibleImages[index];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrevueContainer.prototype, "cathegories", {
        get: function () {
            return Array.from(this.sortedImages.keys());
        },
        enumerable: false,
        configurable: true
    });
    return PrevueContainer;
}());
exports["default"] = PrevueContainer;
var Cathegory = /** @class */ (function () {
    function Cathegory(images) {
        this.images = images;
        this.isShown = true;
    }
    return Cathegory;
}());
