import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContents } from "../../../actions/repoContents";
import { fetchAssignees } from "../../../actions/repoAssignees";
import { Spinner } from "../../Spinner";
import "./RepoInfo.css";

class RepoInfo extends Component {
  componentDidMount() {
    const { fetchContents, fetchAssignees, url, category } = this.props;
    if (category === "contents") {
      fetchContents(url);
    }
    if (category === "assignees") {
      fetchAssignees(url);
    }
  }

  render() {
    const { contents, category, assignees } = this.props;
    const getElements = category => {
      if (category === "contents") {
        return contents;
      }

      if (category === "assignees") {
        return assignees;
      }
    };

    const elements = getElements(category);
    const { loading, value } = elements;
    const isContents = category === "contents";
    const readme = isContents && value.filter(value => value.name === "README");
    const numOfElements = value.length > 0 ? value.length : "No";
    const description = isContents ? "README:" : `${numOfElements} ${category}`;
    return (
      <div>
        {description}
        <div className="repoInfosWrapper">
          {loading && <Spinner />}
          {isContents
            ? readme.map(element => {
                const { html_url } = element;
                return (
                  <div key={html_url} className="readMe">
                    <div>
                      <iframe
                        src={html_url}
                        title="contents"
                        width="400"
                        height="120"
                      ></iframe>
                    </div>
                  </div>
                );
              })
            : value.map(element => {
                const { id, login, avatar_url } = element;
                return (
                  <div key={id} className="repoInfoLine">
                    <img
                      src={avatar_url}
                      alt={`${login} avatar`}
                      className="avatars"
                    />

                    {login}
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.repo.contents,
  assignees: state.repo.assignees
});
const mapDispatchToProps = dispatch => {
  return {
    fetchContents: url => dispatch(fetchContents(url)),
    fetchAssignees: url => dispatch(fetchAssignees(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoInfo);
