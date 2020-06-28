import { baseUrl } from "../constants";
import request from "superagent";

export const DISPLAY_REPOS = "DISPLAY_REPOS";
export const REPOS_FETCHED = "REPOS_FETCHED";
export const REPO_FETCHED = "REPO_FETCHED";

export const displayRepos = () => {
  return {
    type: DISPLAY_REPOS
  };
};

const reposFetched = repos => ({
  type: REPOS_FETCHED,
  payload: repos
});

export const loadRepos = () => dispatch => {
  request(baseUrl)
    .then(response => {
      dispatch(reposFetched(response.body));
    })
    .catch(console.error);
};

export const repoFetched = repo => ({
  type: REPO_FETCHED,
  payload: repo
});

export const loadRepo = (user, title) => dispatch => {
  request
    .get(`${baseUrl}/${user}/${title}`)
    .then(response => {
      dispatch(repoFetched(response.body));
    })
    .catch(console.error);
};

// export const createAd = data => (dispatch, getState) => {
//   // const state = getState();
//   // const jwt = state.currentUser.jwt;

//   // if (isExpired(jwt)) return dispatch(logout());

//   request
//     .post(`${baseUrl}/ads`)
//     // .set("Authorization", `Bearer ${jwt}`)
//     .send(data)
//     .then(result => {
//       dispatch(addAd(result.body));
//     })
//     .catch(err => console.error(err));
// }
