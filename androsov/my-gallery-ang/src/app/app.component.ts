import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-gallery-ang';

  constructor() {}

  // public mainImgOnFullScreen(src: string) {
  //   this.router.navigate([`view/${src}`]);
  // }
}
