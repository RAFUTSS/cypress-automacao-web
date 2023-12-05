function randowCharacter(len: any) {

  let caracter = "";
  do { caracter += Math.random().toString(36).substring(2);
} while (caracter.length < len);
return caracter;   };

describe('Test of Register', function () {

   let url = "https://cloud.cypress.io/login";
   let service = randowCharacter(10);   

   it('register', function () {
    const time = 2000;
    const email = service;
    const password = service;
    const emailComplemento = "@gmail.com";

    cy.visit(url);
    cy.wait(time);
    cy.get('a[href="/signup"]').click();
    cy.get('.btn-login.btn-provider.btn-provider-email').click();
    cy.get('#email').type(service + emailComplemento);
    cy.get('.ReactPasswordStrength').type(password);
    cy.get('.btn-primary').click();
    
      });
   });
