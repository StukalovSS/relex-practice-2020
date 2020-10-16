import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private dataService: DataService,private router: Router) { }
  public items:any;

  @Input() curId: number;


  ngOnInit(): void {
    if(!this.curId){this.curId = 0;}
    this.items = this.dataService.getData();
  }

  fullScreen(){
    localStorage.setItem('curImg', `${this.items[this.curId]}`);
    this.router.navigate(['view'], {
      queryParams: {
        'id': `${this.curId}`
      }
    });
  }

}