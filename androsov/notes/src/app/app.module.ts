import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SectionComponent } from './section/section.component';
import { NoteComponent } from './note/note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalInputComponent } from './modal-input/modal-input.component';
import { TestPipe } from './test.pipe';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SectionComponent,
    NoteComponent,
    ModalInputComponent,
    TestPipe,
    DropDownMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
