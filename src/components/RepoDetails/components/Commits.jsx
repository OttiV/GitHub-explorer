import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommits } from "../../../actions/reposActions";
import { Spinner } from "../../Spinner";
import "./Commits.css";

class Commits extends Component {
  componentDidMount() {
    const { fetchCommits, url } = this.props;
    fetchCommits(url);
  }

  render() {
    const { commits } = this.props;
    const { loading, value } = commits;
    const numOfElements = value.length > 0 ? value.length : "No";
    return (
      <div>
        {`${numOfElements} commits`}
        <div className="CommitsContainer">
          {loading && <Spinner />}
          {value.map((com, index) => {
            const { commit, author } = com;
            return (
              <div key={index} className="commitsInfoLine">
                {author && (
                  <div className="authorWrapper">
                    <img
                      src={author.avatar_url}
                      alt={`${author.login} avatar`}
                      className="avatars"
                    />
                    {author.login}
                  </div>
                )}
                {commit && commit.message && (
                  <div className="message">"{commit.message}"</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  commits: state.repo.commits
});
const mapDispatchToProps = dispatch => {
  return {
    fetchCommits: url => dispatch(fetchCommits(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commits);
