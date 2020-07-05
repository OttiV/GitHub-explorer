import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchFollowers,
  fetchFollowing,
  fetchUserRepos
} from "../../../actions/usersActions";
import { Spinner } from "../../Spinner";
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
    const { followers, repos, following, category } = this.props;
    const getElements = category => {
      if (category === "followers") {
        return followers;
      }
      if (category === "following") {
        return following;
      }
      if (category === "repos") {
        return repos;
      }
    };
    const elements = getElements(category);
    const { value, loading } = elements;
    console.log(value);
    const numOfElements = value.length > 1 ? value.length : "No";
    return (
      <div>
        {numOfElements} {category} found:
        <div className="userInfosWrapper">
          {loading && <Spinner />}
          {value.map(element => {
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
  followers: state.user.followers,
  following: state.user.following,
  repos: state.user.repos
});
const mapDispatchToProps = dispatch => {
  return {
    fetchFollowers: url => dispatch(fetchFollowers(url)),
    fetchFollowing: url => dispatch(fetchFollowing(url)),
    fetchRepos: url => dispatch(fetchUserRepos(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
