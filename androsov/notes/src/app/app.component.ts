import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'notes';

    constructor(private translator: TranslateService) {
    }
    public ngOnInit(): void {
        this.translator.setDefaultLang('ru');
        this.translator.use('ru');
    }
}
