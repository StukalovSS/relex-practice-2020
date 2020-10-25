import { Injectable } from '@angular/core';
import { ISection } from './container/section.interface';
import { INote } from './section/note.interface';

@Injectable({
  providedIn: 'root'
})
export class SectionsDataService {
  sections: Map<number, ISection> = new Map<number, ISection>();

  constructor() {
    
  }

  getSections() {
    return this.sections.values();
  }

  getNotes(sectionId: number, even: boolean, notEven: boolean): INote[] {
    const notes = Array.from( this.sections.get(sectionId).notes.values() );
    return notes.filter( note => 
      (even && note.date.getDate() % 2 === 0) || (notEven && note.date.getDate() % 2 === 1)
    );
  }  

  addSection(name: string, notes: INote[]): void {
    const id = this.createId();
    this.sections.set(id, {
      header: name,
      notes: this.notesMapFromArr(notes),
      id: id,
      headerColor: '#add19a',
    });
  }

  removeSection(id: number) {
    this.sections.delete(id);
  }

  changeSectionName(id: number, newName: string) {
    this.sections.get(id).header = newName;
  }
  
  addNote(sectionId: number, note: INote) {
    note.id = this.createId();
    this.sections.get(sectionId).notes.set(note.id, note);
  }

  deleteNote(sectionId: number, noteId: number) {
    this.sections.get(sectionId).notes.delete(noteId);
  }

  changeSectionHeadColor(sectionId: number, newColor: string): void {
    this.sections.get(sectionId).headerColor = newColor;
  }

  private notesMapFromArr(notes: INote[]): Map<number, INote> {
    const map: Map<number, INote> = new Map<number, INote>();
    notes.forEach( n => {
      const id = this.createId();
      n.id = id;
      map.set(id, n);
    })
    return map;
  }

  private id: number = 0;
  private createId(): number {
    this.id++;
    return this.id;
  }
}