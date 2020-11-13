import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any;
  public pathMainImg: string = '../assets/img/1.jpg';
  public imgSelect: string;
  public pathNewImg: string;

  private ind: number;
  private value;
  private querySubscription: Subscription;

  onChanged(obj: any) {
    this.pathMainImg = obj.path;
    this.ind = obj.index;
  }

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.images = this.dataService.getData();
        this.value = queryParam['val'] || 0;
        this.pathMainImg = this.images[this.value];
        this.ind = this.value;
        this.imgSelect = this.images[this.value];
      }
    );
  }

  goView() {
    this.router.navigate(['/view'], { queryParams: { val: this.ind } });
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyDown(keyEvent) {
    if (keyEvent.key == "ArrowLeft") {
      this.ind = (+this.ind + this.images.length - 1) % this.images.length;
      this.router.navigate(['/gallery'], { queryParams: { val: this.ind } });
      this.pathMainImg = this.images[this.ind];
    }
    if (keyEvent.key == "ArrowRight") {
      this.ind = (+this.ind + 1) % this.images.length;
      this.router.navigate(['/gallery'], { queryParams: { val: this.ind } });
      this.pathMainImg = this.images[this.ind];
    }
  }

  addImage() {
    if (this.pathNewImg) {
      this.dataService.addData('../../assets/img/' + this.pathNewImg);
      this.images = this.dataService.getData();
    }
  }

  deleteImage() {
    this.dataService.deleteData(this.images[this.ind]);
    this.images = this.dataService.getData();
    this.pathMainImg = this.images[0];
    this.imgSelect = this.images[0];
  }

  ngOnInit(): void {
    this.images = this.dataService.getData();
  }

}
