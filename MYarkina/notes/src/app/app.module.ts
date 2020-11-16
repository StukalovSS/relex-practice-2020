import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerComponent } from './container/container.component';
import { DataService } from './data.service';
import { ModalwindowModule } from './modalwindow/modalwindow.module';
<<<<<<< HEAD
import { SectionModule } from './section/section.module';
<<<<<<< HEAD

=======
=======
import { SectionModule } from './sectionmodule/section.module';
>>>>>>> Добавлен выпадающий список с выбором языка приложения. Добавлены модификаторы доступа у методов класса. Поправлены отступы
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
>>>>>>> Добавлена возможность выбора языка - русский, английский

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ModalwindowModule,
<<<<<<< HEAD
    SectionModule 
=======
    SectionModule,
    RouterModule.forRoot([]),
    DragDropModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
>>>>>>> Добавлена возможность выбора языка - русский, английский
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
