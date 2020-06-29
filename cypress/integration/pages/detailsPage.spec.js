import { baseUrl } from "../constants";
import {
  backButton,
  header,
  repoDetails,
  repoDetailsWrapper,
  timeToLoadRepo
} from "../selectors";
import { mockGetRepoDetails } from "../../mock/repos_mocks";

describe("Details page test cases", function() {
  beforeEach(() => {
    cy.visit(`${baseUrl}1`);
    cy.server();
    mockGetRepoDetails(true);
  });
  it("Should display header", function() {
    cy.get(header);
  });
  it("Should display backButton", function() {
    cy.get(backButton);
  });
  it("Should take to list page when back button is clicked", function() {
    cy.get(backButton).click();
    cy.url(baseUrl);
  });
  it("Should display time taken to load list", function() {
    cy.get(timeToLoadRepo);
  });
  it("Should display details card", function() {
    cy.get(repoDetailsWrapper)
      .children(repoDetails)
      .should("exist");
  });
});
