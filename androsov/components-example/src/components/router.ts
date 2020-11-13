import IComponent from './component';
import View from './view';
import Preview from './preview';
import getImgSources from '../images/imageSources'

export default class Router implements IComponent{
    private view: View;
    private preview: Preview;
    private sources = getImgSources();

    constructor() {
        this.preview = new Preview(this.sources);
        this.view = new View( this.preview.curImage.src );
    }

    build(): void {
        if (window.location.pathname === '/preview' || 
            window.location.pathname === '/' ) {
            
            let page: number = +this.getSearch().page;

            this.preview.changeCurImage( this.sources[page || 0] );
            this.view.src = this.preview.curImage.src;

            this.view.build();
            this.preview.build();

            for (let img of this.preview.images) {
                img.addEventListener( 'click', event => {
                    history.pushState({}, '', `preview?page=${this.sources.indexOf(
                        (event.target as HTMLImageElement).src
                        .replace('http://localhost:8080/', '') )}`);

                        this.destroy();
                        this.build();
                } );
            }

            this.view.img.addEventListener('click', event => {
                history.pushState({}, '', `view?page=${this.sources.indexOf(
                    (event.target as HTMLImageElement).src
                    .replace('http://localhost:8080/', '') )}`); 

                    this.destroy();
                    this.build();
            })

        } else if (window.location.pathname === '/view') {
            this.view.build();
            this.view.onFullScreen();
            this.view.img.addEventListener('click', event => {
                history.pushState({}, '', `preview?page=${this.sources.indexOf( 
                    (event.target as HTMLImageElement).src
                    .replace('http://localhost:8080/', '') )}`);

                    this.destroy();
                    this.build();
            })
        }
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    
    destroy(): void {
        this.view.destroy();
        this.preview.destroy();
    }

    private getSearch(): any {
        let obj: any = {};
        
        window.location.search.slice(1).split('&').map(s => s.split('='))
            .forEach( arr => obj[arr[0]] = arr[1]);
        
        return obj;
    }

}