import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';

describe('Процесс добавления новой заметки', () => {
  const page: AppPage = new AppPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('Добавление заметки с пустыми полями', async () => {
    page.addTestSection();
    expect(page.getNewNodeButton().isPresent()).toBe(true);
    await page.getNewNodeButton().click();
    expect(page.getInputNameNote().isPresent()).toBe(true);
    expect(page.getInputTextNote().isPresent()).toBe(true);
    expect(page.getInputDateNote().isPresent()).toBe(true);
    expect(page.getAddNewNoteButton().isEnabled()).toBe(false);
    expect(page.getCloseFormNewNote().isPresent()).toBe(true);
    await page.getAddNewNoteButton().click();
    expect(page.getNewNode().isPresent()).toBeFalsy('Новая заметка с пустымы полями добавилась');
  });

  it('Добавление новой заметки с непустыми полями', async () => {
    await page.getNewNodeButton().click();
    await page.getInputNameNote().sendKeys('Test');
    await page.getInputTextNote().sendKeys('Test');
    await page.getAddNewNoteButton().click();
    expect(page.getNewNode().isPresent()).toBeTruthy('Новая заметка с непустыми полями не добавилась');
  });

  it('Закрытие формы добавления новой секции', async () => {
    await page.getNewNodeButton().click();
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
