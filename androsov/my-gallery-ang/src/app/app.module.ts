import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';
import { FullScreenComponent } from './full-screen/full-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ViewComponent,
    HomeComponent,
    FullScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
