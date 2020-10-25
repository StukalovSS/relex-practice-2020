import { Injectable } from '@angular/core';
import { INote } from '../note/note.interface';
import { ISection } from '../section/section.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sections: ISection[] = [];
  private sectionId: number = 0;
  private noteId: number = 0;
  private currentSection: number;
  private ShellSort(A : INote[]) : INote[]{
    let n = A.length, i = Math.floor(n / 2);
    while (i > 0) {
      for (let j = 0; j < n; j++) {
        let k = j, t = A[j].noteCreationDate.getDay();
        while (k >= i && A[k - i].noteCreationDate.getDay() > t) {
          A[k].noteCreationDate.setDate(A[k - i].noteCreationDate.getDay());
        }
        A[k].noteCreationDate.setDate(t);
      }
      i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return A;
  }
  getData(): ISection[] {
    return this.sections;
  }
  addSection(section: ISection) {
    section.id = this.sectionId++;
    this.sections.push(section);
    // this.currentSection = (this.sections.length - 1);
  }
  getLastSection(): ISection {
    return this.sections[this.sections.length - 1];
  }
  getNote(sectionId: number, noteId: number): INote {
    let section: ISection = this.getSectionById(sectionId);
    return section.notes.find(note => note.id == noteId);

  }
  addNoteBySectionId(id: number, note: INote) {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id == id) {
        // this.currentSection = i;
        note.id = this.noteId++;
        this.sections[i].notes.push(note);
      }
    }
  }
  getSectionById(id: number): ISection {
    return this.sections.find(section => section.id == id);
  }
  deleteNote(sectionId: number, noteId: number): void {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id == sectionId) {
        for (let j = 0; j < this.sections[i].notes.length; j++) {
          if (this.sections[i].notes[j].id == noteId) {
            this.sections[i].notes.splice(j, 1);
          }
        }
      }
    }
  }
  deleteSectionById(sectionId: number): void {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id == sectionId) {
        this.sections.splice(i, 1);
        // this.currentSection = i - 1;
      }
    }
  }
  editSection(id: number, section: ISection) {
    let index = this.sections.findIndex(section => section.id == id)
    this.sections[index] = section;
  }
  notesFiltration(section: ISection): ISection {
    let tempSection: ISection = { ...section };
    switch (tempSection.filtrationType) {
      case "even":
        tempSection.notes = tempSection.notes.filter(note =>
          note.noteCreationDate.getMinutes() % 2 == 0);
        tempSection.filtrationType = 'none';
        return tempSection;
      case "odd":
        tempSection.notes = tempSection.notes.filter(note =>
          note.noteCreationDate.getMinutes() % 2 != 0);
        tempSection.filtrationType = 'none';
        return tempSection;
      case "none":
        tempSection = this.getSectionById(tempSection.id);
        return tempSection;
    }
  }
  notesSorting(section: ISection): ISection {
    let tempSection: ISection = { ...section };
    switch (tempSection.sortingType) {
      case 'early':
      tempSection.notes = this.ShellSort(tempSection.notes); 
      return tempSection;
      case 'later': return tempSection;
    }
  }
}
