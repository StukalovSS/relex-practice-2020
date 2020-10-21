import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { SectionsDataService } from '../sections-data.service';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  @Input() sectionHeader: string;
  @Input() sectionId: number;

  @Output() onDeleteClick = new EventEmitter();
  @Output() onRenameClick = new EventEmitter<string>();

  inputSectionHeader: FormGroup;
  invisibleInputSectionHeader: boolean = true;

  constructor(fb: FormBuilder, public sectServ: SectionsDataService) {
    this.inputSectionHeader = fb.group({
      sectionHeader: new FormControl(this.sectionHeader, Validators.required)
    });
   }

  ngOnInit(): void {
  } 

  sendDelete() {
    this.onDeleteClick.emit();
  }

  sendRename() {
    this.changeInputSectinHeaderVisibillity();
    this.sectServ.changeSectionName(this.sectionId, this.inputSectionHeader.value.sectionHeader);
    this.onRenameClick.emit();
  }

  changeInputSectinHeaderVisibillity() {
    this.invisibleInputSectionHeader = !this.invisibleInputSectionHeader;
  }
}
