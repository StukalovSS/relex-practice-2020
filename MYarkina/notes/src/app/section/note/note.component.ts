import { Component, Input, Output , EventEmitter} from '@angular/core';
import {faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent {

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  @Output() doEdit = new EventEmitter<number>();
  @Input() id;
  @Input() name;
  @Input() nodeTxt;
  @Input() date;

  @Output() doDelete = new EventEmitter<number>();
  deleteNote(): void{
    this.doDelete.emit(this.id);
  }

  editNote(): void{
    this.doEdit.emit(this.id);
  }

}
