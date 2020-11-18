import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * Корневой класс приложения.
 */
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    if (window.localStorage.getItem('lang')){
      this.translateService.setDefaultLang(window.localStorage.getItem('lang'));
      (document.getElementById('lang-select') as HTMLSelectElement).value = window.localStorage.getItem('lang');
    }
    else{
      this.translateService.setDefaultLang('ru');
      (document.getElementById('lang-select') as HTMLSelectElement).value = 'ru';
    }
  }

  /**
   * Изменяет язык приложения.
   */
  public changeLang(): void{
    if (window.localStorage.getItem('lang') === 'en'){
      this.translateService.use('ru');
      localStorage.setItem('lang', 'ru');
    }else{
      this.translateService.use('en');
      localStorage.setItem('lang', 'en');
    }
  }

}
