export const SET_PAGINATION = "SET_PAGINATION";

const setPagination = number => ({
  type: SET_PAGINATION,
  payload: number
});

export const setCurrentPage = page => dispatch => {
  dispatch(setPagination(page));
};
