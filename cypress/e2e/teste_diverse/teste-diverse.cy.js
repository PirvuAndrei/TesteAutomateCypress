describe('Exemplu unde',()=> {

    //Testul verificare segment din URL
   it('verific daca un URL cotine ceva', () => {
     cy.visit('https://www.digi24.ro/stiri/actualitate/social/loto-duminica-22-decembrie-2024-trageri-speciale-de-craciun-cu-premii-suplimentate-programul-agentiilor-de-sarbatori-3055151');
     cy.url().should('include','stiri/') // verificat un segment  

   })



    //Testul cu delay
    it('asteapta 10 secunde ', () => {
        cy.visit('https://www.google.com');

        cy.get('#L2AGLb'.click());
        
        cy.wait(1000); // 10 secunde 1000 = 1sec

        cy.get('.gLFyf').type('Au trecut 10 secunde')
   
      })


      //Testul cu selector de timp atribut 

      it('asteapta 10 secunde ', () => {
        cy.visit('https://www.google.com');

        cy.get('#v').click();

        cy.get('alt="Google"]').should('be.visible'); //Selector atribut alt + assertion cu visible
        
   
      })


      // Testul screenshot pagina


      it('fac un screenshot la pagina ', () => {
        cy.visit('https://www.google.com');

        cy.screenshot(); // Face screenshot intr-un folder default
        
   
      })


      //Testul constanta si verificare continut input

      it('verificare o valoare din input', () => {

        cy.visit('https://www.google.com');

        cy.get('#L2AGLb').click();
        const googleSearch = cy.get('.gLFyf') // constanta


        googleSearch.type('123');
        googleSearch.should('have.value', '123') // Assertion conctine textul
   
      })


      
      




})