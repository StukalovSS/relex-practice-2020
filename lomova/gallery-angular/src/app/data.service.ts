import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
    public images: string[] = ['../../assets/img/1.jpg', '../../assets/img/2.jpg', '../../assets/img/3.jpg', '../../assets/img/4.jpg'];
    getData(): string[] {
        return this.images;
    }
    addData(newPath: string){
        this.images.push(newPath);
    }
    deleteData(delPath: string) {
        this.images = this.images.filter(elem => elem != delPath);
    }
}