!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){n(2);var r=n(5),o=n(6),i=n(7),a=n(8),c=n(9),s=(n(10),document.body,[r,o,i,a,c]),u=document.createElement("div");u.setAttribute("align","center");var l=document.getElementById("gallery");l.appendChild(u);var d=document.createElement("img");u.appendChild(d),d.classList.add("main-img"),d.setAttribute("src",s[0]);var f=document.createElement("div");l.appendChild(f),f.setAttribute("id","preview"),console.log(f);var p=[];function g(e){var t=document.createElement("img");return t.setAttribute("src",s[e]),t.classList.add("preview-img"),e>=2?(f.insertBefore(t,p[2]),p.splice(2,0,t)):(p.push(t),f.appendChild(t)),t}g(0),g(1),g(2),g(3),g(4);function b(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)}p[0].style.border="3px solid #BDB76B";b(1,10);var h=b(1,10);switch(["+","-","*"][b(0,2)]){case"+":h;break;case"-":h;break;case"*":h}function v(e){y=m.indexOf(d.src),d.setAttribute("src",e.target.src),p[y].style.border="none",y=m.indexOf(d.src),p[y%m.length].style.border="3px solid #BDB76B"}var m=Array.from(p).map((function(e){return e.src}));var y,x,j=s.length;console.log(j);var w=-500,B=1e3/(p.length-1);for(x=0;x<p.length;x++){var M=x*B+"px";p[x].style.left=M;var C=Math.sqrt(2500*(1-w*w/25e4))+"px";p[x].style.bottom=C,w+=B}document.addEventListener("keydown",(function(e){"ArrowRight"===e.key&&(y=m.indexOf(d.src),p[y].style.border="none",y+=1,d.setAttribute("src",p[y%m.length].src),p[y%m.length].style.border="3px solid #BDB76B"),"ArrowLeft"===e.key&&(y=m.indexOf(d.src),p[y%m.length].style.border="none",y-=1,d.setAttribute("src",p[(m.length+y)%m.length].src),p[(m.length+y)%m.length].style.border="3px solid #BDB76B")}));for(x=0;x<p.length;x++)p[x].onclick=v},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={injectType:"singletonStyleTag",insert:"head",singleton:!0};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:h(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,b=0;function h(e,t){var n,r,o;if(t.singleton){var i=b++;n=g||(g=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#gallery{\r\n\twidth:100%;\r\n\theight:100vh;\r\n\tbackground-color:#FFEFD5;\r\n\tposition:relative;\r\n}\r\n\r\n#preview{\r\n\tposition:absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\tbackground-color:red;\r\n}\r\n\r\n.main-img{\r\n\tposition:fixed;\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n\r\n.preview-img{\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 50%;\r\n\tposition:absolute;\r\n\twidth:200px;\r\n\theight:200px;\r\n\tbottom:0;\r\n}\r\n\r\n.big-img{\r\n\tposition:fixed;\r\n\tleft:0;\r\n\ttop:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n}",""]),t.default=o},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/0fb61f200bea2ca0426f92af78b30847.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/6cd4be592115793efba6234f4d4b7018.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/7c673561741b90c893aa31ecfc174e4d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/041c036d3c2330c23067e6f60512534d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/052f7064ff6d30654e1a855ee2d0a883.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"img/6ab6aa99b0cf2edef9dc3587c4d6ac71.jpg"}]);