import { repoUrl } from "../constants";
import { mockGetRepoDetails } from "../../mock/repos_mocks";
import {
  repoDetailsWrapper,
  repoDetails,
  userName,
  userAvatar,
  repoTitle,
  repoDescription,
  repoFork,
  repoLink
} from "../selectors";

describe("Repo details test cases", function() {
  beforeEach(() => {
    cy.visit(`${repoUrl}`);
    cy.server();
    mockGetRepoDetails();
  });
  it("Should display repo details container", function() {
    cy.get(repoDetailsWrapper).children(repoDetails);
  });
  it("Should display repo details ", function() {
    cy.get(userName)
      .should("exist")
      .contains("User: mojombo");
    cy.get(userAvatar).should("exist");
    cy.get(repoTitle)
      .should("exist")
      .contains("Repo: grit");
    cy.get(repoDescription)
      .should("exist")
      .contains(
        "Description: **Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby."
      );
    cy.get(repoFork)
      .should("exist")
      .contains("Fork: nope");
    cy.get(repoLink)
      .should("exist")
      .contains("Click here to inspect grit yourself");
  });
  it("Should display repo in GitHub when clicking on its link ", function() {
    cy.get(repoLink).click();
    cy.url("https://github.com/mojombo/grit");
  });
});
