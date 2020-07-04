import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchRepo } from "../../actions/repos";
const RepoDetails = lazy(() => import("./RepoDetails"));

class RepoDetailsContainer extends Component {
  componentDidMount() {
    const { match, fetchRepo } = this.props;
    const id = parseInt(match.params.name);
    fetchRepo(id);
  }

  render() {
    const { repo, time } = this.props;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDetails repo={repo} time={time} />
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
    fetchRepo: id => dispatch(fetchRepo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetailsContainer);
