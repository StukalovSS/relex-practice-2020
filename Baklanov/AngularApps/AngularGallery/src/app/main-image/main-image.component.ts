import { Component, Input, OnInit, NgModule} from '@angular/core';
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {
  @Input() mainImageOut:any;
  // mainComp :any = new AppComponent;
  // image:any = this.mainComp.images[0];
  // changeImage ($event:any):void {
  //   console.log(event);
  // };
  ngOnInit(): void {
  }

}
