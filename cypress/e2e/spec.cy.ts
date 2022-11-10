/// <reference types="Cypress"/>

describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });
  it("first test", () => {
    // cy.get('input');
    // cy.get('[placeholder="نام کاربری"]');
    // cy.get('[placeholder="کلمه عبور"]');

   
    cy.get('[placeholder="نام کاربری"]').parent('div').find('button')
  });
});
