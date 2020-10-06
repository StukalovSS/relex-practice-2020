import IComponent from './component'

class Container implements IComponent {
    private div: HTMLDivElement;

    build(): void {
        this.div = document.getElementById( 'main' ) as HTMLDivElement;
        this.div.innerHTML = 'Hello world';
    }

    setViewParams(param: any): void {
        throw new Error('Method not implemented.');
    }
    
    destroy(): void {
        this.div.remove();
    }
}