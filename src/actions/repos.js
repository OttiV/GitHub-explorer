import request from "superagent";

const baseUrl = "https://api.github.com/repositories";

export const SET_REPOS = "SET_REPOS";
export const SET_REPO = "SET_REPO";
export const SET_REPO_TIME = "SET_REPO_TIME";
export const SET_REPOS_TIME = "SET_REPOS_TIME";
export const SET_LOADING = "SET_LOADING";

const getTime = () => {
  return new Date().getTime();
};

const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
});

const setReposTime = time => ({
  type: SET_REPOS_TIME,
  payload: time
});

const setLoading = value => ({
  type: SET_LOADING,
  payload: value
});

export const getRepos = () => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .set("Accept", "application/vnd.github.v3+json")
    .then(response => {
      if (response.body.message) {
        return alert("Oops " + JSON.stringify(response.body.message));
      }
      dispatch(setRepos(response.body));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(setReposTime(time));
      dispatch(setLoading(false));
    })
    .catch(console.error);
};

export const setRepo = repo => ({
  type: SET_REPO,
  payload: repo
});

const rsetRepoTime = time => ({
  type: SET_REPO_TIME,
  payload: time
});

export const getRepo = id => dispatch => {
  const startTime = getTime();
  request(baseUrl)
    .set("Accept", "application/vnd.github.v3+json")
    .then(response => {
      if (response.body.message) {
        return alert("Oops " + JSON.stringify(response.body.message));
      }
      const filteredResponse = response.body.filter(repo => repo.id === id);
      dispatch(setRepo(filteredResponse));
      const endTime = getTime();
      const time = endTime - startTime;
      dispatch(rsetRepoTime(time));
    })
    .catch(console.error);
};
