import {IComponent} from "./icomponents";
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
let arrayOfImg:any =[];
export class Gallery implements IComponent{
    private mainImg = document.createElement('img');


    build(){
        const divMainImg = document.createElement('div');
        divMainImg.setAttribute('align','center');
        gallery.appendChild(divMainImg);

        divMainImg.appendChild(this.mainImg);
        this.mainImg.classList.add('main-img');

        const divImg = document.createElement('div');
        gallery.appendChild(divImg);
        divImg.setAttribute('id','preview');
        for(let i = 0;i < arrayImg.length;i++){
            this.createImg(i);
            divImg.appendChild(arrayOfImg[i]);
            arrayOfImg[i].onclick = function(){
                window.location.href = `gallery?${i}`
            }
        }

    }

    setViewParams(param:any){
        if(param > arrayOfImg.length || param ==''){
            window.location.href = `gallery?0`
            this.mainImg.setAttribute('src',arrayImg[0]);
        }else{this.mainImg.setAttribute('src',arrayImg[param]);}
        this.mainImg.onclick = function(){
            window.location.href = `view?${param}`
        }
        this.funcBorder(param);
     
    }

    destroy(){
    }

    private createImg(k:any){
        let newImg = document.createElement('img');
        newImg.setAttribute('src',arrayImg[k]);
        newImg.classList.add('preview-img');
        arrayOfImg.push(newImg);
    }

    private funcBorder(param:any)
    {
        arrayOfImg[param].style.border = '3px solid #BDB76B';
    }
}