import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserFollowers } from "../../../actions/userFollowers";
import { fetchUserFollowing } from "../../../actions/userFollowing";
import { fetchUserRepos } from "../../../actions/userRepos";
import "./UserInfo.css";

class UserInfo extends Component {
  componentDidMount() {
    const {
      fetchFollowers,
      fetchFollowing,
      fetchRepos,
      url,
      detail
    } = this.props;
    if (detail === "followers") {
      fetchFollowers(url);
    }
    if (detail === "repos") {
      fetchRepos(url);
    }
    if (detail === "following") {
      fetchFollowing(url);
    }
  }

  render() {
    const { userFollowers, userRepos, userFollowing, detail } = this.props;
    const getElements = detail => {
      if (detail === "followers") {
        return userFollowers;
      }
      if (detail === "following") {
        return userFollowing;
      }
      if (detail === "repos") {
        return userRepos;
      }
    };
    const elements = getElements(detail);
    const numOfElements = elements.length > 0 ? elements.length : "No";
    return (
      <div>
        {numOfElements} {detail} found:
        <div className="userInfosWrapper">
          {elements.map(element => {
            const { id, html_url, name, login, avatar_url } = element;
            const isNotRepo = detail !== "repos";
            const title = isNotRepo ? login : name;
            return (
              <a
                href={html_url}
                target="blank"
                rel="noreferrer noopener"
                key={id}
                className="userInfoLine"
              >
                {isNotRepo && (
                  <img
                    src={avatar_url}
                    alt={`${login} avatar`}
                    className="avatars"
                  />
                )}
                {title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userFollowers: state.userFollowers.value,
  userFollowing: state.userFollowing.value,
  userRepos: state.userRepos.value
});
const mapDispatchToProps = dispatch => {
  return {
    fetchFollowers: url => dispatch(fetchUserFollowers(url)),
    fetchFollowing: url => dispatch(fetchUserFollowing(url)),
    fetchRepos: url => dispatch(fetchUserRepos(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
