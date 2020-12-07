import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalSectionComponent } from '../modules/modal/modal-section/modal-section.component';
import { ISection } from '../shared/interfaces/isection';
import { DataService } from '../shared/services/data.service';


/**
 * Компонент контейнера секций.
 */
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  public readonly icons = {
    plus: faPlus
  };
  public showLangList = false;
  public sections: ISection[] = [];

  private unsubscribe$ = new Subject<void>();

  @ViewChild('modalForSection', { read: ViewContainerRef }) container;

  constructor(private dataService: DataService,
              private resolver: ComponentFactoryResolver,
              private translate: TranslateService
             )
    {
      translate.use('ru');
  }

  ngOnInit(): void {
    this.update();
  }

  public changeLang(lang: string): void {
    this.translate.use(lang);
    this.showLangList = false;
  }

   /**
    * Создает динамический компонент модального окна для секции.
    * Подписывается на события модального окна: его закрытие и добавление секции.
    */
  public addSection(): void {
    this.container.clear();
    const modalFactory = this.resolver.resolveComponentFactory(ModalSectionComponent);
    const component = this.container.createComponent(modalFactory);
    component.instance.rename = false;
    component.instance.closeModal.subscribe( () => {
      this.container.clear();
    });
    component.instance.submitForm.subscribe( () => {
      this.container.clear();
      this.update();
    });
  }

  public deleteSection(id: number): void {
    this.dataService.deleteSection(id);
    this.update();
  }

  private update(): void {
    this.dataService.getAllSections().pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      this.sections = value;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
