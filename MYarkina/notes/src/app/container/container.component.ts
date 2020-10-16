import { Component,OnInit, OnChanges } from '@angular/core';
import { ISection } from './section.interface';
import '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit,OnChanges {

  arrayOfSection = [];
  
  section:ISection = {
    name:"Test",
    arrayOfNotes:[{
      delete:false,
      name: "Test",
      nodeTxt:"TestTxt",
      date:"16.10.20"
    },
    {
      delete:false,
      name: "Test2222",
      nodeTxt:"TestTxt",
      date:"16.10.20"
    }]
  }

  section2:ISection = {
    name:"Test2",
    arrayOfNotes:[{
      delete:false,
      name: "Test2",
      nodeTxt:"TestTxt",
      date:"16.10.20"
    }]
  }

constructor() {
}

ngOnInit(): void {
    this.arrayOfSection.push(this.section);
    this.arrayOfSection.push(this.section2);
  }

ngOnChanges(): void{
  for(let i = 0 ;i < this.arrayOfSection.length;i++){
    for(let j = 0;j < this.arrayOfSection[i].arra)
    this.arrayOfSection[i]
  }
}  

}
