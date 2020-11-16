import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { SectionComponent } from './section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    NoteComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    ColorPickerModule,
    DragDropModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  exports:[NoteComponent,SectionComponent],
  providers: [DataService, ColorPickerService],
})
export class SectionModule { }
