import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get pictureName():string {
    return this.mainSrc.substring( this.mainSrc.indexOf( 'images' ) + 7, this.mainSrc.indexOf( '.jpg' ) );
  }

  public mainImgOnFullScreen() {

    this.router.navigate([`view/${this.pictureName}`]);
  }

  @Input() mainSrc: string;
}


