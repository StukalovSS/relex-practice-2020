import { Component, OnInit } from '@angular/core';
import {faCogs,faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  
  faCogs = faCogs;
  faEllipsisV = faEllipsisV;

  constructor() { }

  ngOnInit(): void {
  }

}
