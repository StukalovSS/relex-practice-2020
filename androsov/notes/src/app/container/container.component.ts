import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../section/note.interface';
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
      date : ''
    }, {
      header : 'Note 2',
      content : "It's second note",
      date : ''
    }]
  }

  section2: ISection = {
    header : 'Section 2',
    notes : [{
      header : 'Smth',
      content : 'This is first note',
      date : ''
    }]
  }

  constructor() { 
    this.sections.push(this.section1);
    this.sections.push(this.section2);
  }

  ngOnInit(): void {
  }

}
