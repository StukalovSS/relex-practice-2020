import { Component, Input, OnInit, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.css']
})
export class MainImageComponent implements OnInit {
  private querySubscription: Subscription;
  constructor(private router: Router,private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.mainImageOut ='assets/' + queryParam['img'];
      }
  );
   }
  @Input() mainImageOut:any;
  imageFullscreen () :void {
          this.router.navigate(['/fullscreen'],
          {
            queryParams: {'img' : this.mainImageOut.substring(7,this.mainImageOut.length)}
          });
  }
  ngOnInit(): void {
  }

}