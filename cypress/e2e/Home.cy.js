describe("Kiwoko Home Page", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    
    beforeEach(()=>{
        cy.visit("https://www.kiwoko.com/");
    });

    it('Validates that home page contains a title', ()=>{
        cy.title().should("include", "Kiwoko Mundo Animal");
    });

    
    it('Validates that home page contains a logo', ()=>{
        cy.get(".logo-home").should("exist");
    });

    it('Validates that home page contains a menu', ()=>{
        cy.get(".megamenu").should("exist");
    });
    
    it('Validates that home page contains a search input', ()=>{
        cy.get(".site-search").should("exist");
    });
    
     it('Validates that home page contains a cart', ()=>{
        cy.get('.minicart-link > .minicart-icon').should("exist");
    });

    it('Validates that home page contains a footer', ()=>{
        cy.get('#footercontent > .container').should("exist");
    });

    it('Validates that home page contains a social media icons', ()=>{
        cy.get('.content-asset > .social-links').should("exist");
    });
});