export const mockGetReposList = ({ shouldFail = false } = {}) => {
  cy.route(
    "GET",
    "api.github.com/repositories/",
    "fixture:reposListResponse"
  ).as("getReposList");
};

export const mockGetRepoDetails = ({ shouldFail = false } = {}) => {
  cy.route(
    "GET",
    "https://api.github.com/repositories/",
    "fixture:repoDetailsResponse"
  ).as("getRepoDetails");
};
