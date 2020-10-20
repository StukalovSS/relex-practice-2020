import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INote } from './../section/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, INote {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() {
    this.date = new Date();
  }

  @Input() header: string;
  @Input() content: string;
  date: Date;
  @Input() id: number;

  @Output() onClickTrash = new EventEmitter<number>();

  ngOnInit(): void {
  }

  deleteNote() {
    this.onClickTrash.emit( this.id );
  }
}
