import { Component,ComponentFactoryResolver,ComponentRef,OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import '@angular/platform-browser-dynamic';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { ModalwindowsectionComponent } from '../modalwindow/modalwindowsection/modalwindowsection.component';
import { INote } from './note.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
/**
 * Класс контейнер, содержащий секции
 */
export class ContainerComponent implements OnInit {
  
  array;
  faPlus = faPlus;
  constructor(private resolver: ComponentFactoryResolver,public dataService: DataService) {}

  ngOnInit(): void {
    this.update();
  }

  /**
   * Метод, создающий динамический компонент - форму для добавления новой секции.
  */
  @ViewChild("modalWindowContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  openForm(idSection,formStatus){
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(ModalwindowsectionComponent);
    this.componentRef = this.container.createComponent(factory);
<<<<<<< HEAD
    if(idSection){
      this.componentRef.instance.nameSection = this.array[idSection].name;
=======
    if (idSection){
      this.componentRef.instance.nameSection = this.dataService.arrayOfSection[this.dataService.findSectionPosById(idSection)].name;
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
    }
    this.componentRef.instance.formStatus = formStatus;
    this.componentRef.instance.output.subscribe(event => {
      //если false - нажата кнопка закрытия формы
      if(event != false){
        if(idSection == null){
          this.dataService.addNewSection(event);
        }
        else{
          this.dataService.changeNameSection(idSection,event);
        }
      }
      this.componentRef.destroy();
    });
  }

  addNewNote(note:INote){
    this.dataService.addNewNote(note);
    this.update();
  }
 
  /**
   * Метод, реализующий подписку на данные с массивом секций.
   */
  update(){
    this.dataService.observable$.subscribe(
      (vl) => {
        this.array = vl
      })
  }
  
}
