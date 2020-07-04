import request from "superagent";

export const FETCH_USER_REPOS_REQUEST = "FETCH_USER_REPOS_REQUEST";
export const FETCH_USER_REPOS_SUCCESS = "FETCH_USER_REPOS_SUCCESS";
export const FETCH_USER_REPOS_FAILURE = "FETCH_USER_REPOS_FAILURE";
export const FETCH_USER_REPO_REQUEST = "FETCH_USER_REPO_REQUEST";
export const FETCH_USER_REPO_SUCCESS = "FETCH_USER_REPO_SUCCESS";
export const FETCH_USER_REPO_FAILURE = "FETCH_USER_REPO_FAILURE";

const fetchUserReposRequest = () => {
  return {
    type: FETCH_USER_REPOS_REQUEST
  };
};

const fetchUserReposSuccess = userRepos => {
  return {
    type: FETCH_USER_REPOS_SUCCESS,
    payload: userRepos
  };
};

const fetchUserReposFailure = error => {
  return {
    type: FETCH_USER_REPOS_FAILURE,
    payload: error
  };
};

export const fetchUserRepos = url => {
  return function(dispatch) {
    dispatch(fetchUserReposRequest());
    request(url)
      .then(response => {
        dispatch(fetchUserReposSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchUserReposFailure(error.message));
      });
  };
};

const fetchUserRepoRequest = () => {
  return {
    type: FETCH_USER_REPO_REQUEST
  };
};

export const fetchUserRepoSuccess = userRepo => {
  return {
    type: FETCH_USER_REPO_SUCCESS,
    payload: userRepo
  };
};

const fetchUserRepoFailure = error => {
  return {
    type: FETCH_USER_REPO_FAILURE,
    payload: error
  };
};

export const fetchUserRepo = name => {
  return function(dispatch) {
    dispatch(fetchUserRepoRequest());
    request("")
      .then(response => {
        const filteredResponse = response.body.filter(
          user => user.login === name
        );
        dispatch(fetchUserRepoSuccess(filteredResponse));
      })
      .catch(error => {
        dispatch(fetchUserRepoFailure(error.message));
      });
  };
};
