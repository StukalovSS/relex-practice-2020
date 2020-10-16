import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {INote} from './note.interface'
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, INote {
  noteHeader:string;
  noteContent:string;
  noteCreationDate:string;
  faEllipsisV = faEllipsisV;
  faCogs = faCogs;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
    this.noteHeader = 'Заметка'; 
  }

}
