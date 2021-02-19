/// <reference types="cypress" />

context('Open source search in Hub', () => {
    beforeEach(() => {
        cy.visit('https://habr.com/ru/top/');
    })

    it ('change language into English', () => {
        cy.get('.btn_navbar_lang').click();
        cy.wait(3000);
        cy.get('#js-lang_settings > div > div.popup__head.popup__head_lang-settings > span').should('contain.text', 'Настройка языка');
        cy.wait(3000);
        cy.get('#lang-settings-form > fieldset:nth-child(1) > legend').should('contain.text', 'Интерфейс');
        cy.get('#lang-settings-form > fieldset:nth-child(1) > div:nth-child(3) > span > label').click();
        cy.wait(3000);
        cy.get('#lang-settings-form > div > button').should('contain.text', 'Save settings').click();
        cy.get('.page-header.page-header_110 ').should('contain.text', 'All streams');
        cy.get('.tabs-menu__item-text.tabs-menu__item-text_active').should('contain.text', 'Articles');
        cy.get('body > div.layout > div.layout__row.layout__row_body > div > section > div.content_left.js-content_left > div.tabs > div.tabs__level.tabs-level_top.tabs-menu > a:nth-child(2) > h3').should('contain.text', 'Hubs');
        cy.get('body > div.layout > div.layout__row.layout__row_body > div > section > div.content_left.js-content_left > div.tabs > div.tabs__level.tabs-level_top.tabs-menu > a:nth-child(3) > h3').should('contain.text', 'Authors');
        cy.get('body > div.layout > div.layout__row.layout__row_body > div > section > div.content_left.js-content_left > div.tabs > div.tabs__level.tabs-level_top.tabs-menu > a:nth-child(4) > h3').should('contain.text', 'Companies');
    })

    })