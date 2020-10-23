import { DatePipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalwindownote',
  templateUrl: './modalwindownote.component.html',
  styleUrls: ['./modalwindownote.component.scss']
})
export class ModalwindownoteComponent implements OnInit {

  myForm:FormGroup;
  private createForm() {
    var today = new DatePipe("en-US").transform(new Date(), "dd.MM.yyyy, HH:mm");
    this.myForm = new FormGroup({
      name: new FormControl("",Validators.required),
      text: new FormControl("",Validators.required),
      date: new FormControl(today,Validators.required)
    })
  }

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  @Output() output = new EventEmitter();
  addNewNote(myForm){
    this.output.emit(myForm);
  }

  closeForm(){
    this.output.emit(false);
  }
  
}
