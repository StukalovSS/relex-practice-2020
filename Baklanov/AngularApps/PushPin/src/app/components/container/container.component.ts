import { Component, OnInit} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
/**
 * Класс для компонента контейнера
 */
export class ContainerComponent implements OnInit {
  arrayOfSections: any[] = [];
  faPlus = faPlus;
  constructor(private service: DataService, private router: Router) {
    this.router.navigate(['/']);
  }

  addNewSection(): void {
    this.router.navigate(['modal-section']);
  }
  ngOnInit(): void {
    this.service.getSections().subscribe(data => {
      this.arrayOfSections = data;
    });
  }
}
