import { Component, Input, OnInit, Output ,EventEmitter, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ɵComponentFactory, ComponentRef } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ISection } from '../container/section.interface';
import { ModalwindownoteComponent } from '../modalwindownote/modalwindownote.component';
import '../_color.scss';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit,ISection {

  @ViewChild("modalWindowContainer", { read: ViewContainerRef }) container;
  color =  `$header-background-color`;

  @Input()arrayOfNotes;
  @Input()name;
  @Input()id;
  idDropSort;
  idDropFiltr;
  faCogs = faCogs;
  faEllipsisV = faEllipsisV;

  componentRef: ComponentRef<any>;
  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.idDropSort = "i"+this.id;
    this.idDropFiltr = "q"+this.id;
  }

  @Output() deleteNote = new EventEmitter<any>();
  doDelete(e){
    this.deleteNote.emit(e);
  }

 
  openForm(){
    this.container.clear(); 
    const factory = this.resolver.resolveComponentFactory(ModalwindownoteComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.output.subscribe(event => this.addNewNote(event));
  }


  @Output() newNote = new EventEmitter<any>();
  addNewNote(form){
    if(form !=false){
      let obj = {
        id: this.id,
        name: form.value.name,
        nodeTxt: form.value.text,
        date: form.value.date
      }
      this.newNote.emit(obj);
    }
    this.componentRef.destroy();
  }
  
  openMenu(id:string){
    if(document.getElementById(id).style.display == "block"){
      document.getElementById(id).style.display = "none"
    }
    else{
      document.getElementById(id).style.display = "block";
    }
  }

  @Output() delSection = new EventEmitter<any>();
  deleteSection(){
    this.delSection.emit(this.id);
  }

  @Output() changeNameSection = new EventEmitter<number>();
  changeName(){
    this.changeNameSection.emit(this.id);
    this.openMenu(this.id);
  }

}
