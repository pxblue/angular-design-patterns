/// <reference types="cypress" />


describe('Sortable list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/lists/sortable-list');
    });

    it('should display page title', () => {
        cy.get('[data-cy=pxb-toolbar]').should('contain', 'Sortable List');
    });

 //   it('TODO: edit list', () => {
 //       cy.get('[data-cy=edit-save]').click()
});