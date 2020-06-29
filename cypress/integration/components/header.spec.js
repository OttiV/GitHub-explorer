import { baseUrl } from "../constants";
import { dateInfo, title, header } from "../selectors";

describe("Header test cases", function() {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("Should display header and website title", function() {
    cy.get(header)
      .children(title)
      .contains("GitHub Explorer");
  });
  it("Should display time and date of user location", function() {
    cy.wait(2000);
    cy.get(header)
      .children(dateInfo)
      .should("exist");
  });
  it("Should send user to homepage when title is clicked", function() {
    cy.get(title).click();
  });
});
