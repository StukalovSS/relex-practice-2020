import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionsDataService } from '../sections-data.service';
import { INote } from './../section/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, INote {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(public sectServ: SectionsDataService) {
    // this.date = new Date();
  }

  @Input() header: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() id: number;
  @Input() sectionId: number;

  @Output() onClickTrash = new EventEmitter<number>();

  ngOnInit(): void {
  }

  delete() {
    this.sectServ.deleteNote(this.sectionId, this.id);
    this.onClickTrash.emit(this.id);
  }
}
