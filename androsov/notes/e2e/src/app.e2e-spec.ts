import { AppPage } from './app.po';
import { by, element } from 'protractor';

describe('Добавление секции пользователем.', () => {
  const page: AppPage = new AppPage();
  beforeAll(() => {
    page.navigateTo();
  });

  it('Изменение внешнего вида кнопки добавления секции при клике на нее.', () => {
    element(by.css('.sections__add-btn_plus')).click();
    expect(element(by.css('.sections__form_head')).isDisplayed()).toBeTruthy('Текст с надписью "Добавить секцию" должен появиться сейчас.');
    expect(element(by.css('.sections__form_input')).isDisplayed()).toBeTruthy('Инпут должен появится сейчас.');
    expect(element(by.css('.sections__form_btn')).isDisplayed()).toBeTruthy('Кнопка с надписью "добавить секцию" должна появиться сейчас.');
    expect(element(by.css('.sections__form_btn')).getAttribute('disabled')).toBeTruthy('Кнопка должна быть недоступна для нажатия.');
    expect(element(by.css('.sections__add-btn_times-circle')).isDisplayed()).toBeTruthy('Иконка "крестик" должна быть видна на кнопке добавления секции.');
    expect(element(by.css('.sections__add-btn_plus')).isDisplayed()).toBeFalsy('Иконка со знаком "плюс" должна быть скрыта.');
  });

  it('Отсутствие у пользователя возможности создать секцию, где вместо имени пустая строка.', () => {
    const sectionsCount = element.all(by.css('app-section')).count();
    element(by.css('.sections__form_btn')).click();
    expect(element(by.css('.sections__form_head')).isDisplayed()).toBeTruthy('Текст с надписью "Добавить секцию" должен быть видимым.');
    expect(element(by.css('.sections__form_input')).isDisplayed()).toBeTruthy('Инпут должен быть видимым.');
    expect(element(by.css('.sections__form_btn')).isDisplayed()).toBeTruthy('Кнопка с надписью "добавить секцию" должна быть видимой.');
    expect(element(by.css('.sections__add-btn_times-circle')).isDisplayed()).toBeTruthy('Иконка "крестик" должна быть видна на кнопке добавления секции.');
    expect(element(by.css('.sections__add-btn_plus')).isDisplayed()).toBeFalsy('Иконка со знаком "плюс" должна быть скрыта.');
    expect(element.all(by.css('app-section')).count()).toBe(sectionsCount);
  });

  it('Закрытие поля ввода имени секции при клике на “крестик” в правом верхнем углу.', () => {
    element(by.css('.sections__add-btn_times-circle')).click();
    expect(element(by.css('.sections__form_head')).isDisplayed()).toBeFalsy('Текст с надписью "Добавить секцию" должен исчезнуть.');
    expect(element(by.css('.sections__form_input')).isDisplayed()).toBeFalsy('Инпут должен исчезнуть.');
    expect(element(by.css('.sections__form_btn')).isDisplayed()).toBeFalsy('Кнопка с надписью "добавить секцию" должна исчезнуть.');
    expect(element(by.css('.sections__add-btn_times-circle')).isDisplayed()).toBeFalsy('Иконка "крестик" должна исчезнуть.');
    expect(element(by.css('.sections__add-btn_plus')).isDisplayed()).toBeTruthy('Иконка со знаком "плюс" должна появиться.');
  });

  it('Добавление новой секции после ввода имени и клика на кнопку с надписью “добавить секцию”.', () => {
    const sectionsCount = element.all(by.css('app-section')).count();
    element(by.css('.sections__add-btn_plus')).click();
    element(by.css('.sections__form_input')).sendKeys('section');
    element(by.css('.sections__form_btn')).click();
    expect(element.all(by.css('app-section')).count()).toBe(sectionsCount.then( count => count + 1) );
    expect(element.all(by.css('app-section')).last().
      element(by.cssContainingText('span', 'section')).isPresent()).toBeTruthy('Новая секция должна быть создана и стоять после остальных секций.');
    expect(element(by.css('.sections__form_head')).isDisplayed()).toBeFalsy('Текст с надписью "Добавить секцию" должен исчезнуть.');
    expect(element(by.css('.sections__form_input')).isDisplayed()).toBeFalsy('Инпут должен исчезнуть.');
    expect(element(by.css('.sections__form_btn')).isDisplayed()).toBeFalsy('Кнопка с надписью "добавить секцию" должна исчезнуть.');
    expect(element(by.css('.sections__add-btn_times-circle')).isDisplayed()).toBeFalsy('Иконка "крестик" должна исчезнуть.');
    expect(element(by.css('.sections__add-btn_plus')).isDisplayed()).toBeTruthy('Иконка со знаком "плюс" должна появиться.');
  });
});

describe('Добавление заметок пользователем', () => {
  const page: AppPage = new AppPage();
  beforeAll(() => {
    page.navigateTo();
    element(by.css('.sections__add-btn_plus')).click();
    element(by.css('.sections__form_input')).sendKeys('section');
    element(by.css('.sections__form_btn')).click();
  });

  const last = element.all(by.css('app-section')).last();

  it('Отображение модального окна с формой при клике на кнопку добавления заметки.', () => {
    last.element(by.css('.add-btn')).click();

    const appModalInput = last.element(by.css('app-modal-input'));
    expect(appModalInput.isDisplayed()).toBeTruthy('Должно появится модальное окно');

    expect(appModalInput
      .element(by.css('form')).isDisplayed()).toBeTruthy('Должна отображаться форма внутри модального окна.');

    expect(appModalInput
      .element(by.css('.icon')).isDisplayed()).toBeTruthy('Должна отображаться иконка "крестик" внутри модального окна.');
  });

  it('Отсутствие у пользователя возможности создать заметку, где вместо имени пустая строка.', () => {
    const notesCount = element.all(by.css('app-note')).count();
    const appModalInput = last.element(by.css('app-modal-input'));

    appModalInput.element(by.css('.form-container__add-btn')).click();
    expect(appModalInput.isDisplayed()).toBeTruthy('Модальное окно не должно исчезнуть.');
    expect(element.all(by.css('app-note')).count()).toBe(notesCount);
  });

  it('Сокрытие модального окна с формой после клика на иконку ”крестик” на модальном окне.', () => {
    const appModalInput = last.element(by.css('app-modal-input'));
    appModalInput.element(by.css('.icon')).click();
    expect(appModalInput.isDisplayed()).toBeFalsy('Модальное окно должна исчезнуть.');
  });

  it('Добавление новой заметки после заполнения формы и клика на кнопку с надписью “добавить заметку”.', () => {
    last.element(by.css('.add-btn')).click();

    const appModalInput = last.element(by.css('app-modal-input'));
    const notesCount = element.all(by.css('app-note')).count();

    appModalInput.element(by.name('header')).sendKeys('note');
    appModalInput.element(by.name('text')).sendKeys('text');
    appModalInput.element(by.name('date')).clear();
    appModalInput.element(by.name('date')).sendKeys('19/11/2020');
    appModalInput.element(by.css('.form-container__add-btn')).click();

    expect(appModalInput.isDisplayed()).toBeFalsy('Модальное окно должна исчезнуть.');
    expect(last.element(by.cssContainingText('.text', 'text')).isDisplayed())
      .toBeTruthy('Новая заметка с надписью "текст" должна быть создана.');

    expect(last.element(by.cssContainingText('span', 'note')).isDisplayed())
      .toBeTruthy('Новая заметка с именем "note" должна быть создана.');

    expect(element.all(by.css('app-note')).count()).toBe(notesCount.then( n => n + 1 ));
  });
});
