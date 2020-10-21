import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { SectionsDataService } from '../sections-data.service';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss']
})
export class ModalInputComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  addNoteForm: FormGroup;

  @Input() sectionId: number;
  @Output() onCloseClick = new EventEmitter();
  @Output() onSendNote = new EventEmitter();

  constructor(fb: FormBuilder, public data: SectionsDataService) {
    this.addNoteForm = fb.group({
      noteHeader : new FormControl('', Validators.required ),
      noteText : new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  closeForm() {
    this.onCloseClick.emit();
  }

  addNote() {
    this.data.addNote(this.sectionId, {
      header : this.addNoteForm.value.noteHeader,
      content : this.addNoteForm.value.noteText,
      date : null,
      id : -1
    });
    this.onSendNote.emit()
  }
}
