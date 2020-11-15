import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { SectionsDataService } from './../sections-data.service';
import { ISection } from './section.interface';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

/**
 * Класс отвечает за хранение секций.
 */
export class ContainerComponent implements OnInit {
    public readonly icons = {
        faPlus,
        faTimesCircle
    };
    public invisible = true;
    public languagesListInvisible = true;

    public sectionHeaderInput: FormGroup;
    private lang = 'ru';

    constructor(fb: FormBuilder, public data: SectionsDataService, private router: Router, private activatedRoute: ActivatedRoute,
                private translator: TranslateService) {
        this.sectionHeaderInput = fb.group({
            sectionHeader: new FormControl('', Validators.required)
        });
    }

    public ngOnInit(): void {
        this.translator.setDefaultLang('ru');

        this.activatedRoute.params.subscribe(params => {
            if (params.lang) {
                this.translator.use(params.lang);
            } else {
                this.translator.use('ru');
            }
        });

        this.activatedRoute.queryParams.subscribe(params => {
            if (params.even) {
                (document.getElementById('all-sections-even') as HTMLInputElement).checked = params.even === 'true';
            }
            if (params['not-even']) {
                (document.getElementById('all-sections-not-even') as HTMLInputElement).checked = params['not-even'] === 'true';
            }
            if (params['sort-ascending']) {
                Array.from(document.querySelectorAll('input')).filter(input => {
                    return input.name === 'all-sections-sort-ascending';
                })[params['sort-ascending'] === 'true' ? 0 : 1].checked = true;
            }
        });
    }

    public addSection(): void {
        this.data.addSection(this.sectionHeaderInput.value.sectionHeader, []);
        this.changeVisibillity();
    }

    /**
     * Изменение видимости формы.
     */
    public changeVisibillity(): void {
        this.invisible = !this.invisible;
    }

    public changeLangListvisibillity(): void {
        this.languagesListInvisible = !this.languagesListInvisible;
    }

    /**
     * Изменение параметров url в зависимости от установленных флагов.
     */
    public changeAllSectionsViewFormat(): void {
        this.router.navigate(['home', this.lang], {
            queryParams: {
                even: (document.getElementById('all-sections-even') as HTMLInputElement).checked,
                'not-even': (document.getElementById('all-sections-not-even') as HTMLInputElement).checked,
                'sort-ascending': Array.from(document.querySelectorAll('input')).filter(input => {
                    return input.name === 'all-sections-sort-ascending';
                })[0].checked
            }
        });
    }

    public changeLanguage(e: any): void {
        this.lang = e.target.value;
        this.changeAllSectionsViewFormat();
    }

    public dropSections(e: CdkDragDrop<ISection[]>): void {
        this.data.changeSectionPosition(e.previousIndex, e.currentIndex);
    }
}
