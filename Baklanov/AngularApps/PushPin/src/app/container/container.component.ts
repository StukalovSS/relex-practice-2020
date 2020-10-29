import { Component, OnInit, OnDestroy } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ISection } from "../section/section.interface";
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  arrayOfSections: any[] = [];
  faPlus = faPlus;
  public modalHide: boolean = false;
  constructor(private service: DataService, private router: Router) {
    this.router.navigate(['/']);
  }

  addNewSection(): void {
    this.router.navigate(['modal'],
      {
        queryParams: { 'type': 'section' }
      });
  }
  ngOnInit(): void {
    this.arrayOfSections = this.service.getData();
  }
  ngOnDestroy(): void {
  }
}
