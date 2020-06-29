import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { loadRepo } from "../../actions/repos";
const RepoDetails = lazy(() => import("./RepoDetails"));

class RepoDetailsContainer extends Component {
  componentDidMount() {
    const { match, loadRepo } = this.props;
    const id = parseInt(match.params.name);
    loadRepo(id);
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
  repo: state.repo === [] ? [] : Object.values(state.repo),
  time: state.time === 0 ? 0 : state.time
});

export default connect(
  mapStateToProps,
  { loadRepo }
)(RepoDetailsContainer);
