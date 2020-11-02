import { DatePipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INote } from '../../container/note.interface';

@Component({
  selector: 'app-modalwindownote',
  templateUrl: './modalwindownote.component.html',
  styleUrls: ['./modalwindownote.component.scss']
})
export class ModalwindownoteComponent implements OnInit{

  @Input() note:INote;
  myForm:FormGroup;
  private createForm(name,text) {
    var today = new DatePipe("en-US").transform(new Date(), "dd.MM.yyyy HH:mm");
    this.myForm = new FormGroup({
      'name': new FormControl(name,Validators.required),
      'text': new FormControl(text,Validators.required),
      'date': new FormControl(today,Validators.required)
    })
  }

  ngOnInit(): void {
    if(this.note){
      this.createForm(this.note.name,this.note.nodeTxt);
    }
    else{
      this.createForm("","");
    }
  }

  @Output() output = new EventEmitter();
  addNewNote(myForm){
    this.output.emit(myForm);
  }

  closeForm(){
    this.output.emit(false);
  }
  
}
