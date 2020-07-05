import request from "superagent";

export const FETCH_FOLLOWING_REQUEST = "FETCH_FOLLOWING_REQUEST";
export const FETCH_FOLLOWING_SUCCESS = "FETCH_FOLLOWING_SUCCESS";
export const FETCH_FOLLOWING_FAILURE = "FETCH_FOLLOWING_FAILURE";

const fetchFollowingRequest = () => {
  return {
    type: FETCH_FOLLOWING_REQUEST
  };
};

const fetchFollowingSuccess = userFollowing => {
  return {
    type: FETCH_FOLLOWING_SUCCESS,
    payload: userFollowing
  };
};

const fetchFollowingFailure = error => {
  return {
    type: FETCH_FOLLOWING_FAILURE,
    payload: error
  };
};

export const fetchFollowing = url => {
  return function(dispatch) {
    dispatch(fetchFollowingRequest());
    request(url)
      .then(response => {
        dispatch(fetchFollowingSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchFollowingFailure(error.message));
      });
  };
};
