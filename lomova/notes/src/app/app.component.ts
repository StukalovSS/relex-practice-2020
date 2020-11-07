import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';
  constructor(private dataService: DataService) {}
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.dataService.sections, event.previousIndex, event.currentIndex);
  }
}
