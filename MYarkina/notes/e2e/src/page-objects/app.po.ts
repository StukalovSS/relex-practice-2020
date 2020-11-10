import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  addTestSection(): void{
    this.getNewSectionButton().click();
    this.getInputName().sendKeys('Test');
    this.getAddNewSectionButton().click();
  }

  getTitleText(): Promise<string> {
    return element(by.className('h1__text')).getText() as Promise<string>;
  }

  getNewSectionButton(): ElementFinder{
    return element(by.className('button__newsection'));
  }

  getInputName(): ElementFinder {
    return element(by.id('nameId'));
  }

  getAddNewSectionButton(): ElementFinder {
    return element(by.id('btnform'));
  }

  getCloseFormNewSection(): ElementFinder {
    return element(by.id('closeform'));
  }

  getNewSection(): ElementFinder {
    return element(by.id('1'));
  }

  getNewNodeButton(): ElementFinder {
    return element(by.className('button__newnode'));
  }

  getInputNameNote(): ElementFinder {
    return element(by.id('modal__name'));
  }

  getInputTextNote(): ElementFinder {
    return element(by.id('modal__text'));
  }

  getInputDateNote(): ElementFinder {
    return element(by.id('modal__date'));
  }

  getAddNewNoteButton(): ElementFinder {
    return element(by.id('add__but'));
  }

  getCloseFormNewNote(): ElementFinder {
    return element(by.id('close__but'));
  }

  getNewNode(): ElementFinder {
    return element(by.tagName('app-note'));
  }

}

