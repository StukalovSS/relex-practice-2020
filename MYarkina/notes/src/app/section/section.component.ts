import { query } from '@angular/animations';
import { Component, Input, OnInit, Output , EventEmitter, ViewChild} from '@angular/core';
import { ViewContainerRef, ComponentFactoryResolver, ComponentRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faCogs, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, merge, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { INote } from '../container/note.interface';
import { ISection } from '../container/section.interface';
import { DataService } from '../data.service';
import { ModalwindownoteComponent } from '../modalwindow/modalwindownote/modalwindownote.component';
import '../_color.scss';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, ISection, AfterViewInit {

  @Input()id;
  @Input()name;
  arrayOfNotes: INote[];
  @Output() newNote = new EventEmitter<INote>();

  constructor(private resolver: ComponentFactoryResolver, public dataService: DataService, public routes: ActivatedRoute) {}

  color =  `$header-background-color`;
  faCogs = faCogs;

  flags = { filterEven: false, filterOdd: false, sortMinToMax: false};
  idOfElements = { idDropSort: '', idDropFiltr: '', idFilterOdd: '', idFilterEven: '', idSortRise: '', idSortLow: '', nameSort: ''};


  dataList$: Observable<INote[]>;
  filteringEven$: Observable<Event>;
  filteringOdd$: Observable<Event>;
  filteringSortRise$: Observable<Event>;
  filteringSortLow$: Observable<Event>;
  observable$: Observable<any>;

  date;
  @ViewChild('modalWindowContainer', { read: ViewContainerRef }) container;
  @Output() changeNameSection = new EventEmitter<number>();
  componentRef: ComponentRef<any>;
  ngOnInit(): void {
    this.dataList$ = this.dataService.getArrayOfNotes(this.id).pipe(
      map(value => {
        return this.dataService.filterNote(this.id, value, this.flags.filterOdd, this.flags.filterEven, this.flags.sortMinToMax);
      }
      )
    );
    this.update();
    this.setIdElements();

    this.routes.queryParams.subscribe(
      (queryParam: any) => {
        this.date = queryParam.date;
        this.urlFunc();
      }
    );
  }

  ngAfterViewInit(): void {
    (document.getElementById(`${this.idOfElements.idSortLow}`) as HTMLInputElement).checked = true;
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
    ).subscribe(
        (vl) => {
          this.arrayOfNotes = vl;
        }
    );
  }

  urlFunc(): void{
    if (this.date){
      for (let i = 0; i < this.arrayOfNotes.length; i++){
        if (this.arrayOfNotes[i].date.substr(0, 2) !== this.date){
          this.arrayOfNotes.splice(i, 1);
          i = -1;
        }
      }
    }
  }

  update(): void{
    this.dataList$.subscribe(
      (value) => {
        this.arrayOfNotes = value;
      }
    );
  }

  doDelete(idNote): void{
    this.dataService.deleteNote(this.dataService.findNotePosById(this.id, idNote), this.id);
    this.update();
  }



  openForm(idNote): void{
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ModalwindownoteComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.note = this.arrayOfNotes[idNote];
    this.componentRef.instance.output.subscribe(event => {
      if (event !== false){
        if (idNote == null){
          this.addNewNote(event);
        }
        else{
          this.editNote(idNote, event);
        }
      }
      this.componentRef.destroy();
    });
  }

  editNote(idNote, event): void{
    this.dataService.editNote(idNote, this.id, event);
    this.update();
  }

  addNewNote(form): void{
    const obj = {
      id: this.id,
      name: form.value.name,
      nodeTxt: form.value.text,
      date: form.value.date
    };
    this.newNote.emit(obj);
    this.update();
  }

  openMenu(id: string): void{
    if (document.getElementById(id).style.display === 'block'){
      document.getElementById(id).style.display = 'none';
    }
    else{
      document.getElementById(id).style.display = 'block';
    }
  }


  changeName(): void{
    this.changeNameSection.emit(this.id);
    this.openMenu(this.id);
  }

  setIdElements(): void{
    this.idOfElements.idDropSort = 'menusort' + this.id;
    this.idOfElements.idDropFiltr = 'menufilter' + this.id;
    this.idOfElements.idFilterOdd = 'filter' + this.id;
    this.idOfElements.idFilterEven = 'even' + this.id;
    this.idOfElements.idSortLow = 'low' + this.id;
    this.idOfElements.idSortRise = 'rise' + this.id;
    this.idOfElements.nameSort = 'nameSort' + this.id;
  }

}
