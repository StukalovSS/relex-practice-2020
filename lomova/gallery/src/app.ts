import './css/style.css';
// import Zoom from '../node_modules/zooming/build/zooming.min.js';
// import img10 from './img/10.jpg';
// import img12 from  './img/12.jpg';
// import img13 from  './img/13.jpg';
// import img14 from './img/14.jpg';
// import img15 from  './img/15.jpg';
// const z = new Zoom();
const images = [ 'img/6ef50fac4a042e810b89b9fccb271efd.jpg', 'img/0142d9fdac5f271c9af0fd78ff2e1599.jpg' ]; 



let mainImageContainer = document.createElement('div');
mainImageContainer.classList.add("main-image-container");

let gallery = document.getElementById("gallery");
gallery.appendChild(mainImageContainer);

let mainImage = document.createElement('img');
mainImageContainer.appendChild(mainImage);
mainImage.setAttribute('src', images[0]);
mainImage.classList.add("main-image");

let previewContainer = document.createElement('div');
gallery.appendChild(previewContainer); 
previewContainer.classList.add("preview");

let i = 0;
let arrImages: any= [];
for(let k = 0; k < images.length; k++) {
    let pic = document.createElement("img");
    previewContainer.appendChild(pic);
    arrImages.push(pic);
    arrImages[0].classList.add("image-select");
    pic.setAttribute("src", images[k]);
    pic.classList.add("preview-image");
    pic.addEventListener("click", changeImage);
}

function changeImage (e: any) {
    mainImage.src = e.target.src;
    let b = e.target;
    for (let j = 0; j < arrImages.length; j ++) {
        if(mainImage.src == arrImages[j].src) {
            i = j;
            break;
        }
    }

    if(document.querySelector(".image-select")) {
        document.querySelector(".image-select").classList.remove("image-select");
    }
    b.classList.add("image-select");
}

// changeImage({target: mainImage});

document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowLeft") {
        i = (i + arrImages.length - 1) % arrImages.length;
        changeImage({target: arrImages[i]});
    }
    if (e.code == "ArrowRight") {
        i = (i + 1) % arrImages.length;
        changeImage({target: arrImages[i]});
    }
});


// mainImage.addEventListener("click", function() {
//     let modal = document.createElement("div");
//     document.body.appendChild(modal);
//     modal.classList.add("modal");
//     let modalInner = document.createElement("div");
//     modal.appendChild(modalInner);
//     modalInner.classList.add("modal-inner");
//     let modalPic = document.createElement("img");
//     modalInner.appendChild(modalPic);
//     modalPic.classList.add("modal__pic");
//     modalPic.setAttribute("src", images[i]);
//     modalPic.addEventListener("click", function () {
//         modal.parentNode.removeChild(modal);
//     })
// })

//  z.listen(".main-image");