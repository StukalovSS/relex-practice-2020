import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalwindownoteComponent } from './modalwindownote/modalwindownote.component';
import { ModalwindowsectionComponent } from './modalwindowsection/modalwindowsection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalwindownoteComponent,
    ModalwindowsectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ModalwindowsectionComponent,ModalwindownoteComponent],
  entryComponents:[ModalwindownoteComponent,ModalwindowsectionComponent]
})
export class ModalwindowModule { }
