import request from "superagent";

export const FETCH_FOLLOWERS_REQUEST = "FETCH_FOLLOWERS_REQUEST";
export const FETCH_FOLLOWERS_SUCCESS = "FETCH_FOLLOWERS_SUCCESS";
export const FETCH_FOLLOWERS_FAILURE = "FETCH_FOLLOWERS_FAILURE";

const fetchFollowersRequest = () => {
  return {
    type: FETCH_FOLLOWERS_REQUEST
  };
};

const fetchFollowersSuccess = userFollowers => {
  return {
    type: FETCH_FOLLOWERS_SUCCESS,
    payload: userFollowers
  };
};

const fetchFollowersFailure = error => {
  return {
    type: FETCH_FOLLOWERS_FAILURE,
    payload: error
  };
};

export const fetchFollowers = url => {
  return function(dispatch) {
    dispatch(fetchFollowersRequest());
    request(url)
      .then(response => {
        dispatch(fetchFollowersSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchFollowersFailure(error.message));
      });
  };
};
