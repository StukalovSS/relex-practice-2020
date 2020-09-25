/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu-icon.svg */ "./src/img/menu-icon.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_menu_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n    position: relative;\r\n    font-family: 'Arial';\r\n    color: #3c3c3c;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 940px;\r\n    margin: 0 auto;\r\n    padding: 0 10px;\r\n    padding-top: 30px;\r\n    /* outline: 2px solid greenyellow; */\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    width: 184px;\r\n    /* outline: 2px solid blue; */\r\n}\r\n\r\n.gallery {\r\n    position: relative;\r\n    /* outline: 2px solid tomato; */\r\n}\r\n\r\n.open-menu {\r\n    cursor: pointer;\r\n    position: relative;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.open-menu::before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    content: \"\";\r\n    width: 53px;\r\n    height: 53px;\r\n    content: \"\";\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu {\r\n    position: absolute;\r\n    left: 22%;\r\n    top: 13%;\r\n    border: 5px solid #bed0df;\r\n    border-radius: 7px;\r\n}\r\n\r\n.menu__item {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    font-size: 20px;\r\n    color: #3c3c3c;\r\n    text-align: left;\r\n    padding: 9px;\r\n}\r\n\r\n.category__title {\r\n    position: relative;\r\n    padding-left: 33px;\r\n}\r\n\r\n.category__title--active:after {\r\n    position: absolute;\r\n    top: 29%;\r\n    left: 11%;\r\n    content: \"\";\r\n    width: 2px;\r\n    height: 19px;\r\n    background-color: #bed0df;\r\n}\r\n\r\n.category__title:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5%;\r\n    content: \"\";\r\n    width: 18px;\r\n    height: 2px;\r\n    background-color: #bed0df;\r\n}\r\n\r\n.category__list {\r\n    margin: 0;\r\n    margin-left: 21%;\r\n    padding: 0;\r\n    list-style: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.category__elem {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.main-image-container {\r\n    position: relative;\r\n}\r\n\r\n.main-image {\r\n    cursor: pointer;\r\n    width: 720px;\r\n    height: 530px;\r\n}\r\n\r\n.preview {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.preview-image:not(:last-child) {\r\n    margin-right: 10px;\r\n}\r\n\r\n.preview-image {\r\n    cursor: pointer;\r\n    width: 120px;\r\n    height: 120px;\r\n    opacity: 0.7;\r\n    border-radius: 50%;\r\n    box-shadow: 0 4px 20px black;\r\n}\r\n\r\n.image-select {\r\n    cursor: default;\r\n    opacity: 0.9;\r\n    border: 3px solid #bed0df;\r\n}\r\n\r\n.modal-add {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n    height: 192px;\r\n    border: 5px solid #bed0df;\r\n    border-radius: 7px;\r\n    padding: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.modal-add__close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    right: 3%;\r\n}\r\n\r\n.modal-add__close::before {\r\n    position: absolute;\r\n    right: 22%;\r\n    content: \"\";\r\n    width: 19px;\r\n    height: 2px;\r\n    background-color: #bed0df;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.modal-add__close:after {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 11px;\r\n    content: \"\";\r\n    width: 2px;\r\n    height: 19px;\r\n    background-color: #bed0df;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.modal-add input[type=\"file\"] {\r\n    padding-top: 24px;\r\n    padding-bottom: 15px;\r\n    font-size: 16px;\r\n}\r\n\r\n.modal-add input[type=\"text\"] {\r\n    padding: 3px;\r\n    margin-top: 6px;\r\n    font-size: 17px;\r\n}\r\n\r\n.modal-add__save-btn {\r\n    margin: auto;\r\n    border: none;\r\n    outline: none;\r\n    color: #3c3c3c;\r\n    background-color: #bed0df;\r\n    font-size: 17px;\r\n    padding: 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n/* .modal {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n.modal-inner {\r\n    position: absolute;\r\n    overflow: auto;\r\n    left: 100px;\r\n    top: 30px;\r\n    right: 100px;\r\n    bottom: 30px;\r\n    background: rgba(0, 0, 0, .8);\r\n    box-shadow: 0 4px 20px black;\r\n}\r\n\r\n.modal__pic {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n} */", "",{"version":3,"sources":["webpack://src/css/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,WAAW;IACX,YAAY;IACZ,WAAW;IACX,yDAA2C;IAC3C,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,WAAW;IACX,WAAW;IACX,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;GA0BG","sourcesContent":["body {\r\n    position: relative;\r\n    font-family: 'Arial';\r\n    color: #3c3c3c;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 940px;\r\n    margin: 0 auto;\r\n    padding: 0 10px;\r\n    padding-top: 30px;\r\n    /* outline: 2px solid greenyellow; */\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    width: 184px;\r\n    /* outline: 2px solid blue; */\r\n}\r\n\r\n.gallery {\r\n    position: relative;\r\n    /* outline: 2px solid tomato; */\r\n}\r\n\r\n.open-menu {\r\n    cursor: pointer;\r\n    position: relative;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.open-menu::before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    content: \"\";\r\n    width: 53px;\r\n    height: 53px;\r\n    content: \"\";\r\n    background-image: url(../img/menu-icon.svg);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu {\r\n    position: absolute;\r\n    left: 22%;\r\n    top: 13%;\r\n    border: 5px solid #bed0df;\r\n    border-radius: 7px;\r\n}\r\n\r\n.menu__item {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    font-size: 20px;\r\n    color: #3c3c3c;\r\n    text-align: left;\r\n    padding: 9px;\r\n}\r\n\r\n.category__title {\r\n    position: relative;\r\n    padding-left: 33px;\r\n}\r\n\r\n.category__title--active:after {\r\n    position: absolute;\r\n    top: 29%;\r\n    left: 11%;\r\n    content: \"\";\r\n    width: 2px;\r\n    height: 19px;\r\n    background-color: #bed0df;\r\n}\r\n\r\n.category__title:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5%;\r\n    content: \"\";\r\n    width: 18px;\r\n    height: 2px;\r\n    background-color: #bed0df;\r\n}\r\n\r\n.category__list {\r\n    margin: 0;\r\n    margin-left: 21%;\r\n    padding: 0;\r\n    list-style: none;\r\n    font-size: 18px;\r\n}\r\n\r\n.category__elem {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.main-image-container {\r\n    position: relative;\r\n}\r\n\r\n.main-image {\r\n    cursor: pointer;\r\n    width: 720px;\r\n    height: 530px;\r\n}\r\n\r\n.preview {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.preview-image:not(:last-child) {\r\n    margin-right: 10px;\r\n}\r\n\r\n.preview-image {\r\n    cursor: pointer;\r\n    width: 120px;\r\n    height: 120px;\r\n    opacity: 0.7;\r\n    border-radius: 50%;\r\n    box-shadow: 0 4px 20px black;\r\n}\r\n\r\n.image-select {\r\n    cursor: default;\r\n    opacity: 0.9;\r\n    border: 3px solid #bed0df;\r\n}\r\n\r\n.modal-add {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 300px;\r\n    height: 192px;\r\n    border: 5px solid #bed0df;\r\n    border-radius: 7px;\r\n    padding: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.modal-add__close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    right: 3%;\r\n}\r\n\r\n.modal-add__close::before {\r\n    position: absolute;\r\n    right: 22%;\r\n    content: \"\";\r\n    width: 19px;\r\n    height: 2px;\r\n    background-color: #bed0df;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.modal-add__close:after {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 11px;\r\n    content: \"\";\r\n    width: 2px;\r\n    height: 19px;\r\n    background-color: #bed0df;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.modal-add input[type=\"file\"] {\r\n    padding-top: 24px;\r\n    padding-bottom: 15px;\r\n    font-size: 16px;\r\n}\r\n\r\n.modal-add input[type=\"text\"] {\r\n    padding: 3px;\r\n    margin-top: 6px;\r\n    font-size: 17px;\r\n}\r\n\r\n.modal-add__save-btn {\r\n    margin: auto;\r\n    border: none;\r\n    outline: none;\r\n    color: #3c3c3c;\r\n    background-color: #bed0df;\r\n    font-size: 17px;\r\n    padding: 8px;\r\n    border-radius: 7px;\r\n}\r\n\r\n/* .modal {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n}\r\n\r\n.modal-inner {\r\n    position: absolute;\r\n    overflow: auto;\r\n    left: 100px;\r\n    top: 30px;\r\n    right: 100px;\r\n    bottom: 30px;\r\n    background: rgba(0, 0, 0, .8);\r\n    box-shadow: 0 4px 20px black;\r\n}\r\n\r\n.modal__pic {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/zooming/build/zooming.min.js":
/*!***************************************************!*\
  !*** ./node_modules/zooming/build/zooming.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="auto",e="zoom-in",i="zoom-out",n="grab",s="move";function o(t,e,i){var n={passive:!1};!(arguments.length>3&&void 0!==arguments[3])||arguments[3]?t.addEventListener(e,i,n):t.removeEventListener(e,i,n)}function r(t,e){if(t){var i=new Image;i.onload=function(){e&&e(i)},i.src=t}}function a(t){return t.dataset.original?t.dataset.original:"A"===t.parentNode.tagName?t.parentNode.getAttribute("href"):null}function l(t,e,i){!function(t){var e=h.transitionProp,i=h.transformProp;if(t.transition){var n=t.transition;delete t.transition,t[e]=n}if(t.transform){var s=t.transform;delete t.transform,t[i]=s}}(e);var n=t.style,s={};for(var o in e)i&&(s[o]=n[o]||""),n[o]=e[o];return s}var h={transitionProp:"transition",transEndEvent:"transitionend",transformProp:"transform",transformCssProp:"transform"},c=h.transformCssProp,u=h.transEndEvent;var d=function(){},f={enableGrab:!0,preloadImage:!1,closeOnWindowResize:!0,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:d,onClose:d,onGrab:d,onMove:d,onRelease:d,onBeforeOpen:d,onBeforeClose:d,onBeforeGrab:d,onBeforeRelease:d,onImageLoading:d,onImageLoaded:d},p={init:function(t){var e,i;e=this,i=t,Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function(t){e[t]=e[t].bind(i)})},click:function(t){if(t.preventDefault(),m(t))return window.open(this.target.srcOriginal||t.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(t.currentTarget)},scroll:function(){var t=document.documentElement||document.body.parentNode||document.body,e=window.pageXOffset||t.scrollLeft,i=window.pageYOffset||t.scrollTop;null===this.lastScrollPosition&&(this.lastScrollPosition={x:e,y:i});var n=this.lastScrollPosition.x-e,s=this.lastScrollPosition.y-i,o=this.options.scrollThreshold;(Math.abs(s)>=o||Math.abs(n)>=o)&&(this.lastScrollPosition=null,this.close())},keydown:function(t){(function(t){return"Escape"===(t.key||t.code)||27===t.keyCode})(t)&&(this.released?this.close():this.release(this.close))},mousedown:function(t){if(y(t)&&!m(t)){t.preventDefault();var e=t.clientX,i=t.clientY;this.pressTimer=setTimeout(function(){this.grab(e,i)}.bind(this),200)}},mousemove:function(t){this.released||this.move(t.clientX,t.clientY)},mouseup:function(t){y(t)&&!m(t)&&(clearTimeout(this.pressTimer),this.released?this.close():this.release())},touchstart:function(t){t.preventDefault();var e=t.touches[0],i=e.clientX,n=e.clientY;this.pressTimer=setTimeout(function(){this.grab(i,n)}.bind(this),200)},touchmove:function(t){if(!this.released){var e=t.touches[0],i=e.clientX,n=e.clientY;this.move(i,n)}},touchend:function(t){(function(t){t.targetTouches.length})(t)||(clearTimeout(this.pressTimer),this.released?this.close():this.release())},clickOverlay:function(){this.close()},resizeWindow:function(){this.close()}};function y(t){return 0===t.button}function m(t){return t.metaKey||t.ctrlKey}var g={init:function(t){this.el=document.createElement("div"),this.instance=t,this.parent=document.body,l(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(t.options),o(this.el,"click",t.handler.clickOverlay.bind(t))},updateStyle:function(t){l(this.el,{zIndex:t.zIndex,backgroundColor:t.bgColor,transition:"opacity\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction})},insert:function(){this.parent.appendChild(this.el)},remove:function(){this.parent.removeChild(this.el)},fadeIn:function(){this.el.offsetWidth,this.el.style.opacity=this.instance.options.bgOpacity},fadeOut:function(){this.el.style.opacity=0}},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},O={init:function(t,e){this.el=t,this.instance=e,this.srcThumbnail=this.el.getAttribute("src"),this.srcset=this.el.getAttribute("srcset"),this.srcOriginal=a(this.el),this.rect=this.el.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var t=this.instance.options,e=t.zIndex,s=t.enableGrab,o=t.transitionDuration,r=t.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale(),this.styleOpen={position:"relative",zIndex:e+1,cursor:s?n:i,transition:c+"\n        "+o+"s\n        "+r,transform:"translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px)\n        scale("+this.scale.x+","+this.scale.y+")",height:this.rect.height+"px",width:this.rect.width+"px"},this.el.offsetWidth,this.styleClose=l(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,l(this.el,{transform:"none"})},grab:function(t,e,i){var n=k(),o=n.x-t,r=n.y-e;l(this.el,{cursor:s,transform:"translate3d(\n        "+(this.translate.x+o)+"px, "+(this.translate.y+r)+"px, 0px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},move:function(t,e,i){var n=k(),s=n.x-t,o=n.y-e;l(this.el,{transition:c,transform:"translate3d(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+o)+"px, 0px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},restoreCloseStyle:function(){l(this.el,this.styleClose)},restoreOpenStyle:function(){l(this.el,this.styleOpen)},upgradeSource:function(){if(this.srcOriginal){var t=this.el.parentNode;this.srcset&&this.el.removeAttribute("srcset");var e=this.el.cloneNode(!1);e.setAttribute("src",this.srcOriginal),e.style.position="fixed",e.style.visibility="hidden",t.appendChild(e),setTimeout(function(){this.el.setAttribute("src",this.srcOriginal),t.removeChild(e)}.bind(this),50)}},downgradeSource:function(){this.srcOriginal&&(this.srcset&&this.el.setAttribute("srcset",this.srcset),this.el.setAttribute("src",this.srcThumbnail))},calculateTranslate:function(){var t=k(),e=this.rect.left+this.rect.width/2,i=this.rect.top+this.rect.height/2;return{x:t.x-e,y:t.y-i}},calculateScale:function(){var t=this.el.dataset,e=t.zoomingHeight,i=t.zoomingWidth,n=this.instance.options,s=n.customSize,o=n.scaleBase;if(!s&&e&&i)return{x:i/this.rect.width,y:e/this.rect.height};if(s&&"object"===(void 0===s?"undefined":v(s)))return{x:s.width/this.rect.width,y:s.height/this.rect.height};var r=this.rect.width/2,a=this.rect.height/2,l=k(),h={x:l.x-r,y:l.y-a},c=h.x/r,u=h.y/a,d=o+Math.min(c,u);if(s&&"string"==typeof s){var f=i||this.el.naturalWidth,p=e||this.el.naturalHeight,y=parseFloat(s)*f/(100*this.rect.width),m=parseFloat(s)*p/(100*this.rect.height);if(d>y||d>m)return{x:y,y:m}}return{x:d,y:d}}};function k(){var t=document.documentElement;return{x:Math.min(t.clientWidth,window.innerWidth)/2,y:Math.min(t.clientHeight,window.innerHeight)/2}}function S(t,e,i){["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"].forEach(function(n){o(t,n,e[n],i)})}return function(){function i(t){b(this,i),this.target=Object.create(O),this.overlay=Object.create(g),this.handler=Object.create(p),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=x({},f,t),this.overlay.init(this),this.handler.init(this)}return w(i,[{key:"listen",value:function(t){if("string"==typeof t)for(var i=document.querySelectorAll(t),n=i.length;n--;)this.listen(i[n]);else"IMG"===t.tagName&&(t.style.cursor=e,o(t,"click",this.handler.click),this.options.preloadImage&&r(a(t)));return this}},{key:"config",value:function(t){return t?(x(this.options,t),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.onOpen;if(!this.shown&&!this.lock){var n="string"==typeof t?document.querySelector(t):t;if("IMG"===n.tagName){if(this.options.onBeforeOpen(n),this.target.init(n,this),!this.options.preloadImage){var s=this.target.srcOriginal;null!=s&&(this.options.onImageLoading(n),r(s,this.options.onImageLoaded))}this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.insert(),this.overlay.fadeIn(),o(document,"scroll",this.handler.scroll),o(document,"keydown",this.handler.keydown),this.options.closeOnWindowResize&&o(window,"resize",this.handler.resizeWindow);return o(n,u,function t(){o(n,u,t,!1),e.lock=!1,e.target.upgradeSource(),e.options.enableGrab&&S(document,e.handler,!0),i(n)}),this}}}},{key:"close",value:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onClose;if(this.shown&&!this.lock){var n=this.target.el;this.options.onBeforeClose(n),this.lock=!0,this.body.style.cursor=t,this.overlay.fadeOut(),this.target.zoomOut(),o(document,"scroll",this.handler.scroll,!1),o(document,"keydown",this.handler.keydown,!1),this.options.closeOnWindowResize&&o(window,"resize",this.handler.resizeWindow,!1);return o(n,u,function t(){o(n,u,t,!1),e.shown=!1,e.lock=!1,e.target.downgradeSource(),e.options.enableGrab&&S(document,e.handler,!1),e.target.restoreCloseStyle(),e.overlay.remove(),i(n)}),this}}},{key:"grab",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onGrab;if(this.shown&&!this.lock){var s=this.target.el;this.options.onBeforeGrab(s),this.released=!1,this.target.grab(t,e,i);return o(s,u,function t(){o(s,u,t,!1),n(s)}),this}}},{key:"move",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onMove;if(this.shown&&!this.lock){this.released=!1,this.body.style.cursor=s,this.target.move(t,e,i);var r=this.target.el;return o(r,u,function t(){o(r,u,t,!1),n(r)}),this}}},{key:"release",value:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onRelease;if(this.shown&&!this.lock){var n=this.target.el;this.options.onBeforeRelease(n),this.lock=!0,this.body.style.cursor=t,this.target.restoreOpenStyle();return o(n,u,function t(){o(n,u,t,!1),e.lock=!1,e.released=!0,i(n)}),this}}}]),i}()});


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);

// import Zoom from '../node_modules/zooming/build/zooming.min.js';
var Zoom = __webpack_require__(/*! ../node_modules/zooming/build/zooming.min.js */ "./node_modules/zooming/build/zooming.min.js");
var z = new Zoom();
var p1 = __webpack_require__(/*! ../src/img/1.jpg */ "./src/img/1.jpg");
var p2 = __webpack_require__(/*! ../src/img/2.jpg */ "./src/img/2.jpg");
var p3 = __webpack_require__(/*! ../src/img/3.jpg */ "./src/img/3.jpg");
var p4 = __webpack_require__(/*! ../src/img/4.jpg */ "./src/img/4.jpg");
// const p5 = require('../src/img/5.jpg');
var Image = /** @class */ (function () {
    function Image(path, category) {
        this.path = path;
        this.category = category;
    }
    ;
    return Image;
}());
var img1 = new Image(p1.default, 'Антарктида ночью');
var img2 = new Image(p2.default, 'Животные');
var img3 = new Image(p3.default, 'Антарктида ночью');
var img4 = new Image(p4.default, 'Пейзаж');
// const img5: Image = new Image(p5.default, 'bbbb');
var images = [];
images.push(img1, img2, img3, img4);
var categories = ['Животные', 'Антарктида ночью', 'Пейзаж'];
var container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');
var dropdown = document.createElement('div');
container.appendChild(dropdown);
dropdown.classList.add('dropdown');
var openMenu = document.createElement('button');
dropdown.appendChild(openMenu);
openMenu.classList.add('open-menu');
openMenu.addEventListener('click', function () {
    if (dropdown.childNodes.length == 1) {
        var menu = document.createElement('div');
        dropdown.appendChild(menu);
        menu.classList.add('menu');
        var category_1 = document.createElement('div');
        menu.appendChild(category_1);
        category_1.classList.add('category');
        var categoryTitle_1 = document.createElement('button');
        category_1.appendChild(categoryTitle_1);
        categoryTitle_1.classList.add('menu__item');
        categoryTitle_1.classList.add('category__title');
        categoryTitle_1.classList.add('category__title--active');
        categoryTitle_1.textContent = 'Категории';
        categoryTitle_1.addEventListener('click', function () {
            if (category_1.childNodes.length == 1) {
                categoryTitle_1.classList.remove('category__title--active');
                var categoryList = document.createElement('ul');
                category_1.appendChild(categoryList);
                categoryList.classList.add('category__list');
                var _loop_1 = function (a_1) {
                    var categoryElem = document.createElement('li');
                    categoryList.appendChild(categoryElem);
                    categoryElem.classList.add('category__elem');
                    var labelCategory = document.createElement('label');
                    categoryElem.appendChild(labelCategory);
                    var checkbox = document.createElement('input');
                    checkbox.setAttribute('type', 'checkbox');
                    labelCategory.textContent = categories[a_1];
                    labelCategory.appendChild(checkbox);
                    checkbox.setAttribute('value', categories[a_1]);
                    checkbox.addEventListener('click', function (e) {
                        var c = checkbox.value;
                        for (var i_1 = 0; i_1 < previewImages.length; i_1++) {
                            if (previewImages[i_1].getAttribute('category') != c) {
                                previewImages[i_1].parentNode.removeChild(previewImages[i_1]);
                                previewImages.splice(i_1, 1);
                                i_1--;
                            }
                        }
                        mainImage.src = previewImages[0].src;
                    });
                };
                for (var a_1 = 0; a_1 < categories.length; a_1++) {
                    _loop_1(a_1);
                }
            }
            else {
                category_1.removeChild(category_1.lastChild);
                categoryTitle_1.classList.add('category__title--active');
            }
        });
        var buttonAdd = document.createElement('button');
        menu.appendChild(buttonAdd);
        buttonAdd.classList.add('menu__item');
        buttonAdd.classList.add('add-image__btn');
        buttonAdd.textContent = 'Добавить изображение';
        buttonAdd.addEventListener('click', function () {
            var modalAdd = document.createElement('div');
            document.body.appendChild(modalAdd);
            modalAdd.classList.add('modal-add');
            var closeBtn = document.createElement('button');
            modalAdd.appendChild(closeBtn);
            closeBtn.classList.add('modal-add__close');
            var inputFile = document.createElement('input');
            modalAdd.appendChild(inputFile);
            inputFile.setAttribute('type', 'file');
            var inputCategoryLabel = document.createElement('label');
            modalAdd.appendChild(inputCategoryLabel);
            inputCategoryLabel.textContent = 'Категория:';
            var inputCategory = document.createElement('input');
            inputCategoryLabel.appendChild(inputCategory);
            inputCategory.setAttribute('type', 'text');
            var saveBtn = document.createElement('button');
            modalAdd.appendChild(saveBtn);
            saveBtn.classList.add('modal-add__save-btn');
            saveBtn.textContent = 'Добавить';
            inputFile.addEventListener('change', function () {
                if (inputFile.files && inputFile.files[0]) {
                    var reader_1 = new FileReader();
                    saveBtn.addEventListener('click', function () {
                        reader_1.onload = function (e) {
                            var newImg = new Image('', '');
                            newImg.category = inputCategory.value;
                            newImg.path = e.target.result;
                            images.push(newImg);
                            addNewImage(images.length - 1);
                            // document.querySelector('.main-image').setAttribute('src', e.target.result);
                        };
                        reader_1.readAsDataURL(inputFile.files[0]);
                        modalAdd.remove();
                    });
                }
            });
            closeBtn.addEventListener('click', function () {
                modalAdd.remove();
            });
        });
    }
    else {
        dropdown.removeChild(dropdown.lastChild);
    }
});
var gallery = document.createElement('div');
container.appendChild(gallery);
gallery.classList.add('gallery');
var mainImageContainer = document.createElement('div');
gallery.appendChild(mainImageContainer);
mainImageContainer.classList.add("main-image-container");
var mainImage = document.createElement('img');
mainImageContainer.appendChild(mainImage);
mainImage.setAttribute('src', images[0].path);
mainImage.classList.add("main-image");
var previewContainer = document.createElement('div');
gallery.appendChild(previewContainer);
previewContainer.classList.add("preview");
var i = 0;
var previewImages = [];
function addNewImage(k) {
    var pic = document.createElement("img");
    previewContainer.appendChild(pic);
    previewImages.push(pic);
    pic.classList.add("preview-image");
    pic.setAttribute("src", images[k].path);
    pic.setAttribute("category", images[k].category);
    pic.addEventListener("click", changeImage);
}
for (var k = 0; k < images.length; k++) {
    addNewImage(k);
}
previewImages[0].classList.add("image-select");
// for (let k = 0; k < images.length; k++) {
//     let pic = document.createElement("img");
//     previewContainer.appendChild(pic);
//     previewImages.push(pic);
//     previewImages[0].classList.add("image-select");
//     pic.setAttribute("src", images[k].path);
//     pic.setAttribute("category", images[k].category);
//     pic.classList.add("preview-image");
//     pic.addEventListener("click", changeImage);
// }
function changeImage(e) {
    mainImage.src = e.target.src;
    var b = e.target;
    for (var j = 0; j < previewImages.length; j++) {
        if (mainImage.src == previewImages[j].path) {
            i = j;
            break;
        }
    }
    if (document.querySelector(".image-select")) {
        document.querySelector(".image-select").classList.remove("image-select");
    }
    b.classList.add("image-select");
}
// changeImage({target: mainImage});
document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowLeft") {
        i = (i + previewImages.length - 1) % previewImages.length;
        changeImage({ target: previewImages[i] });
    }
    if (e.code == "ArrowRight") {
        i = (i + 1) % previewImages.length;
        changeImage({ target: previewImages[i] });
    }
});
z.listen(".main-image");
// mainImage.addEventListener("click", function() {
//     let modal = document.createElement("div");
//     document.body.appendChild(modal);
//     modal.classList.add("modal");
//     let modalInner = document.createElement("div");
//     modal.appendChild(modalInner);
//     modalInner.classList.add("modal-inner");
//     let modalPic = document.createElement("img");
//     modalInner.appendChild(modalPic);
//     modalPic.classList.add("modal__pic");
//     modalPic.setAttribute("src", images[i]);
//     modalPic.addEventListener("click", function () {
//         modal.parentNode.removeChild(modal);
//     })
// })
//  z.listen(".main-image");


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"injectType":"singletonStyleTag"};

options.insert = "head";
options.singleton = true;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/34a7ef14597edaca9474d7b6b3fdfe7c.jpg");

/***/ }),

/***/ "./src/img/2.jpg":
/*!***********************!*\
  !*** ./src/img/2.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/41eff35967962740800f733d19d43d5a.jpg");

/***/ }),

/***/ "./src/img/3.jpg":
/*!***********************!*\
  !*** ./src/img/3.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/b066f9871ec8225415cb5cc2cf41ae3f.jpg");

/***/ }),

/***/ "./src/img/4.jpg":
/*!***********************!*\
  !*** ./src/img/4.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/a2afee49e1a82114beb68a2da1fed605.jpg");

/***/ }),

/***/ "./src/img/menu-icon.svg":
/*!*******************************!*\
  !*** ./src/img/menu-icon.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/ee35b4e88770e5a7e1cdbded44169e6b.svg");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvem9vbWluZy9idWlsZC96b29taW5nLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzg4MzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy8xLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nLzIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy80LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21lbnUtaWNvbi5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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Ozs7Ozs7Ozs7O0FDbEJBO0FBQWUsb0ZBQXVCLDZDQUE2QyxFOzs7Ozs7Ozs7Ozs7QUNBbkY7QUFBZSxvRkFBdUIsNkNBQTZDLEU7Ozs7Ozs7Ozs7OztBQ0FuRjtBQUFlLG9GQUF1Qiw2Q0FBNkMsRTs7Ozs7Ozs7Ozs7O0FDQW5GO0FBQWUsb0ZBQXVCLDZDQUE2QyxFOzs7Ozs7Ozs7Ozs7QUNBbkY7QUFBZSxvRkFBdUIsNkNBQTZDLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltZy9tZW51LWljb24uc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XFxyXFxuICAgIGNvbG9yOiAjM2MzYzNjO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogOTQwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICAvKiBvdXRsaW5lOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDE4NHB4O1xcclxcbiAgICAvKiBvdXRsaW5lOiAycHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8qIG91dGxpbmU6IDJweCBzb2xpZCB0b21hdG87ICovXFxyXFxufVxcclxcblxcclxcbi5vcGVuLW1lbnUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4tbWVudTo6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogNTNweDtcXHJcXG4gICAgaGVpZ2h0OiA1M3B4O1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIyJTtcXHJcXG4gICAgdG9wOiAxMyU7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNiZWQwZGY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6ICMzYzNjM2M7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X190aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX3RpdGxlLS1hY3RpdmU6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjklO1xcclxcbiAgICBsZWZ0OiAxMSU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDE5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWQwZGY7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGU6YmVmb3JlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNSU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWQwZGY7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIxJTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2VsZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1hZ2Uge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiA3MjBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpZXctaW1hZ2U6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpZXctaW1hZ2Uge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1zZWxlY3Qge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2JlZDBkZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWFkZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE5MnB4O1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjYmVkMGRmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkX19jbG9zZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICByaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1hZGRfX2Nsb3NlOjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAyMiU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTlweDtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWQwZGY7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWFkZF9fY2xvc2U6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLThweDtcXHJcXG4gICAgcmlnaHQ6IDExcHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDE5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWQwZGY7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWFkZCBpbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWFkZCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkX19zYXZlLWJ0biB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogIzNjM2MzYztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDBkZjtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWlubmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgbGVmdDogMTAwcHg7XFxyXFxuICAgIHRvcDogMzBweDtcXHJcXG4gICAgcmlnaHQ6IDEwMHB4O1xcclxcbiAgICBib3R0b206IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX3BpYyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5REFBMkM7SUFDM0MsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJztcXHJcXG4gICAgY29sb3I6ICMzYzNjM2M7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiA5NDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICAgIC8qIG91dGxpbmU6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTg0cHg7XFxyXFxuICAgIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibHVlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogb3V0bGluZTogMnB4IHNvbGlkIHRvbWF0bzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4tbWVudSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub3Blbi1tZW51OjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA1M3B4O1xcclxcbiAgICBoZWlnaHQ6IDUzcHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL21lbnUtaWNvbi5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMjIlO1xcclxcbiAgICB0b3A6IDEzJTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2JlZDBkZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogIzNjM2MzYztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX3RpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMzcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUtLWFjdGl2ZTphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyOSU7XFxyXFxuICAgIGxlZnQ6IDExJTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIGhlaWdodDogMTlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDBkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X190aXRsZTpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDBkZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X19saXN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjElO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fZWxlbSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbWFnZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDcyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlldyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlldy1pbWFnZTpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlldy1pbWFnZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLXNlbGVjdCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjYmVkMGRmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTkycHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNiZWQwZGY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1hZGRfX2Nsb3NlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWFkZF9fY2xvc2U6OmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDIyJTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxOXB4O1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDBkZjtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkX19jbG9zZTphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtOHB4O1xcclxcbiAgICByaWdodDogMTFweDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIGhlaWdodDogMTlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlZDBkZjtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkIGlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYWRkIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1hZGRfX3NhdmUtYnRuIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjM2MzYzNjO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVkMGRmO1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaW5uZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgdG9wOiAzMHB4O1xcclxcbiAgICByaWdodDogMTAwcHg7XFxyXFxuICAgIGJvdHRvbTogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fcGljIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9dHx8c2VsZikuWm9vbWluZz1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cImF1dG9cIixlPVwiem9vbS1pblwiLGk9XCJ6b29tLW91dFwiLG49XCJncmFiXCIscz1cIm1vdmVcIjtmdW5jdGlvbiBvKHQsZSxpKXt2YXIgbj17cGFzc2l2ZTohMX07IShhcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSl8fGFyZ3VtZW50c1szXT90LmFkZEV2ZW50TGlzdGVuZXIoZSxpLG4pOnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLGksbil9ZnVuY3Rpb24gcih0LGUpe2lmKHQpe3ZhciBpPW5ldyBJbWFnZTtpLm9ubG9hZD1mdW5jdGlvbigpe2UmJmUoaSl9LGkuc3JjPXR9fWZ1bmN0aW9uIGEodCl7cmV0dXJuIHQuZGF0YXNldC5vcmlnaW5hbD90LmRhdGFzZXQub3JpZ2luYWw6XCJBXCI9PT10LnBhcmVudE5vZGUudGFnTmFtZT90LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTpudWxsfWZ1bmN0aW9uIGwodCxlLGkpeyFmdW5jdGlvbih0KXt2YXIgZT1oLnRyYW5zaXRpb25Qcm9wLGk9aC50cmFuc2Zvcm1Qcm9wO2lmKHQudHJhbnNpdGlvbil7dmFyIG49dC50cmFuc2l0aW9uO2RlbGV0ZSB0LnRyYW5zaXRpb24sdFtlXT1ufWlmKHQudHJhbnNmb3JtKXt2YXIgcz10LnRyYW5zZm9ybTtkZWxldGUgdC50cmFuc2Zvcm0sdFtpXT1zfX0oZSk7dmFyIG49dC5zdHlsZSxzPXt9O2Zvcih2YXIgbyBpbiBlKWkmJihzW29dPW5bb118fFwiXCIpLG5bb109ZVtvXTtyZXR1cm4gc312YXIgaD17dHJhbnNpdGlvblByb3A6XCJ0cmFuc2l0aW9uXCIsdHJhbnNFbmRFdmVudDpcInRyYW5zaXRpb25lbmRcIix0cmFuc2Zvcm1Qcm9wOlwidHJhbnNmb3JtXCIsdHJhbnNmb3JtQ3NzUHJvcDpcInRyYW5zZm9ybVwifSxjPWgudHJhbnNmb3JtQ3NzUHJvcCx1PWgudHJhbnNFbmRFdmVudDt2YXIgZD1mdW5jdGlvbigpe30sZj17ZW5hYmxlR3JhYjohMCxwcmVsb2FkSW1hZ2U6ITEsY2xvc2VPbldpbmRvd1Jlc2l6ZTohMCx0cmFuc2l0aW9uRHVyYXRpb246LjQsdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOlwiY3ViaWMtYmV6aWVyKDAuNCwgMCwgMCwgMSlcIixiZ0NvbG9yOlwicmdiKDI1NSwgMjU1LCAyNTUpXCIsYmdPcGFjaXR5OjEsc2NhbGVCYXNlOjEsc2NhbGVFeHRyYTouNSxzY3JvbGxUaHJlc2hvbGQ6NDAsekluZGV4Ojk5OCxjdXN0b21TaXplOm51bGwsb25PcGVuOmQsb25DbG9zZTpkLG9uR3JhYjpkLG9uTW92ZTpkLG9uUmVsZWFzZTpkLG9uQmVmb3JlT3BlbjpkLG9uQmVmb3JlQ2xvc2U6ZCxvbkJlZm9yZUdyYWI6ZCxvbkJlZm9yZVJlbGVhc2U6ZCxvbkltYWdlTG9hZGluZzpkLG9uSW1hZ2VMb2FkZWQ6ZH0scD17aW5pdDpmdW5jdGlvbih0KXt2YXIgZSxpO2U9dGhpcyxpPXQsT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09ZVt0XS5iaW5kKGkpfSl9LGNsaWNrOmZ1bmN0aW9uKHQpe2lmKHQucHJldmVudERlZmF1bHQoKSxtKHQpKXJldHVybiB3aW5kb3cub3Blbih0aGlzLnRhcmdldC5zcmNPcmlnaW5hbHx8dC5jdXJyZW50VGFyZ2V0LnNyYyxcIl9ibGFua1wiKTt0aGlzLnNob3duP3RoaXMucmVsZWFzZWQ/dGhpcy5jbG9zZSgpOnRoaXMucmVsZWFzZSgpOnRoaXMub3Blbih0LmN1cnJlbnRUYXJnZXQpfSxzY3JvbGw6ZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZXx8ZG9jdW1lbnQuYm9keSxlPXdpbmRvdy5wYWdlWE9mZnNldHx8dC5zY3JvbGxMZWZ0LGk9d2luZG93LnBhZ2VZT2Zmc2V0fHx0LnNjcm9sbFRvcDtudWxsPT09dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24mJih0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbj17eDplLHk6aX0pO3ZhciBuPXRoaXMubGFzdFNjcm9sbFBvc2l0aW9uLngtZSxzPXRoaXMubGFzdFNjcm9sbFBvc2l0aW9uLnktaSxvPXRoaXMub3B0aW9ucy5zY3JvbGxUaHJlc2hvbGQ7KE1hdGguYWJzKHMpPj1vfHxNYXRoLmFicyhuKT49bykmJih0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbj1udWxsLHRoaXMuY2xvc2UoKSl9LGtleWRvd246ZnVuY3Rpb24odCl7KGZ1bmN0aW9uKHQpe3JldHVyblwiRXNjYXBlXCI9PT0odC5rZXl8fHQuY29kZSl8fDI3PT09dC5rZXlDb2RlfSkodCkmJih0aGlzLnJlbGVhc2VkP3RoaXMuY2xvc2UoKTp0aGlzLnJlbGVhc2UodGhpcy5jbG9zZSkpfSxtb3VzZWRvd246ZnVuY3Rpb24odCl7aWYoeSh0KSYmIW0odCkpe3QucHJldmVudERlZmF1bHQoKTt2YXIgZT10LmNsaWVudFgsaT10LmNsaWVudFk7dGhpcy5wcmVzc1RpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmdyYWIoZSxpKX0uYmluZCh0aGlzKSwyMDApfX0sbW91c2Vtb3ZlOmZ1bmN0aW9uKHQpe3RoaXMucmVsZWFzZWR8fHRoaXMubW92ZSh0LmNsaWVudFgsdC5jbGllbnRZKX0sbW91c2V1cDpmdW5jdGlvbih0KXt5KHQpJiYhbSh0KSYmKGNsZWFyVGltZW91dCh0aGlzLnByZXNzVGltZXIpLHRoaXMucmVsZWFzZWQ/dGhpcy5jbG9zZSgpOnRoaXMucmVsZWFzZSgpKX0sdG91Y2hzdGFydDpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCk7dmFyIGU9dC50b3VjaGVzWzBdLGk9ZS5jbGllbnRYLG49ZS5jbGllbnRZO3RoaXMucHJlc3NUaW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5ncmFiKGksbil9LmJpbmQodGhpcyksMjAwKX0sdG91Y2htb3ZlOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLnJlbGVhc2VkKXt2YXIgZT10LnRvdWNoZXNbMF0saT1lLmNsaWVudFgsbj1lLmNsaWVudFk7dGhpcy5tb3ZlKGksbil9fSx0b3VjaGVuZDpmdW5jdGlvbih0KXsoZnVuY3Rpb24odCl7dC50YXJnZXRUb3VjaGVzLmxlbmd0aH0pKHQpfHwoY2xlYXJUaW1lb3V0KHRoaXMucHJlc3NUaW1lciksdGhpcy5yZWxlYXNlZD90aGlzLmNsb3NlKCk6dGhpcy5yZWxlYXNlKCkpfSxjbGlja092ZXJsYXk6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCl9LHJlc2l6ZVdpbmRvdzpmdW5jdGlvbigpe3RoaXMuY2xvc2UoKX19O2Z1bmN0aW9uIHkodCl7cmV0dXJuIDA9PT10LmJ1dHRvbn1mdW5jdGlvbiBtKHQpe3JldHVybiB0Lm1ldGFLZXl8fHQuY3RybEtleX12YXIgZz17aW5pdDpmdW5jdGlvbih0KXt0aGlzLmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5pbnN0YW5jZT10LHRoaXMucGFyZW50PWRvY3VtZW50LmJvZHksbCh0aGlzLmVsLHtwb3NpdGlvbjpcImZpeGVkXCIsdG9wOjAsbGVmdDowLHJpZ2h0OjAsYm90dG9tOjAsb3BhY2l0eTowfSksdGhpcy51cGRhdGVTdHlsZSh0Lm9wdGlvbnMpLG8odGhpcy5lbCxcImNsaWNrXCIsdC5oYW5kbGVyLmNsaWNrT3ZlcmxheS5iaW5kKHQpKX0sdXBkYXRlU3R5bGU6ZnVuY3Rpb24odCl7bCh0aGlzLmVsLHt6SW5kZXg6dC56SW5kZXgsYmFja2dyb3VuZENvbG9yOnQuYmdDb2xvcix0cmFuc2l0aW9uOlwib3BhY2l0eVxcbiAgICAgICAgXCIrdC50cmFuc2l0aW9uRHVyYXRpb24rXCJzXFxuICAgICAgICBcIit0LnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbn0pfSxpbnNlcnQ6ZnVuY3Rpb24oKXt0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKX0scmVtb3ZlOmZ1bmN0aW9uKCl7dGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbCl9LGZhZGVJbjpmdW5jdGlvbigpe3RoaXMuZWwub2Zmc2V0V2lkdGgsdGhpcy5lbC5zdHlsZS5vcGFjaXR5PXRoaXMuaW5zdGFuY2Uub3B0aW9ucy5iZ09wYWNpdHl9LGZhZGVPdXQ6ZnVuY3Rpb24oKXt0aGlzLmVsLnN0eWxlLm9wYWNpdHk9MH19LHY9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sYj1mdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9LHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBuPWVbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oZSxpLG4pe3JldHVybiBpJiZ0KGUucHJvdG90eXBlLGkpLG4mJnQoZSxuKSxlfX0oKSx4PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBpPWFyZ3VtZW50c1tlXTtmb3IodmFyIG4gaW4gaSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaSxuKSYmKHRbbl09aVtuXSl9cmV0dXJuIHR9LE89e2luaXQ6ZnVuY3Rpb24odCxlKXt0aGlzLmVsPXQsdGhpcy5pbnN0YW5jZT1lLHRoaXMuc3JjVGh1bWJuYWlsPXRoaXMuZWwuZ2V0QXR0cmlidXRlKFwic3JjXCIpLHRoaXMuc3Jjc2V0PXRoaXMuZWwuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpLHRoaXMuc3JjT3JpZ2luYWw9YSh0aGlzLmVsKSx0aGlzLnJlY3Q9dGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx0aGlzLnRyYW5zbGF0ZT1udWxsLHRoaXMuc2NhbGU9bnVsbCx0aGlzLnN0eWxlT3Blbj1udWxsLHRoaXMuc3R5bGVDbG9zZT1udWxsfSx6b29tSW46ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmluc3RhbmNlLm9wdGlvbnMsZT10LnpJbmRleCxzPXQuZW5hYmxlR3JhYixvPXQudHJhbnNpdGlvbkR1cmF0aW9uLHI9dC50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb247dGhpcy50cmFuc2xhdGU9dGhpcy5jYWxjdWxhdGVUcmFuc2xhdGUoKSx0aGlzLnNjYWxlPXRoaXMuY2FsY3VsYXRlU2NhbGUoKSx0aGlzLnN0eWxlT3Blbj17cG9zaXRpb246XCJyZWxhdGl2ZVwiLHpJbmRleDplKzEsY3Vyc29yOnM/bjppLHRyYW5zaXRpb246YytcIlxcbiAgICAgICAgXCIrbytcInNcXG4gICAgICAgIFwiK3IsdHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoXCIrdGhpcy50cmFuc2xhdGUueCtcInB4LCBcIit0aGlzLnRyYW5zbGF0ZS55K1wicHgsIDBweClcXG4gICAgICAgIHNjYWxlKFwiK3RoaXMuc2NhbGUueCtcIixcIit0aGlzLnNjYWxlLnkrXCIpXCIsaGVpZ2h0OnRoaXMucmVjdC5oZWlnaHQrXCJweFwiLHdpZHRoOnRoaXMucmVjdC53aWR0aCtcInB4XCJ9LHRoaXMuZWwub2Zmc2V0V2lkdGgsdGhpcy5zdHlsZUNsb3NlPWwodGhpcy5lbCx0aGlzLnN0eWxlT3BlbiwhMCl9LHpvb21PdXQ6ZnVuY3Rpb24oKXt0aGlzLmVsLm9mZnNldFdpZHRoLGwodGhpcy5lbCx7dHJhbnNmb3JtOlwibm9uZVwifSl9LGdyYWI6ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWsoKSxvPW4ueC10LHI9bi55LWU7bCh0aGlzLmVsLHtjdXJzb3I6cyx0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZChcXG4gICAgICAgIFwiKyh0aGlzLnRyYW5zbGF0ZS54K28pK1wicHgsIFwiKyh0aGlzLnRyYW5zbGF0ZS55K3IpK1wicHgsIDBweClcXG4gICAgICAgIHNjYWxlKFwiKyh0aGlzLnNjYWxlLngraSkrXCIsXCIrKHRoaXMuc2NhbGUueStpKStcIilcIn0pfSxtb3ZlOmZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1rKCkscz1uLngtdCxvPW4ueS1lO2wodGhpcy5lbCx7dHJhbnNpdGlvbjpjLHRyYW5zZm9ybTpcInRyYW5zbGF0ZTNkKFxcbiAgICAgICAgXCIrKHRoaXMudHJhbnNsYXRlLngrcykrXCJweCwgXCIrKHRoaXMudHJhbnNsYXRlLnkrbykrXCJweCwgMHB4KVxcbiAgICAgICAgc2NhbGUoXCIrKHRoaXMuc2NhbGUueCtpKStcIixcIisodGhpcy5zY2FsZS55K2kpK1wiKVwifSl9LHJlc3RvcmVDbG9zZVN0eWxlOmZ1bmN0aW9uKCl7bCh0aGlzLmVsLHRoaXMuc3R5bGVDbG9zZSl9LHJlc3RvcmVPcGVuU3R5bGU6ZnVuY3Rpb24oKXtsKHRoaXMuZWwsdGhpcy5zdHlsZU9wZW4pfSx1cGdyYWRlU291cmNlOmZ1bmN0aW9uKCl7aWYodGhpcy5zcmNPcmlnaW5hbCl7dmFyIHQ9dGhpcy5lbC5wYXJlbnROb2RlO3RoaXMuc3Jjc2V0JiZ0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShcInNyY3NldFwiKTt2YXIgZT10aGlzLmVsLmNsb25lTm9kZSghMSk7ZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLnNyY09yaWdpbmFsKSxlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIix0LmFwcGVuZENoaWxkKGUpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmVsLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc3JjT3JpZ2luYWwpLHQucmVtb3ZlQ2hpbGQoZSl9LmJpbmQodGhpcyksNTApfX0sZG93bmdyYWRlU291cmNlOmZ1bmN0aW9uKCl7dGhpcy5zcmNPcmlnaW5hbCYmKHRoaXMuc3Jjc2V0JiZ0aGlzLmVsLnNldEF0dHJpYnV0ZShcInNyY3NldFwiLHRoaXMuc3Jjc2V0KSx0aGlzLmVsLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMuc3JjVGh1bWJuYWlsKSl9LGNhbGN1bGF0ZVRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciB0PWsoKSxlPXRoaXMucmVjdC5sZWZ0K3RoaXMucmVjdC53aWR0aC8yLGk9dGhpcy5yZWN0LnRvcCt0aGlzLnJlY3QuaGVpZ2h0LzI7cmV0dXJue3g6dC54LWUseTp0LnktaX19LGNhbGN1bGF0ZVNjYWxlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5lbC5kYXRhc2V0LGU9dC56b29taW5nSGVpZ2h0LGk9dC56b29taW5nV2lkdGgsbj10aGlzLmluc3RhbmNlLm9wdGlvbnMscz1uLmN1c3RvbVNpemUsbz1uLnNjYWxlQmFzZTtpZighcyYmZSYmaSlyZXR1cm57eDppL3RoaXMucmVjdC53aWR0aCx5OmUvdGhpcy5yZWN0LmhlaWdodH07aWYocyYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1zP1widW5kZWZpbmVkXCI6dihzKSkpcmV0dXJue3g6cy53aWR0aC90aGlzLnJlY3Qud2lkdGgseTpzLmhlaWdodC90aGlzLnJlY3QuaGVpZ2h0fTt2YXIgcj10aGlzLnJlY3Qud2lkdGgvMixhPXRoaXMucmVjdC5oZWlnaHQvMixsPWsoKSxoPXt4OmwueC1yLHk6bC55LWF9LGM9aC54L3IsdT1oLnkvYSxkPW8rTWF0aC5taW4oYyx1KTtpZihzJiZcInN0cmluZ1wiPT10eXBlb2Ygcyl7dmFyIGY9aXx8dGhpcy5lbC5uYXR1cmFsV2lkdGgscD1lfHx0aGlzLmVsLm5hdHVyYWxIZWlnaHQseT1wYXJzZUZsb2F0KHMpKmYvKDEwMCp0aGlzLnJlY3Qud2lkdGgpLG09cGFyc2VGbG9hdChzKSpwLygxMDAqdGhpcy5yZWN0LmhlaWdodCk7aWYoZD55fHxkPm0pcmV0dXJue3g6eSx5Om19fXJldHVybnt4OmQseTpkfX19O2Z1bmN0aW9uIGsoKXt2YXIgdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7cmV0dXJue3g6TWF0aC5taW4odC5jbGllbnRXaWR0aCx3aW5kb3cuaW5uZXJXaWR0aCkvMix5Ok1hdGgubWluKHQuY2xpZW50SGVpZ2h0LHdpbmRvdy5pbm5lckhlaWdodCkvMn19ZnVuY3Rpb24gUyh0LGUsaSl7W1wibW91c2Vkb3duXCIsXCJtb3VzZW1vdmVcIixcIm1vdXNldXBcIixcInRvdWNoc3RhcnRcIixcInRvdWNobW92ZVwiLFwidG91Y2hlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtvKHQsbixlW25dLGkpfSl9cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0KXtiKHRoaXMsaSksdGhpcy50YXJnZXQ9T2JqZWN0LmNyZWF0ZShPKSx0aGlzLm92ZXJsYXk9T2JqZWN0LmNyZWF0ZShnKSx0aGlzLmhhbmRsZXI9T2JqZWN0LmNyZWF0ZShwKSx0aGlzLmJvZHk9ZG9jdW1lbnQuYm9keSx0aGlzLnNob3duPSExLHRoaXMubG9jaz0hMSx0aGlzLnJlbGVhc2VkPSEwLHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uPW51bGwsdGhpcy5wcmVzc1RpbWVyPW51bGwsdGhpcy5vcHRpb25zPXgoe30sZix0KSx0aGlzLm92ZXJsYXkuaW5pdCh0aGlzKSx0aGlzLmhhbmRsZXIuaW5pdCh0aGlzKX1yZXR1cm4gdyhpLFt7a2V5OlwibGlzdGVuXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpZm9yKHZhciBpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCksbj1pLmxlbmd0aDtuLS07KXRoaXMubGlzdGVuKGlbbl0pO2Vsc2VcIklNR1wiPT09dC50YWdOYW1lJiYodC5zdHlsZS5jdXJzb3I9ZSxvKHQsXCJjbGlja1wiLHRoaXMuaGFuZGxlci5jbGljayksdGhpcy5vcHRpb25zLnByZWxvYWRJbWFnZSYmcihhKHQpKSk7cmV0dXJuIHRoaXN9fSx7a2V5OlwiY29uZmlnXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQ/KHgodGhpcy5vcHRpb25zLHQpLHRoaXMub3ZlcmxheS51cGRhdGVTdHlsZSh0aGlzLm9wdGlvbnMpLHRoaXMpOnRoaXMub3B0aW9uc319LHtrZXk6XCJvcGVuXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp0aGlzLm9wdGlvbnMub25PcGVuO2lmKCF0aGlzLnNob3duJiYhdGhpcy5sb2NrKXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgdD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpOnQ7aWYoXCJJTUdcIj09PW4udGFnTmFtZSl7aWYodGhpcy5vcHRpb25zLm9uQmVmb3JlT3BlbihuKSx0aGlzLnRhcmdldC5pbml0KG4sdGhpcyksIXRoaXMub3B0aW9ucy5wcmVsb2FkSW1hZ2Upe3ZhciBzPXRoaXMudGFyZ2V0LnNyY09yaWdpbmFsO251bGwhPXMmJih0aGlzLm9wdGlvbnMub25JbWFnZUxvYWRpbmcobikscihzLHRoaXMub3B0aW9ucy5vbkltYWdlTG9hZGVkKSl9dGhpcy5zaG93bj0hMCx0aGlzLmxvY2s9ITAsdGhpcy50YXJnZXQuem9vbUluKCksdGhpcy5vdmVybGF5Lmluc2VydCgpLHRoaXMub3ZlcmxheS5mYWRlSW4oKSxvKGRvY3VtZW50LFwic2Nyb2xsXCIsdGhpcy5oYW5kbGVyLnNjcm9sbCksbyhkb2N1bWVudCxcImtleWRvd25cIix0aGlzLmhhbmRsZXIua2V5ZG93biksdGhpcy5vcHRpb25zLmNsb3NlT25XaW5kb3dSZXNpemUmJm8od2luZG93LFwicmVzaXplXCIsdGhpcy5oYW5kbGVyLnJlc2l6ZVdpbmRvdyk7cmV0dXJuIG8obix1LGZ1bmN0aW9uIHQoKXtvKG4sdSx0LCExKSxlLmxvY2s9ITEsZS50YXJnZXQudXBncmFkZVNvdXJjZSgpLGUub3B0aW9ucy5lbmFibGVHcmFiJiZTKGRvY3VtZW50LGUuaGFuZGxlciwhMCksaShuKX0pLHRoaXN9fX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp0aGlzLm9wdGlvbnMub25DbG9zZTtpZih0aGlzLnNob3duJiYhdGhpcy5sb2NrKXt2YXIgbj10aGlzLnRhcmdldC5lbDt0aGlzLm9wdGlvbnMub25CZWZvcmVDbG9zZShuKSx0aGlzLmxvY2s9ITAsdGhpcy5ib2R5LnN0eWxlLmN1cnNvcj10LHRoaXMub3ZlcmxheS5mYWRlT3V0KCksdGhpcy50YXJnZXQuem9vbU91dCgpLG8oZG9jdW1lbnQsXCJzY3JvbGxcIix0aGlzLmhhbmRsZXIuc2Nyb2xsLCExKSxvKGRvY3VtZW50LFwia2V5ZG93blwiLHRoaXMuaGFuZGxlci5rZXlkb3duLCExKSx0aGlzLm9wdGlvbnMuY2xvc2VPbldpbmRvd1Jlc2l6ZSYmbyh3aW5kb3csXCJyZXNpemVcIix0aGlzLmhhbmRsZXIucmVzaXplV2luZG93LCExKTtyZXR1cm4gbyhuLHUsZnVuY3Rpb24gdCgpe28obix1LHQsITEpLGUuc2hvd249ITEsZS5sb2NrPSExLGUudGFyZ2V0LmRvd25ncmFkZVNvdXJjZSgpLGUub3B0aW9ucy5lbmFibGVHcmFiJiZTKGRvY3VtZW50LGUuaGFuZGxlciwhMSksZS50YXJnZXQucmVzdG9yZUNsb3NlU3R5bGUoKSxlLm92ZXJsYXkucmVtb3ZlKCksaShuKX0pLHRoaXN9fX0se2tleTpcImdyYWJcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp0aGlzLm9wdGlvbnMuc2NhbGVFeHRyYSxuPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTp0aGlzLm9wdGlvbnMub25HcmFiO2lmKHRoaXMuc2hvd24mJiF0aGlzLmxvY2spe3ZhciBzPXRoaXMudGFyZ2V0LmVsO3RoaXMub3B0aW9ucy5vbkJlZm9yZUdyYWIocyksdGhpcy5yZWxlYXNlZD0hMSx0aGlzLnRhcmdldC5ncmFiKHQsZSxpKTtyZXR1cm4gbyhzLHUsZnVuY3Rpb24gdCgpe28ocyx1LHQsITEpLG4ocyl9KSx0aGlzfX19LHtrZXk6XCJtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06dGhpcy5vcHRpb25zLnNjYWxlRXh0cmEsbj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106dGhpcy5vcHRpb25zLm9uTW92ZTtpZih0aGlzLnNob3duJiYhdGhpcy5sb2NrKXt0aGlzLnJlbGVhc2VkPSExLHRoaXMuYm9keS5zdHlsZS5jdXJzb3I9cyx0aGlzLnRhcmdldC5tb3ZlKHQsZSxpKTt2YXIgcj10aGlzLnRhcmdldC5lbDtyZXR1cm4gbyhyLHUsZnVuY3Rpb24gdCgpe28ocix1LHQsITEpLG4ocil9KSx0aGlzfX19LHtrZXk6XCJyZWxlYXNlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGk9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnRoaXMub3B0aW9ucy5vblJlbGVhc2U7aWYodGhpcy5zaG93biYmIXRoaXMubG9jayl7dmFyIG49dGhpcy50YXJnZXQuZWw7dGhpcy5vcHRpb25zLm9uQmVmb3JlUmVsZWFzZShuKSx0aGlzLmxvY2s9ITAsdGhpcy5ib2R5LnN0eWxlLmN1cnNvcj10LHRoaXMudGFyZ2V0LnJlc3RvcmVPcGVuU3R5bGUoKTtyZXR1cm4gbyhuLHUsZnVuY3Rpb24gdCgpe28obix1LHQsITEpLGUubG9jaz0hMSxlLnJlbGVhc2VkPSEwLGkobil9KSx0aGlzfX19XSksaX0oKX0pO1xuIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgWm9vbSBmcm9tICcuLi9ub2RlX21vZHVsZXMvem9vbWluZy9idWlsZC96b29taW5nLm1pbi5qcyc7XHJcbmNvbnN0IFpvb20gPSByZXF1aXJlKCcuLi9ub2RlX21vZHVsZXMvem9vbWluZy9idWlsZC96b29taW5nLm1pbi5qcycpO1xyXG5jb25zdCB6ID0gbmV3IFpvb20oKTtcclxuY29uc3QgcDEgPSByZXF1aXJlKCcuLi9zcmMvaW1nLzEuanBnJyk7XHJcbmNvbnN0IHAyID0gcmVxdWlyZSgnLi4vc3JjL2ltZy8yLmpwZycpO1xyXG5jb25zdCBwMyA9IHJlcXVpcmUoJy4uL3NyYy9pbWcvMy5qcGcnKTtcclxuY29uc3QgcDQgPSByZXF1aXJlKCcuLi9zcmMvaW1nLzQuanBnJyk7XHJcbi8vIGNvbnN0IHA1ID0gcmVxdWlyZSgnLi4vc3JjL2ltZy81LmpwZycpO1xyXG5cclxuY2xhc3MgSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhdGg6IHN0cmluZywgcHVibGljIGNhdGVnb3J5OiBzdHJpbmcpIHsgfTtcclxufVxyXG5cclxuY29uc3QgaW1nMTogSW1hZ2UgPSBuZXcgSW1hZ2UocDEuZGVmYXVsdCwgJ9CQ0L3RgtCw0YDQutGC0LjQtNCwINC90L7Rh9GM0Y4nKTtcclxuY29uc3QgaW1nMjogSW1hZ2UgPSBuZXcgSW1hZ2UocDIuZGVmYXVsdCwgJ9CW0LjQstC+0YLQvdGL0LUnKTtcclxuY29uc3QgaW1nMzogSW1hZ2UgPSBuZXcgSW1hZ2UocDMuZGVmYXVsdCwgJ9CQ0L3RgtCw0YDQutGC0LjQtNCwINC90L7Rh9GM0Y4nKTtcclxuY29uc3QgaW1nNDogSW1hZ2UgPSBuZXcgSW1hZ2UocDQuZGVmYXVsdCwgJ9Cf0LXQudC30LDQticpO1xyXG4vLyBjb25zdCBpbWc1OiBJbWFnZSA9IG5ldyBJbWFnZShwNS5kZWZhdWx0LCAnYmJiYicpO1xyXG5cclxuY29uc3QgaW1hZ2VzOiBhbnkgPSBbXTtcclxuaW1hZ2VzLnB1c2goaW1nMSwgaW1nMiwgaW1nMywgaW1nNCk7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gWyfQltC40LLQvtGC0L3Ri9C1JywgJ9CQ0L3RgtCw0YDQutGC0LjQtNCwINC90L7Rh9GM0Y4nLCAn0J/QtdC50LfQsNC2J107XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xyXG5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bicpO1xyXG5cclxuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuZHJvcGRvd24uYXBwZW5kQ2hpbGQob3Blbk1lbnUpO1xyXG5vcGVuTWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuLW1lbnUnKTtcclxuXHJcblxyXG5cclxub3Blbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoZHJvcGRvd24uY2hpbGROb2Rlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5X190aXRsZScpO1xyXG4gICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX3RpdGxlLS1hY3RpdmUnKTtcclxuICAgICAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XHJcblxyXG4gICAgICAgIGNhdGVnb3J5VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5X190aXRsZS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlMaXN0KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5TGlzdC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeV9fbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjYXRlZ29yaWVzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlFbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUVsZW0uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2VsZW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlFbGVtLmFwcGVuZENoaWxkKGxhYmVsQ2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDYXRlZ29yeS50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXNbYV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDYXRlZ29yeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNhdGVnb3JpZXNbYV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+Y2hlY2tib3gpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZpZXdJbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aWV3SW1hZ2VzW2ldLmdldEF0dHJpYnV0ZSgnY2F0ZWdvcnknKSAhPSBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld0ltYWdlc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByZXZpZXdJbWFnZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2Uuc3JjID0gcHJldmlld0ltYWdlc1swXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5yZW1vdmVDaGlsZChjYXRlZ29yeS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeV9fdGl0bGUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkKTtcclxuICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgICAgIGJ1dHRvbkFkZC5jbGFzc0xpc3QuYWRkKCdhZGQtaW1hZ2VfX2J0bicpO1xyXG4gICAgICAgIGJ1dHRvbkFkZC50ZXh0Q29udGVudCA9ICfQlNC+0LHQsNCy0LjRgtGMINC40LfQvtCx0YDQsNC20LXQvdC40LUnO1xyXG5cclxuICAgICAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxBZGQpO1xyXG4gICAgICAgICAgICBtb2RhbEFkZC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hZGQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIG1vZGFsQWRkLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkX19jbG9zZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgbW9kYWxBZGQuYXBwZW5kQ2hpbGQoaW5wdXRGaWxlKTtcclxuICAgICAgICAgICAgaW5wdXRGaWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBtb2RhbEFkZC5hcHBlbmRDaGlsZChpbnB1dENhdGVnb3J5TGFiZWwpO1xyXG4gICAgICAgICAgICBpbnB1dENhdGVnb3J5TGFiZWwudGV4dENvbnRlbnQgPSAn0JrQsNGC0LXQs9C+0YDQuNGPOic7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dENhdGVnb3J5TGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXRDYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIGlucHV0Q2F0ZWdvcnkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbW9kYWxBZGQuYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWRkX19zYXZlLWJ0bicpO1xyXG4gICAgICAgICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ9CU0L7QsdCw0LLQuNGC0YwnO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlucHV0RmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRGaWxlLmZpbGVzICYmIGlucHV0RmlsZS5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW1nOiBJbWFnZSA9IG5ldyBJbWFnZSgnJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW1nLmNhdGVnb3J5ID0gKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0Q2F0ZWdvcnkpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SW1nLnBhdGggPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMucHVzaChuZXdJbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3SW1hZ2UoaW1hZ2VzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taW1hZ2UnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0RmlsZS5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQWRkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWRkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZHJvcGRvd24ucmVtb3ZlQ2hpbGQoZHJvcGRvd24ubGFzdENoaWxkKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeSk7XHJcbmdhbGxlcnkuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xyXG5cclxuY29uc3QgbWFpbkltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmdhbGxlcnkuYXBwZW5kQ2hpbGQobWFpbkltYWdlQ29udGFpbmVyKTtcclxubWFpbkltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWltYWdlLWNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5tYWluSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcclxubWFpbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VzWzBdLnBhdGgpO1xyXG5tYWluSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XHJcblxyXG5jb25zdCBwcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmdhbGxlcnkuYXBwZW5kQ2hpbGQocHJldmlld0NvbnRhaW5lcik7XHJcbnByZXZpZXdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByZXZpZXdcIik7XHJcblxyXG5sZXQgaSA9IDA7XHJcbmxldCBwcmV2aWV3SW1hZ2VzOiBhbnkgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZE5ld0ltYWdlKGs6IG51bWJlcikge1xyXG4gICAgbGV0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHBpYyk7XHJcbiAgICBwcmV2aWV3SW1hZ2VzLnB1c2gocGljKTtcclxuICAgIHBpYy5jbGFzc0xpc3QuYWRkKFwicHJldmlldy1pbWFnZVwiKTtcclxuXHJcbiAgICBwaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1trXS5wYXRoKTtcclxuICAgIHBpYy5zZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiLCBpbWFnZXNba10uY2F0ZWdvcnkpO1xyXG5cclxuICAgIHBpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlSW1hZ2UpO1xyXG5cclxufVxyXG5cclxuZm9yIChsZXQgayA9IDA7IGsgPCBpbWFnZXMubGVuZ3RoOyBrKyspIHtcclxuICAgIGFkZE5ld0ltYWdlKGspO1xyXG59XHJcblxyXG5wcmV2aWV3SW1hZ2VzWzBdLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1zZWxlY3RcIik7XHJcblxyXG5cclxuLy8gZm9yIChsZXQgayA9IDA7IGsgPCBpbWFnZXMubGVuZ3RoOyBrKyspIHtcclxuLy8gICAgIGxldCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4vLyAgICAgcHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaWMpO1xyXG4vLyAgICAgcHJldmlld0ltYWdlcy5wdXNoKHBpYyk7XHJcbi8vICAgICBwcmV2aWV3SW1hZ2VzWzBdLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1zZWxlY3RcIik7XHJcbi8vICAgICBwaWMuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1trXS5wYXRoKTtcclxuXHJcbi8vICAgICBwaWMuc2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIiwgaW1hZ2VzW2tdLmNhdGVnb3J5KTtcclxuXHJcbi8vICAgICBwaWMuY2xhc3NMaXN0LmFkZChcInByZXZpZXctaW1hZ2VcIik7XHJcbi8vICAgICBwaWMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUltYWdlKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1hZ2UoZTogYW55KSB7XHJcbiAgICBtYWluSW1hZ2Uuc3JjID0gZS50YXJnZXQuc3JjO1xyXG4gICAgbGV0IGIgPSBlLnRhcmdldDtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJldmlld0ltYWdlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChtYWluSW1hZ2Uuc3JjID09IHByZXZpZXdJbWFnZXNbal0ucGF0aCkge1xyXG4gICAgICAgICAgICBpID0gajtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLXNlbGVjdFwiKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2Utc2VsZWN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbWFnZS1zZWxlY3RcIik7XHJcbiAgICB9XHJcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1zZWxlY3RcIik7XHJcbn1cclxuXHJcbi8vIGNoYW5nZUltYWdlKHt0YXJnZXQ6IG1haW5JbWFnZX0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChlLmNvZGUgPT0gXCJBcnJvd0xlZnRcIikge1xyXG4gICAgICAgIGkgPSAoaSArIHByZXZpZXdJbWFnZXMubGVuZ3RoIC0gMSkgJSBwcmV2aWV3SW1hZ2VzLmxlbmd0aDtcclxuICAgICAgICBjaGFuZ2VJbWFnZSh7IHRhcmdldDogcHJldmlld0ltYWdlc1tpXSB9KTtcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcclxuICAgICAgICBpID0gKGkgKyAxKSAlIHByZXZpZXdJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgIGNoYW5nZUltYWdlKHsgdGFyZ2V0OiBwcmV2aWV3SW1hZ2VzW2ldIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbnoubGlzdGVuKFwiLm1haW4taW1hZ2VcIik7XHJcblxyXG5cclxuLy8gbWFpbkltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuLy8gICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcclxuLy8gICAgIGxldCBtb2RhbElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsSW5uZXIpO1xyXG4vLyAgICAgbW9kYWxJbm5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaW5uZXJcIik7XHJcbi8vICAgICBsZXQgbW9kYWxQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4vLyAgICAgbW9kYWxJbm5lci5hcHBlbmRDaGlsZChtb2RhbFBpYyk7XHJcbi8vICAgICBtb2RhbFBpYy5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX3BpY1wiKTtcclxuLy8gICAgIG1vZGFsUGljLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbaV0pO1xyXG4vLyAgICAgbW9kYWxQaWMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICBtb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyAgei5saXN0ZW4oXCIubWFpbi1pbWFnZVwiKTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge1wiaW5qZWN0VHlwZVwiOlwic2luZ2xldG9uU3R5bGVUYWdcIn07XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IHRydWU7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvMzRhN2VmMTQ1OTdlZGFjYTk0NzRkN2I2YjNmZGZlN2MuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy80MWVmZjM1OTY3OTYyNzQwODAwZjczM2QxOWQ0M2Q1YS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2IwNjZmOTg3MWVjODIyNTQxNWNiNWNjMmNmNDFhZTNmLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYTJhZmVlNDllMWE4MjExNGJlYjY4YTJkYTFmZWQ2MDUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZTM1YjRlODg3NzBlNWE3ZTFjZGJkZWQ0NDE2OWU2Yi5zdmdcIjsiXSwic291cmNlUm9vdCI6IiJ9