import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { INote } from './../section/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, INote {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() {
    let now: Date = new Date();
    this.date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}
     ${now.getHours()}:${now.getMinutes()}`;
  }

  @Input() header: string;
  @Input() content: string;
  date: string;

  ngOnInit(): void {
  }

}
