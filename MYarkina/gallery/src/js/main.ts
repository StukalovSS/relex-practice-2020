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


let arrayOfImgObject:any =[];
arrayOfImgObject.push(img1);
arrayOfImgObject.push(img2);
arrayOfImgObject.push(img3);
arrayOfImgObject.push(img4);
arrayOfImgObject.push(img5);


const mainBody = document.body;
const gallery = document.getElementById("gallery");

const divMainImg = document.createElement('div');
divMainImg.setAttribute('align','center');
gallery.appendChild(divMainImg);

let mainImg = document.createElement('img');
divMainImg.appendChild(mainImg);
mainImg.classList.add('main-img');
mainImg.setAttribute('src',arrayOfImgObject[0].puth);
mainImg.setAttribute('description', arrayOfImgObject[0].category)

const divImg = document.createElement('div');
gallery.appendChild(divImg);
divImg.setAttribute('id','preview');


let arrayOfImg:any = [],
countOfImg=0;
//добавление картинки 
function createImg(countOfImg:number){
	let newImg = document.createElement('img');
	newImg.setAttribute('src',arrayOfImgObject[countOfImg].puth);
	newImg.setAttribute('description', arrayOfImgObject[countOfImg].category)
	newImg.classList.add('preview-img');
	arrayOfImg.push(newImg);
	divImg.appendChild(newImg);
	if(countOfImg===0){arrayOfImg[countOfImg].style.border = '3px solid #BDB76B';}
}

let newImg1=createImg(countOfImg++);
let newImg2=createImg(countOfImg++);
let newImg3=createImg(countOfImg++);
let newImg4=createImg(countOfImg++);
let newImg5=createImg(countOfImg++);
console.log(arrayOfImg);

//авторизация
function authorization(){
	function randomInteger(min:any, max:any) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	  }

	let num1 = randomInteger(1, 10);
    let num2 = randomInteger(1, 10);
    let masSymbol = ["+","-","*"];
	let operation = masSymbol[randomInteger(0,2)];
	
	let rezult = prompt(num1 + operation + num2);
	
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

	if(num1 === Number(rezult)){
		alert("Вход в галерею выполнен!");}
	else{
		alert("Нет доступа в галерею!");}

}



let current=0;
 function funcBorder(e:any):void
 {
	let mas:any[]= (Array.from(arrayOfImg)).map(function(num) 
	{ return (<HTMLImageElement>num).src;});
	current = mas.indexOf(mainImg.src);
    mainImg.setAttribute('src',e.target.src);
    arrayOfImg[current].style.border = 'none';
	current = mas.indexOf(mainImg.src);
    arrayOfImg[current%mas.length].style.border = '3px solid #BDB76B';
}


let removeImg:any[] =[];
let removeBool = false;
let k:any,i,t1=true;
let kImg=arrayOfImgObject.length;
let tCheck1=false, tCheck2=false;

//стрелочки
function funcForKey(e:any):void{
	let mas:any[]= (Array.from(arrayOfImg)).map(function(num) 
	{ return (<HTMLImageElement>num).src;});
    if(e.key === 'ArrowRight'){
		k = mas.indexOf(mainImg.src);
		arrayOfImg[k].style.border = 'none';
		let i;
		k++;
		for(i=0;i<removeImg.length;i++){
			console.log(i);
			if(removeImg[i]==(k%mas.length)){
				console.log('зашел');
			k++;
			i=-1;
			}
		}
        mainImg.setAttribute('src',arrayOfImg[k%mas.length].src);
		arrayOfImg[k%mas.length].style.border = '3px solid #BDB76B';
		current=k%mas.length;
    }
    if(e.key === 'ArrowLeft'){
        k = mas.indexOf(mainImg.src);
        arrayOfImg[k%mas.length].style.border = 'none';
		k-=1;
		let i;
		for(i=0;i<removeImg.length;i++){
			console.log(i);
			if(removeImg[i]==((mas.length+k)%mas.length)){
				console.log('зашел');
			k--;
			i=-1;
			}
		}
        mainImg.setAttribute('src',arrayOfImg[(mas.length+k)%mas.length].src);
		arrayOfImg[(mas.length+k)%mas.length].style.border = '3px solid #BDB76B';}
		current=(mas.length+k)%mas.length;
}

//проверка фильтра
function funcCheck(){
	if(tCheck1){
		if(tCheck2){
				for(let k=0;k<removeImg.length;k++){
				divImg.appendChild(arrayOfImg[removeImg[k]]);
		}
			removeImg =[];
			positionImg();
	}
		else 
		{
			let i=0,first =true;
			for(i=0;i<arrayOfImg.length;i++){
				if(arrayOfImgObject[i].category == 'autumn'){
					divImg.removeChild(arrayOfImg[i]);
					removeImg.push(i);
				}
				else{
					if(first){
						first =false;					
						arrayOfImg[current%arrayOfImgObject.length].style.border = 'none';
						current = i;
						arrayOfImg[current%arrayOfImgObject.length].style.border = '3px solid #BDB76B';
						mainImg.setAttribute('src',arrayOfImg[current%arrayOfImgObject.length].src);
					}
				}
			}
			console.log(removeImg);
				positionImg();
		}
	}
	else{
		if(tCheck2){
			let first = true;
			for(let i=0;i<arrayOfImg.length;i++){
				if(arrayOfImgObject[i].category == 'summer'){
					divImg.removeChild(arrayOfImg[i]);
					removeImg.push(i);
				}
				else{
					if(first){
						first =false;					
						arrayOfImg[current%arrayOfImgObject.length].style.border = 'none';
						current = i;
						arrayOfImg[current%arrayOfImgObject.length].style.border = '3px solid #BDB76B';
						mainImg.setAttribute('src',arrayOfImg[current%arrayOfImgObject.length].src);
					}
				}
			}
			positionImg();
	}
	else{
		for(let k=0;k<removeImg.length;k++){
		divImg.appendChild(arrayOfImg[removeImg[k]]);
}
	removeImg =[];
	positionImg();
}
}
}

//позиционирование изображений preview
function positionImg(){
	let deleteImg=removeImg.length;
	let l=0;
	let ii=0;
	let zero=-500;
	let widthImg =1000/(countOfImg-1-deleteImg);
	for (let i=0; i < countOfImg; i++){
		if(!(i == removeImg[l])){
			let widthImgpx=ii*widthImg + 'px';
			arrayOfImg[i].style.left = widthImgpx;
			let bottomImg = Math.sqrt((1-(zero*zero/250000))*2500) + 'px';
			arrayOfImg[i].style.bottom = bottomImg;
			zero+=widthImg;
			ii++;
		}else{l++;}
    }
}

//Увеличение на прокручивание колесика
function scalingImg(){
	let sc = 1,val=0.1;
	mainImg.addEventListener("wheel",function(event){
	var y = event.deltaY;		
	if(y > 0)
	{
		sc+0.1;
		mainImg.style.transform="scale("+sc+")";
	}
	else{
		sc-=0.1;
		if(sc < 0.2){sc=0.1;}
			mainImg.style.transform="scale("+sc+")";
		}
	});	
}

const btnSave = document.getElementById("butsave");
const selectBox = document.getElementById("selectbox");
function addingNewImg(files:any){
	btnSave.onclick = function(){
		sendFiles(files,(<HTMLSelectElement>selectBox).selectedIndex);
		modalWindow.style.display = "none";
	}
}

function sendFiles(files:any,k:number) {
	let str:any;
	switch(k){
		case 0:
			str = 'autumn';
			break;
	    case 1:
			str = 'summer';
			break;
	}
	var reader = new FileReader();
	let imgNewToAdd;
	if (files) {
		reader.readAsDataURL(files);
	  } 
	reader.onloadend = function () {
		imgNewToAdd = new Img(`${reader.result}`,str);
		arrayOfImgObject.push(imgNewToAdd);
		createImg(countOfImg);
		arrayOfImg[countOfImg++].onclick = funcBorder;
		positionImg();
	}
};




let t = true;//флаг авторизации
let modalWindow = document.getElementById("mymodal");
let btnAddNewImg = document.getElementById("butadd");
let btnBack = document.getElementById("butback");
let imgNewFromPerson = document.getElementById("addnew");
const btnCategory=document.getElementById("butcategory");
let tCategory = true;//флаг меню категории
let tMenu = true;//флаг общего меню
const checkDiv=document.getElementById("checkdiv");
const check1=document.getElementById("check1");
const check2=document.getElementById("check2");
const btnMenu=document.getElementById("butmenu");
//main
if(t){
	positionImg();
	
	const zooming = new Zooming();
	zooming.listen(mainImg);
		

	imgNewFromPerson.addEventListener('change', function(){
		addingNewImg((<HTMLInputElement>imgNewFromPerson).files[0]);
	})

	btnAddNewImg.onclick = function() {
		modalWindow.style.display = "block"
	  }

	btnBack.onclick = function() {
		modalWindow.style.display = "none";
	  }


	document.addEventListener('keydown',funcForKey);

    for(i=0;i<arrayOfImg.length;i++){
		arrayOfImg[i].onclick = funcBorder;}
      
    btnCategory.onclick = function(){
        if(tCategory){
			checkDiv.style.visibility="visible";
			tCategory=!tCategory;
		}
        else
        {
            tCategory=!tCategory;
            checkDiv.style.visibility="hidden";
        }
	}
	
	check1.onclick = function(){
		tCheck1=!tCheck1;
		funcCheck();
	}
	check2.onclick = function(){
		tCheck2=!tCheck2;
		funcCheck();
	}

	mainImg.onclick = function(){
		tCategory=!tCategory;
        checkDiv.style.visibility="hidden";
	}

	btnMenu.onclick = function(){
		if(tMenu){
			btnCategory.style.visibility="visible";
			btnAddNewImg.style.visibility="visible";
		}else{
			btnCategory.style.visibility="hidden";
			btnAddNewImg.style.visibility="hidden";
			checkDiv.style.visibility="hidden";
		}
		tMenu = !tMenu;
	}

}
else{
	mainImg.setAttribute('src',picDel.default);	
	for(let i=0;i<arrayOfImg.length;i++){
	  arrayOfImg[i].style.visibility = 'hidden';
	  }
}