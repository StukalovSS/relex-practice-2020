import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faLanguage = faLanguage;
  title = 'PushPin';
  lang: string = 'RU';
  constructor(public translate: TranslateService) {
    translate.use('ru');
  }
  changeLang(): void {
    if (this.lang == 'RU') {
      this.translate.use('en');
      this.lang = 'EN';
    }
    else {
      this.lang = 'RU';
      this.translate.use('ru');
    }
  }
}
