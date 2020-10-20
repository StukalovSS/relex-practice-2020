import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {ISection} from "../section/section.interface";
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit{
  arrayOfSections:any[]=[];
  faPlus = faPlus;
  count : number = 0;
  constructor(private service : DataService ) { }
  
  addNewSection() : void {
    let section : ISection ={
        sectionTitle : "Секция " + (this.arrayOfSections.length +1),
        notes : [],
        id : this.count
    }
    this.service.addSection(section);
    this.count++;
    this.arrayOfSections = this.service.getData();
  }
  ngOnInit(): void {
  }

}
