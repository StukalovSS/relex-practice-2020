import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  faCogs = faCogs;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
