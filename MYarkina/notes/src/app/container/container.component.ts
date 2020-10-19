import { Component,OnInit, OnChanges } from '@angular/core';
import { ISection } from './section.interface';
import '@angular/platform-browser-dynamic';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  
  faPlus = faPlus;
  idNote = 0;
  idSection = 0;
  arrayOfSection = [];
  
  firstSection:ISection = {
    id:this.idSection++,
    name:"Расписание",
    arrayOfNotes:[{
      id:this.idNote++,
      name: "Понедельник",
      nodeTxt:"Текст заметки",
      date:"16.10.20 18:00"
    },
    {
      id:this.idNote++,
      name: "Вторник",
      nodeTxt:"Текст заметки",
      date:"16.10.20 18:30"
    }]
  }

  secondSection:ISection = {
    id:this.idSection++,
    name:"Покупки",
    arrayOfNotes:[{
      id:this.idNote++,
      name: "Список",
      nodeTxt:"Текст заметки",
      date:"18.10.20 13:00"
    }]
  }

  constructor() {}
  ngOnInit(): void {
    this.arrayOfSection.push(this.firstSection);
    this.arrayOfSection.push(this.secondSection);
  }
  
  deleteNote(e){
    this.arrayOfSection.forEach(element => {
      for(let j = 0;j < element.arrayOfNotes.length; j++ ) {
        if(element.arrayOfNotes[j].id == e){
          element.arrayOfNotes.splice(j,1);
        }
      }
    });
  } 

  newSection(){
    this.arrayOfSection.push({
      id:this.idSection++,
      name:"Test",
      arrayOfNotes:[{
        id:this.idNote++,
        name: "test",
        nodeTxt:"test",
        date:"99.99.99 99:99"
      }]
    })
  }

  newNote(e){
    this.arrayOfSection.forEach(element => {
      if(element.id == e){
        element.arrayOfNotes.push({
          id:this.idNote++,
          name: "Тест",
          nodeTxt:"Тест",
          date:"00.00.00 00:00"
        })
      }
    });
  }


}
