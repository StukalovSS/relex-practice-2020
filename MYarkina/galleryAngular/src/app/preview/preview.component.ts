import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() previewImgSrc: string;

  @Output() fullImg = new EventEmitter<string>();
 
  full(e: any) {
    this.fullImg.emit(e.target.src);
  }
}
