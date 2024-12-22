
describe('On Linkedin',() => {


    it('I can login', () =>
{
    
    cy.visit('https://linkedin.com');

    cy.get('.nav__button-secondary').click();

    cy.get('#username').type('catapirvu98@gmail.com');

    cy.get('#password').type('parola');

    cy.get('.btn__primary--large').click();
    
    cy.get('.seconday-action-new').click();

    cy.get('#ember16').should('exist');
    
})



})
