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
<<<<<<< HEAD
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
=======
 * Класс модальное окно добавления и редактирования заметки.
 * Содержит форму для добавления или редактирования заметки
 */
export class ModalwindownoteComponent implements OnInit{

>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы
  myForm: FormGroup;
  statusForm: string;

  @Input() note: INote;

  @Output() output = new EventEmitter();

  /**
   * Создание формы для добавления или редактирования заметки
   * @param name текущее имя заметки. Если заметка новая - null
   * @param text текущее модержание заметки. Если заметка новая - null
   */
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
      this.statusForm = 'change';
    }
    else{
      this.createForm('', '');
<<<<<<< HEAD
      this.statusForm = 'Добавить';
>>>>>>> Добавлена возможность перетаскивание заметок внутри секции
    }
  }

  @Output() output = new EventEmitter();
  addNewNote(myForm){
    this.output.emit(myForm);
  }

  closeForm(){
=======
      this.statusForm = 'add';
    }
  }

  /**
   * Реализует передачу новой заметки родителю.
   * @param myForm форма, содержащая информаицю о добавляемой заметки.
   */
  public addNewNote(myForm): void{
    this.output.emit(myForm);
  }

  /**
   * Закрывает окно.
   */
  public closeForm(): void{
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы
    this.output.emit(false);
  }
  
}
