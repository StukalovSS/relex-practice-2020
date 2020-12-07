import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCogs, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { INote } from '../../../shared/interfaces/inote';
import { ISection } from '../../../shared/interfaces/isection';
import { DataService } from '../../../shared/services/data.service';
import { ModalNoteComponent } from '../../modal/modal-note/modal-note.component';
import { ModalSectionComponent } from '../../modal/modal-section/modal-section.component';


/**
 * Компонент секции.
 */
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, AfterViewInit, OnDestroy {

  public readonly icons = {
    plus: faPlus,
    cogs: faCogs,
    points: faEllipsisV
  };

  public color = '#9786bd'; // цвет шапки секции

  @Input() sectionId: number;

  public currSection: ISection;
  public notes: INote[] = [];
  public idInputs = { filterEven: '', filterUneven: '', sortOld: '', sortNew: '' };

  private even = false;
  private uneven = false;
  private sortMinToMax = true;

  private notes$: Observable<INote[]>;
  private mergeEvents$: Observable<any>;
  private unsubscribe$ = new Subject<void>();
  private querySubscription: Subscription;
  private dateParam: string; // дата в параметрах URL

  @Output() outDeleteSection = new EventEmitter<number>();
  @ViewChild('modalForSection', { read: ViewContainerRef }) containerSection;
  @ViewChild('modalForNote', { read: ViewContainerRef }) containerNote;

  constructor(private dataService: DataService,
              private resolver: ComponentFactoryResolver,
              private route: ActivatedRoute,
              private translate: TranslateService
            )
    {
      this.querySubscription = route.queryParams.subscribe(
        (queryParam: any) => {
          this.dateParam = queryParam.date;
          this.urlDate();
        }
      );
  }

  ngOnInit(): void {
    this.currSection = this.dataService.getSection(this.sectionId);
    this.setIdInputs();
    this.notes$ = this.dataService.getAllNotes(this.sectionId).pipe(
      map(value => {
        return this.dataService.sortNotes(this.dataService.parityFilterNotes(this.currSection, this.even, this.uneven), this.sortMinToMax);
      }),
    );
    this.update();
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
        (value: any) => {
          return this.notes$;
        }
      )
    ).pipe(takeUntil(this.unsubscribe$)).subscribe(
      (value: INote[]) => {
        this.notes = value;
        console.log(this.notes);
        this.urlDate();
      }
    );
  }

  /**
   * Отображает заметки с датой, содержащейся в параметрах URL.
   */
  private urlDate(): void {
    if (this.dateParam) {
      const day = this.dateParam.substring(0, 2);
      const month = this.dateParam.substring(3, 5);
      const year = this.dateParam.substring(6, 10);
      this.notes = this.notes.filter(n =>
        n.noteDate.getDate() === +day && n.noteDate.getMonth() + 1 === +month && n.noteDate.getFullYear() === +year);
    }
  }

  private update(): void {
    this.notes$.subscribe(
      (value: INote[]) => {
        this.notes = value;
        this.urlDate();
      }
    );
  }

  private setIdInputs(): void {
    this.idInputs.filterEven = 'filter-even-' + this.sectionId;
    this.idInputs.filterUneven = 'filter-uneven-' + this.sectionId;
    this.idInputs.sortOld = 'sort-old-' + this.sectionId;
    this.idInputs.sortNew = 'sort-new-' + this.sectionId;
  }

  /**
   * Создает динамический компонент модального окна для секции.
   * Подписывается на события модального окна: его закрытие и редактирование секции.
   */
  public renameSection(): void {
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
      this.dataService.updateLocalStorage();
    });
  }

  /**
   * Передает родительскому компоненту id удаляемой секции.
   */
  public deleteSection(): void {
    this.outDeleteSection.emit(this.currSection.sectionId);
  }

  /**
   * Создает динамический компонент модального окна для заметки.
   * Подписывается на события модального окна: его закрытие и добавление заметки.
   */
  public addNote(): void {
    this.containerNote.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const n = this.containerNote.createComponent(modalFactoryNote);
    n.instance.sectionId = this.sectionId;
    n.instance.edit = false;
    n.instance.closeModal.subscribe(() => {
      this.containerNote.clear();
    });
    n.instance.submitForm.subscribe(() => {
      this.containerNote.clear();
      this.update();
    });
  }

  public removeNote(idNote: number): void {
    this.dataService.removeNote(this.sectionId, idNote);
    this.update();
  }

  public dropNotes(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    this.dataService.updateLocalStorage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
