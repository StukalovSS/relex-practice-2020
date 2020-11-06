import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalwindowsection',
  templateUrl: './modalwindowsection.component.html',
  styleUrls: ['./modalwindowsection.component.scss']
})
export class ModalwindowsectionComponent implements OnInit {

  @Output() output = new EventEmitter();
  @Input() nameSection;
  @Input() formStatus;
  form: FormGroup;
  private createForm(name: string): void{
    this.form = new FormGroup({
      name: new FormControl(name, Validators.required)
    });
  }

  ngOnInit(): void {
    this.createForm(this.nameSection);
  }

  clickOnFormStatus(form): void{
    this.output.emit(form);
  }

  closeForm(): void{
    this.output.emit(false);
  }

}
