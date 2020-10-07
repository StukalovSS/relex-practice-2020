import IComponent from './component'

export default class View implements IComponent {
    img: HTMLImageElement;

    constructor(src: string) {
        const img: HTMLImageElement = document.createElement( 'img' );
        img.src = src;
        img.classList.add( 'main-image' );

        this.img = img;
    }

    set src(src: string) {
        this.img.src = src
    }

    get src(): string {
        return this.img.src;
    }

    onFullScreen() {
        document.getElementById( 'main' ).style.width = '100%';
        // document.getElementById( 'main' ).style.paddingTop = '0';
        this.img.style.width = '100%';
        this.img.style.height = '100vh';
    }

    build(): void {
        this.img.style.width = '800px';
        this.img.style.height = '800px';
        document.getElementById( 'main' ).style.width = '800px';
        document.getElementById( 'view' ).appendChild( this.img )
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        this.img.remove();
    }
}