import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPickerModule } from 'ngx-color-picker';

import { SectionComponent } from '../section/section/section.component';
import { NoteComponent } from '../section/note/note.component';

@NgModule({
  declarations: [
    SectionComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ColorPickerModule
  ],
  exports: [
    SectionComponent, 
    NoteComponent
  ]
})
export class SectionModule { }
