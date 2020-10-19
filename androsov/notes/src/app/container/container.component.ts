import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ISection } from './section.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  faPlus = faPlus;

  sections: ISection[] = [];
  section1: ISection = {
    header : 'Section1',
    notes : [{
      header : 'Note 1',
      content : 'This is first note',
      date : '',
      id : 0
    }, {
      header : 'Note 2',
      content : "It's second note",
      date : '',
      id : 1
    }]
  }

  section2: ISection = {
    header : 'Section 2',
    notes : [{
      header : 'Smth',
      content : 'This is first note',
      date : '', 
      id : 0
    }]
  }

  constructor() { 
    this.sections.push(this.section1);
    this.sections.push(this.section2);
  }

  ngOnInit(): void {
  }

}
