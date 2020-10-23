import { Component,OnInit } from '@angular/core';
import '@angular/platform-browser-dynamic';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
  
  faPlus = faPlus;
  isDisplayed = true;
  formStatus:string;
  changeNameSectionId:number;

  form:FormGroup;
  private createForm() {
    this.form = new FormGroup({
      name: new FormControl("",Validators.required)
    })
  }
  
  openCloseForm(e:number,str:string){
    this.formStatus = str;
    this.changeNameSectionId = e;
    if(e==0 || e){
      (<HTMLInputElement>document.getElementById("nameId")).value = this.dataService.arrayOfSection[this.dataService.findSectionPosById(e)].name;
    }
    else{
      (<HTMLInputElement>document.getElementById("nameId")).value = '';
    }
    this.isDisplayed = !this.isDisplayed;
  }

  clickOnFormStatus(form){
    if(this.formStatus == 'Изменить'){
      this.dataService.changeNameSection(this.changeNameSectionId,form.value.name)
    }else{
      this.dataService.addNewSection(form);
    }
    this.openCloseForm(null,null);
  }

  constructor(public dataService: DataService) {
    this.createForm();
  }

  ngOnInit(): void {}
  
}
