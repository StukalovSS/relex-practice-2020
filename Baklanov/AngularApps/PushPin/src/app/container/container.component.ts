import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {ISection} from "./section.interface";
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, ISection {
  sectionTitle:string;
  arrayOfnotes:any[];
  clickOnOptionButton:any;
  clickOnAddButton:any;
  arrayOfSections = [];
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
