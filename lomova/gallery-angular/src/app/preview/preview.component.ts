import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  images: any = ['../../assets/img/1.jpg', '../../assets/img/2.jpg', '../../assets/img/3.jpg', '../../assets/img/4.jpg'];
  imgActive: string = this.images[0];

  @Output() onChanged = new EventEmitter<string>();
  changeMainImg(evt: any, item: any) {
    this.onChanged.emit(evt.target.src);
    this.imgActive = item;
  }

  constructor() { }
  ngOnInit(): void {
  }
}
