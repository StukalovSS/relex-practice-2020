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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n\\tbackground-color: #e8e8e8;\\r\\n}\\r\\n\\r\\n#container-preview {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-around;\\r\\n\\talign-items: center;\\r\\n\\tmin-width: 100%;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n#gallery {\\r\\n\\tposition: relative;\\r\\n\\tpadding-top: 50px;\\r\\n\\twidth: 800px;\\t\\r\\n\\tmargin-left: auto;\\t\\r\\n\\tmargin-right: auto;\\t\\r\\n}\\r\\n\\r\\n.preview-image {\\r\\n\\tmargin-top: 50px;\\r\\n\\tborder-radius: 50%;\\r\\n\\tmargin-bottom: 50px;\\r\\n\\twidth: 101px;\\r\\n\\theight: 101px;\\r\\n}\\r\\n\\r\\n.main-image {\\r\\n\\twidth: 800px;\\r\\n\\theight: 800px;\\r\\n}\\r\\n\\r\\n.curent-image {\\r\\n\\tborder: 4px groove orange;\\r\\n}\\r\\n\\r\\n.accord-btn {\\r\\n\\tbackground-color: red;\\r\\n\\twidth: 150px;\\r\\n\\theight: 30px;\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\ttext-align: center;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.accordion {\\r\\n\\tmargin-bottom: 30px;\\t\\r\\n\\twidth: 150px;\\r\\n\\tmargin-left: auto;\\r\\n\\tmargin-right: auto;\\r\\n}\\r\\n\\r\\n#container-with-cathegories {\\r\\n\\twidth: 150px;\\r\\n\\tmargin-left: auto;\\r\\n\\tmargin-right: auto;\\r\\n\\tmargin-top: 50px;\\r\\n\\tmargin-bottom: 50px;\\r\\n}\\r\\n\\r\\n#container-with-cathegories > div{\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n#cathegory-btn {\\r\\n\\tmargin-top: 50px;;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {\"injectType\":\"singletonStyleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = true;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/img/animals/fifth.jpg":
/*!***********************************!*\
  !*** ./src/img/animals/fifth.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/003ed396fe9e17d2f87869802e6f2f5d.jpg\");\n\n//# sourceURL=webpack:///./src/img/animals/fifth.jpg?");

/***/ }),

/***/ "./src/img/animals/first.jpg":
/*!***********************************!*\
  !*** ./src/img/animals/first.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/8eaf14825b4ea69359c64a12b7976ada.jpg\");\n\n//# sourceURL=webpack:///./src/img/animals/first.jpg?");

/***/ }),

/***/ "./src/img/animals/fourth.jpg":
/*!************************************!*\
  !*** ./src/img/animals/fourth.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/9c02ada5ac7cf6d329eae6dc7083e5a4.jpg\");\n\n//# sourceURL=webpack:///./src/img/animals/fourth.jpg?");

/***/ }),

/***/ "./src/img/animals/second.jpg":
/*!************************************!*\
  !*** ./src/img/animals/second.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/3253f23195ca178e1956f4de1a7e8b1f.jpg\");\n\n//# sourceURL=webpack:///./src/img/animals/second.jpg?");

/***/ }),

/***/ "./src/img/animals/third.jpg":
/*!***********************************!*\
  !*** ./src/img/animals/third.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/9624a313e59c48e0e854364ce86621f5.jpg\");\n\n//# sourceURL=webpack:///./src/img/animals/third.jpg?");

/***/ }),

/***/ "./src/img/cars/fifth.jpg":
/*!********************************!*\
  !*** ./src/img/cars/fifth.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/03e8ecbd7be67b33d4e59e562a604bdf.jpg\");\n\n//# sourceURL=webpack:///./src/img/cars/fifth.jpg?");

/***/ }),

/***/ "./src/img/cars/first.jpg":
/*!********************************!*\
  !*** ./src/img/cars/first.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/4bfb6c625ae01b5545648f3307f7a4f2.jpg\");\n\n//# sourceURL=webpack:///./src/img/cars/first.jpg?");

/***/ }),

/***/ "./src/img/cars/fourth.jpg":
/*!*********************************!*\
  !*** ./src/img/cars/fourth.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/2814aadffb1b5616c10c9a8512aa97e4.jpg\");\n\n//# sourceURL=webpack:///./src/img/cars/fourth.jpg?");

/***/ }),

/***/ "./src/img/cars/second.jpg":
/*!*********************************!*\
  !*** ./src/img/cars/second.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/36d0b69e198c7ae54bc7ebf63acacebb.jpg\");\n\n//# sourceURL=webpack:///./src/img/cars/second.jpg?");

/***/ }),

/***/ "./src/img/cars/third.jpg":
/*!********************************!*\
  !*** ./src/img/cars/third.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fc9d719f2107dd13cab2149012063def.jpg\");\n\n//# sourceURL=webpack:///./src/img/cars/third.jpg?");

/***/ }),

/***/ "./src/img/landskapes/fifth.jpg":
/*!**************************************!*\
  !*** ./src/img/landskapes/fifth.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/cde082d4f5ef6a18399c80caba224396.jpg\");\n\n//# sourceURL=webpack:///./src/img/landskapes/fifth.jpg?");

/***/ }),

/***/ "./src/img/landskapes/first.jpg":
/*!**************************************!*\
  !*** ./src/img/landskapes/first.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/43827ea4d3cddb752a18e1ae58980538.jpg\");\n\n//# sourceURL=webpack:///./src/img/landskapes/first.jpg?");

/***/ }),

/***/ "./src/img/landskapes/fourth.jpg":
/*!***************************************!*\
  !*** ./src/img/landskapes/fourth.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/41125b00d7b245370225b82be862ef60.jpg\");\n\n//# sourceURL=webpack:///./src/img/landskapes/fourth.jpg?");

/***/ }),

/***/ "./src/img/landskapes/second.jpg":
/*!***************************************!*\
  !*** ./src/img/landskapes/second.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/54d4827c9922ef9572246fc1cd900f7f.jpg\");\n\n//# sourceURL=webpack:///./src/img/landskapes/second.jpg?");

/***/ }),

/***/ "./src/img/landskapes/third.jpg":
/*!**************************************!*\
  !*** ./src/img/landskapes/third.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/2c5ab66473aecb9d54314dd30df2e02a.jpg\");\n\n//# sourceURL=webpack:///./src/img/landskapes/third.jpg?");

/***/ }),

/***/ "./src/img/puppies/fifth.jpg":
/*!***********************************!*\
  !*** ./src/img/puppies/fifth.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/4edb588ad18374ab77eb1ff232f5cacb.jpg\");\n\n//# sourceURL=webpack:///./src/img/puppies/fifth.jpg?");

/***/ }),

/***/ "./src/img/puppies/first.jpg":
/*!***********************************!*\
  !*** ./src/img/puppies/first.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/a95dcf26e8547419f6d8aa1dba81bcec.jpg\");\n\n//# sourceURL=webpack:///./src/img/puppies/first.jpg?");

/***/ }),

/***/ "./src/img/puppies/fourth.jpg":
/*!************************************!*\
  !*** ./src/img/puppies/fourth.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/1b187042e21479b27c8155ff9fd06bcf.jpg\");\n\n//# sourceURL=webpack:///./src/img/puppies/fourth.jpg?");

/***/ }),

/***/ "./src/img/puppies/second.jpg":
/*!************************************!*\
  !*** ./src/img/puppies/second.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/f6212c616ec947d6963c64bcdd2fb758.jpg\");\n\n//# sourceURL=webpack:///./src/img/puppies/second.jpg?");

/***/ }),

/***/ "./src/img/puppies/third.jpg":
/*!***********************************!*\
  !*** ./src/img/puppies/third.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/03ba4a86edb3f40565d7e64a42122d12.jpg\");\n\n//# sourceURL=webpack:///./src/img/puppies/third.jpg?");

/***/ }),

/***/ "./src/img/still-lifes/fifth.jpg":
/*!***************************************!*\
  !*** ./src/img/still-lifes/fifth.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c7699bd95225bd425f29b0cfae3a4fe0.jpg\");\n\n//# sourceURL=webpack:///./src/img/still-lifes/fifth.jpg?");

/***/ }),

/***/ "./src/img/still-lifes/first.jpg":
/*!***************************************!*\
  !*** ./src/img/still-lifes/first.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/a423da5091eea8034d2828abee4bacb2.jpg\");\n\n//# sourceURL=webpack:///./src/img/still-lifes/first.jpg?");

/***/ }),

/***/ "./src/img/still-lifes/fourth.jpg":
/*!****************************************!*\
  !*** ./src/img/still-lifes/fourth.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/3a440f3dee40220ad96ced621a8fadd8.jpg\");\n\n//# sourceURL=webpack:///./src/img/still-lifes/fourth.jpg?");

/***/ }),

/***/ "./src/img/still-lifes/second.jpg":
/*!****************************************!*\
  !*** ./src/img/still-lifes/second.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/6e2c038ebad9ea085285aab29b8433aa.jpg\");\n\n//# sourceURL=webpack:///./src/img/still-lifes/second.jpg?");

/***/ }),

/***/ "./src/img/still-lifes/third.jpg":
/*!***************************************!*\
  !*** ./src/img/still-lifes/third.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/88eefd31250dc57f56f158dfc7c8579b.jpg\");\n\n//# sourceURL=webpack:///./src/img/still-lifes/third.jpg?");

/***/ }),

/***/ "./src/scripts/Image.js":
/*!******************************!*\
  !*** ./src/scripts/Image.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Image = /** @class */ (function () {\r\n    function Image(img, cathegory) {\r\n        this.img = img;\r\n        this.cathegory = cathegory;\r\n    }\r\n    return Image;\r\n}());\r\nexports[\"default\"] = Image;\r\n\n\n//# sourceURL=webpack:///./src/scripts/Image.js?");

/***/ }),

/***/ "./src/scripts/accordion.js":
/*!**********************************!*\
  !*** ./src/scripts/accordion.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nfunction createAccordion(btntxt, ptxt) {\r\n    var accordion = document.createElement('div');\r\n    accordion.classList.add('accordion');\r\n    for (var i = 0; i < btntxt.length; i++) {\r\n        var accordContainer = document.createElement('div'), accordBtn = document.createElement('button'), accordText = document.createElement('p');\r\n        accordBtn.classList.add('accord-btn');\r\n        accordBtn.innerHTML = btntxt[i];\r\n        accordText.style.display = 'none';\r\n        accordText.innerHTML = ptxt[i];\r\n        accordContainer.appendChild(accordBtn);\r\n        accordContainer.appendChild(accordText);\r\n        accordion.appendChild(accordContainer);\r\n        accordBtn.addEventListener('click', function (event) {\r\n            var pWithText = event.target.nextSibling;\r\n            pWithText.style.display =\r\n                pWithText.style.display === 'none' ? 'block' : 'none';\r\n        });\r\n    }\r\n    return accordion;\r\n}\r\nexports[\"default\"] = createAccordion;\r\n\n\n//# sourceURL=webpack:///./src/scripts/accordion.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar accordion_1 = __webpack_require__(/*! ./accordion */ \"./src/scripts/accordion.js\");\r\n__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\r\nvar first_jpg_1 = __webpack_require__(/*! ../img/puppies/first.jpg */ \"./src/img/puppies/first.jpg\");\r\nvar second_jpg_1 = __webpack_require__(/*! ../img/puppies/second.jpg */ \"./src/img/puppies/second.jpg\");\r\nvar third_jpg_1 = __webpack_require__(/*! ../img/puppies/third.jpg */ \"./src/img/puppies/third.jpg\");\r\nvar fourth_jpg_1 = __webpack_require__(/*! ../img/puppies/fourth.jpg */ \"./src/img/puppies/fourth.jpg\");\r\nvar fifth_jpg_1 = __webpack_require__(/*! ../img/puppies/fifth.jpg */ \"./src/img/puppies/fifth.jpg\");\r\nvar first_jpg_2 = __webpack_require__(/*! ../img/landskapes/first.jpg */ \"./src/img/landskapes/first.jpg\");\r\nvar second_jpg_2 = __webpack_require__(/*! ../img/landskapes/second.jpg */ \"./src/img/landskapes/second.jpg\");\r\nvar third_jpg_2 = __webpack_require__(/*! ../img/landskapes/third.jpg */ \"./src/img/landskapes/third.jpg\");\r\nvar fourth_jpg_2 = __webpack_require__(/*! ../img/landskapes/fourth.jpg */ \"./src/img/landskapes/fourth.jpg\");\r\nvar fifth_jpg_2 = __webpack_require__(/*! ../img/landskapes/fifth.jpg */ \"./src/img/landskapes/fifth.jpg\");\r\nvar first_jpg_3 = __webpack_require__(/*! ../img/still-lifes/first.jpg */ \"./src/img/still-lifes/first.jpg\");\r\nvar second_jpg_3 = __webpack_require__(/*! ../img/still-lifes/second.jpg */ \"./src/img/still-lifes/second.jpg\");\r\nvar third_jpg_3 = __webpack_require__(/*! ../img/still-lifes/third.jpg */ \"./src/img/still-lifes/third.jpg\");\r\nvar fourth_jpg_3 = __webpack_require__(/*! ../img/still-lifes/fourth.jpg */ \"./src/img/still-lifes/fourth.jpg\");\r\nvar fifth_jpg_3 = __webpack_require__(/*! ../img/still-lifes/fifth.jpg */ \"./src/img/still-lifes/fifth.jpg\");\r\nvar first_jpg_4 = __webpack_require__(/*! ../img/cars/first.jpg */ \"./src/img/cars/first.jpg\");\r\nvar second_jpg_4 = __webpack_require__(/*! ../img/cars/second.jpg */ \"./src/img/cars/second.jpg\");\r\nvar third_jpg_4 = __webpack_require__(/*! ../img/cars/third.jpg */ \"./src/img/cars/third.jpg\");\r\nvar fourth_jpg_4 = __webpack_require__(/*! ../img/cars/fourth.jpg */ \"./src/img/cars/fourth.jpg\");\r\nvar fifth_jpg_4 = __webpack_require__(/*! ../img/cars/fifth.jpg */ \"./src/img/cars/fifth.jpg\");\r\nvar first_jpg_5 = __webpack_require__(/*! ../img/animals/first.jpg */ \"./src/img/animals/first.jpg\");\r\nvar second_jpg_5 = __webpack_require__(/*! ../img/animals/second.jpg */ \"./src/img/animals/second.jpg\");\r\nvar third_jpg_5 = __webpack_require__(/*! ../img/animals/third.jpg */ \"./src/img/animals/third.jpg\");\r\nvar fourth_jpg_5 = __webpack_require__(/*! ../img/animals/fourth.jpg */ \"./src/img/animals/fourth.jpg\");\r\nvar fifth_jpg_5 = __webpack_require__(/*! ../img/animals/fifth.jpg */ \"./src/img/animals/fifth.jpg\");\r\nvar Image_1 = __webpack_require__(/*! ./Image */ \"./src/scripts/Image.js\");\r\nvar prevues_1 = __webpack_require__(/*! ./prevues */ \"./src/scripts/prevues.js\");\r\nvar divWithMainImage = document.createElement('div'), divWithPrevues = document.createElement('div'), gallery = document.getElementById('gallery'), mainImage = createImg('', ['main-image']), imageSources = [{\r\n        sources: [first_jpg_1[\"default\"], second_jpg_1[\"default\"], third_jpg_1[\"default\"], fourth_jpg_1[\"default\"], fifth_jpg_1[\"default\"]],\r\n        cathegory: 'puppy'\r\n    },\r\n    { sources: [first_jpg_2[\"default\"], second_jpg_2[\"default\"], third_jpg_2[\"default\"], fourth_jpg_2[\"default\"], fifth_jpg_2[\"default\"]],\r\n        cathegory: 'landskape'\r\n    },\r\n    {\r\n        sources: [first_jpg_3[\"default\"], second_jpg_3[\"default\"], third_jpg_3[\"default\"], fourth_jpg_3[\"default\"], fifth_jpg_3[\"default\"]],\r\n        cathegory: 'still-live'\r\n    },\r\n    {\r\n        sources: [first_jpg_4[\"default\"], second_jpg_4[\"default\"], third_jpg_4[\"default\"], fourth_jpg_4[\"default\"], fifth_jpg_4[\"default\"]],\r\n        cathegory: 'car'\r\n    },\r\n    {\r\n        sources: [first_jpg_5[\"default\"], second_jpg_5[\"default\"], third_jpg_5[\"default\"], fourth_jpg_5[\"default\"], fifth_jpg_5[\"default\"]],\r\n        cathegory: 'animal'\r\n    }].map(function (obj) {\r\n    var arr = [];\r\n    for (var _i = 0, _a = obj.sources; _i < _a.length; _i++) {\r\n        var src = _a[_i];\r\n        arr.push(new Image_1[\"default\"](createImg(src, ['preview-image']), obj.cathegory));\r\n    }\r\n    return arr;\r\n});\r\nvar prevues = new prevues_1[\"default\"]([]);\r\nfunction createImg(src, classList) {\r\n    if (classList === void 0) { classList = []; }\r\n    var img = document.createElement('img');\r\n    for (var _i = 0, classList_1 = classList; _i < classList_1.length; _i++) {\r\n        var className = classList_1[_i];\r\n        img.classList.add(className);\r\n    }\r\n    img.setAttribute('src', src);\r\n    return img;\r\n}\r\nfunction removeChildren(container) {\r\n    removeChildren.curContainer = container;\r\n    removeChildren.removedNodes = [];\r\n    for (var _i = 0, _a = Array.from(container.children); _i < _a.length; _i++) {\r\n        var elem = _a[_i];\r\n        removeChildren.removedNodes.push(elem);\r\n        elem.remove();\r\n    }\r\n}\r\nremoveChildren.curContainer = null;\r\nremoveChildren.removedNodes = [];\r\nremoveChildren[\"return\"] = function () {\r\n    for (var _i = 0, _a = removeChildren.removedNodes; _i < _a.length; _i++) {\r\n        var elem = _a[_i];\r\n        removeChildren.curContainer.appendChild(removeChildren.removedNodes.shift());\r\n    }\r\n};\r\nfunction changeMainImage(src) {\r\n    mainImage.src = src;\r\n    prevues.changeCurImage(src);\r\n}\r\nfunction enlargeOnScroll(event) {\r\n    var transform = event.target.style.transform, scale = transform === '' ? 1 : +transform.slice(6, transform.length - 1);\r\n    if (event.deltaY < 0) {\r\n        event.target.style.transform = \"scale(\" + scale * 1.05 + \")\";\r\n    }\r\n    else if (scale > 1) {\r\n        event.target.style.transform = \"scale(\" + scale * 0.95 + \")\";\r\n    }\r\n}\r\nfunction addPrevues(images) {\r\n    for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {\r\n        var img = images_1[_i];\r\n        divWithPrevues.appendChild(img.img);\r\n        img.img.addEventListener('click', function (event) {\r\n            changeMainImage(event.target.src);\r\n        });\r\n        prevues.add(img);\r\n    }\r\n}\r\nfunction changePrevues(cathegories) {\r\n    removeChildren(divWithPrevues);\r\n    addPrevues(prevues.addVisibillity.apply(prevues, cathegories));\r\n    mainImage.src = prevues.allVisibleImages[0].img.src;\r\n}\r\nfunction showNextElementByClicking(btn) {\r\n    var nextSib = btn.nextElementSibling, displayStyle = nextSib.style.display, deleteList = function () {\r\n        nextSib.style.display = 'none';\r\n    };\r\n    if (displayStyle === 'none' || displayStyle === '') {\r\n        nextSib.style.display = 'block';\r\n    }\r\n    else {\r\n        deleteList();\r\n    }\r\n}\r\nfunction checkCheckboxes() {\r\n    var cathegories = [];\r\n    var container = Array.from(document.querySelectorAll('input'))\r\n        .filter(function (elem) { return elem.type === 'checkbox'; });\r\n    for (var _i = 0, _a = container; _i < _a.length; _i++) {\r\n        var cb = _a[_i];\r\n        if (cb.checked) {\r\n            cathegories.push(cb.value);\r\n        }\r\n    }\r\n    changePrevues(cathegories);\r\n}\r\nfunction appendCheckBox(cathegory) {\r\n    if (cathegoryCheckBoxes.find(function (val) { return val.value === cathegory; }) === undefined) {\r\n        console.log('e2');\r\n        var p = document.createElement('p'), cb = document.createElement('input');\r\n        cb.type = 'checkbox';\r\n        cb.value = cathegory;\r\n        cb.checked = true;\r\n        p.appendChild(cb);\r\n        p.innerHTML = p.innerHTML + ' ' + cathegory;\r\n        checkboxes.appendChild(p);\r\n        cb.addEventListener('change', checkCheckboxes);\r\n        return cb;\r\n    }\r\n    return cathegoryCheckBoxes.find(function (val) { return val.value === cathegory; });\r\n}\r\nfor (var _i = 0, imageSources_1 = imageSources; _i < imageSources_1.length; _i++) {\r\n    var images = imageSources_1[_i];\r\n    addPrevues(images);\r\n}\r\ndivWithPrevues.id = 'container-preview';\r\ngallery.appendChild(divWithMainImage);\r\ngallery.appendChild(divWithPrevues);\r\ndivWithMainImage.appendChild(mainImage);\r\nchangeMainImage(prevues.allImages[0].img.src);\r\nfor (var _a = 0, _b = prevues.allImages; _a < _b.length; _a++) {\r\n    var img = _b[_a];\r\n    img.img.addEventListener('click', function (event) {\r\n        prevues.changeCurImage(event.target.src);\r\n        mainImage.src = event.target.src;\r\n    });\r\n}\r\ndocument.addEventListener('keydown', function (event) {\r\n    if (event.code === 'ArrowLeft') {\r\n        changeMainImage(prevues.prev.img.src);\r\n    }\r\n    else if (event.code === 'ArrowRight') {\r\n        changeMainImage(prevues.next.img.src);\r\n    }\r\n});\r\nsetInterval(function () {\r\n    changeMainImage(prevues.next.img.src);\r\n}, 10000);\r\nmainImage.addEventListener('click', function (event) {\r\n    var img = document.createElement('img');\r\n    img.style.width = '100%';\r\n    img.style.height = '100vh';\r\n    img.src = event.target.src;\r\n    img.addEventListener('wheel', function (event) {\r\n        enlargeOnScroll(event);\r\n    });\r\n    img.addEventListener('click', function (event) {\r\n        event.target.remove();\r\n        removeChildren[\"return\"]();\r\n    });\r\n    removeChildren(document.body);\r\n    document.body.appendChild(img);\r\n});\r\nvar cathegoryBtn = document.getElementById('cathegory-btn'), cathegoryCheckBoxes = Array.from(document.querySelectorAll('input')).filter(function (elem) { return elem.type === 'checkbox'; });\r\ncathegoryBtn.addEventListener('click', function (event) {\r\n    showNextElementByClicking(event.target);\r\n});\r\nfor (var _c = 0, _d = Array.from(cathegoryCheckBoxes); _c < _d.length; _c++) {\r\n    var checkBox = _d[_c];\r\n    checkBox.addEventListener('click', checkCheckboxes);\r\n}\r\ndocument.getElementById('show-input-add-file-btn').addEventListener('click', function (event) {\r\n    showNextElementByClicking(event.target);\r\n});\r\nvar fileChooser = document.getElementById('img-file-chooser'), cathegoryNameField = document.getElementById('cathegory-textfield'), addFileBtn = document.getElementById('add-image'), checkboxes = document.getElementById('checkboxes');\r\naddFileBtn.addEventListener('click', function () {\r\n    var file = fileChooser.files[fileChooser.files.length - 1], reader = new FileReader(), cathegory = cathegoryNameField.value;\r\n    if (file.type.startsWith('image/')) {\r\n        var img_1 = document.createElement('img');\r\n        reader.addEventListener('loadend', function (event) {\r\n            img_1.src = event.target.result;\r\n        });\r\n        reader.readAsDataURL(file);\r\n        appendCheckBox(cathegory);\r\n        addPrevues([new Image_1[\"default\"](img_1, cathegory)]);\r\n    }\r\n});\r\ndocument.body.appendChild(accordion_1[\"default\"](['Button 1', 'Button 2', 'Button 3'], ['Example 1', 'Example 2', 'Example 3']));\r\n//askCaptcha( () => removeChildren(document.body) );\r\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/prevues.js":
/*!********************************!*\
  !*** ./src/scripts/prevues.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar PrevueContainer = /** @class */ (function () {\r\n    function PrevueContainer(images) {\r\n        this.sortedImages = new Map();\r\n        this.curIndex = 0;\r\n        this.add.apply(this, images);\r\n    }\r\n    PrevueContainer.prototype.add = function () {\r\n        var images = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            images[_i] = arguments[_i];\r\n        }\r\n        for (var _a = 0, images_1 = images; _a < images_1.length; _a++) {\r\n            var img = images_1[_a];\r\n            img.img.classList.add('preview-image');\r\n            if (this.sortedImages.has(img.cathegory))\r\n                this.sortedImages.get(img.cathegory).images.push(img);\r\n            else\r\n                this.sortedImages.set(img.cathegory, new Cathegory([img]));\r\n        }\r\n    };\r\n    PrevueContainer.prototype.addVisibillity = function () {\r\n        var cathegories = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            cathegories[_i] = arguments[_i];\r\n        }\r\n        this.curIndex = 0;\r\n        var result = [];\r\n        for (var _a = 0, _b = Array.from(this.sortedImages.keys()); _a < _b.length; _a++) {\r\n            var cathegoryName = _b[_a];\r\n            if (cathegories.includes(cathegoryName)) {\r\n                this.sortedImages.get(cathegoryName).isShown = true;\r\n                result.push.apply(result, this.sortedImages.get(cathegoryName).images);\r\n            }\r\n            else {\r\n                this.sortedImages.get(cathegoryName).isShown = false;\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    Object.defineProperty(PrevueContainer.prototype, \"allVisibleImages\", {\r\n        get: function () {\r\n            var result = [];\r\n            for (var _i = 0, _a = Array.from(this.sortedImages.values()); _i < _a.length; _i++) {\r\n                var cathegory = _a[_i];\r\n                if (cathegory.isShown)\r\n                    result.push.apply(result, cathegory.images);\r\n            }\r\n            return result;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(PrevueContainer.prototype, \"allImages\", {\r\n        get: function () {\r\n            var result = [];\r\n            for (var _i = 0, _a = Array.from(this.sortedImages.values()); _i < _a.length; _i++) {\r\n                var cathegory = _a[_i];\r\n                result.push.apply(result, cathegory.images);\r\n            }\r\n            return result;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(PrevueContainer.prototype, \"length\", {\r\n        get: function () {\r\n            return this.allImages.length;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    PrevueContainer.prototype.changeCurImage = function (src) {\r\n        for (var _i = 0, _a = this.allImages; _i < _a.length; _i++) {\r\n            var image = _a[_i];\r\n            image.img.classList.remove('curent-image');\r\n        }\r\n        this.curIndex = this.allVisibleImages.map(function (image) { return image.img.src; }).indexOf(src);\r\n        if (this.curIndex === -1)\r\n            throw new Error('No image with this src');\r\n        this.allVisibleImages[this.curIndex].img.classList.add('curent-image');\r\n    };\r\n    Object.defineProperty(PrevueContainer.prototype, \"curImage\", {\r\n        get: function () {\r\n            return this.allVisibleImages[this.curIndex];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(PrevueContainer.prototype, \"next\", {\r\n        get: function () {\r\n            return this.allVisibleImages[(this.curIndex + 1) % this.allVisibleImages.length];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(PrevueContainer.prototype, \"prev\", {\r\n        get: function () {\r\n            var index = (this.curIndex + this.allVisibleImages.length - 1) % this.allVisibleImages.length;\r\n            return this.allVisibleImages[index];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return PrevueContainer;\r\n}());\r\nexports[\"default\"] = PrevueContainer;\r\nvar Cathegory = /** @class */ (function () {\r\n    function Cathegory(images) {\r\n        this.images = images;\r\n        this.isShown = true;\r\n    }\r\n    return Cathegory;\r\n}());\r\n\n\n//# sourceURL=webpack:///./src/scripts/prevues.js?");

/***/ })

/******/ });