import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INote } from '../interfaces/inote';
import { ISection } from '../interfaces/isection';


/**
 * Сервис для секций и заметок.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  public sections: ISection[] = [];

  public getAllSections(): Observable<ISection[]> {
    if (JSON.parse(localStorage.getItem('sections')) === null) {
      this.sections = [];
    }
    else {
      this.sections = JSON.parse(localStorage.getItem('sections'));
    }
    return of(this.sections);
  }

  public getSection(id: number): ISection {
    return this.sections.find(s => s.sectionId === id);
  }

  public addSection(title: string): void {
    const arrId = this.sections.map(s => s.sectionId);
    this.sections.push(
      {
        sectionTitle: title,
        sectionId: this.sections.length === 0 ? 0 : Math.max(...arrId) + 1,
        notes: []
      }
    );
    this.updateLocalStorage();
  }

  public deleteSection(id: number): void {
    this.sections.splice(this.sections.findIndex(s => s.sectionId === id), 1);
    this.updateLocalStorage();
  }

  public getAllNotes(idSection: number): Observable<INote[]> {
    const currSection = this.getSection(idSection);
    const indCurrSection = this.sections.findIndex(s => s.sectionId === idSection);
    if (JSON.parse(localStorage.getItem('sections'))[indCurrSection].notes) {
      currSection.notes = JSON.parse(localStorage.getItem('sections'))[indCurrSection].notes;
      currSection.notes.map(n => n.noteDate = new Date(n.noteDate));
    }
    return of(this.getSection(idSection).notes);
  }

  public getNote(idSection: number, idNote: number): INote {
    return this.getSection(idSection).notes.find(n => n.noteId === idNote);
  }

  public addNote(idSection: number, data: any): void {
    const arrId = this.getSection(idSection).notes.map(n => n.noteId);
    this.getSection(idSection).notes.push(
      {
        noteId: this.getSection(idSection).notes.length === 0 ? 0 : Math.max(...arrId) + 1,
        noteTitle: data.title,
        noteText: data.text,
        noteDate: data.date
      }
    );
    this.updateLocalStorage();
  }

  public removeNote(idSection: number, idNote: number): void {
    const currSection = this.getSection(idSection);
    const i = currSection.notes.findIndex(n => n.noteId === idNote);
    currSection.notes.splice(i, 1);
    this.updateLocalStorage();
  }

  public updateLocalStorage(): void {
    localStorage.setItem('sections', JSON.stringify(this.sections));
  }

  /**
   * Реализует фильтр заметок по четным и нечетным датам.
   * @param s секция
   * @param even флаг четности
   * @param uneven флаг нечетности
   */
  public parityFilterNotes(s: ISection, even: boolean, uneven: boolean): INote[] {
    if (even && !uneven) {
      return s.notes.filter(n => n.noteDate.getDate() % 2 === 0);
    }
    if (uneven && !even) {
      return s.notes.filter(n => n.noteDate.getDate() % 2 !== 0);
    }
    else {
      return s.notes;
    }
  }

  /**
   * Сортировка массива заметок.
   *
   * @param notes массив заметок
   * @param flag флаг для сортировки по возрастанию или убыванию
   */
  public sortNotes(notes: INote[], flag: boolean): INote[] {
    if (flag) {
      return this.quickSort(notes, 0, notes.length - 1);
    }
    else {
      return this.quickSort(notes, 0, notes.length - 1).reverse();
    }
  }

  /**
   * Быстрая сортировка.
   *
   * @param arr массив заметок
   * @param left левая граница массива
   * @param right правая граница массива
   *
   * Возвращает отсортированный в порядке возрастания массив.
   */
  private quickSort(arr: INote[], left: number, right: number): INote[] {
    let p: number; // позиция разбиения
    if (left < right) {
      p = this.partition(arr, left, right);
      this.quickSort(arr, left, p - 1);
      this.quickSort(arr, p, right);
    }
    return arr;
  }

  /**
   * Получение позиции разбиения для быстрой сортировки.
   */
  private partition(arr: INote[], left: number, right: number): number {
    const p: number = arr[left].noteDate.getTime();
    let i: number = left;
    let j: number = right;
    while (i <= j) {
      while (arr[i].noteDate.getTime() < p) {
        i++;
      }
      while (arr[j].noteDate.getTime() > p) {
        j--;
      }
      if (i <= j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
    return i;
  }
}
