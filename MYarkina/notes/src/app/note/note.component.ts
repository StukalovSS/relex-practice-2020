import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import {faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../section/note.interface';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit,INote {
  
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  @Input() name;
  nodeTxt:string;
  date:string;
  
  constructor() {
   /*  this.name = note.name;
    this.date = note.date;
    this.nodeTxt = note.nodeTxt; */
   }

  ngOnInit(): void {
  }

  @Output() doDelete = new EventEmitter<boolean>();
  deleteNote(e){
    this.doDelete.emit(true);
  }
}
