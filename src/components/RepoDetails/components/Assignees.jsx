import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCommits, fetchAssignees } from "../../../actions/reposActions";
import { Spinner } from "../../Spinner";
import "./Assignees.css";

class Assignees extends Component {
  componentDidMount() {
    const { fetchAssignees, url } = this.props;

    fetchAssignees(url);
  }

  render() {
    const { assignees } = this.props;

    const { loading, value } = assignees;
    const numOfElements = value.length > 0 ? value.length : "No";
    return (
      <div>
        {`${numOfElements} assignees`}
        <div className="assigneesInfosWrapper">
          {loading && <Spinner />}
          {value.map(element => {
            const { id, login, avatar_url, html_url } = element;

            return (
              <a
                href={html_url}
                target="blank"
                rel="noreferrer noopener"
                key={id}
                className="assigneesInfoLine"
              >
                <img
                  src={avatar_url}
                  alt={`${login} avatar`}
                  className="avatars"
                />

                {login}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignees: state.repo.assignees
});
const mapDispatchToProps = dispatch => {
  return {
    fetchAssignees: url => dispatch(fetchAssignees(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignees);
