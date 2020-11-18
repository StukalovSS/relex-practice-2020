import { Component, Input, Output , EventEmitter} from '@angular/core';
import {faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INote } from 'src/app/container/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
/**
 * Класс заметка.
 * Содержит информацию об одной заметке
 */
export class NoteComponent implements INote {

  icons = [ faEdit, faTrashAlt ];

  @Input() id;
  @Input() name;
  @Input() nodeTxt;
  @Input() date;

  @Output() doEdit = new EventEmitter<number>();
  @Output() doDelete = new EventEmitter<number>();

  /**
   * Реализует удаление заметки.
   * Передает id заметки, которую необходимо удалить, родителю
   */
  public deleteNote(): void{
    this.doDelete.emit(this.id);
  }

  /**
   * Реализует редактирование заметки.
   * Передает id заметки, которую необходимо редактировать, родителю
   */
  public editNote(): void{
    this.doEdit.emit(this.id);
  }

}
