import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  sources: string[] = ['../../assets/images/first.jpg', '../../assets/images/second.jpg', 
                        '../../assets/images/third.jpg', '../../assets/images/fourth.jpg',
                      '../../assets/images/fifth.jpg'];

  private curIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onClickImg = new EventEmitter<string>();

  clickImage(e: any): void {
    this.chooseImage(e.target);
  }

  get images(): HTMLImageElement[] {
    return Array.from( document.querySelectorAll('img') );
  }

  get curImage(): HTMLImageElement {
    return this.images[this.curIndex];
  }

  chooseImage(img: HTMLImageElement) {
    
    if (this.curImage){
      this.curImage.classList.remove('curent-image');
    }

    this.curIndex = this.images.indexOf(img);
  
    img.classList.add('curent-image');
    this.onClickImg.emit(img.src);
  }

  remove(): void {
    this.sources.splice(this.curIndex - 1, 1);
    this.chooseImage(this.images[this.curIndex - 1]);
  }

  add(): void {
    let src: string = (document.querySelector('input') as HTMLInputElement).value;
    this.sources.push(src);
  }

}
