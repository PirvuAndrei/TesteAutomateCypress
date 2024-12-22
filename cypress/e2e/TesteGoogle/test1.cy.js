describe('Site Google.com',()=> {

     
    it('functioneeaza cu o cautare basic', () => {
      cy.visit('https://google.com');
      cy.get('#L2AGLb').click();    
      cy.get('.gLFyf').type('digisport').type('{enter}');

      cy.get('#result-stats').should('exist');
    })

   



})