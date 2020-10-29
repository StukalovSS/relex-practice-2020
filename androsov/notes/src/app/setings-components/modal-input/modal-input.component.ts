import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionsDataService } from '../../sections-data.service';
import { INote } from '../../section/note.interface';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss']
})
export class ModalInputComponent implements OnInit {
  faTimesCircle = faTimesCircle;
  addNoteForm: FormGroup;

  @Input() textOnButton: string = 'Добавить заметку';
  @Input() sectionId: number;
  @Output() onCloseClick = new EventEmitter();
  @Output() onSendNote = new EventEmitter<INote>();

  constructor(fb: FormBuilder, public data: SectionsDataService) {
    this.addNoteForm = fb.group({
      noteHeader : new FormControl('', Validators.required ),
      noteText : new FormControl(''),
      noteDate : new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  closeForm() {
    this.onCloseClick.emit();
  }

  addNote() {
    let date = this.addNoteForm.value.noteDate.split('-');
    date = `${date[0]}-${date[1]}-${date[2]}`;
    this.onSendNote.emit({
      header : this.addNoteForm.value.noteHeader,
      content : this.addNoteForm.value.noteText,
      date : new Date(date),
      id : -1
    });
  }
}
