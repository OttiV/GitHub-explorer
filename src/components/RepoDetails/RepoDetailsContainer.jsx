import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRepo } from "../../actions/repos";
import RepoDetails from "./RepoDetails";
// import "./RepoDetailsContainer.css";

class RepoDetailsContainer extends Component {
  componentDidMount() {
    const { match, loadRepo } = this.props;
    const id = parseInt(match.params.name);
    loadRepo(id);
  }

  render() {
    const { repo, time } = this.props;
    return (
      <div className="container">
        {repo && <RepoDetails repo={repo} time={time} />}
      </div>
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
