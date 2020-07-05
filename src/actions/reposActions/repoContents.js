import request from "superagent";

export const FETCH_CONTENTS_REQUEST = "FETCH_CONTENTS_REQUEST";
export const FETCH_CONTENTS_SUCCESS = "FETCH_CONTENTS_SUCCESS";
export const FETCH_CONTENTS_FAILURE = "FETCH_CONTENTS_FAILURE";

const fetchContentsRequest = () => {
  return {
    type: FETCH_CONTENTS_REQUEST
  };
};

const fetchContentsSuccess = contents => {
  return {
    type: FETCH_CONTENTS_SUCCESS,
    payload: contents
  };
};

const fetchContentsFailure = error => {
  return {
    type: FETCH_CONTENTS_FAILURE,
    payload: error
  };
};

export const fetchContents = url => {
  return function(dispatch) {
    dispatch(fetchContentsRequest());
    request(url)
      .then(response => {
        dispatch(fetchContentsSuccess(response.body));
      })
      .catch(error => {
        dispatch(fetchContentsFailure(error.message));
      });
  };
};
