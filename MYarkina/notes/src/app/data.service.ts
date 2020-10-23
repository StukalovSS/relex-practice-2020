import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INote } from './container/note.interface';
import { ISection } from './container/section.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
    idSection = 0;
    idNote:number = 0;

    arrayOfSection:ISection[] = [{
        id:this.idSection++,
        name:"Секция",
        arrayOfNotes:[] 
    }];

    findSectionPosById(id:number){
      return this.arrayOfSection.findIndex(section => 
        section.id == id);
    }

    addNewSection(form:FormGroup){
        this.arrayOfSection.push({
            id:this.idSection++,
            name:form.value.name,
            arrayOfNotes:[]
        });
    }

    addNewNote(newNode:INote){
        let pos = this.findSectionPosById(newNode.id);
        this.arrayOfSection[pos].arrayOfNotes.push(newNode);
    }

    changeNameSection(id:number,newName:string){
        let pos = this.findSectionPosById(id);
        this.arrayOfSection[pos].name = newName;
    }

    deleteSection(id:number){
        let pos = this.findSectionPosById(id);
        this.arrayOfSection.splice(pos,1);
    } 

    deleteNote(id:number){
        this.arrayOfSection.forEach(element => {
          for(let j = 0;j < element.arrayOfNotes.length; j++ ) {
            if(element.arrayOfNotes[j].id == id){
              element.arrayOfNotes.splice(j,1);
            }
          }
        });
      } 
}