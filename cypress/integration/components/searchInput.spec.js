import { baseUrl } from "../constants";
import { mockGetReposList } from "../../mock/repos_mocks";
import { paginationButton, repoLine, searchInput } from "../selectors";

const checkFilteredRepos = (num, text) => {
  cy.get(repoLine)
    .eq(num)
    .contains(text);
};
const indexOfFilteredRepos = [0, 1, 2, 3];
const text = "go";

describe("Search input test cases", function() {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.server();
    mockGetReposList();
  });
  it("Should display search input", function() {
    cy.get(searchInput).should("exist");
  });
  it("Should filter repos when user types", function() {
    cy.get(searchInput)
      .type(text)
      .should("have.value", text);
    cy.get(repoLine)
      .eq(3)
      .should("exist");
    cy.get(repoLine)
      .eq(4)
      .should("not.exist");
    indexOfFilteredRepos.forEach(index => checkFilteredRepos(index, text));
  });
  it("Should change number of pages when repos are filtered", function() {
    cy.get(paginationButton)
      .eq(9)
      .should("exist");
    cy.get(paginationButton)
      .eq(10) // before filtering "g" only 10 pages should be displayed
      .should("not.exist");
    cy.get(searchInput).type("g");
    cy.get(paginationButton)
      .eq(2)
      .should("exist");
    cy.get(paginationButton)
      .eq(3)
      .should("not.exist"); // after filtering "g" only 3 pages should be displayed
  });
});
