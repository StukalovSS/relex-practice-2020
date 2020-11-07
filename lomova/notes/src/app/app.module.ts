import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';

import { SectionModule } from './modules/section/section.module';
import { ModalModule } from './modules/modal/modal.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    ModalModule,
    SectionModule,
    BrowserModule,
    FontAwesomeModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
