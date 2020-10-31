import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { SectionsDataService } from '../../sections/sections-data.service';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  @Input() sectionHeader: string;
  @Input() sectionId: number;

  @Output() onClose = new EventEmitter();
  @Output() onSelectCheckbox = new EventEmitter<any>();

  inputSectionHeader: FormGroup;

  invisibleInputSectionHeader: boolean = true;
  showEven: boolean = true;
  showNotEven: boolean = true;
  sortAscending: boolean = true;

  constructor(fb: FormBuilder, public sectServ: SectionsDataService) {
    this.inputSectionHeader = fb.group({
      sectionHeader: new FormControl(this.sectionHeader, Validators.required)
    });
   }

  ngOnInit(): void {
  } 

  sendDelete() {
    this.sectServ.removeSection(this.sectionId);
  }

  sendRename() {
    this.changeInputSectinHeaderVisibillity();
    this.sectServ.changeSectionName(this.sectionId, this.inputSectionHeader.value.sectionHeader);
    this.onClose.emit();
  }

  sendFilter() {
    this.showEven = (document.getElementById('even' + this.sectionId) as HTMLInputElement).checked;
    this.showNotEven = (document.getElementById('not-even' + this.sectionId) as HTMLInputElement).checked;
    this.sortAscending = (document.getElementById('sort-ascending' + this.sectionId) as HTMLInputElement).checked;

    this.onSelectCheckbox.emit({
      even: this.showEven,
      notEven: this.showNotEven,
      sortAscending: this.sortAscending
    });
  }

  changeSectionHeaderColor(e: any) {
    this.sectServ.changeSectionHeadColor(this.sectionId, e.target.value);
  }

  changeInputSectinHeaderVisibillity() {
    this.invisibleInputSectionHeader = !this.invisibleInputSectionHeader;
  }
}
