import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() viewImgSrc: string;

  @Output() flagImg = new EventEmitter<boolean>();
 
  flag(e: any) {
    this.flagImg.emit(true);
  }


}
