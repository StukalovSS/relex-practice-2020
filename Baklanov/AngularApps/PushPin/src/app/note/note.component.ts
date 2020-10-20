import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../services/data.service';
import {INote} from './note.interface';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit{
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  notes : INote[] = [];
  note : INote;
  counter : number = 1;
  constructor(private service : DataService) {}
  deleteNote() : void {
    this.service.deleteNote(this.note.sectionId, this.note.id);
    console.log()
  }
  ngOnInit(): void {
    this.note = this.service.getNote();
  }
}
