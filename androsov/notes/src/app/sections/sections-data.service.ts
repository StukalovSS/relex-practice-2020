import { Injectable } from '@angular/core';
import { ISection } from './container/section.interface';
import { INote } from './section/note.interface';

@Injectable({
  providedIn: 'root'
})

/**
 * Класс отвечает за работу с секциями.
 */
export class SectionsDataService {
  sections: Map<number, ISection> = new Map<number, ISection>();


  constructor() {
    this.setStateFromLocalStorage();
  }

  getSections(): IterableIterator<ISection> {
    return this.sections.values();
  }

  /**
   * Метод может отформатировать массив заметок, перед тем как его выдать.
   *
   * @param sectionId
   *    ID секции.
   * @param consumer
   *    Функция, которая форматирует массив заметок.
   */
  getNotes(sectionId: number, consumer: (notes: INote[]) => INote[] = notes => notes): INote[] {
    return consumer( Array.from( this.sections.get(sectionId).notes.values() ) );
  }

  addSection(name: string, notes: INote[]): void {
    const id = this.createId();
    this.sections.set(id, {
      header: name,
      notes: this.notesMapFromArr(notes),
      id,
      headerColor: '#add19a',
    });
    this.safeStateInLocalStorage();
  }

  removeSection(id: number): void {
    this.sections.delete(id);
    this.safeStateInLocalStorage();

  }

  changeSectionName(id: number, newName: string): void {
    this.sections.get(id).header = newName;
    this.safeStateInLocalStorage();

  }

  addNote(sectionId: number, note: INote): void {
    note.id = this.createId();
    this.sections.get(sectionId).notes.set(note.id, note);
    this.safeStateInLocalStorage();

  }

  deleteNote(sectionId: number, noteId: number): void {
    this.sections.get(sectionId).notes.delete(noteId);
    this.safeStateInLocalStorage();
  }

  changeSectionHeadColor(sectionId: number, newColor: string): void {
    this.sections.get(sectionId).headerColor = newColor;
    this.safeStateInLocalStorage();
  }

  changeNoteContent(sectionId: number, noteId: number, newNote: INote): void {
    newNote.id = this.sections.get(sectionId).notes.get(noteId).id;
    this.sections.get(sectionId).notes.set(noteId, newNote);
    this.safeStateInLocalStorage();
  }

  /**
   * Метод возвращает Map заметок с уникальным id, который создается внутри метода
   */
  private notesMapFromArr(notes: INote[]): Map<number, INote> {
    const map: Map<number, INote> = new Map<number, INote>();
    notes.forEach( n => {
      const id = this.createId();
      n.id = id;
      map.set(id, n);
    });
    return map;
  }

  // tslint:disable-next-line: member-ordering
  private id = 0;
  private createId(): number {
    this.id++;
    return this.id;
  }

  private setStateFromLocalStorage(): void {
    if ( localStorage.getItem('sections') ) {
      let objFromStorage = JSON.parse(localStorage.getItem('sections')) as any;
      const sections = new Map<number, ISection>();

      // tslint:disable-next-line: forin
      for (const key in objFromStorage) {
        sections.set(+key, objFromStorage[key]);
        sections.get(+key).notes = new Map<number, INote>();
      }
      this.sections = sections;
      this.id = +localStorage.getItem('max-id');

      objFromStorage = JSON.parse(localStorage.getItem('sections')) as any;
      for (const sectionId in objFromStorage) {
        // tslint:disable-next-line: forin
        for (const noteId in objFromStorage[sectionId].notes) {
          objFromStorage[sectionId].notes[noteId].date = new Date(objFromStorage[sectionId].notes[noteId].date);
          this.addNote(+sectionId, objFromStorage[sectionId].notes[noteId]);
        }
      }
    }
  }

  private safeStateInLocalStorage(): void {
    const savedObject: any = {};
    Object.assign(savedObject, (Object as any).fromEntries(this.sections));
    // tslint:disable-next-line: forin
    for (const key in savedObject) {
      Object.assign(savedObject[key].notes, (Object as any).fromEntries( savedObject[key].notes ));
    }
    localStorage.setItem('sections', JSON.stringify(savedObject));
    localStorage.setItem('max-id', '' + this.id);
  }
}
