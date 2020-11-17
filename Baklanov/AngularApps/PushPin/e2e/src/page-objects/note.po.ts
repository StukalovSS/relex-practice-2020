import { ElementFinder, browser, by, element, ElementArrayFinder } from 'protractor';

export class NotePage {
    navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }
    getModalOpenBtn(): ElementFinder {
        return element(by.id('add-new-note'));
    }
    getModalForNoteComponent(): ElementFinder {
        return element(by.tagName('app-modal-note'));
    }
    getModalCloseBtn(): ElementFinder {
        return element(by.id('modal-note_close-btn'));
    }
    getInputForNoteHeader(): ElementFinder {
        return element(by.name('note-header-in-modal'));
    }
    getInputForNoteContent(): ElementFinder {
        return element(by.name('note-content-in-modal'));
    }
    getModalSubmitBtn(): ElementFinder {
        return element(by.id('addNote'));
    }
    getAllNotes(): ElementArrayFinder {
        return element.all(by.tagName('app-note'));
    }
    getNoteHeader(name: string): ElementFinder {
        return element(by.name(name));
    }
    getNoteContent(name: string): ElementFinder {
        return element(by.name(name));
    }
    public async inputNoteHeader(title: string): Promise<void> {
        await this.getInputForNoteHeader().clear();
        await this.getInputForNoteHeader().sendKeys(title);
    }
    public async inputNoteContent(title: string): Promise<void> {
        await this.getInputForNoteContent().clear();
        await this.getInputForNoteContent().sendKeys(title);
    }
}
