import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-section.component.html',
  styleUrls: ['../modal.scss']
})
/**
 * Класс компонента модального окна для секции.
 */
export class ModalSectionComponent implements OnInit {
  iconClose = faTimes;
  idSection: number;
  rename: boolean;
  currTitle: string;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.form = formBuilder.group({
      "sectionTitle": new FormControl("", Validators.required)
    })
  }
  
  /**
    * Метод отправки формы в случае добавления секции и её редактирования.
    */
  onSection() {
    if (!this.rename) {
      this.dataService.addSection({
        sectionId: this.idSection,
        sectionTitle: this.form.value.sectionTitle,
        notes: []
      });
    }
    else {
      this.dataService.getSection(this.idSection).sectionTitle = this.form.value.sectionTitle;
    }
    this.submit.emit();
  }

  ngOnInit(): void {
    if (this.rename) {
      this.form.patchValue({
        "sectionTitle": this.currTitle
      })
    }
  }
}
