import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import {faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../container/note.interface';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit,INote {
  
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  @Input() id;
  @Input() name;
  @Input() nodeTxt;
  @Input() date;


  ngOnInit(): void {
  }

  @Output() doDelete = new EventEmitter<number>();
  deleteNote(){
    this.doDelete.emit(this.id);
  }
}
