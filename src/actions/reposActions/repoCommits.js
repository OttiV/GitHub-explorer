import request from "superagent";

export const FETCH_COMMITS_REQUEST = "FETCH_COMMITS_REQUEST";
export const FETCH_COMMITS_SUCCESS = "FETCH_COMMITS_SUCCESS";
export const FETCH_COMMITS_FAILURE = "FETCH_COMMITS_FAILURE";

const fetchCommitsRequest = () => {
  return {
    type: FETCH_COMMITS_REQUEST
  };
};

const fetchCommitsSuccess = commits => {
  return {
    type: FETCH_COMMITS_SUCCESS,
    payload: commits
  };
};

const fetchCommitsFailure = error => {
  return {
    type: FETCH_COMMITS_FAILURE,
    payload: error
  };
};

export const fetchCommits = url => {
  return function(dispatch) {
    dispatch(fetchCommitsRequest());
    request(url)
      .then(response => {
        dispatch(fetchCommitsSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchCommitsFailure(error.message));
      });
  };
};
