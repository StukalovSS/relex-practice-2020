import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import '@angular/platform-browser-dynamic';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { ModalwindowsectionComponent } from '../modalwindow/modalwindowsection/modalwindowsection.component';
import { INote } from './note.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {

  array;
  faPlus = faPlus;
  faEllipsisV = faEllipsisV;

  @ViewChild('modalWindowContainer', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  constructor(private resolver: ComponentFactoryResolver, public dataService: DataService) {}

  ngOnInit(): void {
    this.update();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
    this.dataService.updateLocalStorage();
  }

  openForm(idSection, formStatus): void{
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(ModalwindowsectionComponent);
    this.componentRef = this.container.createComponent(factory);
    if (idSection){
      this.componentRef.instance.nameSection = this.array[idSection].name;
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

  addNewNote(note: INote): void{
    this.dataService.addNewNote(note);
    this.update();
  }

  update(): void{
    this.dataService.observable$.subscribe(
      (vl) => {
        this.array = vl;
      });
  }

}
