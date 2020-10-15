import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string ="GalleryApp"
  images:any = [];
  mainImageOut :any;
  previewOue : any;
  constructor () {
    this.images.push("./assets/jslogo.png");
    this.images.push("./assets/whale.jpg");
    this.images.push("./assets/blueWhale.webp");
    this.images.push("./assets/fantasy.jpg");
    this.images.push("./assets/nature.jpg");
    this.images.push("./assets/planet.jpg");
    this.images.push("./assets/purpleWorld.jpg");
    this.images.push("./assets/subNat.jpeg");
    this.mainImageOut = this.images[0];
  }
  ChangedImageInPreview(image:any) {
      this.mainImageOut = image;
      console.log(this.mainImageOut);
  }
}