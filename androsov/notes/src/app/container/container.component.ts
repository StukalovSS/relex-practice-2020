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
      date : '18.10.2020 14:51'
    }]
  }

  constructor() { 
    this.sections.push(this.section1);
  }

  ngOnInit(): void {
  }

}
