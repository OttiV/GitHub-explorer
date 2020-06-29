export const mockGetReposList = () => {
  cy.route(
    "GET",
    "api.github.com/repositories/",
    "fixture:reposListResponse"
  ).as("getReposList");
};

export const mockGetRepoDetails = () => {
  cy.route(
    "GET",
    "https://api.github.com/repositories/",
    "fixture:repoDetailsResponse"
  ).as("getRepoDetails");
};
