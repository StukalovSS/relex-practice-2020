import { DatePipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INote } from '../../container/note.interface';

@Component({
  selector: 'app-modalwindownote',
  templateUrl: './modalwindownote.component.html',
  styleUrls: ['./modalwindownote.component.scss']
})
/**
 * Класс модальное окно для создания новой заметки
 */
export class ModalwindownoteComponent implements OnInit{

<<<<<<< HEAD
  @Input() note:INote;

  /**
   * Форма для создания новой заметки.
   */
  myForm:FormGroup;
  private createForm(name,text) {
    var today = new DatePipe("en-US").transform(new Date(), "dd.MM.yyyy HH:mm");
=======
  @Output() output = new EventEmitter();
  @Input() note: INote;
  myForm: FormGroup;
  statusForm: string;
  private createForm(name, text): void {
    const today = new DatePipe('en-US').transform(new Date(), 'dd.MM.yyyy HH:mm');
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
    this.myForm = new FormGroup({
      'name': new FormControl(name,Validators.required),
      'text': new FormControl(text,Validators.required),
      'date': new FormControl(today,Validators.required)
    })
  }

  ngOnInit(): void {
<<<<<<< HEAD
    if(this.note){
      this.createForm(this.note.name,this.note.nodeTxt);
    }
    else{
      this.createForm("","");
=======
    if (this.note){
      this.createForm(this.note.name, this.note.nodeTxt);
      this.statusForm = 'Изменить';
    }
    else{
      this.createForm('', '');
      this.statusForm = 'Добавить';
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
    }
  }

  @Output() output = new EventEmitter();
  addNewNote(myForm){
    this.output.emit(myForm);
  }

  closeForm(){
    this.output.emit(false);
  }
  
}
