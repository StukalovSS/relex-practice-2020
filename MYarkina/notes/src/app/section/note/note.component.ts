import { Component, Input, Output ,EventEmitter} from '@angular/core';
import {faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent {
  
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  
  @Input() id;
  @Input() name;
  @Input() nodeTxt;
  @Input() date;

  @Output() doDelete = new EventEmitter<number>();
  deleteNote(){
    this.doDelete.emit(this.id);
  }

  @Output() doEdit = new EventEmitter<number>();
  editNote(){
    this.doEdit.emit(this.id);
  }
  
}
