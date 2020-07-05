import request from "superagent";

export const FETCH_USER_REPOS_REQUEST = "FETCH_USER_REPOS_REQUEST";
export const FETCH_USER_REPOS_SUCCESS = "FETCH_USER_REPOS_SUCCESS";
export const FETCH_USER_REPOS_FAILURE = "FETCH_USER_REPOS_FAILURE";


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

