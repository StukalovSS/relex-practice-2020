import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() chooseImg = new EventEmitter<string>();
 
  choose(e: any) {
    for (let img of Array.from(document.querySelectorAll('img'))) {
      img.style.border ='none';
    }

    e.target.style.border = '3px solid #BDB76B';
    this.chooseImg.emit(e.target.src);
  }

}
