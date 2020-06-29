// const cy: Cypress.cy & EventEmitter
const header = "[data-cy=header]";
describe("My first test", function() {
  it("Opens the page", function() {
    cy.visit("http://localhost:3000/");
    cy.get(header);
  });
});
