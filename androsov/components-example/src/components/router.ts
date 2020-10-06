import IComponent from './component';
import View from './view';
import Preview from './preview';
import getImgSources from '../images/imageSources'

export default class Router implements IComponent{
    private view: View;
    private preview: Preview;
    private sources = getImgSources;

    build(): void {
        
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    
    destroy(): void {
        throw new Error('Method not implemented.');
    }

}