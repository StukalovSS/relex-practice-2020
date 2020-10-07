import IComponent from './component'

export default class View implements IComponent {
    img: HTMLImageElement;

    constructor(public src: string) {
        const img: HTMLImageElement = document.createElement( 'img' );
        img.src = src;
        img.classList.add( 'main-image' );

        this.img = img;
    }

    onFullScreen() {
        this.img.style.width = '100%';
        this.img.style.height = '100vh';
    }

    build(): void {
        document.getElementById( 'view' ).appendChild( this.img );
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    destroy(): void {
        throw new Error('Method not implemented.');
    }

}