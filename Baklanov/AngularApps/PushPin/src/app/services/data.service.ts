import { Injectable } from '@angular/core';
import { element } from 'protractor';
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
  getData(): ISection[] {
    return this.sections;
  }
  addSection(section: ISection) {
    section.id = this.sectionId++;
    this.sections.push(section);
    this.currentSection = (this.sections.length - 1);
  }
  getLastSection(): ISection {
    return this.sections[this.sections.length - 1];
  }
  getNote(): INote {
    return this.sections[this.currentSection].notes[this.sections[this.currentSection].notes.length - 1];
  }
  addNoteBySectionId(id: number, note: INote) {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id == id) {
        this.currentSection = i;
        note.id = this.noteId++;
        this.sections[i].notes.push(note);
      }
    }
  }
  getSectionById(id: number): ISection {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].id == id) {
        return this.sections[i];
      }
    }
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
        this.currentSection = i - 1;
      }
    }
  }
  editSection(id: number, section: ISection) {
    let index = this.sections.findIndex(section => section.id == id)
    this.sections[index] = section;
  }
  notesFiltration (section : ISection) : ISection {
    let tempSection : ISection = {
      sectionTitle : section.sectionTitle,
      id : section.id,
      filtrationType : section.filtrationType,
      notes : section.notes,
      color : section.color
    };
    switch (tempSection.filtrationType) {
      case "even" :
        tempSection.notes = tempSection.notes.filter(note => 
          note.noteCreationDate.getMinutes() % 2 ==0);
          section.filtrationType = 'none';
      return tempSection;
      case "odd" :
        tempSection.notes = tempSection.notes.filter(note => 
          note.noteCreationDate.getMinutes() % 2 !=0);
          section.filtrationType = 'none';
      return tempSection;
      case "none" : 
      let index = this.sections.findIndex(sec => tempSection.id == sec.id);
      console.log(this.sections[index]);
      tempSection.notes = this.sections[index].notes;
      console.log(tempSection);
      return tempSection;
    }
  }
}
