import { Component, Input, OnInit, Output, EventEmitter, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { title } from 'process';
import { INote } from '../note/inote';
import { DataService } from '../../../services/data.service';
import { ISection } from './isection';

import { ModalSectionComponent } from '../../modal/modal-section/modal-section.component';
import { ModalNoteComponent } from '../../modal/modal-note/modal-note.component';

import { Observable, fromEvent, merge } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

/**
 * Класс компонента секции.
 * 
 * Реализует переименование и удаление секции, добавление и удалении заметки.
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  iconProperty = faEllipsisV;
  iconCogs = faCogs;
  iconPlus = faPlus;
  color: string = "#9786bd";

  @Input() sectionId: number;
  currSection: ISection;
  notes: INote[] = [];
  idNote: number = 0;

  idInputs = { filterEven: '', filterUneven: '', sortOld: '', sortNew: '' };

  even: boolean = false;
  uneven: boolean = false;
  sortMinToMax: boolean = true;
  notes$: Observable<INote[]>;
  mergeEvents$: Observable<any>;

  @ViewChild("modalForSection", { read: ViewContainerRef }) containerSection;
  @ViewChild("modalForNote", { read: ViewContainerRef }) containerNote;

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.currSection = this.dataService.getSection(this.sectionId);
    this.setIdInputs();

    this.notes$ = this.dataService.getAllNotes(this.sectionId).pipe(
      map(value => {
        return this.dataService.sortNotes(this.dataService.getEvenNotes(this.currSection, this.even, this.uneven), this.sortMinToMax);
      }),
    );
    this.notes$.subscribe(
      (value: INote[]) => { this.notes = value; }
    );
  }

  ngAfterViewInit() {
    this.mergeEvents$ = merge(
      fromEvent(document.getElementById(`${this.idInputs.filterEven}`), 'click').pipe(tap(() => this.even = !this.even)),
      fromEvent(document.getElementById(`${this.idInputs.filterUneven}`), 'click').pipe(tap(() => this.uneven = !this.uneven)),
      fromEvent(document.getElementById(`${this.idInputs.sortOld}`), 'click').pipe(tap(() => this.sortMinToMax = true)),
      fromEvent(document.getElementById(`${this.idInputs.sortNew}`), 'click').pipe(tap(() => this.sortMinToMax = false)),
    );

    this.mergeEvents$.pipe(
      switchMap(
        (combine: any) => {
          return this.notes$
        }
      )
    ).subscribe(
      (value: INote[]) => {
        this.notes = value;
      }
    );
  }

  setIdInputs() {
    this.idInputs.filterEven = 'filter-even-' + this.sectionId;
    this.idInputs.filterUneven = 'filter-uneven-' + this.sectionId;
    this.idInputs.sortOld = 'sort-old-' + this.sectionId;
    this.idInputs.sortNew = 'sort-new-' + this.sectionId;
  }

  /**
   * Метод создает динамический компонент модального окна для редактирования секции.
   */
  renameSection() {
    this.containerSection.clear();
    const modalFactorySection = this.resolver.resolveComponentFactory(ModalSectionComponent);
    const s = this.containerSection.createComponent(modalFactorySection);

    s.instance.idSection = this.sectionId;
    s.instance.rename = true;
    s.instance.currTitle = this.currSection.sectionTitle;
    s.instance.close.subscribe(() => {
      this.containerSection.clear();
    });
    s.instance.submit.subscribe(() => {
      this.containerSection.clear();
    });
  }

  @Output() onRemoveSection = new EventEmitter<number>();
  removeSection() {
    this.onRemoveSection.emit(this.currSection.sectionId);
  }

  /**
  * Метод создает динамический компонент модального окна для добавления заметки.
  */
  addNote() {
    this.containerNote.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const n = this.containerNote.createComponent(modalFactoryNote);

    n.instance.sectionId = this.sectionId;
    n.instance.noteId = this.idNote++;
    n.instance.edit = false;

    n.instance.close.subscribe(() => {
      this.containerNote.clear();
    });
    n.instance.submit.subscribe(() => {
      this.containerNote.clear();

      this.notes$.subscribe(
        (value: INote[]) => {
          this.notes = value;
        }
      )
    });
  }

  removeNote(idNote: number) {
    this.dataService.removeNote(this.sectionId, idNote);

    this.notes$.subscribe(
      (value: INote[]) => {
        this.notes = value;
      }
    )
  }
}
