import Image from './Image';
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

export default function getImgSrc(): Image[][] {
    const createImg = function(src: string, classList: string[] = []): HTMLImageElement {	
        let img = document.createElement('img');
        for (let className of classList ) {
            img.classList.add( className );
        }
        
        img.setAttribute('src', src);
        return img;
    }
    
    return [{
        sources: [puppy1, puppy2, puppy3, puppy4, puppy5],
        cathegory: 'puppies'
        },
        {            sources: [ls1, ls2, ls3, ls4, ls5],
            cathegory: 'landscapes'
        },
        {
            sources: [sl1, sl2, sl3, sl4, sl5],
            cathegory: 'still-live'
        },
        {
            sources: [car1, car2, car3, car4, car5],
            cathegory: 'cars'
        }, 
        {
            sources: [animal1, animal2, animal3, animal4, animal5],
            cathegory: 'animals'
        }].map( obj => {
            const arr: Image[] = [];
            for (let src of obj.sources)
                arr.push(new Image( createImg(src, ['preview-image']), obj.cathegory ));
            return arr;
        });
}