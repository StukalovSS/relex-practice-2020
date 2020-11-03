import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColorPickerModule } from 'ngx-color-picker';

import { SectionComponent } from '../section/section/section.component';
import { NoteComponent } from '../section/note/note.component';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SectionComponent}
];

@NgModule({
  declarations: [
    SectionComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ColorPickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    SectionComponent,
    NoteComponent
  ]
})
export class SectionModule { }
