import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ISection } from './section.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  faPlus = faPlus;
  faTimesCircle = faTimesCircle;
  invisible: boolean = true;

  sectionHeaderInput: FormGroup;
  sections: ISection[] = [];
  section1: ISection = {
    header : 'Section1',
    notes : [{
      header : 'Note 1',
      content : 'This is first note',
      date : null,
      id : 0
    }],
    id: 0
  }

  constructor(fb: FormBuilder) { 
    this.sectionHeaderInput = fb.group({
      sectionHeader: new FormControl('', Validators.required )
    });
    this.sections.push(this.section1);
  }

  ngOnInit(): void {
  }

  addSection(): void {
    this.sections.push({
      'header': this.sectionHeaderInput.value.sectionHeader,
      notes: [],
      id: this.sections[this.sections.length - 1] ? this.sections[this.sections.length - 1].id + 1 : 0
    });
    this.changeVisibillity();
  }

  changeVisibillity(): void {
    this.invisible = !this.invisible;
  }

  removeSection(id: number) {
    this.sections = this.sections.filter( s => s.id !== id );
  }
}
