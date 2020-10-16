import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() images: any;
  @Input() imgActive: string;

  constructor(private router: Router) { }
  @Output() onChanged = new EventEmitter<object>();
  changeMainImg(evt: any, item: any, ind: any) {
    this.onChanged.emit({ path: evt.target.src, index: ind });
    this.imgActive = item;
    this.router.navigate(['/gallery'], { queryParams: { val: ind } })
  }

  ngOnInit(): void {}
}
