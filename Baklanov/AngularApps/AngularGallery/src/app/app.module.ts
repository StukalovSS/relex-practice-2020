import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { MainImageComponent } from './main-image/main-image.component';
import { mainModule } from 'process';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    MainImageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [MainImageComponent, AppComponent,PreviewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
