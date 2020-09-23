"use strict";
exports.__esModule = true;
var zooming_1 = require("zooming");
require("../CSS/mystyle.css");
//import Imagine from '../TS/app.ts';
var Imagine = /** @class */ (function () {
    function Imagine(path, category) {
        this.path = path;
        this.category = category;
    }
    return Imagine;
}());
var ab = document.createElement('div');
var app = document.getElementById("gallery");
app.appendChild(ab);
var main = document.createElement('img');
var menu = document.getElementById('menu');
var rad1 = document.getElementById('rad1');
var rad2 = document.getElementById('rad2');
var selarea = document.getElementById('selarea');
var menindex = 0;
function menfun() {
    if (!menindex) {
        selarea.classList.add('disap');
    }
    else {
        selarea.classList.remove('disap');
    }
    menindex = 1 - menindex;
}
menu.addEventListener('click', menfun);
var checkind1 = 0;
var checkind2 = 0;
var checkind;
rad2.setAttribute('num', '');
rad1.setAttribute('num', '');
function radfun(e) {
    if (e.target == rad1) {
        checkind1 = 1 - checkind1;
        checkind = checkind1;
    }
    if (e.target == rad2) {
        checkind2 = 1 - checkind2;
        checkind = checkind2;
    }
    if (checkind) {
        e.target.setAttribute('num', 'checkind');
    }
    else {
        e.target.setAttribute('num', '');
    }
    if (!rad1.getAttribute('num')) {
        for (var i_1 = 0; i_1 < images.length; i_1++) {
            if (images[i_1].category === "dark") {
                console.log(images[i_1].path + ' add');
                array[i_1].classList.add('disap');
            }
        }
    }
    if (!rad2.getAttribute('num')) {
        for (var i_2 = 0; i_2 < images.length; i_2++) {
            if (images[i_2].category === "light") {
                console.log(images[i_2].path + ' add');
                array[i_2].classList.add('disap');
            }
        }
    }
    if (rad1.getAttribute('num')) {
        for (var i_3 = 0; i_3 < images.length; i_3++) {
            if (images[i_3].category === "dark") {
                console.log(images[i_3].path + ' remove');
                array[i_3].classList.remove('disap');
            }
        }
    }
    if (rad2.getAttribute('num')) {
        for (var i_4 = 0; i_4 < images.length; i_4++) {
            console.log(images[i_4].path + ' remove');
            if (images[i_4].category === "light") {
                array[i_4].classList.remove('disap');
            }
        }
    }
}
rad2.addEventListener('click', radfun);
rad1.addEventListener('click', radfun);
main.classList.add('main-img');
main.setAttribute('src', "img/fisrt.jpg");
main.setAttribute('width', "400px");
main.setAttribute('height', "400px");
main.id = "main";
ab.appendChild(main);
var prev = document.createElement('div');
prev.id = "prev";
app.appendChild(prev);
var img1 = document.createElement('img');
//img1.setAttribute('src',"img/fisrt.jpg"); 
var img2 = document.createElement('img');
//img2.setAttribute('src',"img/second.jpg"); 
var img3 = document.createElement('img');
//img3.setAttribute('src',"img/third.jpg"); 
var img4 = document.createElement('img');
//img4.setAttribute('src',"img/fourth.jpg"); 
var img5 = document.createElement('img');
//img5.setAttribute('src',"img/fifth.jpg"); 
var array = new Array(img1, img2, img3, img4, img5);
var images = [];
images[0] = new Imagine("img/fisrt.jpg", "dark");
images[1] = new Imagine("img/second.jpg", "light");
images[2] = new Imagine("img/third.jpg", "dark");
images[3] = new Imagine("img/fourth.jpg", "light");
images[4] = new Imagine("img/fifth.jpg", "dark");
for (var i_5 = 0; i_5 < images.length; i_5++) {
    array[i_5].setAttribute('src', images[i_5].path);
}
var p = 10;
for (var k_1 = 0; k_1 < array.length; k_1++) {
    array[k_1].classList.add('prev-im');
    array[k_1].style.margin = "38px";
    array[k_1].style.marginBottom = p + "px";
    if (k_1 < 2)
        p += 20;
    else
        p -= 20;
    //array[k].setAttribute('width',"200px"); 
    //array[k].setAttribute('height',"200px"); 
}
for (var k_2 = 0; k_2 < array.length; k_2++)
    prev.appendChild(array[k_2]);
//console.log(app); 
var scalek = 1;
var i = 0;
array[0].classList.add('active-img');
function func(e) {
    //console.log(e); 
    if (e.key == "ArrowLeft") {
        array[i].classList.remove('active-img');
        i = (i + array.length - 1) % array.length;
        array[i].classList.add('active-img');
        main.setAttribute('src', array[i].getAttribute('src'));
    }
    if (e.key == "ArrowRight") {
        array[i].classList.remove('active-img');
        i = (i + 1) % array.length;
        //console.log(array.length);
        array[i].classList.add('active-img');
        main.setAttribute('src', array[i].getAttribute('src'));
    }
    /*
    //масштаб меняется
    if(e.key=="ArrowUp"&&h)
    {
        //console.log('Up');
    
        //main.width*=2;
       // main.height*=2;
      // main.classList.remove('smaller');
      // //main.classList.add('bigger');
       scalek*=1.2;
       main.style.transform=`scale(${scalek})`;
      //  main.classList.remove('bigger');
    }
    if(e.key=="ArrowDown"&&h)
    {
        scalek/=1.2;
       main.style.transform=`scale(${scalek})`;
       // console.log('Down');
        //main.width/=2;
       // main.height/=2;
     //// main.classList.remove('bigger');
       // main.classList.add('smaller');
      //  main.classList.remove('smaller');
    }
    */
}
document.addEventListener('keydown', func);
function funct(a) {
    return a.src;
}
function act1(e) {
    array[i].classList.remove('active-img');
    i = array.map(funct).indexOf(e.target.src);
    array[i].classList.add('active-img');
    main.setAttribute('src', e.target.getAttribute('src'));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (var i_6 = 0; i_6 < array.length; i_6++) {
    array[i_6].addEventListener('click', act1);
}
// 
var int1 = getRandomInt(0, 50);
var int2 = getRandomInt(0, 50);
var int3 = getRandomInt(0, 3);
var s = 2, k = 1;
switch (int3) {
    case 1:
        {
            s = parseInt(prompt(int1 + " + " + int2 + " = "));
            k = int1 + int2;
            break;
        }
    case 2:
        {
            s = parseInt(prompt(int1 + " - " + int2 + " = "));
            k = int1 - int2;
            break;
        }
    default:
        {
            s = parseInt(prompt(int1 + " * " + int2 + " = "));
            k = int1 * int2;
            break;
        }
}
if (s != k) {
    for (var i_7 = 0; i_7 < array.length; i_7++)
        array[i_7].src = "";
}
/*let h=0;//на клик выбрасыается в body
function bigim()
{
    if(!h)
    {
        document.body.appendChild(main);
        main.classList.add('bigimage');
    }
    else
    {
       main.classList.remove('bigimage');
       scalek=1;
       main.style.transform=`scale(${scalek})`;
     // main.classList.remove('bigger');
        //main.classList.add('smaller');
        ab.appendChild(main);
    }
    h=1-h;
}
main.addEventListener('click',bigim);
*/
var zooming = new zooming_1["default"];
zooming.listen(main);
