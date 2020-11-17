import { ElementFinder, browser, by, element, ElementArrayFinder } from 'protractor';

export class SectionPage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }
    getModalOpenBtn(): ElementFinder {
        return element(by.id('addSection'));
    }
    getModalForSectionComponent(): ElementFinder {
        return element(by.tagName('app-modal-section'));
    }
    getModalCloseBtn(): ElementFinder {
        return element(by.id('modal-section-close-btn'));
    }
    getInputForSectionTitle(): ElementFinder {
        return element(by.name('section-header'));
    }
    getInputForSectionColor(): ElementFinder {
        return element(by.name('section-color'));
    }
    getModalFormSubmit(): ElementFinder {
        return element(by.name('modal-add-section'));
    }
    public async inputSectionTitle(title: string): Promise<void> {
       await this.getInputForSectionTitle().clear();
       await this.getInputForSectionTitle().sendKeys(title);
    }
    public async getValueOfSectionTitleInp(): Promise<string> {
        return this.getInputForSectionTitle().getAttribute('value');
    }
    getAllSections(): ElementArrayFinder {
        return element.all(by.tagName('app-section'));
    }
}
