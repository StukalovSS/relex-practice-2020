import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PreviewComponent } from './preview/preview.component';
import { ViewComponent } from './view/view.component';

import { AppRouting } from './app.routing';
import { ViewGuard } from './guards/view.guard';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ViewComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule
  ],
  providers: [ViewGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
