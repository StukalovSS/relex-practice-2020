import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalSectionComponent } from '../../modules/modal/modal-section/modal-section.component';
import { DataService } from '../../services/data.service';
import { ISection } from '../../modules/section/section/isection';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  iconPlus = faPlus;

  sections: ISection[] = [];
  sectionId: number = 0;

  @ViewChild("modalForSection", { read: ViewContainerRef }) container;

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver) {
    this.dataService.getAllSections().subscribe(value => {
      this.sections = value;
      console.log(this.sections);
    })
  }

  ngOnInit(): void {
    //this.sections = this.dataService.sections;
  }

  addSection() {
    this.container.clear();
    const modalFactory = this.resolver.resolveComponentFactory(ModalSectionComponent);
    const component = this.container.createComponent(modalFactory);

    component.instance.idSection = this.sectionId++;
    component.instance.rename = false;
    component.instance.close.subscribe( () => {
      this.container.clear();
    });
    component.instance.submit.subscribe( () => {
      this.container.clear();
      console.log(this.sections);
    });
  }

  removeSection(id: number) {
    this.dataService.removeSection(id);
    console.log(this.sections);
  }
}
