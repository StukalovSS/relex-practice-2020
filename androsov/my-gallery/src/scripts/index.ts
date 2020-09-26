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
import Image from './Image';
import PrevueContainer from './prevues'

const divWithMainImage: HTMLDivElement = document.createElement( 'div' ),
	divWithPrevues: HTMLDivElement = document.createElement( 'div' ),
	gallery: HTMLElement = document.getElementById('gallery'),
	mainImage: HTMLImageElement = createImg('', ['main-image']),
	imageSources: Image[][] = [{
        sources: [puppy1, puppy2, puppy3, puppy4, puppy5],
        cathegory: 'puppy'
        },
        {            sources: [ls1, ls2, ls3, ls4, ls5],
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
        }].map( obj => {
			const arr: Image[] = [];
			for (let src of obj.sources)
				arr.push(new Image( createImg(src, ['preview-image']), obj.cathegory ));
			return arr;
		});

let	prevues: PrevueContainer = new PrevueContainer([]);
	
function createImg(src: string, classList: string[] = []): HTMLImageElement {	
	let img = document.createElement('img');
	for (let className of classList ) {
		img.classList.add( className );
	}
	
	img.setAttribute('src', src);
	return img;
}

function removeChildren(container: HTMLElement) {
	removeChildren.curContainer = container;
	removeChildren.removedNodes = [];
	for (let elem of Array.from( container.children )) {
        removeChildren.removedNodes.push( (elem as HTMLElement) );
		(elem as HTMLElement).remove();
	}
}

removeChildren.curContainer = null;
removeChildren.removedNodes = [];
removeChildren.return = function() {
	for (let elem of removeChildren.removedNodes) {
		removeChildren.curContainer.appendChild( removeChildren.removedNodes.shift() );
	}
}

function changeMainImage(src : string): void {
	mainImage.src = src;
	prevues.changeCurImage( src );
}

function enlargeOnScroll(event: WheelEvent) {
	let transform: string = (event.target as HTMLImageElement).style.transform,
		scale = transform === '' ? 1 : +transform.slice(6, transform.length - 1);
	if (event.deltaY < 0) {
		(event.target as HTMLImageElement).style.transform = `scale(${scale * 1.05})`;
	} else if (scale > 1) {
		(event.target as HTMLImageElement).style.transform = `scale(${scale * 0.95})`;
	}
}

function addPrevues(images: Image[]) {
	for (let img of images) {
		divWithPrevues.appendChild( img.img );
		img.img.addEventListener('click', event => {
			changeMainImage((event.target as HTMLImageElement).src);
		})
		prevues.add( img );
	}
}

function changePrevues(cathegories: string[]) {
	removeChildren( divWithPrevues );
	addPrevues( prevues.addVisibillity(...cathegories) );
	mainImage.src = prevues.allVisibleImages[0].img.src;
}

function showNextElementByClicking(btn: HTMLElement): void {
	let nextSib: HTMLDivElement 
			= btn.nextElementSibling as HTMLDivElement,
		displayStyle: string = nextSib.style.display,
		
		deleteList = () => {
			nextSib.style.display = 'none';
		};

	if (displayStyle === 'none' || displayStyle === '') {
		nextSib.style.display = 'block';
	} else {
		deleteList();
	}
}

function checkCheckboxes() {
	let cathegories: string[] = [];
	let container = Array.from( document.querySelectorAll( 'input' ) )
		.filter( elem => elem.type === 'checkbox' );
	for (let cb of container as HTMLInputElement[]){
		if (cb.checked) {
			cathegories.push( cb.value );
		}
	}
	changePrevues( cathegories );
}

function appendCheckBox(cathegory: string) {
	
	if (cathegoryCheckBoxes
		.find( val => val.textContent.toLowerCase() === cathegory.toLowerCase()) === undefined) {
		const p: HTMLElement = document.createElement( 'p' ),
			cb: HTMLInputElement = document.createElement( 'input' );
		cb.type = 'checkbox';
		cb.value = cathegory;
		cb.checked = true;
		p.appendChild(cb);
		p.innerHTML = p.innerHTML + ' ' + cathegory;
		checkboxes.appendChild(p);
		cb.addEventListener('change', checkCheckboxes);

		const option = document.createElement('option');
		option.textContent = cathegory;
		cathegoryNameField.nextElementSibling.appendChild(option);
	}
}

function handleImage(file: File) {
	const reader: FileReader = new FileReader(),
		cathegory: string = cathegoryNameField.value;
	
	if (file.type.startsWith('image/')) {
		let img = document.createElement( 'img' );
		reader.addEventListener('loadend', event => {
			img.src = event.target.result as string;
		});
		reader.readAsDataURL(file);
		appendCheckBox(cathegory);
		addPrevues([new Image(img, cathegory)]);
	}
}

function dragenter(e: Event) {
	e.stopPropagation();
	e.preventDefault();
  }
  
  function dragover(e: Event) {
	e.stopPropagation();
	e.preventDefault();
  }

  function drop(e: DragEvent) {
	e.stopPropagation();
	e.preventDefault();
  
	let dt: DataTransfer = e.dataTransfer,
			files = dt.files;

	console.log( files );
  
	handleImage(files[files.length - 1]);
  }

for (let images of imageSources) {
	addPrevues(images);
}

divWithPrevues.id = 'container-preview';

gallery.appendChild( divWithMainImage );
gallery.appendChild( divWithPrevues );
divWithMainImage.appendChild( mainImage );

changeMainImage( prevues.allImages[0].img.src );

for (let img of prevues.allImages) {
	img.img.addEventListener('click', event => { 
		prevues.changeCurImage( (event.target as HTMLImageElement).src); 
		mainImage.src = (event.target as HTMLImageElement).src;
	});
}	

document.addEventListener('keydown', event => {
	if (event.code === 'ArrowLeft') {
		changeMainImage( prevues.prev.img.src );
	} else if (event.code === 'ArrowRight') {
		changeMainImage( prevues.next.img.src );
	}
});

setInterval(() => {
	changeMainImage( prevues.next.img.src );
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
		removeChildren.return();
	})

	removeChildren(document.body);
	document.body.appendChild( img );
});

const cathegoryBtn: HTMLButtonElement = 
		document.getElementById( 'cathegory-btn' ) as HTMLButtonElement,
	cathegoryCheckBoxes: HTMLInputElement[] = 
		Array.from( document.querySelectorAll( 'input' ) ).filter( elem => elem.type === 'checkbox' );


cathegoryBtn.addEventListener( 'click', event => {
	showNextElementByClicking(event.target as HTMLButtonElement);
});

for (let checkBox of Array.from( cathegoryCheckBoxes )) {
	checkBox.addEventListener('click', checkCheckboxes);
}

document.getElementById( 'show-input-add-file-btn' ).addEventListener( 'click', event => {
	showNextElementByClicking(event.target as HTMLButtonElement);
});

const fileChooser: HTMLInputElement = 
			(document.getElementById( 'img-file-chooser' ) as HTMLInputElement),
		cathegoryNameField: HTMLInputElement =
			(document.getElementById( 'cathegory-textfield' ) as HTMLInputElement),
		addFileBtn: HTMLButtonElement 
			= (document.getElementById( 'add-image' ) as HTMLButtonElement),
		checkboxes: HTMLDivElement = document.getElementById( 'checkboxes' ) as HTMLDivElement;

addFileBtn.addEventListener('click', () => {
	const file: File = fileChooser.files[fileChooser.files.length - 1];
    handleImage(file);
});

let dropbox = document.querySelector(".file-field");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
