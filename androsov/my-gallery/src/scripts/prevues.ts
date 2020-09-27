import Image from './Image'

export default class PrevueContainer {
    private sortedImages: Map<string, Cathegory> = new Map();
    private curIndex: number = 0;

    constructor( images: Image[] ) {
        this.add(...images);
    }

    add( ...images: Image[] ): void {
        for (let img of images) {
            img.img.classList.add( 'preview-image' )
            if (this.sortedImages.has( img.cathegory ))
                this.sortedImages.get( img.cathegory ).images.push( img );
            else 
                this.sortedImages.set( img.cathegory, new Cathegory([img]) );
        }
    }

    addVisibillity(...cathegories: string[]): Image[] {
        this.curIndex = 0;
        let result: Image[] = [];
        
        for (let cathegoryName of Array.from( this.sortedImages.keys() )) {
            if (cathegories.includes( cathegoryName )) {
                this.sortedImages.get(cathegoryName).isShown = true;
                result.push( ...this.sortedImages.get(cathegoryName).images );
            } else {
                this.sortedImages.get(cathegoryName).isShown = false;
            }
        }

        return result;
    }

    get allVisibleImages(): Image[] {
        let result: Image[] = [];
        for (let cathegory of Array.from( this.sortedImages.values() )) {
            if (cathegory.isShown)
                result.push( ...cathegory.images);
        }

        return result;
    }

    get allImages(): Image[] {
        let result: Image[] = [];
        for (let cathegory of Array.from( this.sortedImages.values() )) {
            result.push( ...cathegory.images);
        }

        return result;
    }

    get length(): number {
        return this.allImages.length;
    }

    changeCurImage(src: string): void {
        for (let image of this.allImages)
            image.img.classList.remove( 'curent-image' );

        this.curIndex = this.allVisibleImages.map( image => image.img.src ).indexOf(src);
        if (this.curIndex === -1)
            throw new Error( 'No image with this src');

        this.allVisibleImages[this.curIndex].img.classList.add( 'curent-image' );
    }

    get curImage(): Image {
        return this.allVisibleImages[this.curIndex];
    }

    get next(): Image {
        return this.allVisibleImages[(this.curIndex + 1) % this.allVisibleImages.length];
    }

    get prev(): Image {
        let index: number = (this.curIndex + this.allVisibleImages.length - 1) % this.allVisibleImages.length;
        return this.allVisibleImages[index];
    }

    get cathegories() {
        return Array.from( this.sortedImages.keys() );
    }

    // [Symbol.iterator]() {
    //     let it = this.allImages[Symbol.iterator]();
    //     return {
    //         next() {
    //             return it.next();
    //         }
    //     }
    // }
}

class Cathegory {
    public isShown: boolean = true;
    constructor(public images: Image[]) {}
}
