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

  @ViewChild("modalForNote", { read: ViewContainerRef }) containerNote;
  @Output() onRemoveNote = new EventEmitter<any>();
  removeNote() {
    this.onRemoveNote.emit(this.note.noteId);
  }
  editNote() {
    this.containerNote.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const n = this.containerNote.createComponent(modalFactoryNote);

    n.instance.sectionId = this.sectionId;
    n.instance.noteId = this.note.noteId;
    n.instance.edit = true;

    n.instance.currNote = this.note;

    n.instance.close.subscribe(() => {
      this.containerNote.clear();
    });
    n.instance.submit.subscribe(() => {
      this.containerNote.clear();
    });
  }


}
