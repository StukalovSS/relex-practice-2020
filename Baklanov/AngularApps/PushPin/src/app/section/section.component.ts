import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../services/data.service';
import { ISection } from './section.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faCogs = faCogs;
  faPlus = faPlus;
  section: ISection;
  noteForm: FormGroup;
  isVisible: boolean = false;
  sectionForm: FormGroup;
  color : string = "#9786bd";
  constructor(private service: DataService, private formBuilder: FormBuilder, private router: Router) {
  }
  addNewNote(): void {
    this.isVisible = false;
    this.router.navigate(['modal'],
      {
        queryParams: {
          'type': 'note',
          'sectionId': this.section.id
        }
      });
  }
  openSectionMenu(): void {
    this.sectionForm = this.formBuilder.group({
      "sectionHeader": [this.section.sectionTitle, [Validators.required]],
      "sectionColor" : [this.section.color,[Validators.required]]
    });
    if (this.isVisible) {
      this.isVisible = false;
    }
    else {
      this.isVisible = true;
    }
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
  ngOnInit(): void {
    this.section = this.service.getLastSection();
  }

}
