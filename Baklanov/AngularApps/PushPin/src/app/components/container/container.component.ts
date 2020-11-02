import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  arrayOfSections: any[] = [];
  faPlus = faPlus;
  public modalHide: boolean = false;
  constructor(private service: DataService, private router: Router) {
    this.router.navigate(['/']);
  }

  addNewSection(): void {
    this.router.navigate(['modal-section']);
  }
  ngOnInit(): void {
    this.arrayOfSections = this.service.getData();
  }
  ngOnDestroy(): void {
  }
}
