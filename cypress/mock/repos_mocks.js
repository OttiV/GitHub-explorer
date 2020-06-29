export const mockGetReposList = ({ shouldFail = false } = {}) => {
  if (shouldFail) {
    cy.route(
      "GET",
      "api.github.com/repositories/",
      "fixture:reposListResponse"
    ).as("getReposList");
  } else {
    cy.route(
      "GET",
      "api.github.com/repositories/",
      "fixture:reposListResponse"
    ).as("getReposList");
  }
};

export const mockGetRepoDetails = ({ shouldFail = false } = {}) => {
  if (shouldFail) {
    cy.route(
      "GET",
      "https://api.github.com/repositories/",
      "fixture:repoDetailsResponse"
    ).as("getRepoDetails");
  } else {
    cy.route(
      "GET",
      "https://api.github.com/repositories/",
      "fixture:repoDetailsResponse"
    ).as("getRepoDetails");
  }
};
