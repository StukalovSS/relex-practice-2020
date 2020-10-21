import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faCogs, faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from './note.interface';
import { ISection } from '../container/section.interface';
import { SectionsDataService } from '../sections-data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, ISection {
  faCogs = faCogs;
  faPlus = faPlus;

  constructor(public data: SectionsDataService) {
  }

  @Input() header: string;
  @Input() notes: Map<number, INote>;
  @Input() id: number;

  @Output() onDelete = new EventEmitter<number>();

  ngOnInit(): void {
  }

  invisibleForm: boolean = true;
  invisibleDropAndDownMenu: boolean = true;
  invisibleChangeHeader: boolean = true;

  changeFormVisibillity(): void {
    this.invisibleForm = !this.invisibleForm;
  }

  changeDropAndDownMenuVisibillity() {
    this.invisibleDropAndDownMenu = !this.invisibleDropAndDownMenu;
  }

  addNote(): void {
    this.changeFormVisibillity();
  }

  delete() {
    this.onDelete.emit(this.id);
  }

  changeHead() {
    this.changeDropAndDownMenuVisibillity();
  }
}