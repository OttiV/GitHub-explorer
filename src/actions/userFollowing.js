import request from "superagent";

export const FETCH_USER_FOLLOWING_REQUEST = "FETCH_USER_FOLLOWING_REQUEST";
export const FETCH_USER_FOLLOWING_SUCCESS = "FETCH_USER_FOLLOWING_SUCCESS";
export const FETCH_USER_FOLLOWING_FAILURE = "FETCH_USER_FOLLOWING_FAILURE";

const fetchUserFollowingRequest = () => {
  return {
    type: FETCH_USER_FOLLOWING_REQUEST
  };
};

const fetchUserFollowingSuccess = userFollowing => {
  return {
    type: FETCH_USER_FOLLOWING_SUCCESS,
    payload: userFollowing
  };
};

const fetchUserFollowingFailure = error => {
  return {
    type: FETCH_USER_FOLLOWING_FAILURE,
    payload: error
  };
};

export const fetchUserFollowing = url => {
  return function(dispatch) {
    dispatch(fetchUserFollowingRequest());
    request(url)
      .then(response => {
        dispatch(fetchUserFollowingSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchUserFollowingFailure(error.message));
      });
  };
};
