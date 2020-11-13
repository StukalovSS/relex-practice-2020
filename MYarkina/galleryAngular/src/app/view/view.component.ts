import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public srcCur;

  ngOnInit(): void {
    this.srcCur = localStorage.getItem('curImg');
  }

  back(){
    history.go(-1);
  }

}