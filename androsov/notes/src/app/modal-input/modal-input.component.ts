import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../section/note.interface'

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss']
})
export class ModalInputComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  addNoteForm: FormGroup;

  @Output() onCloseClick = new EventEmitter();
  @Output() onSendNote = new EventEmitter<INote>();

  constructor(fb: FormBuilder) {
    this.addNoteForm = fb.group({
      noteHeader : new FormControl(''),
      noteText : new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  closeForm() {
    this.onCloseClick.emit();
  }

  addNote() {
    this.onSendNote.emit({
      header : this.addNoteForm.value.noteHeader,
      content : this.addNoteForm.value.noteText,
      date : '',
      id : -1
    })
  }
}
