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
      category
    } = this.props;
    if (category === "followers") {
      fetchFollowers(url);
    }
    if (category === "repos") {
      fetchRepos(url);
    }
    if (category === "following") {
      fetchFollowing(url);
    }
  }

  render() {
    const { userFollowers, userRepos, userFollowing, category } = this.props;
    const getElements = category => {
      if (category === "followers") {
        return userFollowers;
      }
      if (category === "following") {
        return userFollowing;
      }
      if (category === "repos") {
        return userRepos;
      }
    };
    const elements = getElements(category);
    const numOfElements = elements.length > 0 ? elements.length : "No";
    return (
      <div>
        {numOfElements} {category} found:
        <div className="userInfosWrapper">
          {elements.map(element => {
            const { id, html_url, name, login, avatar_url } = element;
            const isNotRepo = category !== "repos";
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
