import request from "superagent";

export const FETCH_ASSIGNEES_REQUEST = "FETCH_ASSIGNEES_REQUEST";
export const FETCH_ASSIGNEES_SUCCESS = "FETCH_ASSIGNEES_SUCCESS";
export const FETCH_ASSIGNEES_FAILURE = "FETCH_ASSIGNEES_FAILURE";

const fetchAssigneesRequest = () => {
  return {
    type: FETCH_ASSIGNEES_REQUEST
  };
};

const fetchAssigneesSuccess = assignees => {
  return {
    type: FETCH_ASSIGNEES_SUCCESS,
    payload: assignees
  };
};

const fetchAssigneesFailure = error => {
  return {
    type: FETCH_ASSIGNEES_FAILURE,
    payload: error
  };
};

export const fetchAssignees = url => {
  return function(dispatch) {
    dispatch(fetchAssigneesRequest());
    request(url)
      .then(response => {
        dispatch(fetchAssigneesSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchAssigneesFailure(error.message));
      });
  };
};
