import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  //private onFullScreen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get pictureName():string {
    return this.mainSrc.substring( this.mainSrc.indexOf( 'images' ) + 7, this.mainSrc.indexOf( '.jpg' ) );
  }

  public mainImgOnFullScreen() {
    console.log('ex')
    let urlParams = !this.onFullScreen ? `view/${this.pictureName}` : '/';
    this.onFullScreen = ! this.onFullScreen;

    this.router.navigate([urlParams]);
  }

  @Input() mainSrc: string;
  @Input() onFullScreen: boolean;
}


