import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalwindownoteComponent } from './modalwindownote/modalwindownote.component';
import { ModalwindowsectionComponent } from './modalwindowsection/modalwindowsection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ModalwindownoteComponent,
    ModalwindowsectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  exports: [ModalwindowsectionComponent, ModalwindownoteComponent],
  entryComponents: [ModalwindownoteComponent, ModalwindowsectionComponent]
})
export class ModalwindowModule { }
