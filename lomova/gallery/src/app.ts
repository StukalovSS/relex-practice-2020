import { NoEmitOnErrorsPlugin } from 'webpack';
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
let remImg: any = [];


const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

const dropdown = document.createElement('div');
container.appendChild(dropdown);
dropdown.classList.add('dropdown');

const openMenu = document.createElement('button');
dropdown.appendChild(openMenu);
openMenu.classList.add('open-menu');


function workCheckbox(checkbox: any) {
    checkbox.addEventListener('click', (e: any) => {
        let ctg: string = (<HTMLInputElement>checkbox).value;
        let checked: boolean = checkbox.checked;

        if (checked) {
            if (remImg.length != 0) {
                let ind1 = 0;
                let rrr = 0;
                while (ind1 < remImg.length) {
                    if (remImg[ind1].getAttribute('category') == ctg) {
                        for (let q = rrr; q < images.length; q++) {
                            if (ctg == images[q].category) {
                                rrr = q + 1;
                                addNewImage(q);
                                break;
                            }
                        }
                        remImg.splice(ind1, 1);
                    }
                    else {
                        ind1++;
                    }
                }
                mainImage.src = previewImages[0].src;
                previewImages[0].classList.add("image-select");
            }
            else {
                let ind2 = 0;
                while (ind2 < previewImages.length) {
                    if (previewImages[ind2].getAttribute('category') != ctg) {
                        remImg.push(previewImages[ind2]);
                        previewImages[ind2].parentNode.removeChild(previewImages[ind2]);
                        previewImages.splice(ind2, 1);
                        ind2 = 0;
                    }
                    else {
                        ind2++;
                    }
                }
                mainImage.src = previewImages[0].src;
                previewImages[0].classList.add("image-select");
            }
        }

        else {
            if (previewImages.length != 0) {
                let ind1 = 0;
                while (ind1 < previewImages.length) {
                    if (previewImages[ind1].getAttribute('category') == ctg) {
                        remImg.push(previewImages[ind1]);
                        previewImages[ind1].parentNode.removeChild(previewImages[ind1]);
                        previewImages.splice(ind1, 1);
                        ind1 = 0;
                    }
                    else { ind1++; }
                }
                if (previewImages.length > 0) {
                    mainImage.src = previewImages[0].src;
                    previewImages[0].classList.add("image-select");
                }
                else {
                    for (let k = 0; k < images.length; k++) {
                        addNewImage(k);
                    }
                    mainImage.src = previewImages[0].src;
                    previewImages[0].classList.add("image-select");
                    remImg = [];
                }
            }

        }
    });
}

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
            checkbox.setAttribute('name', 'filter');
            workCheckbox(checkbox);
        }

        let cl: number = 1;
        categoryTitle.addEventListener('click', () => {
            if (cl % 2 == 1) {
                categoryTitle.classList.remove('category__title--active');
                categoryList.classList.add('category__list--show');
            }
            else if (cl % 2 == 0) {
                categoryTitle.classList.add('category__title--active');
                categoryList.classList.remove('category__list--show');
            }
            cl++;
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

            const modalAddInner = document.createElement('div');
            modalAdd.appendChild(modalAddInner);
            modalAddInner.classList.add('modal-add__inner');

            const closeBtn = document.createElement('button');
            modalAddInner.appendChild(closeBtn);
            closeBtn.classList.add('modal-add__close');

            const dropZone = document.createElement('div');
            modalAddInner.appendChild(dropZone);
            dropZone.classList.add('drop-zone');

            const inputFileLabel = document.createElement('label');
            dropZone.appendChild(inputFileLabel);
            inputFileLabel.setAttribute('for', 'add-pic');
            inputFileLabel.classList.add('modal-add__file')
            inputFileLabel.textContent = 'Выберите изображение';

            const inputFile = document.createElement('input');
            dropZone.appendChild(inputFile);
            inputFile.setAttribute('type', 'file');
            inputFile.setAttribute('id', 'add-pic');

            const selectContainer = document.createElement('div');
            selectContainer.classList.add('select');
            modalAddInner.appendChild(selectContainer);
            const inputCategoryLabel = document.createElement('label');
            selectContainer.appendChild(inputCategoryLabel);
            inputCategoryLabel.textContent = 'Категория:';
            const inputCategory = document.createElement('input');
            selectContainer.appendChild(inputCategory);
            inputCategory.setAttribute('type', 'text');
            inputCategory.classList.add('select__input');
            const selectList = document.createElement('ul');
            selectList.classList.add('select__list');
            selectContainer.appendChild(selectList);

            for (let i = 0; i < categories.length; i++) {
                const selectItem = document.createElement('li');
                selectItem.classList.add('select__item');
                selectList.appendChild(selectItem);
                selectItem.textContent = categories[i];
            }

            // выбор категории из существующих
            let selectItems = document.querySelectorAll('.select__item');
            for (let i = 0; i < selectItems.length; i++) {
                selectItems[i].addEventListener('click', () => {
                    inputCategory.value = selectItems[i].textContent;
                    inputCategory.classList.remove('new-category');
                })
            }

            // поиск категории по вводу
            inputCategory.addEventListener('keyup', () => {
                for (let i = 0; i < selectItems.length; i++) {
                    let ctg = selectItems[i].textContent;
                    let ctgInp = inputCategory.value.toUpperCase();
                    let elem: HTMLElement = selectItems[i] as HTMLElement;
                    if (ctg.toUpperCase().indexOf(ctgInp) > -1) {
                        elem.style.display = "";
                        inputCategory.classList.remove('new-category');
                    } else {
                        elem.style.display = "none";
                        inputCategory.classList.add('new-category');
                    }
                }
            })

            const saveBtn = document.createElement('button');
            modalAddInner.appendChild(saveBtn);
            saveBtn.classList.add('modal-add__save-btn');
            saveBtn.textContent = 'Добавить';

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                })
            });

            ['dragenter', 'dragover'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => {
                    dropZone.classList.add('drop-zone--active');
                })
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => {
                    dropZone.classList.remove('drop-zone--active');
                })
            });

            function fileFunc(files: any) {
                let reader = new FileReader();
                reader.readAsDataURL(files[0]);

                reader.onload = function (e: any) {
                    let addImgPreview = document.createElement('img');
                    addImgPreview.setAttribute('src', reader.result as string);
                    dropZone.removeChild(inputFileLabel);
                    dropZone.appendChild(addImgPreview);
                    dropZone.classList.add('no-border');
                    addImgPreview.classList.add('img-size');

                    saveBtn.addEventListener('click', () => {
                        if (inputCategory.textContent != "") {
                            if (inputCategory.classList.contains('new-category')) {
                                let newCtg = inputCategory.value;
                                categories.push(newCtg);

                                const newCtgElem = document.createElement('li');
                                categoryList.appendChild(newCtgElem);
                                newCtgElem.classList.add('category__elem');

                                const newLabelCtg = document.createElement('label');
                                newCtgElem.appendChild(newLabelCtg);

                                const newCheckbox = document.createElement('input');
                                newCheckbox.setAttribute('type', 'checkbox');
                                newLabelCtg.textContent = categories[categories.length - 1];
                                newLabelCtg.appendChild(newCheckbox);
                                newCheckbox.setAttribute('value', categories[categories.length - 1]);
                                newCheckbox.setAttribute('name', 'filter');
                                workCheckbox(newCheckbox);
                            }

                            const newImg: Image = new Image('', '');
                            newImg.category = (<HTMLInputElement>inputCategory).value;
                            newImg.path = e.target.result;
                            images.push(newImg);
                            addNewImage(images.length - 1);
                            modalAdd.remove();
                        }
                    });
                }
            }

            // добавление картинки перетаскиванием
            dropZone.addEventListener('drop', (evt) => {
                let dt = evt.dataTransfer;
                let files = dt.files;
                fileFunc(files);
            });

            // добавление картинки через нажатие кнопки
            inputFile.addEventListener('change', () => {
                if (inputFile.files && inputFile.files[0]) {
                    fileFunc(inputFile.files);
                }
            });

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