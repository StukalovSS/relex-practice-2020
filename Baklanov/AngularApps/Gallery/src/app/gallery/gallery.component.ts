import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any =[];
  mainImageOut :any;
  previewOut : any;
  zoomindex :number;
  private querySubscription: Subscription;
  constructor (private router: Router,private route: ActivatedRoute) {
   this.images.push('assets/whale.jpg');
   this.images.push('assets/blueWhale.webp');
   this.images.push('assets/fantasy.jpg');
   this.images.push('assets/nature.jpg');
   this.images.push('assets/planet.jpg');
   this.images.push('assets/jslogo.png');
   this.mainImageOut = this.images[4];
   this.querySubscription = route.queryParams.subscribe(
    (queryParam: any) => {
        this.mainImageOut ='assets/' + queryParam['img'];
    }
);
  }
  public ChangedImageInPreview(image:any) {
      this.mainImageOut = image;
  }
  public addImage (newImg : string) {
    this.images.push(newImg);
    console.log(this.images);
  }

  ngOnInit(): void {
  }

}