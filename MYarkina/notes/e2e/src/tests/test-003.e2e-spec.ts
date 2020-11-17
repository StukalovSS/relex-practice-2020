import { SortPage } from '../page-objects/sort.po';
import { browser, logging } from 'protractor';

const testData = require('../data.json');


describe('Процесс сортировки заметок', () => {
  const page: SortPage = new SortPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Загрузка приложения', async () => {
    expect(page.getMenuButton()?.isPresent()).toBeTruthy('Кнопка меню действий с секцией отсутствует на странице');
  });

  it('Проверка элементов меню действий над секцией', async () => {
    await page.getMenuButton().click();
    expect(await page.getMenuSection().isDisplayed()).toBeTruthy('Меню действий с секцией не открылось');

    expect(await page.getElementByName('Переименовать').isDisplayed()).toBeTruthy('Кнопка переименовать отсутсвует в меню действий с секцией');
    expect(await page.getElementByName('Изменить цвет').isDisplayed()).toBeTruthy('Кнопка изменить цвет отсутсвует в меню действий с секцией');
    expect(await page.getElementByName('Сортировать').isDisplayed()).toBeTruthy('Кнопка сортировать отсутсвует в меню действий с секцией');
    expect(await page.getElementByName('Фильтровать').isDisplayed()).toBeTruthy('Кнопка фильтровать отсутсвует в меню действий с секцией');
    expect(await page.getElementByName('Удалить').isDisplayed()).toBeTruthy('Кнопка удалить отсутсвует в меню действий с секцией');
  });

  it('Закрытие меню действий над секцией', async () => {
    await page.getMenuButton().click();
    await page.getMenuButton().click();
    expect(await page.getMenuSection().isDisplayed()).toBeFalsy('Меню действий с секцией не закрылось');
  });

  it('Проверка элементов меню сортировки', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Сортировать').click();
    expect(await page.getElementByName('Меню сортировки').isDisplayed()).toBeTruthy('Меню сортировки не открылось');
    expect(await page.getRadioRise()?.isPresent()).toBeTruthy('Кнопка сортировки по возврастанию отсутсвует');
    expect(await page.getRadioLow()?.isPresent()).toBeTruthy('Кнопка сортировки по убыванию отсутсвует');

    expect(await page.getRadioRise().getAttribute('checked')).toBeFalsy('Кнопка сортировки по возврастанию выбрана');
    expect(await page.getRadioLow().getAttribute('checked')).toBeTruthy('Кнопка сортировки по убыванию не выбрана');
  });

  it('Закрытие меню сортировки', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Сортировать').click();
    await page.getElementByName('Сортировать').click();
    expect(await page.getElementByName('Меню сортировки').getCssValue('display')).toEqual([ 'none' ]);
  });

  it('Проверка заметок на сортировку по убыванию', async () => {
    expect(await page.getNotes().get(0).getAttribute('ng-reflect-date')).toEqual(testData.section.arrayOfNotes[0].date);
    expect(await page.getNotes().get(1).getAttribute('ng-reflect-date')).toEqual(testData.section.arrayOfNotes[1].date);
  });

  it('Проверка заметок на сортировку по возрастанию', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Сортировать').click();

    await page.getRadioRise().sendKeys( 'checked = true;' );

    expect(await page.getRadioRise().getAttribute('checked')).toBeTruthy('Кнопка сортировки по возврастанию выбрана');
    expect(await page.getRadioLow().getAttribute('checked')).toBeFalsy('Кнопка сортировки по убыванию не выбрана');

    expect(await page.getNotes().get(0).getAttribute('ng-reflect-date')).toEqual(testData.section.arrayOfNotes[1].date);
    expect(await page.getNotes().get(1).getAttribute('ng-reflect-date')).toEqual(testData.section.arrayOfNotes[0].date);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
