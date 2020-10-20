import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ISection } from '../container/section.interface';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit,ISection {
  
  isDisplayed = true;

  @Input()arrayOfNotes;
  @Input()name;
  @Input()id;

  faCogs = faCogs;
  faEllipsisV = faEllipsisV;


  constructor() {
    this.createForm();
  }

  myForm:FormGroup;
  private createForm() {
    var today: string | null = new DatePipe("en-US").transform(new Date(), "dd.MM.yyyy");
    this.myForm = new FormGroup({
      name: new FormControl("",Validators.required),
      text: new FormControl("",Validators.required),

      date: new FormControl(today,Validators.required)
    })
  }

  ngOnInit(): void {
  }

  @Output() deleteNote = new EventEmitter<any>();
  doDelete(e){
    this.deleteNote.emit(e);
  }

  openForm(){
    if(this.isDisplayed)
    {
        this.isDisplayed = false;
    }else{
        this.isDisplayed = true;
    }
  }

  @Output() newNote = new EventEmitter<any>();
  addNewNote(form){
    let obj = {
      id:this.id,
      name:form.value.name,
      nodeTxt:form.value.text,
      date:form.value.date
    }
    this.newNote.emit(obj);
    this.openForm();
  }
  
}
