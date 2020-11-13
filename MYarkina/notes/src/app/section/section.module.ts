import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { SectionComponent } from './section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';


@NgModule({
  declarations: [
    NoteComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    ColorPickerModule
  ],
  exports:[NoteComponent,SectionComponent],
  providers: [DataService, ColorPickerService],
})
export class SectionModule { }
