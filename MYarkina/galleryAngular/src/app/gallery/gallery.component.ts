import { Component, OnInit,EventEmitter, Output, AfterViewInit} from '@angular/core';
import { DataService } from '../data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,AfterViewInit {

  constructor(private dataService: DataService,private location: Location) { }
  public items:any;
  public curShowId;

  ngOnInit(): void {
    this.items = this.dataService.getData();
    this.location.go("/?0");
  }

  ngAfterViewInit(){
    document.getElementById('0').style.border = '3px solid #BDB76B';
    this.curShowId = 0;
  }
  

  @Output() curShowImg = new EventEmitter<number>();
  curShow(e:any){
    document.getElementById(this.curShowId).style.border = 'none';
    this.curShowId = e.target.id;
    this.curShowImg.emit(this.curShowId);
    this.location.go(`/?${this.curShowId}`);
    document.getElementById(this.curShowId).style.border = '3px solid #BDB76B';
  }


  addImg(){
    let newSrc = this.dataService;
    var reader = new FileReader();
    reader.readAsDataURL((<HTMLInputElement>document.getElementById("new-img-input")).files[0]);
    reader.onloadend = function (){
      newSrc.addData(`${reader.result}`);
  }
}

  delImg(){
    document.getElementById(this.curShowId).style.border = 'none';
    this.dataService.deleteData(this.curShowId);
    this.curShowImg.emit(0);
    this.curShowId = 0;
    document.getElementById(this.curShowId).style.border = '3px solid #BDB76B';
  }

  public trackByFunction(): string {
    return this.items;
  }
}

