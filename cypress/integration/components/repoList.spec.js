import { baseUrl } from "../constants";
import { reposList, repoLine } from "../selectors";
import { mockGetReposList } from "../../mock/repos_mocks";

const getRepoId = num => {
  // index of repo + 1 is id of repo
  return `[data-cy=repoDetails-${num + 1}]`;
};

describe("List test cases", function() {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.server();
    mockGetReposList();
  });
  it("Should display list", function() {
    cy.get(reposList)
      .children(repoLine)
      .eq(9)
      .should("exist");
  });
  it("Should display repo details after click on repo line", function() {
    cy.get(repoLine)
      .eq(0) // index of repo
      .click();
    cy.get(getRepoId(0));
  });
});
