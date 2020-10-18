import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { INote } from './inote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  iconTrash = faTrashAlt;
  iconEdit = faEdit;

  @Input() note: INote;
  @Output() onRemoveNote = new EventEmitter<any>();
  removeNote() {
    this.onRemoveNote.emit(this.note.noteId);
  }
  constructor() {}
  ngOnInit(): void {

  }

}
