import { baseUrl } from "../constants";
import request from "superagent";

export const REPOS_FETCHED = "REPOS_FETCHED";
export const REPO_FETCHED = "REPO_FETCHED";
export const REPO_FETCHED_TIME = "REPO_FETCHED_TIME";
export const REPOS_FETCHED_TIME = "REPOS_FETCHED_TIME";

const getTime = () => {
  return new Date().getTime();
};
const reposFetched = repos => ({
  type: REPOS_FETCHED,
  payload: repos
});

export const reposFetchedTime = time => ({
  type: REPOS_FETCHED_TIME,
  payload: time
});

export const loadRepos = () => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .then(response => {
      dispatch(reposFetched(response.body));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(repoFetchedTime(time));
    })
    .catch(console.error);
};

export const repoFetched = repo => ({
  type: REPO_FETCHED,
  payload: repo
});

export const repoFetchedTime = time => ({
  type: REPO_FETCHED_TIME,
  payload: time
});

export const loadRepo = id => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .then(response => {
      const filteredResponse = response.body.filter(repo => repo.id === id);
      dispatch(repoFetched(filteredResponse));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(repoFetchedTime(time));
    })
    .catch(console.error);
};
