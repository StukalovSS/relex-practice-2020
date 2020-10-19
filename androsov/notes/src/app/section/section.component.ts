import { Component, OnInit, Input } from '@angular/core';
import { faCogs, faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from './note.interface';
import { ISection } from '../container/section.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, ISection {
  faCogs = faCogs;
  faPlus = faPlus;

  constructor() {
  }

  @Input() header: string;
  @Input() notes: INote[];

  ngOnInit(): void {
  }

  addNoteForm: FormGroup;
  invisibleForm: boolean = true;

  deleteNote(id: number): void {
    let deletingNoteIndex = this.notes.findIndex( note => note.id === id);
    if (deletingNoteIndex === -1) {
      return;
    }

    this.notes.splice(deletingNoteIndex, 1);
  }

  changeFormVisibillity(): void {
    this.invisibleForm = !this.invisibleForm;
  }

  addNote(note): void {
    this.changeFormVisibillity();
    note.id = this.notes.length;
    this.notes.push(note);
  }
}