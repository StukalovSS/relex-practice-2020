import IComponent from './component'

export default class View implements IComponent {
    img: HTMLImageElement;

    constructor(public src: string) {
        const img: HTMLImageElement = document.createElement( 'img' );
        img.src = src;

        this.img = img;
    }

    build(): void {
        document.getElementById( 'view' ).appendChild( this.img )
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    destroy(): void {
        throw new Error('Method not implemented.');
    }

}