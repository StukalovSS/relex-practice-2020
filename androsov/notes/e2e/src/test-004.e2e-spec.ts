import { by, element, ElementFinder } from 'protractor';


describe('Фильтрация заметок.', () => {
    let dropDownMenu: ElementFinder;
    let section: ElementFinder;

    beforeAll(() => {
        dropDownMenu = element(by.tagName('app-section')).element(by.tagName('app-drop-down-menu'));
        section = element(by.tagName('app-section'));
    });

    it('Чекбоксы присутствуют в выпадающем меню.', () => {
        expect(dropDownMenu.element(by.name('label-even')).isDisplayed())
            .toBeTruthy('Кнопка отображения заметок с четной датой присутствует на странице.');

        expect(dropDownMenu.element(by.name('label-not-even')).isDisplayed())
            .toBeTruthy('Кнопка отображения заметок с нечетной датой присутствует на странице.');
    });

    it('Фильтрация заметок с четной даитой выполнена успешно.', () => {
        dropDownMenu.element(by.name('label-even')).click();

        const dateIsEvenBools = section.all(by.tagName('app-note'))
            .map( note => note.element(by.cssContainingText('span', /[0-2]\d \D\S+ 2020, [0-22]\d:[0-5]\d/)).getText()
                .then( dateStr => +dateStr.slice(0, 2) % 2 === 1 )
            );

        expect((dateIsEvenBools as Promise<boolean[]>).then( arr => arr.reduce( (prev, cur) => prev && cur, true )))
            .toBeTruthy('Четные заметки не отображаются.');
    });

    it('Фильтрация всех заметок выполнена успешно.', () => {
        dropDownMenu.element(by.name('label-not-even')).click();
        expect(section.all(by.tagName('app-note')).count()).toBe(0);
    });

    it('Отображение заметок с четной даитой выполнено успешно.', () => {
        dropDownMenu.element(by.name('label-even')).click();

        const dateIsEvenBools = section.all(by.tagName('app-note'))
            .map( note => note.element(by.cssContainingText('span', /[0-2]\d \D\S+ 2020, [0-22]\d:[0-5]\d/)).getText()
                .then( dateStr => +dateStr.slice(0, 2) % 2 === 0 )
            );

        expect((dateIsEvenBools as Promise<boolean[]>).then( arr => arr.reduce( (prev, cur) => prev && cur, true )))
            .toBeTruthy('Четные заметки отображаются.');
    });

    it('Отображение всех заметок выполнено успешно.', async () => {
        dropDownMenu.element(by.name('label-not-even')).click();

        const countEvenNotes  = await section.all(by.tagName('app-note'))
            .map( note => note.element(by.cssContainingText('span', /[0-2]\d \D\S+ 2020, [0-22]\d:[0-5]\d/)).getText()
                .then( dateStr => +dateStr.slice(0, 2) )
            ).then( arr => (arr as number[]).filter( n => n % 2 === 0 ).length );

        const countNotEvenNotes  = await section.all(by.tagName('app-note'))
            .map( note => note.element(by.cssContainingText('span', /[0-2]\d \D\S+ 2020, [0-22]\d:[0-5]\d/)).getText()
                .then( dateStr => +dateStr.slice(0, 2) )
            ).then( arr => (arr as number[]).filter( n => n % 2 === 1 ).length );

        expect(countEvenNotes + countNotEvenNotes).toBe(20);
    });
});
