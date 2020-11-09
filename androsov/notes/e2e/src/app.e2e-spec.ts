import { AppPage } from './app.po';
import { browser, By, by, element, Key, logging } from 'protractor';

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
    const sections = element.all(by.css('app-section'));
    element(by.css('.sections__form_btn')).click();
    expect(element(by.css('.sections__form_head')).isDisplayed()).toBeTruthy('Текст с надписью "Добавить секцию" должен быть видимым.');
    expect(element(by.css('.sections__form_input')).isDisplayed()).toBeTruthy('Инпут должен быть видимым.');
    expect(element(by.css('.sections__form_btn')).isDisplayed()).toBeTruthy('Кнопка с надписью "добавить секцию" должна быть видимой.');
    expect(element(by.css('.sections__add-btn_times-circle')).isDisplayed()).toBeTruthy('Иконка "крестик" должна быть видна на кнопке добавления секции.');
    expect(element(by.css('.sections__add-btn_plus')).isDisplayed()).toBeFalsy('Иконка со знаком "плюс" должна быть скрыта.');
    expect(element.all(by.css('app-section')).count()).toBe(sections.count());
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
