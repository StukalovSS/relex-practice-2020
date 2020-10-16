import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import {DataService} from './data.service';
import { ViewComponent } from './view/view.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    ViewComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

