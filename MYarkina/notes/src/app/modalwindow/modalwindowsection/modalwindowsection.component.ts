import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalwindowsection',
  templateUrl: './modalwindowsection.component.html',
  styleUrls: ['./modalwindowsection.component.scss']
})
/**
 * Класс модальное окно для создания новой секции.
 */
export class ModalwindowsectionComponent implements OnInit {
  
  @Input() nameSection;
  @Input() formStatus;

  /**
   * Форма для создания новой секции.
   */
  form:FormGroup;
  private createForm(name:string) {
    this.form = new FormGroup({
      'name': new FormControl(name,Validators.required)
    })
  }

  ngOnInit(): void {
    this.createForm(this.nameSection);
  }

  /**
   * Родительскому компоненту передается информация о отредактированной или новой секции 
   */
  @Output() output = new EventEmitter();
  clickOnFormStatus(form){
    this.output.emit(form);
  }

  closeForm(){
    this.output.emit(false);
  }

}
