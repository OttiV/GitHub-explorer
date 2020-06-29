export const SEARCH_REPO = "SEARCH_REPO";

export const searchRepo = text => dispatch => {
  dispatch({
    type: SEARCH_REPO,
    payload: text
  });
};
