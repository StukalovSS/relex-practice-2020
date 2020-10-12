import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gallery-angular';
  fullImg: boolean = false;
  preview: boolean = false;
  pathMainImg: string = '../assets/img/1.jpg';
  onChanged(path: any) {
    this.pathMainImg = path;
  }
  showFullImg() {
    this.fullImg = !this.fullImg;
    this.preview = !this.preview;
  }
}
