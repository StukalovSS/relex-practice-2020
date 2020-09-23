
import Zoom from 'zooming';
import '../CSS/mystyle.css';
//import Imagine from '../TS/app.ts';
class Imagine
{
    constructor(public path:string, public category:string)
    {}
}
let ab=document.createElement('div'); 
let app=document.getElementById("gallery"); 
app.appendChild(ab); 
let main=document.createElement('img') ;
let menu=document.getElementById('menu');
let rad1=document.getElementById('rad1');
let rad2=document.getElementById('rad2');
let selarea=document.getElementById('selarea');
let menindex=0;
function menfun()
{
    if(!menindex)
    {
        selarea.classList.add('disap');
       
    }
    else
    {
        selarea.classList.remove('disap');
    }
    menindex=1-menindex;
}
menu.addEventListener('click',menfun)
let checkind1=0;
let checkind2=0;
let checkind;
rad2.setAttribute('num','');
rad1.setAttribute('num','');
function radfun(e)
{
    if(e.target==rad1)
    {
        checkind1=1-checkind1;
        checkind=checkind1;
    }
    if(e.target==rad2)
    {
        checkind2=1-checkind2;
        checkind=checkind2;
    }
    if(checkind)
    {
    e.target.setAttribute('num','checkind');
    }
    else
    {
        e.target.setAttribute('num','');  
    }
    
 if(!rad1.getAttribute('num'))
 {
   for(let i=0;i<images.length;i++)
   {
       
       if(images[i].category==="dark"){
       console.log(images[i].path+' add');
       array[i].classList.add('disap');}
   }
 }
 if(!rad2.getAttribute('num'))
 {
    for(let i=0;i<images.length;i++)
    {
    if(images[i].category==="light")
    {console.log(images[i].path+' add');
    array[i].classList.add('disap');
    }
    }
 }
 if(rad1.getAttribute('num'))
 {
    for(let i=0;i<images.length;i++)
    {
   if(images[i].category==="dark"){console.log(images[i].path+' remove');
   array[i].classList.remove('disap');
   }
    }
 }
 if(rad2.getAttribute('num'))
 {
    for(let i=0;i<images.length;i++){console.log(images[i].path+' remove');
    if(images[i].category==="light")
    {
    array[i].classList.remove('disap');}}
 }
}
rad2.addEventListener('click',radfun);
rad1.addEventListener('click',radfun);
main.classList.add('main-img'); 
main.setAttribute('src',"img/fisrt.jpg"); 
main.setAttribute('width',"400px"); 
main.setAttribute('height',"400px"); 
main.id="main"; 
ab.appendChild(main); 
let prev=document.createElement('div'); 
prev.id="prev" 
app.appendChild(prev); 
let img1=document.createElement('img'); 
//img1.setAttribute('src',"img/fisrt.jpg"); 
let img2=document.createElement('img'); 
//img2.setAttribute('src',"img/second.jpg"); 
let img3=document.createElement('img'); 
//img3.setAttribute('src',"img/third.jpg"); 
let img4=document.createElement('img'); 
//img4.setAttribute('src',"img/fourth.jpg"); 
let img5=document.createElement('img'); 
//img5.setAttribute('src',"img/fifth.jpg"); 
const array=new Array(img1,img2,img3,img4,img5); 
const images=[];
images[0] = new Imagine("img/fisrt.jpg", "dark");
images[1] = new Imagine("img/second.jpg", "light");
images[2] = new Imagine("img/third.jpg", "dark");
images[3] = new Imagine("img/fourth.jpg", "light");
images[4] = new Imagine("img/fifth.jpg", "dark");
for(let i=0;i<images.length;i++)
{
    array[i].setAttribute('src',images[i].path);
}
let p=10;
for(let k=0;k<array.length;k++) 
{ 
array[k].classList.add('prev-im'); 
array[k].style.margin="38px";
array[k].style.marginBottom=p+"px";
if(k<2)
p+=20;
else
p-=20;
//array[k].setAttribute('width',"200px"); 
//array[k].setAttribute('height',"200px"); 
} 
for(let k=0;k<array.length;k++) 
prev.appendChild(array[k]); 
//console.log(app); 
let scalek=1;
let i=0; 
array[0].classList.add('active-img');
function func(e) 
{ 
//console.log(e); 
if(e.key=="ArrowLeft") 
{ 

array[i].classList.remove('active-img');
i=(i+array.length-1)%array.length; 
array[i].classList.add('active-img'); 
main.setAttribute('src',array[i].getAttribute('src')); 

} 
if(e.key=="ArrowRight") 
{ 


array[i].classList.remove('active-img'); 
i=(i+1)%array.length;
//console.log(array.length);
array[i].classList.add('active-img'); 
main.setAttribute('src',array[i].getAttribute('src')); 
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
document.addEventListener('keydown',func); 





function funct(a) 
{ 
return a.src; 
} 
function act1(e) 
{ 
array[i].classList.remove('active-img'); 
i=array.map(funct).indexOf(e.target.src); 
array[i].classList.add('active-img'); 
main.setAttribute('src',e.target.getAttribute('src')); 
} 
function getRandomInt(min, max) { 
return Math.floor(Math.random() * (max - min)) + min; 
} 
for(let i=0;i<array.length;i++) 
{ 
array[i].addEventListener('click',act1); 
} 
// 
let int1=getRandomInt(0,50); 
let int2=getRandomInt(0,50); 
let int3=getRandomInt(0,3); 
let s=2,k=1; 
switch(int3){ 
case 1: 
{ 
s=parseInt(prompt(int1+" + " + int2+" = ")); 
k=int1+int2; 
break; 
} 
case 2: 
{ 
s=parseInt(prompt(int1+" - " + int2+" = ")); 
k=int1-int2; 
break; 
} 
default: 
{ 
s=parseInt(prompt(int1+" * " + int2+" = ")); 
k=int1*int2; 
break; 
} 
} 
if(s!=k) 
{ 
for(let i=0;i<array.length;i++) 
array[i].src=""; 
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
const zooming=new Zoom;
zooming.listen(main);
