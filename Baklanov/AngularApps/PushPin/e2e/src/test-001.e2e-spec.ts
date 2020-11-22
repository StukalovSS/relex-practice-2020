import { SectionPage } from './page-objects/section.po';

describe('Добавление секции:', () => {
    const page: SectionPage = new SectionPage();
    beforeAll(async () => {
        await page.navigateTo();
    });
    it('Отображение модального окна типа секция', async () => {
        await page.getModalOpenBtn().click();
        expect(page.getModalForSectionComponent()?.isPresent()).toBeTruthy(
            'Отсутсвие компонента модального окна типа секция'
        );
    });
    it('Отображение всех нужных кнопок и полей ввода', async () => {
        expect(page.getInputForSectionColor()?.isPresent()).toBeTruthy(
            'поле для ввода цвета не отображается'
        );
        expect(page.getInputForSectionTitle()?.isPresent()).toBeTruthy(
            'поле ввода для заголовка секции не отображается'
        );
        expect(page.getModalCloseBtn()?.isPresent()).toBeTruthy(
            'кнопка закрытия модального окна не отображается'
        );
        expect(page.getModalFormSubmit()?.isPresent()).toBeTruthy(
            'кнопка отправки формы не отображается'
        );
    });
    it('Закрытие модального окна без добавления секции', async () => {
        await page.getModalCloseBtn().click();
        expect(page.getAllSections().count()).toBe(0, 'Количество секций изменилось');
    });
    it('Создание и добавление секции', async () => {
        await page.getModalOpenBtn().click();
        await page.inputSectionTitle('Введите название секции');
        expect(page.getValueOfSectionTitleInp()).toBe(
            'Введите название секции', 'Введённое название секции не соответствует');
        await page.getModalFormSubmit().click();
        expect(page.getModalForSectionComponent()?.isPresent()).toBeFalsy('Модальное окно закрылось');
        expect(page.getAllSections().count()).toBe(1, 'Секция не добавилась');
        expect(page.getAllSections().get(0).getText()).toBe('Введите название секции', 'Заголовок не добавился');
    });
});
