import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() images:any;
  @Output () ChangedImageInPreview = new EventEmitter <any>();
  constructor() { }
  changeImage (image:any) {
    this.ChangedImageInPreview.emit(image);
    console.log(image);
  }
  ngOnInit(): void {
  }
}
