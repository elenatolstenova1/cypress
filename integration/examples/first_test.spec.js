/// <reference types="cypress" />
import workPage from '../examples/pages/workpage'

context('Verify the links', () => {
    const workPageElements = new workPage();
    beforeEach (() => {
        cy.visit('https://dou.ua/');
        cy.fixture('first_test').as('text');
        cy.fixture("job_search_page").as('textJobPage');
    })
    it.skip('Click on forum', () =>{
        cy.get('a[href="https://dou.ua/forums/"]').click();
        cy.url().should('include', 'forums/');
        cy.get('a[href="https://dou.ua/forums/latest/"]').should('have.text', 'Новые');
        cy.get ('div.add-content-link a').should('have.text', 'Добавить топик');
        cy.get('div.b-sidebar-comments h3').should('have.text','Комментарии');
        cy.get('li.menu_tech +li div a').should('have.prop', 'href', 'https://dou.ua/forums/tags/tech/');
    })

    it.skip ('search by selenium text', () => {
        cy.get('@text').then((testdata) => {
        cy.get('input#txtGlobalSearch').should('be.visible').click().type('selenium').type(testdata.selenium_text);
        cy.url().should('include', 'search/?q=selenium');
        cy.get('div.gsc-result-info').should('contain.text','Найдено результатов: примерно');
        cy.get('input[name="search"]').clear().type(testdata.cypress_text);
        cy.get('button.gsc-search-button-v2').click();
        cy.wait(5000);
        })
    })

    it('search by text on job page', () => {
        cy.get('@textJobPage').then ((jobpagetextdata) => {
            workPageElements.linkToJobPage().should('be.visible').trigger('mouseover').click();
            cy.wait(3000);
            // cy.url().should('include', 'https://jobs.dou.ua/');
            workPageElements.inputForSearchJob().click().type(jobpagetextdata.javascript_search_text);
            workPageElements.btnSearchOnJobPage().should('be.visible');
        })
    })
}
)