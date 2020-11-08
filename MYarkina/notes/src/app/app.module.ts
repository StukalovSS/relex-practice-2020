import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerComponent } from './container/container.component';
import { DataService } from './data.service';
import { ModalwindowModule } from './modalwindow/modalwindow.module';
import { SectionModule } from './section/section.module';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ModalwindowModule,
    SectionModule,
    RouterModule.forRoot([]),
    DragDropModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
