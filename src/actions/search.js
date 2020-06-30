export const SET_SEARCH = "SET_SEARCH";

export const setSearch = text => dispatch => {
  dispatch({
    type: SET_SEARCH,
    payload: text
  });
};
