import { IComponent } from "./icomponents";
const pic1 = require('../img/picture1.jpg');
const pic2 = require('../img/picture2.jpg');
const pic3 = require('../img/picture3.jpg');
const pic4 = require('../img/picture4.jpg');
const pic5 = require('../img/picture5.jpg');
const css = require('../css/main.css');

let arrayImg:any = [];
arrayImg.push(pic1.default);
arrayImg.push(pic2.default);
arrayImg.push(pic3.default);
arrayImg.push(pic4.default);
arrayImg.push(pic5.default);

const gallery = document.getElementById("gallery");
export class View implements IComponent{

    private divMainImg = document.createElement('div');
    build(){
        this.divMainImg.setAttribute('align','center');
        gallery.appendChild(this.divMainImg);
    }

    setViewParams(param:any,router:any){
        let mainImg = document.createElement('img');
        this.divMainImg.appendChild(mainImg);
        mainImg.classList.add('full-img');
        if(param > arrayImg.length - 1 || param == ''){
            window.location.href = `view?0`;
            mainImg.setAttribute('src',arrayImg[0]);
        }else{
            mainImg.setAttribute('src',arrayImg[param]);
        }

        mainImg.onclick = function(){
            window.location.href = `gallery?${param}`;
        };
    }
    destroy(){}
}