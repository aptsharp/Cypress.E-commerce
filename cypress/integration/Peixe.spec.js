it('Peixe', () =>{
    cy.visit('https://www.peixeurbano.com.br/cadastre-se');
    cy.get('#register-name').click();
    cy.get('#register-name').type('Afonso Rafael');
    cy.get('.icon-close').click();
    cy.get('#register-name').clear();
    cy.get('#register-name').type('Afonso Rafael');
    cy.get('#register-email').type('afonso.raffael@gmaiasdf.com');
    cy.get('#register-password').type('123456');
    cy.get('.js-pwd-toggler').click();
    cy.get('#register-city').click();
    cy.get('#register-city').type('3000379');
    cy.get('#register-city').click();
});
