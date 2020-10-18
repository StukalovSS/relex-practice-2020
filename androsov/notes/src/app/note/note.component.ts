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



  constructor() { }
  @Input() header: string;
  content: string;
  date: string;

  ngOnInit(): void {
  }

}
