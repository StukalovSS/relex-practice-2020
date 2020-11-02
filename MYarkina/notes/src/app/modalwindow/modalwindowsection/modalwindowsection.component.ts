import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalwindowsection',
  templateUrl: './modalwindowsection.component.html',
  styleUrls: ['./modalwindowsection.component.scss']
})
export class ModalwindowsectionComponent implements OnInit {
  
  @Input() nameSection;
  @Input() formStatus;
  form:FormGroup;
  private createForm(name:string) {
    this.form = new FormGroup({
      'name': new FormControl(name,Validators.required)
    })
  }

  ngOnInit(): void {
    this.createForm(this.nameSection);
  }

  @Output() output = new EventEmitter();
  clickOnFormStatus(form){
    this.output.emit(form);
  }

  closeForm(){
    this.output.emit(false);
  }

}
