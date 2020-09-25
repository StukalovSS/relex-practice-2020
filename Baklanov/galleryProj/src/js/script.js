// let a = Math.floor(Math.random( ) * (100+1)),
//     b = Math.floor(Math.random( ) * (100+1));
// let answer = prompt(`Сколько будет ${a} + ${b} ?`);
// if (answer == a+b) {
//     alert("Правильно!");
//import Zoom from "zooming";
import "../css/styles.css";
    const images = [
        {path: "../src/images/jslogo.png",category: "light"},
        {path: "../src/images/nature.jpg",category: "light"},
        {path: "../src/images/whale.jpg",category: "light"},
        {path: "../src/images/planet.jpg",category: "dark"},
        {path: "../src/images/fantasy.jpg",category: "dark"}
    ];

    const textContent = [
        "Просто логотип JavaScript",
        "Природа",
        "Раньше думали так",
        "Забавный кит" ,
        "Фантастический мир",
    ];
    let mainCon = document.getElementById("Gallery");
   //const zooming = new Zooming();

    //Контейнер для показываемого изображения 
    let mainImageCon = mainCon.appendChild(document.createElement('div')); 
    let mainImage = mainImageCon.appendChild(document.createElement('img'));
    mainImage.addEventListener('click', function(){
        if (document.body.firstChild != mainImage) {
            document.body.insertAdjacentElement("afterbegin", mainImage);
        mainImage.setAttribute("class", "mainImageAfter");
        mainCon.classList.add("GalleryHide");
        } 
        else {
            mainImageCon.insertAdjacentElement("afterbegin", mainImage);
            mainImage.setAttribute("class", "mainImage");
            mainCon.classList.remove("GalleryHide");
        }
    });
    mainImage.classList.add('mainImage');
    mainImage.setAttribute('src', images[0].path);
    //zooming.listen('.mainImage');
    
    

    //Контейнер для превью
    let previewCon = mainCon.appendChild(document.createElement('div'));
    previewCon.setAttribute("id", "previewCon");
    const previews = [];
    for (let i =0; i < images.length; i++) {
        previews.push(previewCon.appendChild(document.createElement('img')));// создаем контейнеры для изображений 
        previews[i].addEventListener("click", function() {
            mainImage.src = previews[i].src;
            if(document.querySelector(".image-border")) {
                document.querySelector(".image-border").classList.remove("image-border");
            }
            previews[i].classList.add("image-border");
        })
        previews[i].setAttribute('src',images[i].path);// заполняем контейнеры изображениями с диска 
        previews[i].classList.add('preview-image');
    }
    let st=10;
    for(let i=0; i<previews.length; i++){
        previews[i].style.margin="30px";
        previews[i].style.marginBottom=st+"px";
        if(i<2)
            st+=35;
        else
            st-=35;
    }
    

    let i = 0;
    previews[0].classList.add("image-border");
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowLeft') {
            if (i <= 0) {
                i = previews.length - 1;
                mainImage.src = previews[i].src;
                if(document.querySelector(".image-border")) {
                    document.querySelector(".image-border").classList.remove("image-border");
                }
                previews[i].classList.add("image-border");
            }
            else {
                i--;
                mainImage.src = previews[i].src;
                if(document.querySelector(".image-border")) {
                    document.querySelector(".image-border").classList.remove("image-border");
                }
                previews[i].classList.add("image-border");
            }
        }
        if (event.code == "ArrowRight") {
            if(i == previews.length - 1 ){
                i = 0;
                mainImage.src = previews[i].src;
                if(document.querySelector(".image-border")) {
                    document.querySelector(".image-border").classList.remove("image-border");
                }
                previews[i].classList.add("image-border");
            }
            else {
                i++;
                mainImage.src = previews[i].src;
                if(document.querySelector(".image-border")) {
                    document.querySelector(".image-border").classList.remove("image-border");
                }
                previews[i].classList.add("image-border");
            } 
        }
        
      });
// }
