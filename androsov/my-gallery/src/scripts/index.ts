import createAccordion from './accordion'
import '../css/style.css';
import puppy1 from '../img/puppies/first.jpg';
import puppy2 from '../img/puppies/second.jpg';
import puppy3 from '../img/puppies/third.jpg';
import puppy4 from '../img/puppies/fourth.jpg';
import puppy5 from '../img/puppies/fifth.jpg';
import ls1 from '../img/landskapes/first.jpg';
import ls2 from '../img/landskapes/second.jpg';
import ls3 from '../img/landskapes/third.jpg';
import ls4 from '../img/landskapes/fourth.jpg';
import ls5 from '../img/landskapes/fifth.jpg';
import sl1 from '../img/still-lifes/first.jpg';
import sl2 from '../img/still-lifes/second.jpg';
import sl3 from '../img/still-lifes/third.jpg';
import sl4 from '../img/still-lifes/fourth.jpg';
import sl5 from '../img/still-lifes/fifth.jpg';
import car1 from '../img/cars/first.jpg';
import car2 from '../img/cars/second.jpg';
import car3 from '../img/cars/third.jpg';
import car4 from '../img/cars/fourth.jpg';
import car5 from '../img/cars/fifth.jpg';
import animal1 from '../img/animals/first.jpg';
import animal2 from '../img/animals/second.jpg';
import animal3 from '../img/animals/third.jpg';
import animal4 from '../img/animals/fourth.jpg';
import animal5 from '../img/animals/fifth.jpg';


class Image {
    constructor(public img: HTMLImageElement, public cathegory: string) {}
}

const divWithMainImage: HTMLDivElement = document.createElement( 'div' ),
	divWithPrevues: HTMLDivElement = document.createElement( 'div' ),
	gallery: HTMLElement = document.getElementById('gallery'),
	mainImage: HTMLImageElement = createImg('', ['main-image']),
	imageSources: Array<any> = [{
        sources: [puppy1, puppy2, puppy3, puppy4, puppy5],
        cathegory: 'puppy'
        },
        {
            sources: [ls1, ls2, ls3, ls4, ls5],
            cathegory: 'landskape'
        },
        {
            sources: [sl1, sl2, sl3, sl4, sl5],
            cathegory: 'still-live'
        },
        {
            sources: [car1, car2, car3, car4, car5],
            cathegory: 'car'
        }, 
        {
            sources: [animal1, animal2, animal3, animal4, animal5],
            cathegory: 'animal'
        }],
	allImages: Image[] = [];
	
function createImg(src: string, classList: string[] = []): HTMLImageElement {	
	let img = document.createElement('img');
	for (let className of Array.from( classList )) {
		img.classList.add( className );
	}
	
	img.setAttribute('src', src);
	return img;
}

function askCaptcha() {
	let a: number = Math.round( Math.random() * 100 ),
		b: number = Math.round( Math.random() * 100 ),
		operations: string[] = ['+', '-', '*'],
		operationIndex: number = Math.round( Math.random() * 3 - 0.5 ),
		userAnswer: number = +prompt( a + ' ' + operations[operationIndex] + ' ' + b ),
		res: number;

	switch (operationIndex) {
		case 0:
			res = a + b;
			break;
		case 1:
			res = a - b;
			break;
		case 2:
			res = a * b;
			break;
	}

	if (userAnswer !== res) {
		deleteBodyElements(document.body);
	}
}

function deleteBodyElements(container: HTMLElement) {
	for (let elem of Array.from( container.children )) {
        
        deleteBodyElements.displeysStyles.push( (elem as HTMLElement).style.display );
		(elem as HTMLElement).style.display = 'none';
	}
}
deleteBodyElements.displeysStyles = [];
deleteBodyElements.return = function() {
	for (let elem of Array.from( document.body.children )) {
		(elem as HTMLElement).style.display = deleteBodyElements.displeysStyles.shift();
	}
}


function changeImage(src: string){
	allImages[changeImage.curIndex].img.classList.remove('curent-image');
	changeImage.curIndex = Array.from( allImages ).map( image => image.img.src ).indexOf(src);
	allImages[changeImage.curIndex].img.classList.add('curent-image');
	mainImage.src = src;
}
changeImage.curIndex = 0;

function enlargeOnScroll(event: WheelEvent) {
	let transform: string = (event.target as HTMLImageElement).style.transform,
		scale = transform === '' ? 1 : +transform.slice(6, transform.length - 1);
	if (event.deltaY < 0) {
		(event.target as HTMLImageElement).style.transform = `scale(${scale * 1.05})`;
	} else if (scale > 1) {
		(event.target as HTMLImageElement).style.transform = `scale(${scale * 0.95})`;
	}
}

function addImages(imageSources) {
	allImages.splice(0, allImages.length);
	
	for (let src of imageSources.sources) {
		let img: Image = new Image(createImg( src, ['preview-image'] ), imageSources.cathegory);
		divWithPrevues.appendChild( img.img );
		allImages.push( img );
	}
}

for (let images of imageSources) {
    Object.defineProperty(images, 'cathegory', {
        enumerable: false
    });
}

for (let images of imageSources) {
	addImages(images);
}

divWithPrevues.id = 'container-preview';

gallery.appendChild( divWithMainImage );
gallery.appendChild( divWithPrevues );
divWithMainImage.appendChild( mainImage );
changeImage( allImages[0].img.src );

for (let img of allImages) {
	img.img.addEventListener('click', event => { 
		changeImage( (event.target as HTMLImageElement).src); 
	});
}	

document.addEventListener('keydown', event => {
	if (event.code === 'ArrowLeft') {
		let index: number = (changeImage.curIndex + allImages.length - 1) % allImages.length;
		changeImage( allImages[index].img.src );
	} else if (event.code === 'ArrowRight') {
		let index: number = (changeImage.curIndex + 1) % allImages.length;	
		changeImage( allImages[index].img.src );
	}
});

setInterval(() => {
	let index: number = (changeImage.curIndex + 1) % allImages.length;
	changeImage( allImages[index].img.src );
}, 10000);

mainImage.addEventListener('click', event => {
	let img: HTMLImageElement = document.createElement('img');
	
	img.style.width = '100%';
	img.style.height = '100vh';
	img.src = (event.target as HTMLImageElement).src;
	
	img.addEventListener( 'wheel' , event => {
		enlargeOnScroll(event);
	});
	
	img.addEventListener('click', event => {
		(event.target as HTMLImageElement).remove();
		deleteBodyElements.return();
	})

	deleteBodyElements(document.body);
	document.body.appendChild( img );
});

const cathegoryCont: HTMLDivElement = 
		document.getElementById( 'container-with-cathegories' ) as HTMLDivElement,
	cathegoryBtn: HTMLButtonElement = 
		document.getElementById( 'cathegory-btn' ) as HTMLButtonElement,
	cathegoryCheckBoxes: HTMLCollection = cathegoryCont.children[1].children as HTMLCollection;


cathegoryBtn.addEventListener( 'click', () => {
	let divWithCheckBoxes: HTMLDivElement = (cathegoryCont.children[1] as HTMLDivElement),
		displayStyle: string = divWithCheckBoxes.style.display,
		
		deleteList = () => {
			//document.removeEventListener( 'mousedown', deleteList );
			divWithCheckBoxes.style.display = 'none';
		};

	if (displayStyle === 'none' || displayStyle === '') {
		//document.addEventListener( 'mousedown', deleteList);
		divWithCheckBoxes.style.display = 'block';
	} else {
		deleteList();
	}
});

for (let checkBox of Array.from( cathegoryCheckBoxes )) {
	checkBox.addEventListener('change', (event) => {
		// deleteBodyElements(divWithPrevues);
		// let cathegories: Image[] = [];
		// for (let cb of Array.from( cathegoryCheckBoxes ){
		// 	if (cb.isChecked)
		// }
		console.log(event)
	})
}

document.body.appendChild( createAccordion(['Button 1', 'Button 2', 'Button 3'],
	 ['Example 1', 'Example 2', 'Example 3']) ); 
//askCaptcha();
