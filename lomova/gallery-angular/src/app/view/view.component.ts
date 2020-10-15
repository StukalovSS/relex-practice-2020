import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  images: any;
  private querySubscription: Subscription;
  public viewImgSrc: string;
  private value: any = 0;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.value = queryParam['val'];
        //   this.viewImgSrc = this.images[this.value];
      }
    );
  }

  goGallery() {
    this.router.navigate(['/gallery'], { queryParams: { val: this.value } });
  }
  ngOnInit(): void {
    this.images = this.dataService.getData();
    console.log(this.dataService.getData());
    this.viewImgSrc = this.images[this.value];
  }
}
