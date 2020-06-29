import { baseUrl } from "../constants";
import { paginationButton, pagination, repoLine } from "../selectors";
import { mockGetReposList } from "../../mock/repos_mocks";

describe("Pagination test cases", function() {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.server();
    mockGetReposList();
  });
  it("Should display pagination and buttons", function() {
    cy.get(pagination).children(paginationButton);
  });
  it("Should display correct number of buttons", function() {
    cy.get(paginationButton)
      .eq(9)
      .should("exist");
    cy.get(paginationButton)
      .eq(10)
      .should("not.exist");
  });
  it("Should shows different repos when user click button", function() {
    cy.get(repoLine)
      .eq(0)
      .contains("grit");
    cy.get(paginationButton)
      .eq(1)
      .click();
    cy.get(repoLine)
      .eq(0)
      .contains("microsis");
  });
});
