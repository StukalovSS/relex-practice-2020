import { browser, logging } from 'protractor';
import { SortPage } from '../page-objects/sort.po';
const testData = require('../data.json');


describe('Процесс фильтрации заметок', () => {
  const page: SortPage = new SortPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Проверка элементов меню фильтрации', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Фильтровать').click();
    expect(await page.getElementByName('Меню фильтрации').getCssValue('display')).toEqual([ 'block' ]);
    expect(await page.getCheckEven().isPresent()).toBeTruthy('Кнопка фильтрации по четным датам отсутсвует');
    expect(await page.getCheckOdd().isPresent()).toBeTruthy('Кнопка фильтрации по нечетным датам отсутсвует');

    expect(await page.getCheckEven().getAttribute('checked')).toBeFalsy('Кнопка фильтрации по четным датам выбрана');
    expect(await page.getCheckOdd().getAttribute('checked')).toBeFalsy('Кнопка фильтрации по нечетным датам выбрана');
  });

  it('Закрытие меню сортировки', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Фильтровать').click();
    await page.getElementByName('Фильтровать').click();
    expect(await page.getElementByName('Меню фильтрации').getCssValue('display')).toEqual([ 'none' ]);
  });

  it('Проверка заметок на фильтрацию, когда оба чекбокса не выбраны', async () => {
    expect(await page.getNotes().get(0).isDisplayed()).toBeTruthy('Не все заметки отображаются');
    expect(await page.getNotes().get(1).isDisplayed()).toBeTruthy('Не все заметки отображаются');
  });

  it('Проверка заметок на фильтрацию, когда оба чекбокса выбраны', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Фильтровать').click();

    await browser.executeScript('arguments[0].click();', page.getCheckEven());
    await browser.executeScript('arguments[0].click();', page.getCheckOdd());

    expect(await page.getCheckEven().getAttribute('checked')).toBeTruthy('Кнопка фильтрации по четным датам не выбрана');
    expect(await page.getCheckOdd().getAttribute('checked')).toBeTruthy('Кнопка фильтрации по нечетным датам не выбрана');

    expect(await page.getNotes().get(0).isDisplayed()).toBeTruthy('Не все заметки отображаются');
    expect(await page.getNotes().get(1).isDisplayed()).toBeTruthy('Не все заметки отображаются');
  });

  it('Проверка заметок на фильтрацию, когда выбран только чекбокс четные даты', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Фильтровать').click();

    await browser.executeScript('arguments[0].click();', page.getCheckEven());

    expect(await page.getCheckEven().getAttribute('checked')).toBeTruthy('Кнопка фильтрации по четным датам не выбрана');
    expect(await page.getCheckOdd().getAttribute('checked')).toBeFalsy('Кнопка фильтрации по нечетным датам выбрана');

    expect(await page.getNotes().getAttribute('ng-reflect-date')).toEqual([ testData.section.arrayOfNotes[0].date ]);
  });

  it('Проверка заметок на фильтрацию, когда выбран только чекбокс нечетные даты', async () => {
    await page.getMenuButton().click();
    await page.getElementByName('Фильтровать').click();

    browser.executeScript('arguments[0].click();', page.getCheckOdd());

    expect(await page.getCheckEven().getAttribute('checked')).toBeFalsy('Кнопка фильтрации по четным датам выбрана');
    expect(await page.getCheckOdd().getAttribute('checked')).toBeTruthy('Кнопка фильтрации по нечетным датам не выбрана');

    expect(await page.getNotes().getAttribute('ng-reflect-date')).toEqual([ testData.section.arrayOfNotes[1].date ]);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
