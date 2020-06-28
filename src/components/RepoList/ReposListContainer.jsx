import React from "react";
import { connect } from "react-redux";
import { loadRepos } from "../../actions/repos";
import { searchRepo } from "../../actions/search";
import ReposList from "./ReposList";
import SearchBox from "./SearchBox";
import "./ReposListContainer.css";

class ReposListContainer extends React.Component {
  componentDidMount() {
    this.props.loadRepos();
  }

  handleInput = event => {
    this.props.searchRepo(event.target.value);
  };

  render() {
    const { repos, search } = this.props;
    const filteredRepos = search
      ? repos.filter(repo =>
          repo.name.toLowerCase().includes(search.toLowerCase())
        )
      : repos;
    return (
      <div className="container">
        <SearchBox search={search} handleInput={this.handleInput} />
        {repos && <ReposList repos={filteredRepos} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos === null ? null : Object.values(state.repos),
  search: state.search.text
});

export default connect(
  mapStateToProps,
  { loadRepos, searchRepo }
)(ReposListContainer);
