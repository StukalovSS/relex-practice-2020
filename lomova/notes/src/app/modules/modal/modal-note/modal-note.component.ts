import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../../services/data.service';
import { INote } from '../../section/note/inote';

@Component({
  selector: 'app-modal-note',
  templateUrl: './modal-note.component.html',
  styleUrls: ['./modal-note.component.scss']
})
export class ModalNoteComponent implements OnInit {
  iconClose = faTimes;

  sectionId: number;
  noteId: number;
  edit: boolean;
  currNote: INote;

  datePipeString: string;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.form = formBuilder.group({
      "noteTitle": new FormControl("", Validators.required),
      "noteText": new FormControl("", Validators.required),
      "noteDate": new FormControl("")
    });
  }

  ngOnInit(): void {
    if (!this.edit) {
      this.form.patchValue({
        "noteDate": new Date()
      })
    }
    else {
      this.form.patchValue({
        "noteTitle": this.currNote.noteTitle,
        "noteText": this.currNote.noteText,
        "noteDate": this.currNote.noteDate
      });
    }
  }

  onNote() {
    if (!this.edit) {
      this.dataService.addNote(this.sectionId, {
        noteId: this.noteId,
        noteTitle: this.form.value.noteTitle,
        noteText: this.form.value.noteText,
        noteDate: typeof this.form.value.noteDate == "object" ? this.form.value.noteDate : new Date(this.form.value.noteDate)
      })
    }
    else {
      this.dataService.getNote(this.sectionId, this.noteId).noteTitle = this.form.value.noteTitle;
      this.dataService.getNote(this.sectionId, this.noteId).noteText = this.form.value.noteText;
      this.dataService.getNote(this.sectionId, this.noteId).noteDate = typeof this.form.value.noteDate == "object" ? this.form.value.noteDate : new Date(this.form.value.noteDate);
    }
    this.submit.emit();
  }
}
