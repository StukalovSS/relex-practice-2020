import { Component, Input, OnInit, Output, EventEmitter, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { title } from 'process';
import { INote } from '../note/inote';
import { DataService } from '../data.service';
import { ISection } from './isection';

import { ModalSectionComponent } from '../modal-section/modal-section.component';
import { ModalNoteComponent } from '../modal-note/modal-note.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  iconProperty = faEllipsisV;
  iconCogs = faCogs;
  iconPlus = faPlus;

  @Input() sectionId: number;
  currSection: ISection;
  notes: INote[];
  idNote: number = 0;

  color: string = "#9786bd";

  @ViewChild("modalForSection", { read: ViewContainerRef }) containerSection;
  @ViewChild("modalForNote", { read: ViewContainerRef }) containerNote;

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver) {
  }

  renameSection() {
    this.containerSection.clear();
    const modalFactorySection = this.resolver.resolveComponentFactory(ModalSectionComponent);
    const s = this.containerSection.createComponent(modalFactorySection);

    s.instance.idSection = this.sectionId;
    s.instance.rename = true;
    s.instance.currTitle = this.currSection.sectionTitle;
    s.instance.close.subscribe(() => {
      this.containerSection.clear();
    });
    s.instance.submit.subscribe(() => {
      this.containerSection.clear();
    });
  }

  @Output() onRemoveSection = new EventEmitter<number>();
  removeSection() {
    this.onRemoveSection.emit(this.currSection.sectionId);
  }

  addNote() {
    this.containerNote.clear();
    const modalFactoryNote = this.resolver.resolveComponentFactory(ModalNoteComponent);
    const n = this.containerNote.createComponent(modalFactoryNote);

    n.instance.sectionId = this.sectionId;
    n.instance.noteId = this.idNote++;
    n.instance.edit = false;

    n.instance.close.subscribe(() => {
      this.containerNote.clear();
    });
    n.instance.submit.subscribe(() => {
      this.containerNote.clear();
    });
  }

  removeNote(idNote: number) {
    this.dataService.removeNote(this.sectionId, idNote);
  }

  sort(e: any) {
    this.notes = this.dataService.sortNotes(this.notes);
    if(e.currentTarget.value == "new") {
      this.notes.reverse();
    }
  }

  even: boolean = false;
  uneven: boolean = false;
  filter(evt: any) {
    if (evt.currentTarget.name == "date-even") {
      this.even = !this.even;
    }
    if (evt.currentTarget.name == "date-uneven") {
      this.uneven = !this.uneven;
    }

    if (this.even && !this.uneven) {
      this.notes = this.dataService.getEvenNotes(this.currSection, true);
    }
    else if (!this.even && this.uneven) {
      this.notes = this.dataService.getEvenNotes(this.currSection, false);
    }
    else {
      this.notes = this.dataService.getSection(this.sectionId).notes;
    }
  }

  ngOnInit(): void {
    this.currSection = this.dataService.getSection(this.sectionId);
    this.notes = this.dataService.getSection(this.sectionId).notes;
  }

}
