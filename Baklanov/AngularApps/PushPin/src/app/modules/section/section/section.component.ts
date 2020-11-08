<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit,Input } from '@angular/core';
>>>>>>> dbb78adf25eb45e79ccfd2df221bf06842197d0a
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../../services/data.service';
import { ISection } from './section.interface';
<<<<<<< HEAD
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
=======
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router } from '@angular/router';
>>>>>>> dbb78adf25eb45e79ccfd2df221bf06842197d0a
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
/**
 * Класс для компонента секции
 */
export class SectionComponent implements OnInit {
<<<<<<< HEAD
  @Input() sectionId: number;
=======
  @Input () sectionId: number;
>>>>>>> dbb78adf25eb45e79ccfd2df221bf06842197d0a
  faEllipsisV = faEllipsisV;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCogs = faCogs;
  faPlus = faPlus;
  section: ISection;
  isVisible = false;
  sectionForm: FormGroup;
  constructor(private service: DataService, private formBuilder: FormBuilder, private router: Router) {}
  addNewNote(): void {
    this.isVisible = false;
    this.router.navigate(['modal-note'],
      {
        queryParams: {
          sectionId: this.section.id
        }
      });
  }
  editSection(): void {
    this.section.sectionTitle = this.sectionForm.value.sectionHeader;
    this.section.color = this.sectionForm.value.sectionColor;
    this.service.editSection(this.section.id, this.section);
  }
  deleteSection(): void {
    this.service.deleteSectionById(this.section.id);
    this.section = this.service.getSectionById(this.section.id);
  }
  notesFilter(event, type: string): void {
    this.section.filtrationType = 'none';
    if (!event.target.checked) {
      this.router.navigate([], {
        queryParams: {
          'filterType': this.section.filtrationType
        }
      })
      this.section = this.service.notesFiltration(this.section);
    }
    else {
      this.router.navigate([], {
        queryParams: {
          filterType : "type"
        }
      });
      this.section.filtrationType = type;
      this.section = this.service.notesFiltration(this.section);
    }
  }
  notesSorting(earlier: boolean): void {
    this.section = this.service.notesSorting(this.section, earlier);
  }
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.section.notes, event.previousIndex, event.currentIndex);
    this.service.saveStateOfAppInLocalSt();
  }
  ngOnInit(): void {
    this.section = this.service.getSectionById(this.sectionId);
<<<<<<< HEAD
=======
    console.log(this.sectionId);
>>>>>>> dbb78adf25eb45e79ccfd2df221bf06842197d0a
    this.sectionForm = this.formBuilder.group({
      sectionHeader: [null, [Validators.required]],
      sectionColor: ['#add19a', [Validators.required]]
    });
  }

}
