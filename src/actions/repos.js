import request from "superagent";

const baseUrl = "https://api.github.com/repositories";

export const REPOS_FETCHED = "REPOS_FETCHED";
export const REPO_FETCHED = "REPO_FETCHED";
export const REPO_FETCHED_TIME = "REPO_FETCHED_TIME";
export const REPOS_FETCHED_TIME = "REPOS_FETCHED_TIME";
export const SET_LOADING = "SET_LOADING";

const getTime = () => {
  return new Date().getTime();
};

const reposFetched = repos => ({
  type: REPOS_FETCHED,
  payload: repos
});

const reposFetchedTime = time => ({
  type: REPOS_FETCHED_TIME,
  payload: time
});

const setLoading = value => ({
  type: SET_LOADING,
  payload: value
})

export const loadRepos = () => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .then(response => {
      if (response.body.message) {
        return alert("Oops " + JSON.stringify(response.body.message));
      }
      dispatch(reposFetched(response.body));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(reposFetchedTime(time));
      dispatch(setLoading(false));
    })
    .catch(console.error);
};

const repoFetched = repo => ({
  type: REPO_FETCHED,
  payload: repo
});

const repoFetchedTime = time => ({
  type: REPO_FETCHED_TIME,
  payload: time
});

export const loadRepo = id => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .then(response => {
      if (response.body.message) {
        return alert("Oops " + JSON.stringify(response.body.message));
      }
      const filteredResponse = response.body.filter(repo => repo.id === id);
      dispatch(repoFetched(filteredResponse));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(repoFetchedTime(time));
    })
    .catch(console.error);
};
