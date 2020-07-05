import request from "superagent";

const baseUrl = "https://api.github.com/users";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SET_USER_TIME = "SET_USER_TIME";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const SET_USERS_TIME = "SET_USERS_TIME";


const getTime = () => {
  return new Date().getTime();
};

const setUsersTimeToLoad = time => ({
  type: SET_USERS_TIME,
  payload: time
});

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    const startTime = getTime();
    request(baseUrl)
      .then(response => {
        dispatch(fetchUsersSuccess(response.body));
        const endTime = getTime();
        const time = endTime - startTime;
        dispatch(setUsersTimeToLoad(time));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const setUserTimeToLoad = time => ({
  type: SET_USER_TIME,
  payload: time
});

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};

export const fetchUser = name => {
  return function(dispatch) {
    dispatch(fetchUserRequest());
    const startTime = getTime();
    request(baseUrl)
      .then(response => {
        const filteredResponse = response.body.filter(
          user => user.login === name
        );
        dispatch(fetchUserSuccess(filteredResponse));
        const endTime = getTime();
        const time = endTime - startTime;
        dispatch(setUserTimeToLoad(time));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

