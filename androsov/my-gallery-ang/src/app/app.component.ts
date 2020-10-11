import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  viewSrc: string = "./assets/images/first.jpg";
  title = 'my-gallery-ang';
}
