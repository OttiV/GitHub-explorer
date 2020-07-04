import request from "superagent";

const baseUrl = "https://api.github.com/repositories";

export const FETCH_REPOS_REQUEST = "FETCH_REPOS_REQUEST";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE";
export const SET_REPO_TIME = "SET_REPO_TIME";
export const FETCH_REPO_REQUEST = "FETCH_REPO_REQUEST";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";
export const FETCH_REPO_FAILURE = "FETCH_REPO_FAILURE";
export const SET_REPOS_TIME = "SET_REPOS_TIME";

const getTime = () => {
  return new Date().getTime();
};

const setReposTimeToLoad = time => ({
  type: SET_REPOS_TIME,
  payload: time
});


const fetchReposRequest = () => {
  return {
    type: FETCH_REPOS_REQUEST
  };
};

const fetchReposSuccess = repos => {
  return {
    type: FETCH_REPOS_SUCCESS,
    payload: repos
  };
};

const fetchReposFailure = error => {
  return {
    type: FETCH_REPOS_FAILURE,
    payload: error
  };
};

export const fetchRepos = () => {
  return function(dispatch) {
    dispatch(fetchReposRequest());
    const startTime = getTime();
    request(baseUrl)
      .then(response => {
        dispatch(fetchReposSuccess(response.body));
        const endTime = getTime();
        const time = endTime - startTime;
        dispatch(setReposTimeToLoad(time));
      })
      .catch(error => {
        dispatch(fetchReposFailure(error.message));
      });
  };
};

const setRepoTimeToLoad = time => ({
  type: SET_REPO_TIME,
  payload: time
});

const fetchRepoRequest = () => {
  return {
    type: FETCH_REPO_REQUEST
  };
};

const fetchRepoSuccess = repo => {
  return {
    type: FETCH_REPO_SUCCESS,
    payload: repo
  };
};

const fetchRepoFailure = error => {
  return {
    type: FETCH_REPO_FAILURE,
    payload: error
  };
};

export const fetchRepo = id => {
  return function(dispatch) {
    dispatch(fetchRepoRequest());
    const startTime = getTime();
    request(baseUrl)
      .then(response => {
        const filteredResponse = response.body.filter(repo => repo.id === id);
        dispatch(fetchRepoSuccess(filteredResponse));
        const endTime = getTime();
        const time = endTime - startTime;
        dispatch(setRepoTimeToLoad(time));
      })
      .catch(error => {
        dispatch(fetchRepoFailure(error.message));
      });
  };
};
