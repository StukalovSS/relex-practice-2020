import { Component, OnInit } from '@angular/core';
import {faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
