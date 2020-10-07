import IComponent from './component';
import View from './view';
import Preview from './preview';
import getImgSources from '../images/imageSources'

export default class Router implements IComponent{
    private view: View;
    private preview: Preview;
    private sources = getImgSources();

    build(): void {
        this.preview = new Preview(this.sources);
        let page: number = +this.getSearch().page;

        this.preview.changeCurImage( this.sources[page || 0] );

        this.view = new View( this.preview.curImage.src );

        if (window.location.pathname === '/preview' || 
            window.location.pathname === '/' ) {

            this.view.build();
            this.preview.build();

            for (let img of this.preview.images) {
                img.addEventListener( 'click', event => {
                    window.location.href = 
                        `127.0.0.1:8080/preview?page=
                            ${this.sources.indexOf( (event.target as HTMLImageElement).src)}`
                } )
            }

            this.view.img.addEventListener('click', event => {
                window.location.href = 
                    `127.0.0.1:8080/view?page=
                        ${this.sources.indexOf( (event.target as HTMLImageElement).src)}`
            })
        } else if (window.location.pathname === '/preview') {
            this.view.build();
            this.view.onFullScreen();
            this.view.img.addEventListener('click', event => {
                window.location.href = 
                    `127.0.0.1:8080/preview?page=
                        ${this.sources.indexOf( (event.target as HTMLImageElement).src)}`
            })
        }
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    
    destroy(): void {
        throw new Error('Method not implemented.');
    }

    private getSearch(): any {
        let obj: any = {};
        
        window.location.search.slice(1).split('&').map(s => s.split('='))
            .forEach( arr => obj[arr[0]] = arr[1]);
        
        return obj;
    }

}