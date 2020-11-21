import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalwindowsection',
  templateUrl: './modalwindowsection.component.html',
  styleUrls: ['./modalwindowsection.component.scss']
})
/**
 * Класс модальное окно добавления и редактирования секции.
 * Содержит форму для добавления или редактирования секции
 */
export class ModalwindowsectionComponent implements OnInit {

  form: FormGroup;

  @Input() nameSection;
  @Input() formStatus;

  @Output() output = new EventEmitter();

  /**
   * Создание формы для добавления или редактирования секции
   * @param name текущее имя секции. Если секция новая - null
   */
  private createForm(name: string): void{
    this.form = new FormGroup({
      name: new FormControl(name, Validators.required)
    });
  }

  ngOnInit(): void {
    this.createForm(this.nameSection);
  }

  /**
   * Реализует передачу новой секции родителю.
   * @param form форма, содержащая информаицю о добавляемой секции.
   */
  public clickOnFormStatus(form): void{
    this.output.emit(form);
  }

  /**
   * Закрывает окно.
   */
  public closeForm(): void{
    this.output.emit(false);
  }

}
