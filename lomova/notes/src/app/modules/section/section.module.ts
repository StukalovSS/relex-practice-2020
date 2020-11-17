import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { NoteComponent } from '../section/note/note.component';
<<<<<<< HEAD
=======
import { SectionComponent } from '../section/section/section.component';

const appRoutes: Routes = [
  { path: '', component: SectionComponent }
];
>>>>>>> Внесены правки

@NgModule({
  declarations: [
    SectionComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
<<<<<<< HEAD
    ColorPickerModule
=======
    ColorPickerModule,
    RouterModule.forRoot(appRoutes),
    DragDropModule,
    TranslateModule
>>>>>>> Внесены правки
  ],
  exports: [
    SectionComponent,
    NoteComponent
  ]
})
export class SectionModule { }
