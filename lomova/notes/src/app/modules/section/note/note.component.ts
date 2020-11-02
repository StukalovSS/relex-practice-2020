import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { DataService } from '../../../services/data.service';
import { INote } from './inote';
import { ModalNoteComponent } from '../../modal/modal-note/modal-note.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

/**
 * Класс комнопента заметки.
 * 
 * Реализует удаление и редактирование заметки.
 */
export class NoteComponent implements OnInit {
  iconTrash = faTrashAlt;
  iconEdit = faEdit;
  note: INote;
  @Input() sectionId: number;
  @Input() noteId: number;

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver) { }
  ngOnInit(): void {
    this.note = this.dataService.getNote(this.sectionId, this.noteId);
  }

  @ViewChild("modalForNote", { read: ViewContainerRef }) containerModal;
  @Output() onRemoveNote = new EventEmitter<any>();

  removeNote() {
    this.onRemoveNote.emit(this.note.noteId);
  }

  /**
   * Метод создает динамический компонент модального окна для редактирования заметки.
   */
  editNote() {
    this.containerModal.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const modal = this.containerModal.createComponent(modalFactoryNote);

    modal.instance.sectionId = this.sectionId;
    modal.instance.noteId = this.note.noteId;
    modal.instance.edit = true;
    modal.instance.currNote = this.note;

    modal.instance.close.subscribe(() => {
      this.containerModal.clear();
    });
    modal.instance.submit.subscribe(() => {
      this.containerModal.clear();
    });
  }


}
