import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galleryAngular';
  previewImgSrc: string = "./assets/img/picture1.jpg";
  viewImgSrc: string = "./assets/img/picture1.jpg";


  choose(src: string): void {
    this.previewImgSrc = src;
  }

  full(src: string): void {
    this.viewImgSrc = src;
    document.getElementById("appview").style.visibility = "visible";
  }
  flag(): void{
    document.getElementById("appview").style.visibility = "hidden";
  }
}


