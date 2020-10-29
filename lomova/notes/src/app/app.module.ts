import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { NoteComponent } from './note/note.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeTestPipe } from './pipe-test.pipe';
import { ModalSectionComponent } from './modal-section/modal-section.component';
import {RefDirective} from '../app/container/directive';

import { ColorPickerModule } from 'ngx-color-picker';
import { DatePipe } from '@angular/common';
import { ModalNoteComponent } from './modal-note/modal-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    NoteComponent,
    ContainerComponent,
    PipeTestPipe,
    ModalSectionComponent,
    RefDirective,
    ModalNoteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [DatePipe],
  entryComponents: [ModalSectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
