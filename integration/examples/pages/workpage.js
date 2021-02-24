class workPage {
    linkToJobPage(){
        return cy.get('a[href="https://jobs.dou.ua/]');
    }

    inputForSearchJob() {
        return cy.get('input.job');
    }

    btnSearchOnJobPage(){
        return cy.get('input.btn-search');
    }
}

export default workPage;