import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output , EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { INote } from '../../container/note.interface';
import { ISection } from '../../container/section.interface';
import { DataService } from '../../data.service';
import { ModalwindownoteComponent } from '../../modalwindow/modalwindownote/modalwindownote.component';
import '../../_color.scss';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
/**
 * Класс секция.
 * Содержит информаицю об одной секции
 * Реализует добавление, удаление, редактирование заметки в секцию
 */
export class SectionComponent implements OnInit, ISection, AfterViewInit, OnDestroy {

  arrayOfNotes: INote[];
  date: string;
  color =  `$header-background-color`;
  icons = [ faCogs ];
  flags = { filterEven: false, filterOdd: false, sortMinToMax: false};
  idOfElements = { idDrop: '',  idDropSort: '', idDropFiltr: '', idFilterOdd: '', idFilterEven: '', idSortRise: '', idSortLow: '', nameSort: ''};

  dataList$: Observable<INote[]>;
  filteringEven$: Observable<Event>;
  filteringOdd$: Observable<Event>;
  filteringSortRise$: Observable<Event>;
  filteringSortLow$: Observable<Event>;
  observable$: Observable<any>;
  unsubscribe$ = new Subject<void>();

  @Input()id;
  @Input()name;

  @Output() newNote = new EventEmitter<INote>();
  @Output() changeNameSection = new EventEmitter<number>();

  @ViewChild('modalWindowContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, public dataService: DataService, public routes: ActivatedRoute )
  {}

  ngOnInit(): void {
    this.dataList$ = this.dataService.getArrayOfNotes(this.id).pipe(
      map(value => {
        return this.dataService.filterNote(this.id, value, this.flags.filterOdd, this.flags.filterEven, this.flags.sortMinToMax);
      }
      )
    );
    this.update();
    this.setIdElements();

    this.routes.queryParams.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (queryParam: any) => {
        this.date = queryParam.date;
        this.urlFunc();
      }
    );
  }

  ngAfterViewInit(): void {
    (document.getElementById(`${this.idOfElements.idSortLow}`) as HTMLInputElement).checked = true;
    // Получение событий клика на кнопкки фильтрации и сортировки
    this.filteringEven$ = fromEvent(document.getElementById(`${this.idOfElements.idFilterEven}`), 'click')
    .pipe(tap(() => this.flags.filterEven = !this.flags.filterEven));
    this.filteringOdd$ = fromEvent(document.getElementById(`${this.idOfElements.idFilterOdd}`), 'click')
    .pipe(tap(() => this.flags.filterOdd = !this.flags.filterOdd));
    this.filteringSortRise$ = fromEvent(document.getElementById(`${this.idOfElements.idSortRise}`), 'click')
    .pipe(tap(() => { this.flags.sortMinToMax = true; }));
    this.filteringSortLow$ = fromEvent(document.getElementById(`${this.idOfElements.idSortLow}`), 'click')
    .pipe(tap(() => { this.flags.sortMinToMax = false; }));

    this.observable$ = merge(
      this.filteringEven$,
      this.filteringOdd$,
      this.filteringSortRise$,
      this.filteringSortLow$
    );

    this.observable$.pipe(
      switchMap(
        () => {
          return this.dataList$;
        }
      )
    ).pipe(takeUntil(this.unsubscribe$)).subscribe(
        (vl) => {
          this.arrayOfNotes = vl;
        }
    );
  }

  ngOnDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Реализует перетаскивание заметок.
   * @param event событие перетаскивания заметки
   */
  public drop(event: CdkDragDrop<string[]>): void {
    const sec = this.dataService.arrayOfSection[this.dataService.findSectionPosById(this.id)];
    moveItemInArray(this.arrayOfNotes, event.previousIndex, event.currentIndex);
    sec.arrayOfNotes = this.arrayOfNotes;
    this.dataService.updateLocalStorage();
  }

  /**
   * Реализует сортировку по url.
   */
  private urlFunc(): void{
    if (this.date){
      for (let i = 0; i < this.arrayOfNotes.length; i++){
        if (this.arrayOfNotes[i].date.substr(0, 2) !== this.date){
          this.arrayOfNotes.splice(i, 1);
          i = -1;
        }
      }
    }
  }

  /**
   * Обновляет информацию о массиве заметок.
   */
  private update(): void{
    this.dataList$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (value) => {
        this.arrayOfNotes = value;
      }
    );
  }

  /**
   * Реализует удаление заметки.
   * @param idNote id заметки, которую необходимо удалить
   */
  public doDelete(idNote): void{
    this.dataService.deleteNote(this.dataService.findNotePosById(this.id, idNote), this.id);
    this.update();
  }

  /**
   * Реализует добавление динамического компонента для добавления или редактирования заметки.
   * @param idNote id заметки, которую необходимо редактировать. Если необходимо добавить новую заметку, данный параметр равен null
   */
  public openForm(idNote): void{
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ModalwindownoteComponent);
    this.componentRef = this.container.createComponent(factory);
    const sec = this.dataService.arrayOfSection[this.dataService.findSectionPosById(this.id)];
    this.componentRef.instance.note = sec.arrayOfNotes[this.dataService.findNotePosById(this.id, idNote)];
    this.componentRef.instance.output.subscribe(event => {
      if (event !== false){
        if (idNote == null){
          const obj = {
            id: this.id,
            name: event.value.name,
            nodeTxt: event.value.text,
            date: event.value.date
          };
          this.newNote.emit(obj);
        }
        else{
          this.dataService.editNote(idNote, this.id, event);
        }
      }
      this.update();
      this.componentRef.destroy();
    });
  }

  /**
   * Открывает скрытые меню страницы.
   * @param id id меню, которое необходимо откыть
   */
  public openMenu(id: string): void{
    if (document.getElementById(id).style.display === 'block'){
      document.getElementById(id).style.display = 'none';
    }
    else{
      document.getElementById(id).style.display = 'block';
    }
  }

  /**
   * Изменяет название секции.
   */
  public changeName(): void{
    this.changeNameSection.emit(this.id);
    this.openMenu(this.id);
  }

  /**
   * Метод назначения уникальных id элементам разметки.
   */
  private setIdElements(): void{
    this.idOfElements.idDrop = 'drop' + this.id;
    this.idOfElements.idDropSort = 'menusort' + this.id;
    this.idOfElements.idDropFiltr = 'menufilter' + this.id;
    this.idOfElements.idFilterOdd = 'filter' + this.id;
    this.idOfElements.idFilterEven = 'even' + this.id;
    this.idOfElements.idSortLow = 'low' + this.id;
    this.idOfElements.idSortRise = 'rise' + this.id;
    this.idOfElements.nameSort = 'nameSort' + this.id;
  }

}
