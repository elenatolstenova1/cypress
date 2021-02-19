/// <reference types="cypress" />

context('Open source search in Hub', () => {
    beforeEach(() => {
        cy.visit('https://habr.com/ru/top/');
        cy.fixture('company_fixture').as('text');
    })

    it('find and open Open source', () => {
        cy.get('@text').then((testdata) => {
        cy.get('a[href="https://habr.com/ru/companies/"]:nth-child(5)').click();
        cy.wait(3000);
        cy.url().should('include','/companies');
        cy.get('input#companies_suggest').click().type(testdata.company_name, '{enter}');
        cy.wait(3000);
        cy.get('a.list-snippet__title-link').click();
        cy.wait(6000);
        cy.get('#company_5589 > div.page-header__info > a').should('contain.text',testdata.company_name);
        })
    })


    })


