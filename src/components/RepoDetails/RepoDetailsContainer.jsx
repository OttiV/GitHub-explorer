import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchRepo, fetchRepoSuccess } from "../../actions/repos";
import { Spinner } from "../Spinner";
const RepoDetails = lazy(() => import("./RepoDetails"));

class RepoDetailsContainer extends Component {
  componentDidMount() {
    const { match, fetchRepo } = this.props;
    const name = match.params.name;
    fetchRepo(name);
  }

  render() {
    const { repo, resetRepo, time } = this.props;

    return (
      <Suspense fallback={<Spinner />}>
        <RepoDetails repo={repo} resetRepo={resetRepo} time={time} />
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  repo: state.repo.value,
  time: state.time === 0 ? 0 : state.time
});
const mapDispatchToProps = dispatch => {
  return {
    fetchRepo: id => dispatch(fetchRepo(id)),
    resetRepo: value => dispatch(fetchRepoSuccess(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetailsContainer);
