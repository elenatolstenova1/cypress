/// <reference types="cypress" />

context('Open source search in Hub', () => {
    beforeEach(() => {
        cy.visit('https://habr.com/ru/top/')
    })

    it('find and open Open source', () => {
        cy.get('a[href="https://habr.com/ru/hubs/"]:nth-child(3)').click();
        cy.url().should('include','/hubs');
        cy.get('input#hubs_suggest').click().type('open source {enter}');
        cy.get('#hub_144 > div.table-grid__item.table-grid__item_left > div > div > div > a').click();
        cy.get('.page-header__info-title').should('contain.text','Open source');
        cy.get('.page-header__info-desc').should('contain.text', 'Открытое программное обеспечение');
    })


    })


