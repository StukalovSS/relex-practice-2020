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
  
  idSection:number = 0;
  idNote:number = 0;

  arrayOfSection:ISection[] = [{
    id:this.idSection++,
    name:"Секция",
    arrayOfNotes:[] 
  }];


  getArrayOfNotes(idSection:number):Observable<INote[]>{
    return of(JSON.parse(JSON.stringify(this.arrayOfSection[idSection].arrayOfNotes)));
  }

  observable$ = new Observable((sub) => {
    sub.next(this.arrayOfSection);
  });

  array = JSON.parse(JSON.stringify(this.arrayOfSection));

  findSectionPosById(id:number){
    return this.arrayOfSection.findIndex(section => section.id == id);
  }

  findNotePosById(idSection:number,idNote:number){
    return this.arrayOfSection[idSection].arrayOfNotes.findIndex(note => note.id == idNote);
  }

  addNewSection(form:FormGroup){
    this.arrayOfSection.push({
      id:this.idSection++,
      name:form.value.name,
      arrayOfNotes:[]
    });
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
  }

  addNewNote(newNode:INote){
    this.arrayOfSection = JSON.parse(JSON.stringify(this.array));
    let pos = this.findSectionPosById(newNode.id);
    newNode.id = this.idNote++;
    this.arrayOfSection[pos].arrayOfNotes.push(newNode);
    this.array[pos].arrayOfNotes.push(newNode);
  }

  changeNameSection(id:number,form:FormGroup){
    let pos = this.findSectionPosById(id);
    this.arrayOfSection[pos].name = form.value.name;
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
  }

  deleteSection(id:number){
    this.arrayOfSection.splice(this.findSectionPosById(id),1);
    this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
  } 

    deleteNote(posNote:number,idSection:number){
      this.arrayOfSection[idSection].arrayOfNotes.splice(posNote,1);
      this.array = JSON.parse(JSON.stringify(this.arrayOfSection));
    } 

   
    /**
     * Метод редактирования заметки.
     * 
     * idNote - уникальный id заметки
     * idSection - уникальный id секции, в которой находится заметка
     * editNote - данные с формы редактирования заметки
     */  
    editNote(idNote:number,idSection:number,editNote:any){
      let posSec = this.findSectionPosById(idSection);
      let posNote = this.findNotePosById(posSec,idNote);
      let newEdit:INote = {
        id:idNote,
        name:editNote.value.name,
        nodeTxt:editNote.value.text,
        date:editNote.value.date
      }
      this.arrayOfSection[posSec].arrayOfNotes[posNote] = newEdit;
      this.array[posSec].arrayOfNotes[posNote] =  newEdit;
    }

    
     /**
     * Метод фильтрации заметок, возвращающий отфильтрованный и сортированныц массив.
     * 
     * array - массив с заметками, которые нужно отфильтровать
     * idSection - уникальный id секции, в которой находится заметка
     * flagOdd и flagEven - флаги о типе фильтрации
     * sortMinToMax - флаг для сортировки массива
     */  
    filterNote(idSection:number,array:INote[],flagOdd:boolean,flagEven:boolean,sortMinToMax:boolean):INote[]{
      if((flagEven&&flagOdd) || (!flagOdd && !flagEven)){
        array = JSON.parse(JSON.stringify(this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes));
      }
      else{
      if(flagEven){
        for(let i =0; i < array.length;i++){
           if(Number(array[i].date.substr(0,2)) % 2 == 1){
            array.splice(i,1);
            i=-1;
          } 
        }
      }
      else{
        array = JSON.parse(JSON.stringify(this.arrayOfSection[this.findSectionPosById(idSection)].arrayOfNotes));
      }
      if(flagOdd){
        for(let i =0; i < array.length;i++){
           if(Number(array[i].date.substr(0,2)) % 2 == 0){
            array.splice(i,1);
            i=-1;
          } 
        }
      }
    }
    return this.sortNote(sortMinToMax,array);
    }


    /**
     * Метод сортировки заметок, возвращающий сортированный массив.
     * 
     * array - массив с заметками, которые нужно сортировать
     * sortMinToMax - флаг для сортировки массива
     */
    sortNote(sortMinToMax:boolean,array:INote[]){
      if(sortMinToMax){
        for(let i = 0;i<array.length-1;i++){
          let date1 = Number(array[i].date.substr(0,2));
          let date2 = Number(array[i+1].date.substr(0,2));
          if(date1 > date2){
            let cur = array[i].date;
            array[i].date=  array[i+1].date;
            array[i+1].date = cur;
            i=-1;   
          }
        }
      }
      else{
        for(let i = 0 ; i < array.length-1; i++){
          let date1 = Number(array[i].date.substr(0,2));
          let date2 = Number(array[i+1].date.substr(0,2));
          if(date1 < date2){
            let cur = array[i].date;
            array[i].date = array[i+1].date;
            array[i+1].date = cur;
            i=-1; 
          }
        }
      }  
      return array;
    }
}