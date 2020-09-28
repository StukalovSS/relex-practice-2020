export default class Image {
    cathegory: string;
    constructor(public img: HTMLImageElement, cathegory: string) {
        this.cathegory = cathegory.toLowerCase();
    }
}