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
  rusLang = true;
  constructor(public translate: TranslateService) {
    translate.use('ru');
  }
  changeLang(): void {
    if (this.rusLang) {
      this.rusLang = false;
      this.translate.use('en');
    } 
    else {
      this.rusLang = true;
      this.translate.use('ru');
    }
  }
}
