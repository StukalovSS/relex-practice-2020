import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';
const testData = require('../data.json');

describe('Процесс добавления новой секции', () => {
  const page: AppPage = new AppPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Загрузка приложения', async () => {
    expect(page.getNewSectionButton().isPresent()).toBeTruthy('Кнопка добавления новой секции отсутствует на странице');
  });

  it('Добавление новой секции с пустым названием', async () => {
    await page.getNewSectionButton().click();
    expect(page.getFormNewSection().isPresent()).toBeTruthy('Форма для добавления новой секции не открылась');

    expect(page.getInputName().isPresent()).toBeTruthy('Поле название отсутсвует на форме');
    expect(page.getCloseFormNewSection().isPresent()).toBeTruthy('Кнопка закрытия формы отсутствует на странице');
    expect(page.getAddNewSectionButton().isPresent()).toBeTruthy('Кнопка добавления новой секции отсутствует на странице');

    expect(page.getAddNewSectionButton().isEnabled()).toBeFalsy('Кнопка добавления новой секции активна');
    expect(page.getCloseFormNewSection().isEnabled()).toBeTruthy('Кнопка закрытия формы не активна');

    expect((await page.getInputName().getText()).length === 0).toBeTruthy('Название секции не пустое');
    await page.getAddNewSectionButton().click();
    expect(page.getNewSection().isPresent()).toBeFalsy('Новая секция с пустым названием добавилась');
    expect(page.getFormNewSection().isPresent()).toBeTruthy('Форма для добавления новой секции закрылась');
  });

  it('Добавление новой секции с непустым названием', async () => {
    await page.getNewSectionButton().click();
    await page.getInputName().sendKeys(testData.section.name);
    expect(await page.getInputName().getAttribute('value')).toEqual(testData.section.name);

    expect(page.getNewSection().count()).toBe(0);
    await page.getAddNewSectionButton().click();
    expect(page.getFormNewSection().isPresent()).toBeFalsy('Форма для добавления новой секции не закрылась');
    expect(page.getNewSection().count()).toBe(1);
    expect(page.getNewSection().getAttribute('ng-reflect-name')).toEqual([ testData.section.name ]);
  });

  it('Закрытие формы добавления новой секции', async () => {
    await page.getNewSectionButton().click();
    await page.getCloseFormNewSection().click();
    expect(page.getInputName().isPresent()).toBeFalsy('Форма для добавления новой секции не закрылась');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
