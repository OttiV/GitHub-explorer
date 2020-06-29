import { baseUrl } from "../constants";
import { mockGetReposList } from "../../mock/repos_mocks";
import {
  header,
  pagination,
  repoLine,
  reposList,
  searchInput,
  timeToLoadList
} from "../selectors";

describe("List page test cases", function() {
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.server();
    mockGetReposList(true);
  });
  it("Should display header", function() {
    cy.get(header);
  });
  it("Should display time taken to load list", function() {
    cy.get(timeToLoadList);
  });
  it("Should display search input", function() {
    cy.get(searchInput);
  });
  it("Should display list", function() {
    cy.get(reposList)
      .children(repoLine)
      .eq(9);
  });
  it("Should display pagination", function() {
    cy.get(pagination);
  });
});
