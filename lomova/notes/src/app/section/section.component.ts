import { Component, Input, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { INote } from '../note/inote';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() notes: INote[];

  iconProperty = faEllipsisV;
  iconCogs = faCogs;
  iconPlus = faPlus;

  removeNote(idNote: number) {
    this.notes = this.notes.filter(k => k.noteId != idNote);
  }

  constructor() { }
  ngOnInit(): void {}

}
