import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../shared/services/data.service';


/**
 * Компонент модального окна секции.
 * Используется для редактирования и добавления секций.
 */
@Component({
  selector: 'app-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.scss']
})
export class ModalSectionComponent implements OnInit {

  public readonly icons = {
    close: faTimes
  };

  public idSection: number;
  public rename: boolean;
  public currTitle: string;
  public form: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private translate: TranslateService
             )
    {
      this.form = formBuilder.group({
        sectionTitle: new FormControl('', Validators.required)
      });
  }

  ngOnInit(): void {
    if (this.rename) {
      this.form.patchValue({ sectionTitle: this.currTitle });
    }
  }

  /**
   * Обрабатывает событие отправки формы в зависимости от добавления или редактирования секции.
   */
  public onSection(): void {
    if (!this.rename) {
      this.dataService.addSection(this.form.value.sectionTitle);
    }
    else {
      this.dataService.getSection(this.idSection).sectionTitle = this.form.value.sectionTitle;
    }
    this.submitForm.emit();
  }
}
