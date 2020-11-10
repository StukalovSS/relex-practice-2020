import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';

describe('Процесс добавления новой секции', () => {
  const page: AppPage = new AppPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Добавление новой секции с пустым названием', async () => {
    expect(page.getNewSectionButton().isPresent()).toBe(true);
    await page.getNewSectionButton().click();
    expect(page.getCloseFormNewSection().isPresent()).toBe(true);
    expect(page.getAddNewSectionButton().isPresent()).toBe(true);
    expect(page.getAddNewSectionButton().isEnabled()).toBe(false);
    expect(page.getInputName().isPresent()).toBe(true);
    await page.getAddNewSectionButton().click();
    expect(page.getNewSection().isPresent()).toBeFalsy('Новая секция с пустым названием добавилась');
  });

  it('Добавление новой секции с непустым названием', async () => {
    await page.getNewSectionButton().click();
    await page.getInputName().sendKeys('Test');
    await page.getAddNewSectionButton().click();
    expect(page.getNewSection().isPresent()).toBeTruthy('Новая секция с непустым названием не добавилась');
  });

  it('Закрытие формы добавления новой секции', async () => {
    await page.getNewSectionButton().click();
    await page.getCloseFormNewSection().click();
    expect(page.getInputName().isPresent()).toBeFalsy('Форма не закрылась');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
