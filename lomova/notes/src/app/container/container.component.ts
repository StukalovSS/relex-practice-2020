import { Component, OnInit } from '@angular/core';
import { ISection } from '../section/isection';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  sections: ISection[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sections.push(
      {
        sectionTitle: "Секция 1", notes: [
          {
            noteTitle: "Заметка 1",
            noteText: "Текст заметки 1 секции 1",
            noteDate: "14.10.20",
            noteId: 1
          },
          {
            noteTitle: "Заметка 2",
            noteText: "Текст заметки 2 секции 1",
            noteDate: "14.10.20",
            noteId: 2
          }
        ]
      },
      {
        sectionTitle: "Секция 2", notes: [
          {
            noteTitle: "Заметка 1",
            noteText: "Текст заметки 1 секции 2",
            noteDate: "14.10.20",
            noteId: 3
          }
        ]
      });
  }
}
