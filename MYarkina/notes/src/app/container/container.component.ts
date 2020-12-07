import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import '@angular/platform-browser-dynamic';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
import { ModalwindowsectionComponent } from '../modalwindow/modalwindowsection/modalwindowsection.component';
import { INote } from './note.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
/**
 * Класс главный контейнер приложения.
 */
export class ContainerComponent implements OnInit, OnDestroy {

  array;
  icon = [ faPlus, faEllipsisV ];
  unsubscribe$ = new Subject<void>();

  @ViewChild('modalWindowContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, public dataService: DataService) {}

  ngOnInit(): void {
    this.update();
  }

  ngOnDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /**
   * Реализует перетаскивание секций.
   * @param event событие перетаскивания секции
   */
  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
    this.dataService.updateLocalStorage();
  }

  /**
   * Реализует добавление динамического компонента для добавления или редактирования секции.
   * @param idSection id секции, которую необходимо редактировать. Если необходимо добавить новую секцию, данный параметр равен null
   * @param formStatus задает значение кнопки в динамическом компоненте
   */
  public openForm(idSection, formStatus): void{
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ModalwindowsectionComponent);
    this.componentRef = this.container.createComponent(factory);
    if (idSection){
      this.componentRef.instance.nameSection = this.dataService.arrayOfSection[this.dataService.findSectionPosById(idSection)].name;
    }
    this.componentRef.instance.formStatus = formStatus;
    this.componentRef.instance.output.subscribe(event => {
      if (event !== false){
        if (idSection == null){
          this.dataService.addNewSection(event);
        }
        else{
          this.dataService.changeNameSection(idSection, event);
        }
      }
      this.componentRef.destroy();
    });
  }

  /**
   * Реализует добавление новой заметки.
   * @param note новая заметка
   */
  public addNewNote(note: INote): void{
    this.dataService.addNewNote(note);
    this.update();
  }

  /**
   * Обновление данных.
   */
  private update(): void{
    this.dataService.observable$.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (vl) => {
        this.array = vl;
      });
  }

}
