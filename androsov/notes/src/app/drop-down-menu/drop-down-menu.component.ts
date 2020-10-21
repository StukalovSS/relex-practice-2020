import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  @Input() sectionHeader: string;

  @Output() onDeleteClick = new EventEmitter();
  @Output() onRenameClick = new EventEmitter<string>();

  inputSectionHeader: FormGroup;
  invisibleInputSectionHeader: boolean = true;

  constructor(fb: FormBuilder) {
    this.inputSectionHeader = fb.group({
      sectionHeader: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  } 

  sendDelete() {
    this.onDeleteClick.emit();
  }

  sendRename() {
    this.changeInputSectinHeaderVisibillity();
    this.sectionHeader = this.inputSectionHeader.value.sectionHeader;
    this.onRenameClick.emit(this.inputSectionHeader.value.sectionHeader);
  }

  changeInputSectinHeaderVisibillity() {
    this.invisibleInputSectionHeader = !this.invisibleInputSectionHeader;
  }
}
