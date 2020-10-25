import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../services/data.service';
import { INote } from './note.interface';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() sectionId : number;
  @Input() noteId : number;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  note: INote;
  constructor(private service: DataService) { }
  deleteNote(): void {
    this.service.deleteNote(this.note.sectionId, this.note.id);
    console.log()
  }
  ngOnInit(): void {
    this.note = this.service.getNote(this.sectionId, this.noteId);
  }
}
