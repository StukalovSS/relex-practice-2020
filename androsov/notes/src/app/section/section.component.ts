import { Component, OnInit, Input } from '@angular/core';
import { faCogs, faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from './note.interface';
import { ISection } from '../container/section.interface';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, ISection {
  faCogs = faCogs;
  faPlus = faPlus;

  constructor(fb: FormBuilder) {
    this.addNoteForm = fb.group({
      noteHeader : new FormControl(''),
      noteText : new FormControl('')
    });
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

  changeFormVisibillity() {
    this.invisibleForm = !this.invisibleForm;
  }

  addNote() {
    this.notes.push({
      header : this.addNoteForm.value.noteHeader,
      content : this.addNoteForm.value.noteText,
      date : '',
      id : this.notes.length
    });
  }
}
