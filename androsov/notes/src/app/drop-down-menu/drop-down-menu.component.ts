import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {

  @Output() onDeleteClick = new EventEmitter;
  @Output() onRenameClick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  } 

  sendDelete() {
    this.onDeleteClick.emit();
  }

  sendRename() {
    this.onRenameClick.emit();
  }
}
