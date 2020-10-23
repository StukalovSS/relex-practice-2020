import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ISection } from '../section/section.interface';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { INote } from '../note/note.interface';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  sectionForm: FormGroup;
  noteForm: FormGroup;
  faWindowClose = faWindowClose;
  isSectionForm: boolean;
  isSectionEdit: boolean;
  sectionId: number;
  section: ISection;
  title: string;
  private querySubscription: Subscription;
  constructor(
    private formBuilder: FormBuilder, private service: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        switch (queryParam['type']) {
          case 'section':
            this.sectionForm = formBuilder.group({
              "sectionHeader": ['Название секции', [Validators.required]],
              "sectionColor" : ['#add19a', [Validators.required]]
            });
            this.isSectionForm = true;
            this.title = "Создание секции"
            break;

          case 'note':
            this.isSectionForm = false;
            this.sectionId = queryParam['sectionId'];
            this.noteForm = formBuilder.group({
              "noteHeader": ['Введите название', [Validators.required]],
              "noteContent": ['Напишите текст заметки'],
            });
            this.title = "Создание заметки"
            break;
        }
      }
    );
  }
  closeModalWindow(): void {
    this.router.navigate(['/']);
  }
  addSection(): void {
    let section: ISection = {
      sectionTitle: this.sectionForm.value.sectionHeader,
      notes: [],
      id: 0,
      color : this.sectionForm.value.sectionColor
    }
    this.service.addSection(section);
    this.router.navigate(['/']);
  }
  addNewNote(): void {
    let fullDate = new Date();
    let note: INote = {
      noteHeader: this.noteForm.value.noteHeader,
      noteCreationDate: fullDate,
      noteContent: this.noteForm.value.noteContent,
      id: 0,
      sectionId: this.sectionId
    }
    this.service.addNoteBySectionId(this.sectionId, note);
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
