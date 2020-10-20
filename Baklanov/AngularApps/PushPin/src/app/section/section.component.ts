import { Component, OnInit} from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../note/note.interface';
import { DataService } from '../services/data.service';
import { ISection } from './section.interface';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  faCogs = faCogs;
  faPlus = faPlus;
  section : ISection;
  noteForm : FormGroup;
  constructor( private service : DataService, private formBuilder: FormBuilder) {
    this.noteForm = formBuilder.group ({
      "noteHeader" : ['Название вашей заметки', [Validators.required]],
      "noteContent" : [''],
    })
  }
  addNewNote () : void {
    let fullDate = new Date();
    let date : string;
    date = String(
      fullDate.getDate() + "."+
      fullDate.getMonth() + "."+
      fullDate.getFullYear() +" "+
      fullDate.getHours() + ":"+
      fullDate.getSeconds()
    )
    let note : INote  = {
      noteHeader : this.noteForm.value.noteHeader,
      noteCreationDate :date,
      noteContent : this.noteForm.value.noteContent,
      id : (this.section.notes.length-1),
      sectionId : this.section.id
    }
    this.service.addNoteBySectionId (this.section.id, note);
    this.section = this.service.getSectionById(this.section.id);
    }
  ngOnInit(): void {
    this.section = this.service.getLastSection();
  }

}
