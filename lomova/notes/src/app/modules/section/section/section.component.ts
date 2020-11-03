import { Component, Input, OnInit, Output, EventEmitter, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

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
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, AfterViewInit {
  iconProperty = faEllipsisV;
  iconCogs = faCogs;
  iconPlus = faPlus;
  color = '#9786bd';

  @Input() sectionId: number;
  currSection: ISection;
  notes: INote[] = [];
  idNote = 0;

  idInputs = { filterEven: '', filterUneven: '', sortOld: '', sortNew: '' };

  even = false;
  uneven = false;
  sortMinToMax = true;
  notes$: Observable<INote[]>;
  mergeEvents$: Observable<any>;

  @Output() outRemoveSection = new EventEmitter<number>();
  @ViewChild('modalForSection', { read: ViewContainerRef }) containerSection;
  @ViewChild('modalForNote', { read: ViewContainerRef }) containerNote;

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.currSection = this.dataService.getSection(this.sectionId);
    this.setIdInputs();
    this.notes$ = this.dataService.getAllNotes(this.sectionId).pipe(
      map(value => {
        return this.dataService.sortNotes(this.dataService.parityFilterNotes(this.currSection, this.even, this.uneven), this.sortMinToMax);
      }),
    );
    this.notes$.subscribe(
      (value: INote[]) => { this.notes = value; }
    );
  }

  ngAfterViewInit(): void {
    this.mergeEvents$ = merge(
      fromEvent(document.getElementById(`${this.idInputs.filterEven}`), 'click').pipe(tap(() => this.even = !this.even)),
      fromEvent(document.getElementById(`${this.idInputs.filterUneven}`), 'click').pipe(tap(() => this.uneven = !this.uneven)),
      fromEvent(document.getElementById(`${this.idInputs.sortOld}`), 'click').pipe(tap(() => this.sortMinToMax = true)),
      fromEvent(document.getElementById(`${this.idInputs.sortNew}`), 'click').pipe(tap(() => this.sortMinToMax = false)),
    );
    this.mergeEvents$.pipe(
      switchMap(
        (combine: any) => {
          return this.notes$;
        }
      )
    ).subscribe(
      (value: INote[]) => {
        this.notes = value;
      }
    );
  }

  setIdInputs(): void {
    this.idInputs.filterEven = 'filter-even-' + this.sectionId;
    this.idInputs.filterUneven = 'filter-uneven-' + this.sectionId;
    this.idInputs.sortOld = 'sort-old-' + this.sectionId;
    this.idInputs.sortNew = 'sort-new-' + this.sectionId;
  }

  /**
   * Создание динамического компонента модального окна для редактирования секции.
   */
  renameSection(): void {
    this.containerSection.clear();
    const modalFactorySection = this.resolver.resolveComponentFactory(ModalSectionComponent);
    const s = this.containerSection.createComponent(modalFactorySection);

    s.instance.idSection = this.sectionId;
    s.instance.rename = true;
    s.instance.currTitle = this.currSection.sectionTitle;
    s.instance.closeModal.subscribe(() => {
      this.containerSection.clear();
    });
    s.instance.submitForm.subscribe(() => {
      this.containerSection.clear();
    });
  }

  removeSection(): void {
    this.outRemoveSection.emit(this.currSection.sectionId);
  }

  /**
   * Создание динамического компонента модального окна для добавления заметки.
   */
  addNote(): void {
    this.containerNote.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const n = this.containerNote.createComponent(modalFactoryNote);

    n.instance.sectionId = this.sectionId;
    n.instance.noteId = this.idNote++;
    n.instance.edit = false;

    n.instance.closeModal.subscribe(() => {
      this.containerNote.clear();
    });
    n.instance.submitForm.subscribe(() => {
      this.containerNote.clear();
      this.notes$.subscribe(
        (value: INote[]) => {
          this.notes = value;
        }
      );
    });
  }

  removeNote(idNote: number): void {
    this.dataService.removeNote(this.sectionId, idNote);
    this.notes$.subscribe(
      (value: INote[]) => {
        this.notes = value;
      }
    );
  }
}
