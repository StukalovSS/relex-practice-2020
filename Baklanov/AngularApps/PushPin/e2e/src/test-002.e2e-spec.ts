import { NotePage } from './page-objects/note.po';

describe('Добавление заметки:', () => {
    const page: NotePage = new NotePage();
    beforeAll(async () => {
        await page.navigateTo();
    });
    it('Отображение модального окна типа заметка', async () => {
        await page.getModalOpenBtn().click();
        expect(page.getModalForNoteComponent()?.isPresent()).toBeTruthy(
            'Отсутсвие компонента модального окна типа заметка'
        );
    });
    it('Отображение всех нужных кнопок и полей ввода', async () => {
        expect(page.getInputForNoteContent()?.isPresent()).toBeTruthy(
            'поле для ввода заголовка заметки не отображается'
        );
        expect(page.getInputForNoteHeader()?.isPresent()).toBeTruthy(
            'поле ввода для текста заметки не отображается'
        );
        expect(page.getModalCloseBtn()?.isPresent()).toBeTruthy(
            'кнопка закрытия модального окна не отображается'
        );
        expect(page.getModalSubmitBtn()?.isPresent()).toBeTruthy(
            'кнопка отправки формы не отображается'
        );
    });
    it('Закрытие модального окна без добавления заметки', async () => {
        await page.getModalCloseBtn().click();
        expect(page.getAllNotes().count()).toBe(0, 'Количество секций изменилось');
    });
    it('Добавление заметки', async () => {
        await page.getModalOpenBtn().click();
        await page.inputNoteHeader('Название заметки');
        await page.inputNoteContent('Текст заметки');
        expect(page.getInputForNoteHeader().getAttribute('value')).toBe(
            'Название заметки', 'Введённое название заметки не соответствует');
        expect(page.getInputForNoteContent().getAttribute('value')).toBe(
            'Текст заметки', 'Введённый текст заметки не соответствует');
        await page.getModalSubmitBtn().click();
        expect(page.getModalForNoteComponent()?.isPresent()).toBeFalsy('Модальное окно закрылось');
        expect(await page.getAllNotes().count()).toBe(1, 'Заметка не добавилась');
        expect(page.getNoteHeader('note-header-in-component').getText()).toBe(
            'Название заметки', 'Введённое название заметки не соответствует');
        expect(page.getNoteContent('note-content-in-component').getText()).toBe(
            'Текст заметки', 'Введённый текст заметки не соответствует');
    });
});
