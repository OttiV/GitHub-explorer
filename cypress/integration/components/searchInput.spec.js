import { baseUrl } from "../constants";
import { mockGetReposList } from "../../mock/repos_mocks";
import { repoLine, searchInput } from "../selectors";

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
    mockGetReposList(true);
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
});
