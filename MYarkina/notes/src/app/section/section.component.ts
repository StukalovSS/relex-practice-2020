import { Component, Input, OnInit } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ISection } from '../container/section.interface';
import { INote } from './note.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit,ISection {
  
  @Input() arrayOfNotes = [];
  @Input()name;

  faCogs = faCogs;
  faEllipsisV = faEllipsisV;


  constructor() {
  }

  ngOnInit(): void {
  }

}
