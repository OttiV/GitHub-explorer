import request from "superagent";

export const FETCH_USER_FOLLOWERS_REQUEST = "FETCH_USER_FOLLOWERS_REQUEST";
export const FETCH_USER_FOLLOWERS_SUCCESS = "FETCH_USER_FOLLOWERS_SUCCESS";
export const FETCH_USER_FOLLOWERS_FAILURE = "FETCH_USER_FOLLOWERS_FAILURE";

const fetchUserFollowersRequest = () => {
  return {
    type: FETCH_USER_FOLLOWERS_REQUEST
  };
};

const fetchUserFollowersSuccess = userFollowers => {
  return {
    type: FETCH_USER_FOLLOWERS_SUCCESS,
    payload: userFollowers
  };
};

const fetchUserFollowersFailure = error => {
  return {
    type: FETCH_USER_FOLLOWERS_FAILURE,
    payload: error
  };
};

export const fetchUserFollowers = url => {
  return function(dispatch) {
    dispatch(fetchUserFollowersRequest());
    request(url)
      .then(response => {
        dispatch(fetchUserFollowersSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchUserFollowersFailure(error.message));
      });
  };
};
