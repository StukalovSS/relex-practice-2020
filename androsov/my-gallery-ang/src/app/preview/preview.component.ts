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
    this.onClickImg.emit(e.targer.src);
  }

}
