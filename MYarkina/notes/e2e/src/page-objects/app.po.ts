import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getFormNewSection(): ElementFinder {
    return element(by.tagName('app-modalwindowsection'));
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

  getNewSection(): ElementArrayFinder {
    return element.all(by.tagName('app-section'));
  }

  getFormNewNote(): ElementFinder {
    return element(by.tagName('app-modalwindownote'));
  }

  getNewNoteButton(): ElementFinder {
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

  getNewNote(): ElementArrayFinder {
    return element.all(by.tagName('app-note'));
  }

}

