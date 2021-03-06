import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { INote } from './container/note.interface';
import { ISection } from './container/section.interface';

@Injectable({ providedIn: 'root' })
/**
 * Сервис для работы с данными о секциях.
 */
export class DataService {

  arrayOfSection: ISection[] = this.checkLocalStorage() ? this.checkLocalStorage() : [];

  observable$ = new Observable((sub) => {
    sub.next(this.arrayOfSection);
  });

  array = JSON.parse(JSON.stringify(this.arrayOfSection));

  public getArrayOfNotes(idSection: number): Observable<INote[]>{
    return of(JSON.parse(JSON.stringify(this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes)));
  }

  public findSectionPosById(id: number): number{
    return this.arrayOfSection.findIndex(section => section.id === id);
  }

  public findNotePosById(idSection: number, idNote: number): number{
    return this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes.findIndex(note => note.id === idNote);
  }

  public checkLocalStorage(): ISection[]{
    const sec = JSON.parse(window.localStorage.getItem('sections'));
    return sec;
  }

  public updateLocalStorage(): void {
    localStorage.setItem('sections', JSON.stringify(this.arrayOfSection));
  }

  public idSection(): number{
    let max = 0;
    for (const section of this.arrayOfSection){
      if (section.id > max){
        max = section.id;
      }
    }
    return max + 1;
  }

  public idNote(): number{
    let max = 1000;
    for (const section of this.arrayOfSection){
      for (const note of section.arrayOfNotes){
        if (note.id > max){
          max = note.id;
        }
      }
    }
    return max + 1;
  }

  public addNewSection(form: FormGroup): void{
    this.arrayOfSection.push({
      id: this.idSection(),
      name: form.value.name,
      arrayOfNotes: []
    });
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
    this.updateLocalStorage();
  }

  public addNewNote(newNode: INote): void{
    this.arrayOfSection = JSON.parse(JSON.stringify(this.array));
    const pos = this.findSectionPosById(newNode.id);
    newNode.id = this.idNote();
    this.arrayOfSection[pos].arrayOfNotes.push(newNode);
    this.array[pos].arrayOfNotes.push(newNode);
    this.updateLocalStorage();
  }

  public changeNameSection(id: number, form: FormGroup): void{
    const pos = this.findSectionPosById(id);
    this.arrayOfSection[pos].name = form.value.name;
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
    this.updateLocalStorage();
  }

  public deleteSection(id: number): void{
    this.arrayOfSection.splice(this.findSectionPosById(id), 1);
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
    this.updateLocalStorage();
  }

  public deleteNote(posNote: number, idSection: number): void{
    this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes.splice(posNote, 1);
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
    this.updateLocalStorage();
  }

  /**
   * Метод редактирования заметки.
   *
   * @param idNote - уникальный id заметки
   * @param idSection - уникальный id секции, в которой находится заметка
   * @param editNote - данные с формы редактирования заметки
   */
  public editNote(idNote: number, idSection: number, editNote: any): void{
    const posSec = this.findSectionPosById(idSection);
    const posNote = this.findNotePosById(idSection, idNote);
    const newEdit: INote = {
      id: idNote,
      name: editNote.value.name,
      nodeTxt: editNote.value.text,
      date: editNote.value.date
    };
    this.arrayOfSection[posSec].arrayOfNotes[posNote] = newEdit;
    this.array[posSec].arrayOfNotes[posNote] =  newEdit;
    this.updateLocalStorage();
  }

  /**
   * Метод фильтрации заметок, возвращающий отфильтрованный и сортированныц массив.
   *
   * @param array - массив с заметками, которые нужно отфильтровать
   * @param idSection - уникальный id секции, в которой находится заметка
   * @param flagOdd - флаг о типе фильтрации
   * @param flagEven - флаг о типе фильтрации
   * @param sortMinToMax - флаг для сортировки массива
   */
  public filterNote(idSection: number, array: INote[], flagOdd: boolean, flagEven: boolean, sortMinToMax: boolean): INote[]{
    if ((flagEven && flagOdd) || (!flagOdd && !flagEven)){
      array = JSON.parse(JSON.stringify(this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes));
    }
    else{
      if (flagEven){
        for (let i = 0; i < array.length; i++){
          if (Number(array[i].date.substr(0, 2)) % 2 === 1){
            array.splice(i, 1);
            i = -1;
          }
        }
      }
      else{
        array = JSON.parse(JSON.stringify(this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes));
      }
      if (flagOdd){
        for (let i = 0; i < array.length; i++){
          if (Number(array[i].date.substr(0, 2)) % 2 === 0){
            array.splice(i, 1);
            i = -1;
          }
        }
      }
    }
    return this.sortNote(sortMinToMax, array);
  }


  /**
   * Метод сортировки заметок, возвращающий сортированный массив.
   *
   * @param array - массив с заметками, которые нужно сортировать
   * @param sortMinToMax - флаг для сортировки массива
   */
  public sortNote(sortMinToMax: boolean, array: INote[]): INote[]{
    if (sortMinToMax){
      for (let i = 0; i < array.length - 1; i++){
        const date1 = Number(array[i].date.substr(0, 2));
        const date2 = Number(array[i + 1].date.substr(0, 2));
        if (date1 > date2){
          const cur = array[i];
          array[i] =  array[i + 1];
          array[i + 1] = cur;
          i = -1;
        }
      }
    }
    else{
      for (let i = 0 ; i < array.length - 1; i++){
        const date1 = Number(array[i].date.substr(0, 2));
        const date2 = Number(array[i + 1].date.substr(0, 2));
        if (date1 < date2){
          const cur = array[i];
          array[i] = array[i + 1];
          array[i + 1] = cur;
          i = -1;
        }
      }
    }
    return array;
  }

}
