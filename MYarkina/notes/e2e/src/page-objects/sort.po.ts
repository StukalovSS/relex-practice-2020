import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class SortPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getMenuButton(): ElementFinder {
    return element(by.className('icon__facogs'));
  }

  getMenuSection(): ElementFinder {
    return element(by.className('dropdown-content'));
  }

  getElementByName(str: string): ElementArrayFinder {
    return element.all(by.name(str));
  }

  getRadioLow(): ElementFinder {
    return element(by.id('low1'));
  }

  getRadioRise(): ElementFinder {
    return element(by.id('rise1'));
  }

  getNotes(): ElementArrayFinder{
    return element.all(by.tagName('app-note'));
  }

  getCheckOdd(): ElementFinder {
    return element(by.id('filter1'));
  }

  getCheckEven(): ElementFinder {
    return element(by.id('even1'));
  }
}

