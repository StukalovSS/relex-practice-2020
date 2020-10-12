import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onClickImg = new EventEmitter<string>();

  chooseImage(e: any) {
    for (let img of Array.from(document.querySelectorAll('img'))  ) {
      img.classList.remove('curent-image');
    }
    e.target.classList.add('curent-image');
    this.onClickImg.emit(e.target.src);
  }

}
