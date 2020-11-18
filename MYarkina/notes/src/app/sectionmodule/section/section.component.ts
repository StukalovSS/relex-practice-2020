<<<<<<< HEAD
import { Component, Input, OnInit, Output ,EventEmitter, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterViewInit } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
=======
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output , EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
<<<<<<< HEAD
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
=======
import { TranslateService } from '@ngx-translate/core';
>>>>>>> Добавлена возможность выбора языка - русский, английский
import { fromEvent, merge, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { INote } from '../container/note.interface';
import { ISection } from '../container/section.interface';
import { DataService } from '../data.service';
import { ModalwindownoteComponent } from '../modalwindow/modalwindownote/modalwindownote.component';
import '../_color.scss';
=======
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { INote } from '../../container/note.interface';
import { ISection } from '../../container/section.interface';
import { DataService } from '../../data.service';
import { ModalwindownoteComponent } from '../../modalwindow/modalwindownote/modalwindownote.component';
import '../../_color.scss';
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
/**
<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
 * Класс секций 
 */
export class SectionComponent implements OnInit,ISection,AfterViewInit {

  @Input()id;
  @Input()name;
  arrayOfNotes:INote[];

<<<<<<< HEAD
  constructor(private resolver: ComponentFactoryResolver,public dataService:DataService) {}
=======
  constructor(private resolver: ComponentFactoryResolver, public dataService: DataService, public routes: ActivatedRoute )
  {}
>>>>>>> Добавлена возможность выбора языка - русский, английский

  color =  `$header-background-color`;
  faCogs = faCogs;
  faEllipsisV = faEllipsisV;

=======
 * Класс секция.
 * Содержит информаицю об одной секции
 * Реализует добавление, удаление, редактирование заметки в секцию
 */
export class SectionComponent implements OnInit, ISection, AfterViewInit, OnDestroy {

  arrayOfNotes: INote[];
  date: string;
  color =  `$header-background-color`;
  icons = [ faCogs ];
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
  flags = { filterEven: false, filterOdd: false, sortMinToMax: false};
<<<<<<< HEAD
  idOfElements = { idDropSort: '', idDropFiltr: '', idFilterOdd: '', idFilterEven: '', idSortRise: '', idSortLow: '', nameSort: ''};
 
 
  dataList$:Observable<INote[]>;
  filteringEven$:Observable<Event>;
  filteringOdd$:Observable<Event>;
  filteringSortRise$:Observable<Event>;
  filteringSortLow$:Observable<Event>;
  observable$:Observable<any>;
=======
  idOfElements = { idDrop: '',  idDropSort: '', idDropFiltr: '', idFilterOdd: '', idFilterEven: '', idSortRise: '', idSortLow: '', nameSort: ''};
>>>>>>> Добавлены тесты для добавления новой секции и добавления новой заметки

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
=======
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
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts

  ngOnInit(): void {
    this.dataList$ = this.dataService.getArrayOfNotes(this.id).pipe(
      map(value => {
        return this.dataService.filterNote(this.id,value, this.flags.filterOdd, this.flags.filterEven,this.flags.sortMinToMax)}
      )
    );
    this.update();
    this.setIdElements();
<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
  }

  ngAfterViewInit(): void {
    (<HTMLInputElement>document.getElementById(`${this.idOfElements.idSortLow}`)).checked = true;
    
    //Подписка на действия с фильтрации и сортировки заметок
    this.filteringEven$ = fromEvent(document.getElementById(`${this.idOfElements.idFilterEven}`),'click').pipe(tap(() => this.flags.filterEven = !this.flags.filterEven));
    this.filteringOdd$ = fromEvent(document.getElementById(`${this.idOfElements.idFilterOdd}`),'click').pipe(tap(() => this.flags.filterOdd = !this.flags.filterOdd));
    this.filteringSortRise$ = fromEvent(document.getElementById(`${this.idOfElements.idSortRise}`),'click').pipe(tap(() => { this.flags.sortMinToMax = true }));
    this.filteringSortLow$ = fromEvent(document.getElementById(`${this.idOfElements.idSortLow}`),'click').pipe(tap(() => { this.flags.sortMinToMax = false }));
    
=======

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

>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
    this.observable$ = merge(
      this.filteringEven$,
      this.filteringOdd$,
      this.filteringSortRise$,
      this.filteringSortLow$
    );

    this.observable$.pipe(
      switchMap(
        () => {
          return this.dataList$
        }
      )
    ).pipe(takeUntil(this.unsubscribe$)).subscribe(
        (vl) => {
          this.arrayOfNotes = vl
        }
    );
  }

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
<<<<<<< HEAD
  /**
   * Метод, реализующий подписку на данные с массивом заметок.
   */
  update(){
=======
=======
  ngOnDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts

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

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
  update(): void{
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
    this.dataList$.subscribe(
=======
  /**
   * Обновляет информацию о массиве заметок.
   */
  private update(): void{
    this.dataList$.pipe(takeUntil(this.unsubscribe$)).subscribe(
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
      (value) => {
        this.arrayOfNotes = value;
      }
    )
  }

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
  doDelete(idNote){
    this.dataService.deleteNote(this.dataService.findNotePosById(this.id,idNote),this.id);
=======
  /**
   * Реализует удаление заметки.
   * @param idNote id заметки, которую необходимо удалить
   */
  public doDelete(idNote): void{
    this.dataService.deleteNote(this.dataService.findNotePosById(this.id, idNote), this.id);
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
    this.update();
  }

  /**
<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
   * Метод, создающий динамический компонент - форму для добавления новой заметки.
   */
  @ViewChild("modalWindowContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  openForm(idNote){
    this.container.clear(); 
=======
   * Реализует добавление динамического компонента для добавления или редактирования заметки.
   * @param idNote id заметки, которую необходимо редактировать. Если необходимо добавить новую заметку, данный параметр равен null
   */
  public openForm(idNote): void{
    this.container.clear();
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
    const factory = this.resolver.resolveComponentFactory(ModalwindownoteComponent);
    this.componentRef = this.container.createComponent(factory);
    const sec = this.dataService.arrayOfSection[this.dataService.findSectionPosById(this.id)];
    this.componentRef.instance.note = sec.arrayOfNotes[this.dataService.findNotePosById(this.id, idNote)];
    this.componentRef.instance.output.subscribe(event => {
<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
      if(event != false){
        if(idNote == null){
          this.addNewNote(event);
        }
        else{
          this.editNote(idNote,event);
        }  
=======
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
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
      }
      this.update();
      this.componentRef.destroy();
    });
  }

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
  editNote(idNote,event){
    this.dataService.editNote(idNote,this.id,event);
    this.update();
  }

  @Output() newNote = new EventEmitter<INote>();
  addNewNote(form){
    let obj = {
      id: this.id,
      name: form.value.name,
      nodeTxt: form.value.text,
      date: form.value.date
    }
    this.newNote.emit(obj);
    this.update();
  }
<<<<<<< HEAD
  
  /**
   * Метод, открывающий меню сортировки или фильтрации по переданному id.
   */
  openMenu(id:string){
    if(document.getElementById(id).style.display == "block"){
      document.getElementById(id).style.display = "none"
    }
    else{
      document.getElementById(id).style.display = "block";
=======

  openMenu(id: string): void{
=======
  /**
   * Открывает скрытые меню страницы.
   * @param id id меню, которое необходимо откыть
   */
  public openMenu(id: string): void{
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
    if (document.getElementById(id).style.display === 'block'){
      document.getElementById(id).style.display = 'none';
    }
    else{
<<<<<<< HEAD
      document.getElementById(this.idOfElements.idDrop).style.display = 'block';
>>>>>>> Добавлены тесты для добавления новой секции и добавления новой заметки
=======
      document.getElementById(id).style.display = 'block';
>>>>>>> Добавлены тесты для сортировки и фильтрации заметок
    }
  }

<<<<<<< HEAD:MYarkina/notes/src/app/section/section.component.ts
  @Output() changeNameSection = new EventEmitter<number>();
  changeName(){
=======
  /**
   * Изменяет название секции.
   */
  public changeName(): void{
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы:MYarkina/notes/src/app/sectionmodule/section/section.component.ts
    this.changeNameSection.emit(this.id);
    this.openMenu(this.id);
<<<<<<< HEAD
  } 
  
  /**
   * Метод, создающий уникальные id для элементов разметки.
   */
  setIdElements(){
    this.idOfElements.idDropSort = "menusort" + this.id;
    this.idOfElements.idDropFiltr = "menufilter" + this.id;
    this.idOfElements.idFilterOdd = "filter" + this.id;
    this.idOfElements.idFilterEven = "even" + this.id;
    this.idOfElements.idSortLow = "low" + this.id;
    this.idOfElements.idSortRise ="rise" + this.id;
    this.idOfElements.nameSort = "nameSort" + this.id;
=======
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
>>>>>>> Добавлены тесты для добавления новой секции и добавления новой заметки
  }

}
