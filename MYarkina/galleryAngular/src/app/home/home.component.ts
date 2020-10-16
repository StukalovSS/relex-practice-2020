import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'newGalleryAngular';
  constructor(private activeRouter: ActivatedRoute,private dataService: DataService){}
  public curId;

  ngOnInit(): void {
   this.createLocal();
  }

  curShowImg(id:any){
    this.curId = id;
  }

  createLocal(){
    localStorage.setItem('numberOfItem', `${this.dataService.getData().length}`);
  }

}