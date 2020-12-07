import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';
import { DatePipe } from '@angular/common';
const testData = require('../data.json');


describe('Процесс добавления новой заметки', () => {
  const page: AppPage = new AppPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Загрузка приложения', async () => {
    expect(page.getNewNoteButton().isPresent()).toBeTruthy('Кнопка добавления новой заметки отсутствует на странице');
  });

  it('Добавление новой заметки с пустыми полями', async () => {
    await page.getNewNoteButton().click();
    expect(page.getFormNewNote().isPresent()).toBeTruthy('Форма для добавления новой заметки не открылась');

    expect(page.getInputNameNote().isPresent()).toBeTruthy('Поле название отсутствует на странице');
    expect(page.getInputTextNote().isPresent()).toBeTruthy('Поле содержание заметки отсутствует на странице');
    expect(page.getInputDateNote().isPresent()).toBeTruthy('Поле дата отсутствует на странице');
    expect(page.getAddNewNoteButton().isPresent()).toBeTruthy('Кнопка добавить отсутствует на странице');
    expect(page.getCloseFormNewNote().isPresent()).toBeTruthy('Кнопка закрыть отсутствует на странице');

    expect(page.getAddNewNoteButton().isEnabled()).toBeFalsy('Кнопка добавления новой заметки активна');
    expect(page.getCloseFormNewNote().isEnabled()).toBeTruthy('Кнопка закрытия формы не активна');
    expect(await page.getInputDateNote().getAttribute('value')).toEqual(new DatePipe('en-US').transform(new Date(), 'dd.MM.yyyy HH:mm'));

    expect((await page.getInputNameNote().getText()).length === 0).toBeTruthy('Название заметки не пустое');
    expect((await page.getInputTextNote().getText()).length === 0).toBeTruthy('Содержимое заметки не пустое');
    await page.getAddNewNoteButton().click();
    expect(page.getNewNote().isPresent()).toBeFalsy('Новая заметка с пустымы полями добавилась');
    expect(page.getFormNewNote().isPresent()).toBeTruthy('Форма для добавления новой заметки закрылась');
  });

  it('Добавление новой заметки с непустыми полями', async () => {
    await page.getNewNoteButton().click();
    await page.getInputNameNote().sendKeys(testData.section.arrayOfNotes[0].name);
    expect(await page.getInputNameNote().getAttribute('value')).toEqual(testData.section.arrayOfNotes[0].name);
    await page.getInputTextNote().sendKeys(testData.section.arrayOfNotes[0].text);
    expect(await page.getInputTextNote().getAttribute('value')).toEqual(testData.section.arrayOfNotes[0].text);
    await page.getInputDateNote().clear();
    await page.getInputDateNote().sendKeys(testData.section.arrayOfNotes[0].date);
    expect(await page.getInputDateNote().getAttribute('value')).toEqual(testData.section.arrayOfNotes[0].date);

    expect(page.getNewNote().count()).toBe(0);
    await page.getAddNewNoteButton().click();
    expect(page.getFormNewNote().isPresent()).toBeFalsy('Форма для добавления новой заметки не закрылась');
    expect(page.getNewNote().count()).toBe(1);
    expect(page.getNewNote().getAttribute('ng-reflect-name')).toEqual([ testData.section.arrayOfNotes[0].name ]);
    expect(page.getNewNote().getAttribute('ng-reflect-node-txt')).toEqual([ testData.section.arrayOfNotes[0].text ]);

    await page.getNewNoteButton().click();
    await page.getInputNameNote().sendKeys(testData.section.arrayOfNotes[1].name);
    await page.getInputTextNote().sendKeys(testData.section.arrayOfNotes[1].text);
    await page.getInputDateNote().clear();
    await page.getInputDateNote().sendKeys(testData.section.arrayOfNotes[1].date);
    await page.getAddNewNoteButton().click();
  });

  it('Закрытие формы добавления новой заметки', async () => {
    await page.getNewNoteButton().click();
    await page.getCloseFormNewNote().click();
    expect(page.getInputNameNote().isPresent()).toBeFalsy('Форма не закрылась');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
