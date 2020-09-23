const Zooming = require('./zooming.min.js');
const css = require('../css/main.css')
const pic1 = require('../img/picture1.jpg');
const pic2 = require('../img/picture2.jpg');
const pic3 = require('../img/picture3.jpg');
const pic4 = require('../img/picture4.jpg');
const pic5 = require('../img/picture5.jpg');
const picDel = require('../img/picDel.jpg');

class Img{
    constructor(public puth: string,public category:string){};
}
const img1: Img = new Img(pic1.default,'summer');
const img2: Img = new Img(pic2.default,'summer');
const img3: Img = new Img(pic3.default,'summer');
const img4: Img = new Img(pic4.default,'autumn');
const img5: Img = new Img(pic5.default,'summer');

const arrayOfImg:any =[];
arrayOfImg.push(img1);
arrayOfImg.push(img2);
arrayOfImg.push(img3);
arrayOfImg.push(img4);
arrayOfImg.push(img5);


const mainBody = document.body;
let newElemMainDiv = document.createElement('div');
newElemMainDiv.setAttribute('align','center');
let gallery = document.getElementById("gallery");
gallery.appendChild(newElemMainDiv);

let newImgMain = document.createElement('img');
newElemMainDiv.appendChild(newImgMain);
newImgMain.classList.add('main-img');
newImgMain.setAttribute('src',arrayOfImg[0].puth);
newImgMain.setAttribute('description', arrayOfImg[0].category)

let newElemDiv = document.createElement('div');
gallery.appendChild(newElemDiv);
newElemDiv.setAttribute('id','preview');


let arrayImg:any = [];
function createImg(k:number){
	let newImg = document.createElement('img');
	newImg.setAttribute('src',arrayOfImg[k].puth);
	newImg.setAttribute('description', arrayOfImg[k].category)
	newImg.classList.add('preview-img');
	if(k>=2){
	    newElemDiv.insertBefore(newImg,arrayImg[2]);
		arrayImg.splice(2,0,newImg);
	}else{
		arrayImg.push(newImg);
		newElemDiv.appendChild(newImg);
	}
	return newImg;
}

let newImg1=createImg(0);
let newImg2=createImg(1);
let newImg3=createImg(2);
let newImg4=createImg(3);
let newImg5=createImg(4);
arrayImg[0].style.border = '3px solid #BDB76B';

function randomInteger(min:any, max:any) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  let num1 = randomInteger(1, 10);
  let num2 = randomInteger(1, 10);
  let masSymbol = ["+","-","*"];
  let operation = masSymbol[randomInteger(0,2)];
//let rezult = prompt(num1 + operation + num2);
  switch(operation){
	case '+':
	  num1+=num2;
	  break;
	case '-':
	  num1-=num2;
	  break;
	case '*':
	  num1*=num2;
	  break;
	default:
	  "Ошибка";
}

let t = true;
//if(num1 === result)
//	alert("Вход в галерею выполнен!");
//else{
//	alert("Нет доступа в галерею!");
 //   t = false; }


 function func1(e:any):void
 {
    k = mas.indexOf(newImgMain.src);
    newImgMain.setAttribute('src',e.target.src);
    arrayImg[k].style.border = 'none';
    k = mas.indexOf(newImgMain.src);
    arrayImg[k%mas.length].style.border = '3px solid #BDB76B';
}

let mas:any[]= (Array.from(arrayImg)).map(function(num) 
{ return (<HTMLImageElement>num).src;});

function func2(e:any):void{
    if(e.key === 'ArrowRight'){
		k = mas.indexOf(newImgMain.src);
		console.log(arrayImg[k-1].style);
        arrayImg[k].style.border = 'none';
        k+=1;
        newImgMain.setAttribute('src',arrayImg[k%mas.length].src);
        arrayImg[k%mas.length].style.border = '3px solid #BDB76B';
    }
    if(e.key === 'ArrowLeft'){
        k = mas.indexOf(newImgMain.src);
        arrayImg[k%mas.length].style.border = 'none';
        k-=1;
        newImgMain.setAttribute('src',arrayImg[(mas.length+k)%mas.length].src);
        arrayImg[(mas.length+k)%mas.length].style.border = '3px solid #BDB76B';}
}
let k,i,t1=true;
let kImg=arrayOfImg.length;
let tCheck1=false, tCheck2=false;
let removeImg:any[] =[];
function funcCheck(){
	if(tCheck1 && !tCheck2){
		for(let i=0;i<arrayImg.length;i++){
			if(arrayOfImg[i].category == 'autumn'){
			newElemDiv.removeChild(arrayImg[i]);
			removeImg.push(i);
			positionImg();
		}
		}}
	if(tCheck2 && tCheck2){
		for(let i=0;i<arrayImg.length;i++){
			for(let k=0;k<removeImg.length;k++){
				newElemDiv.appendChild(arrayImg[removeImg[k]]);
			}
			removeImg =[];
			positionImg();
	}
	if(!tCheck1&&!tCheck2){
		console.log("зашел");
		for(let i=0;i<arrayImg.length;i++){
			for(let k=0;k<removeImg.length;k++){
				newElemDiv.appendChild(arrayImg[removeImg[k]]);
			}
			removeImg =[];
			positionImg();			
		}
		}
		if(!tCheck1 && tCheck2){
			for(let i=0;i<arrayImg.length;i++){
				if(arrayOfImg[i].category == 'summer'){
						newElemDiv.removeChild(arrayImg[i]);
						removeImg.push(i);
						positionImg();
					}}
			}}
}

function positionImg(){
	let kk=removeImg.length;
	let l=0;
	let ii=0;
	let zero=-500;
	let widthImg =1000/(arrayImg.length-1-kk);
	for (i=0;i<arrayImg.length-kk; i++){
		if(!(i == removeImg[l])){
		let widthImgpx=ii*widthImg + 'px';
		arrayImg[i].style.left = widthImgpx;
		let bottomImg = Math.sqrt((1-(zero*zero/250000))*2500) + 'px';
		arrayImg[i].style.bottom = bottomImg;
		zero+=widthImg;
		l++;
		ii++;
		}
    }
}
if(t){
	positionImg();
	

    //Увеличение на прокручивание колесика
	//let sc = 1,val=0.1;
	//newImgMain.addEventListener("wheel",function(event){
	//	var y = event.deltaY;		
	//	if(y > 0)
	//	{
	//		sc+=0.1;
	//		newImgMain.style.transform="scale("+sc+")";
	//	}
	//	else{
	//		sc-=0.1;
	//		if(sc < 0.2){sc=0.1;}
	//		newImgMain.style.transform="scale("+sc+")";}});
	
	const zooming = new Zooming();
	zooming.listen(newImgMain);
		
	let p = document.addEventListener('keydown',func2);
    for(i=0;i<arrayImg.length;i++){
	  arrayImg[i].onclick = func1;
      }
      
	const but=document.getElementById('but');
	var tt = true;
	const check=document.getElementById("checkdiv");
    but.onclick = function(){
        if(tt){
        check.style.visibility="visible";
		tt=!tt;
		}
        else
        {
            tt=!tt;
            check.style.visibility="hidden";
        }
	}
	const check1=document.getElementById("check1");
	const check2=document.getElementById("check2");
	
	check1.onclick = function(){
		tCheck1=!tCheck1;
		funcCheck();
	}
	check2.onclick = function(){
		tCheck2=!tCheck2;
		funcCheck();
	}
	newImgMain.onclick = function(){
		tt=!tt;
        check.style.visibility="hidden";
	}

}
else{
	newImgMain.setAttribute('src',picDel);	
	for(let i=0;i<arrayImg.length;i++){
	  arrayImg[i].style.visibility = 'hidden';
	  }
}