import IComponent from './component'

export default class Preview implements IComponent{
    private div: HTMLDivElement;
    private curIndex: number;

    constructor(private sources: string[]) {
        this.changeCurImage( sources[0] );
    }

    add( ...sources: string[] ): void {
        this.sources.push( ...sources );

        for (let src of sources) {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('preview-image');

            this.div.appendChild(img);
        }
    }

    get images(): HTMLImageElement[] {
        return Array.from( this.div.children ) as HTMLImageElement[];
    }

    changeCurImage(src: string): void {
        this.get(this.sources[this.curIndex]).classList.remove( 'curent-image' );
        
        this.curIndex = this.sources.indexOf(src);
        if (this.curIndex === -1)
            throw new Error( 'No image with this src');

        this.get(src).classList.add( 'curent-image' );
    }

    get(src: string): HTMLImageElement {
        return Array.from( this.div.children ).
            find( (img: HTMLImageElement) => img.src === src ) as HTMLImageElement;
    }

    get curImage(): HTMLImageElement {
        return this.getByIndex(this.curIndex);
    }

    get next(): HTMLImageElement {
        const img = this.getByIndex((this.curIndex + 1) % this.sources.length);
        this.changeCurImage( img.src );
        return img;
    }

    get prev(): HTMLImageElement {
        const img = this.getByIndex((this.curIndex + this.sources.length - 1) % this.sources.length);
        this.changeCurImage( img.src );
        return img;
    }

    private getByIndex(index: number): HTMLImageElement {
        return this.get(this.sources[this.curIndex]);
    }

    build(): void {
        this.div = document.getElementById( 'preview' ) as HTMLDivElement;
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }

    destroy(): void {
        this.div.remove();
    }
}
