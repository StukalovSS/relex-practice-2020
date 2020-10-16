import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
