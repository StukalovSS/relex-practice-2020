import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerComponent } from './container/container.component';
import {  SectionComponent } from './section/section.component';
import { NoteComponent } from './note/note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { ModalwindownoteComponent } from './modalwindownote/modalwindownote.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SectionComponent,
    NoteComponent,
    ModalwindownoteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  entryComponents:[ModalwindownoteComponent],
  providers: [DataService, ColorPickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
