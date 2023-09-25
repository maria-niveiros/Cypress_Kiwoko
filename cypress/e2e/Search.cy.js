describe("Kiwoko search page", ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(()=>{
        cy.visit("https://www.kiwoko.com/");
        cy.get('#onetrust-pc-btn-handler').click();
        cy.get('.ot-pc-refuse-all-handler').click();
    });

    let keyword = "Rascador";
    let keyword2= " ";
    let keyword3= 'SELECT * FROM products WHERE product.id = 124';
    let keyword4= 'Champú';
    let length = 5;

    function find(item){
        cy.get('.search > .site-search > .js-site-search-container > .form-control').type(item);
        cy.get('.search > .site-search > .js-site-search-container > .kwicon-search').click();
    }

     it("Validate a valid website search", ()=>{
        find(keyword4);
        cy.get('.search-keywords').should("exist");
         for (var i = 0; i <length; i++) {
            cy.get('[data-pos='+i+'] > .product > .product-tile > .tile-body > .pdp-link > .link > .text-base').should("exist");
            cy.get('[data-pos=' +i+'] > .product > .product-tile > .tile-body > .pdp-link > .link > .text-base').should("contain.text", keyword4, {matchCase: false}); 
        }
    }); 
  
    it ("Validate an invalid search on the website", () => {
        find(keyword3);
        cy.get('.result-count > .text-uppercase').should('include.text','No hemos encontrado lo que buscabas');
        cy.get('.search-keywords').should('include.text', keyword3);

    });

    it("Perform an empty search on the website", ()=>{
        find(keyword2);
        cy.get('.result-count >.text-uppercase').should('include.text','No hemos encontrado lo que buscabas');

    }); 

     it("Validate response with multiple pages to a search on the website", ()=>{
         find(keyword);
         cy.get('.search-keywords').should("exist");
         cy.wait(3000)
         cy.get('.show-more > .text-center > .btn').click();
        cy.get('[data-pos= 0] > .product > .product-tile > .tile-body > .pdp-link > .link > .text-base').should("include.text", keyword, {matchCase: false}); 
        cy.get('.show-more > .text-center > .btn').should('contain.text', '\nMás Resultados\n');
     });

    it("Filter search results by brand",( )=>{
        find(keyword);
        cy.get('.search-keywords').should("exist");
        cy.get('.refinement-marcas > .card-header > .title').should('contain.text', 'Marcas').click();
        cy.get('#refinement-marcas > .values > :nth-child(1) > button > [aria-hidden="true"]').should('contain.text', 'Catshion').click();
        cy.get('[data-pos="0"] > .product > .product-tile > .tile-body > .pdp-brand > .product-brand').should('contain.text','Catshion');
    }) 

     it("Filter search results by category", ()=> {
        find(keyword);
        cy.get('.refinement-categoría > .card-header > .title').should('contain.text','Categoría').click();
        cy.get('#refinement-categoría > .values > :nth-child(2) > button > [aria-hidden="true"]').should('contain.text','Juguetes').click();
    }) 

    it("    ", ()=>{
        find(keyword4);
        cy.get('.refinement-especie > .card-header > .title').should('contain.text','Especie').click();
        cy.get('#refinement-especie > .values > :nth-child(1) > button > [aria-hidden="true"]').should('contain.text','Perro').click();
        for (var i = 0; i <length; i++) {
            cy.get('[data-pos='+i+'] > .product > .product-tile > .tile-body > .pdp-link > .link > .text-base').should("exist");
            cy.get('[data-pos=' +i+'] > .product > .product-tile > .tile-body > .pdp-link > .link > .text-base').should("contain.text", "perro"); 
        }
    })

});