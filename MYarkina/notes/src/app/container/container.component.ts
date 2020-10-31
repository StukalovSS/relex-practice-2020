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

export class ContainerComponent implements OnInit {
  
  array;
  faPlus = faPlus;
  constructor(private resolver: ComponentFactoryResolver,public dataService: DataService) {}

  ngOnInit(): void {
    this.update();
  }

  @ViewChild("modalWindowContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  openForm(idSection,formStatus){
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(ModalwindowsectionComponent);
    this.componentRef = this.container.createComponent(factory);
    if(idSection){
      this.componentRef.instance.nameSection = this.array[idSection].name;
    }
    this.componentRef.instance.formStatus = formStatus;
    this.componentRef.instance.output.subscribe(event => {
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
 
  update(){
    this.dataService.observable$.subscribe(
      (vl) => {
        this.array = vl
      })
  }
  
}
