import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ISection } from '../container/section.interface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit,ISection {
  
  @Input()arrayOfNotes;
  @Input()name;
  @Input()id;

  faCogs = faCogs;
  faEllipsisV = faEllipsisV;


  constructor() {
  }

  ngOnInit(): void {
  }

  @Output() deleteNote = new EventEmitter<any>();
  doDelete(e){
    this.deleteNote.emit(e);
  }

  @Output() newNote = new EventEmitter<any>();
  addNewNote(){
    this.newNote.emit(this.id);
  }
  
}
