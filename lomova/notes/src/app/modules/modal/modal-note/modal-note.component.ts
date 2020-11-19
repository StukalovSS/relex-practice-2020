import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { INote } from '../../../shared/interfaces/inote';
import { DataService } from '../../../shared/services/data.service';


/**
 * Компонент модального окна.
 * Используется для редактирования и добавления заметок.
 */
@Component({
  selector: 'app-modal-note',
  templateUrl: './modal-note.component.html',
  styleUrls: ['./modal-note.component.scss']
})
export class ModalNoteComponent implements OnInit {

  public readonly icons = {
    close: faTimes
  };

  public sectionId: number;
  public noteId: number;
  public edit: boolean;
  public currNote: INote;

  public form: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private translate: TranslateService
            )
    {
      this.form = formBuilder.group({
        noteTitle: new FormControl('', Validators.required),
        noteText: new FormControl('', Validators.required),
        noteDate: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
    if (!this.edit) {
      this.form.patchValue({
        noteDate: this.getDate(new Date())
      });
    }
    else {
      this.form.patchValue({
        noteTitle: this.currNote.noteTitle,
        noteText: this.currNote.noteText,
        noteDate: this.getDate(this.currNote.noteDate)
      });
    }
  }

  /**
   * Обрабатывает событие отправки формы в зависимости от добавления или редактирования заметки.
   */
  public onNote(): void {
    if (!this.edit) {
      this.dataService.addNote(this.sectionId, {
        title: this.form.value.noteTitle,
        text: this.form.value.noteText,
        date: this.toDate(this.form.value.noteDate)
      });
    }
    else {
      this.dataService.getNote(this.sectionId, this.noteId).noteTitle = this.form.value.noteTitle;
      this.dataService.getNote(this.sectionId, this.noteId).noteText = this.form.value.noteText;
      this.dataService.getNote(this.sectionId, this.noteId).noteDate = this.toDate(this.form.value.noteDate);
    }
    this.submitForm.emit();
  }

  /**
   * Преобразует дату в объект Date.
   */
  private toDate(date: any): Date {
    if (typeof date === 'object') {
      return date;
    }
    else {
      return new Date(date);
    }
  }

  /**
   * Возвращает объект даты в формате YYYY-MM-DDTHH:mm UTC+3.
   */
  private getDate(date: any): string {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().substring(0, 16);
  }
}
