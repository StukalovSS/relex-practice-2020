import './css/style.css';
// import Zoom from '../node_modules/zooming/build/zooming.min.js';
const Zoom = require('../node_modules/zooming/build/zooming.min.js');
const z = new Zoom();
const p1 = require('../src/img/1.jpg');
const p2 = require('../src/img/2.jpg');
const p3 = require('../src/img/3.jpg');
const p4 = require('../src/img/4.jpg');
// const p5 = require('../src/img/5.jpg');

class Image {
    constructor(public path: string, public category: string) { };
}

const img1: Image = new Image(p1.default, 'Антарктида ночью');
const img2: Image = new Image(p2.default, 'Животные');
const img3: Image = new Image(p3.default, 'Антарктида ночью');
const img4: Image = new Image(p4.default, 'Пейзаж');
// const img5: Image = new Image(p5.default, 'bbbb');

const images: any = [];
images.push(img1, img2, img3, img4);

const categories = ['Животные', 'Антарктида ночью', 'Пейзаж'];

const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

const dropdown = document.createElement('div');
container.appendChild(dropdown);
dropdown.classList.add('dropdown');

const openMenu = document.createElement('button');
dropdown.appendChild(openMenu);
openMenu.classList.add('open-menu');



openMenu.addEventListener('click', () => {
    if (dropdown.childNodes.length == 1) {
        const menu = document.createElement('div');
        dropdown.appendChild(menu);
        menu.classList.add('menu');
        const category = document.createElement('div');
        menu.appendChild(category);
        category.classList.add('category');

        const categoryTitle = document.createElement('button');
        category.appendChild(categoryTitle);
        categoryTitle.classList.add('menu__item');
        categoryTitle.classList.add('category__title');
        categoryTitle.classList.add('category__title--active');
        categoryTitle.textContent = 'Категории';

        categoryTitle.addEventListener('click', () => {
            if (category.childNodes.length == 1) {
                categoryTitle.classList.remove('category__title--active');
                const categoryList = document.createElement('ul');
                category.appendChild(categoryList);
                categoryList.classList.add('category__list');
                for (let a = 0; a < categories.length; a++) {
                    const categoryElem = document.createElement('li');
                    categoryList.appendChild(categoryElem);
                    categoryElem.classList.add('category__elem');

                    const labelCategory = document.createElement('label');
                    categoryElem.appendChild(labelCategory);

                    const checkbox = document.createElement('input');
                    checkbox.setAttribute('type', 'checkbox');
                    labelCategory.textContent = categories[a];
                    labelCategory.appendChild(checkbox);
                    checkbox.setAttribute('value', categories[a]);

                    checkbox.addEventListener('click', (e: any) => {
                        let c = (<HTMLInputElement>checkbox).value;
                        for (let i = 0; i < previewImages.length; i++) {
                            if (previewImages[i].getAttribute('category') != c) {
                                previewImages[i].parentNode.removeChild(previewImages[i]);
                                previewImages.splice(i, 1);
                                i--;
                            }
                        }
                        mainImage.src = previewImages[0].src;
                    });
                }
            }
            else {
                category.removeChild(category.lastChild);
                categoryTitle.classList.add('category__title--active');
            }
        });

        const buttonAdd = document.createElement('button');
        menu.appendChild(buttonAdd);
        buttonAdd.classList.add('menu__item');
        buttonAdd.classList.add('add-image__btn');
        buttonAdd.textContent = 'Добавить изображение';

        buttonAdd.addEventListener('click', () => {
            const modalAdd = document.createElement('div');
            document.body.appendChild(modalAdd);
            modalAdd.classList.add('modal-add');

            const closeBtn = document.createElement('button');
            modalAdd.appendChild(closeBtn);
            closeBtn.classList.add('modal-add__close');

            const inputFile = document.createElement('input');
            modalAdd.appendChild(inputFile);
            inputFile.setAttribute('type', 'file');

            const inputCategoryLabel = document.createElement('label');
            modalAdd.appendChild(inputCategoryLabel);
            inputCategoryLabel.textContent = 'Категория:';
            const inputCategory = document.createElement('input');
            inputCategoryLabel.appendChild(inputCategory);
            inputCategory.setAttribute('type', 'text');

            const saveBtn = document.createElement('button');
            modalAdd.appendChild(saveBtn);
            saveBtn.classList.add('modal-add__save-btn');
            saveBtn.textContent = 'Добавить';


            inputFile.addEventListener('change', () => {
                if (inputFile.files && inputFile.files[0]) {
                    let reader = new FileReader();

                    saveBtn.addEventListener('click', () => {
                        reader.onload = function (e: any) {
                            const newImg: Image = new Image('', '');
                            newImg.category = (<HTMLInputElement>inputCategory).value;
                            newImg.path = e.target.result;
                            images.push(newImg);
                            addNewImage(images.length - 1);
                            // document.querySelector('.main-image').setAttribute('src', e.target.result);
                        };
                        reader.readAsDataURL(inputFile.files[0]);
                        modalAdd.remove();
                    })
                }
            })

            closeBtn.addEventListener('click', () => {
                modalAdd.remove();
            })

        })
    }
    else {
        dropdown.removeChild(dropdown.lastChild);
    }
});


const gallery = document.createElement('div');
container.appendChild(gallery);
gallery.classList.add('gallery');

const mainImageContainer = document.createElement('div');
gallery.appendChild(mainImageContainer);
mainImageContainer.classList.add("main-image-container");

const mainImage = document.createElement('img');
mainImageContainer.appendChild(mainImage);
mainImage.setAttribute('src', images[0].path);
mainImage.classList.add("main-image");

const previewContainer = document.createElement('div');
gallery.appendChild(previewContainer);
previewContainer.classList.add("preview");

let i = 0;
let previewImages: any = [];

function addNewImage(k: number) {
    let pic = document.createElement("img");
    previewContainer.appendChild(pic);
    previewImages.push(pic);
    pic.classList.add("preview-image");

    pic.setAttribute("src", images[k].path);
    pic.setAttribute("category", images[k].category);

    pic.addEventListener("click", changeImage);

}

for (let k = 0; k < images.length; k++) {
    addNewImage(k);
}

previewImages[0].classList.add("image-select");


// for (let k = 0; k < images.length; k++) {
//     let pic = document.createElement("img");
//     previewContainer.appendChild(pic);
//     previewImages.push(pic);
//     previewImages[0].classList.add("image-select");
//     pic.setAttribute("src", images[k].path);

//     pic.setAttribute("category", images[k].category);

//     pic.classList.add("preview-image");
//     pic.addEventListener("click", changeImage);
// }

function changeImage(e: any) {
    mainImage.src = e.target.src;
    let b = e.target;
    for (let j = 0; j < previewImages.length; j++) {
        if (mainImage.src == previewImages[j].path) {
            i = j;
            break;
        }
    }

    if (document.querySelector(".image-select")) {
        document.querySelector(".image-select").classList.remove("image-select");
    }
    b.classList.add("image-select");
}

// changeImage({target: mainImage});

document.addEventListener("keydown", function (e) {
    if (e.code == "ArrowLeft") {
        i = (i + previewImages.length - 1) % previewImages.length;
        changeImage({ target: previewImages[i] });
    }
    if (e.code == "ArrowRight") {
        i = (i + 1) % previewImages.length;
        changeImage({ target: previewImages[i] });
    }
});

z.listen(".main-image");


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