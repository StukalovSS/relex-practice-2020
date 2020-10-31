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
  private ShellSort(array : INote[], earlier:boolean) : INote[]{
    let n = array.length, i = Math.floor(n / 2);
    while (i > 0) {
      for (let j = 0; j < n; j++) {
        let k = j, t = array[j];
        if(earlier) {
        while (k >= i && array[k - i].noteCreationDate.getDay() < t.noteCreationDate.getDay()) {
          array[k] = array[k-i]; k -= i;
        }
      } 
      else {
        while ((k >= i) && array[k - i].noteCreationDate.getDay() > t.noteCreationDate.getDay()) {
          array[k] = array[k-i]; k -= i;
        }
      }
      array[k] = t;
      }
      i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return array;
  }
  getData(): ISection[] {
    return this.sections;
  }
  addSection(section: ISection) {
    section.id = this.sectionId++;
    this.sections.push(section);
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
          note.noteCreationDate.getDay() % 2 === 1);
        tempSection.filtrationType = 'none';
        return tempSection;
      case "odd":
        tempSection.notes = tempSection.notes.filter(note =>
          note.noteCreationDate.getDay() % 2 !=  1);
        tempSection.filtrationType = 'none';
        return tempSection;
      case "none":
        tempSection = this.getSectionById(tempSection.id);
        return tempSection;
    }
  }
  notesSorting(section: ISection, earlier:boolean): ISection {
    let tempSection: ISection = { ...section };
    tempSection.notes  = this.ShellSort(tempSection.notes, earlier);
    console.log(this.ShellSort(tempSection.notes, earlier));
    return tempSection;
  }
  editNote(note : INote) : void {
    console.log(this.getSectionById(note.sectionId));
    let tempNote = this.getNote(note.sectionId,note.id);
    tempNote = note;
    console.log(this.getSectionById(note.sectionId));
  }
}
