// let a = Math.floor(Math.random( ) * (100+1)),
//     b = Math.floor(Math.random( ) * (100+1));
// let answer = prompt(`Сколько будет ${a} + ${b} ?`);
// if (answer == a+b) {
//     alert("Правильно!");
//let modal = document.body.appendChild(document.createElement('div')); добавление элементов в body
import "../css/styles.css";
    const images = [
        {path: "../src/images/jslogo.png",category: "light"},
        {path: "../src/images/nature.jpg",category: "light"},
        {path: "../src/images/blueWhale.webp",category: "light"},
        {path: "../src/images/purpleWorld.jpg",category: "dark"},
        {path: "../src/images/subNat.jpeg",category: "dark"},
        {path: "../src/images/planet.jpg",category: "dark"}
    ];
    const textContent = [
        "Просто логотип JavaScript",
        "Природа",
        "Раньше думали так",
        "Забавный кит" ,
        "Фантастический мир",
    ];
    let mainCon = document.getElementById("Gallery");
    let categorys= [];
    function unique() {
      
        for (let i =0; i < images.length; i++) {
            if(!categorys.includes(images[i].category)){
                categorys.push(images[i].category)
            }
         }
      }
      unique();
    //Контейнер для показываемого изображения 
    let mainImageCon = mainCon.appendChild(document.createElement("div"));
    mainImageCon.setAttribute("id", "mainImageCon"); 
    mainImageCon.setAttribute("class","mainImageCon");
    let mainImage = mainImageCon.appendChild(document.createElement('img'));
    //переключение картинок с помощью клика 
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

    //создание меню действий
    
let actionMenu = mainCon.appendChild(document.createElement("div"));
actionMenu.setAttribute("class", "actionMenu");
let contexButton = actionMenu.appendChild(document.createElement("button"));
contexButton.setAttribute("class", "contextButton");
contexButton.innerHTML ="☰";
let addImageAndCategoryChangeCon = actionMenu.appendChild(document.createElement("div"));
addImageAndCategoryChangeCon.setAttribute("class", "addImageAndCategoryChangeCon");
let buttonAddimages = addImageAndCategoryChangeCon.appendChild(document.createElement("button"));
buttonAddimages.innerHTML = "Добавить изображение";
buttonAddimages.setAttribute("class","buttonAddimages");
let buttonChangeCategory = addImageAndCategoryChangeCon.appendChild(document.createElement("button"));
buttonChangeCategory.innerHTML = "Категории";
buttonChangeCategory.setAttribute("class", "buttonChangeCategory");
let changeCategoryButCon = addImageAndCategoryChangeCon.appendChild(document.createElement("div"));
let radioButtons =[];
let textForRadBut =[];
let formForRadBut = changeCategoryButCon.appendChild(document.createElement("form"));
let heigth = 10;
for (let i = 0; i < categorys.length; i++) {
    textForRadBut.push (changeCategoryButCon.appendChild(document.createElement('p')));
    textForRadBut[i].innerHTML = categorys[i];
    textForRadBut[i].setAttribute("align" ,"center");
} 
for (let i =0; i < categorys.length; i ++) {
    radioButtons.push(textForRadBut[i].appendChild(document.createElement('input')));
    radioButtons[i].setAttribute("type", "radio");
    radioButtons[i].setAttribute("id", "radioBut");
    radioButtons[i].style.position = "absolute";
    radioButtons[i].style.top = heigth+20 + 'px';
    radioButtons[i].style.left = 10 + '%';
    heigth +=30;
}
changeCategoryButCon.setAttribute("class","changeCategoryButCon" );
contexButton.addEventListener("click", function() {
    if (contexButton.innerHTML == '☰') {
          contexButton.innerHTML = '▲';
          buttonAddimages.style.display = 'block';
          buttonChangeCategory.style.display = 'block';
          changeCategoryButCon.classList.remove("disap");
    }
    else {
        contexButton.innerHTML = "☰";
        buttonAddimages.style.display = 'none';
        buttonChangeCategory.style.display = 'none';
        changeCategoryButCon.classList.remove("disap");
    }
});
    buttonChangeCategory.addEventListener ("click", function () {
        changeCategoryButCon.classList.toggle("disap");
    });

    //работа с модальным окном
    let modal = document.querySelector(".modal");
    let modalCloseButton = document.querySelector(".modalCloseButton");
    let inputCon = document.querySelector(".inputCon");
    let inputFile = document.querySelector(".inputFile");
    let inputLabel = document.querySelector(".inputButton");
    let chooseCategoryCon = document.querySelector(".chooseCategoryCon");
    buttonAddimages.addEventListener('click', function() {
        modal.classList.add ("modalOpen");
    })
    modalCloseButton.addEventListener ("click", function() {
        modal.classList.remove("modalOpen");
    })
    inputFile.onchange = function(){
        images.push({path:"../src/images/"+ inputFile.files[0].name, category: "oph"});
        previews.push(previewCon.appendChild(document.createElement('img')));
        previews[previews.length-1].setAttribute("src", "../src/images/"+ inputFile.files[0].name);
        for (let i =0; i < previews.length; i++) {
        previews[previews.length-1].addEventListener("click", function() {
            mainImage.src = previews[i].src;
            if(document.querySelector(".image-border")) {
                document.querySelector(".image-border").classList.remove("image-border");
            }
            previews[i].classList.add("image-border");
        }) ;
        previews[i].classList.add('preview-image');
        }
        console.log(previews);
        console.log(images);
        modal.classList.toggle("modalOpen");
    };
    //drag and drop
    //Контейнер для превью
    let previewCon = mainCon.appendChild(document.createElement('div'));
    let previews = [];
    previewsInit();
    previewCon.setAttribute("id", "previewCon");
    function previewsInit () {
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
    // let st = 8;
    // for(let i=0; i<previews.length; i++){
    //     previews[i].style.margin="30px";
    //     previews[i].style.marginBottom=st+"px";
    //     if(i<previews.length /2-1)
    //         st+=15;
    //     else
    //         st-=15;
    // }
    // st = 0;
}
    //переключение картинок стрелочками
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
