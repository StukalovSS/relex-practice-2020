import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ISection } from './section.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  faPlus = faPlus;

  sections: ISection[] = [];
  section1: ISection = {
    header : 'Section1',
    notes : [{
      header : 'Note 1',
      content : 'This is first note',
      date : null,
      id : 0
    }]
  }

  constructor() { 
    this.sections.push(this.section1);
  }

  ngOnInit(): void {
  }

  addSection(header: string): void {
    this.sections.push({
      'header': header,
      notes: []
    })
  }
}
