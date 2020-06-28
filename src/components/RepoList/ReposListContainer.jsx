import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRepos } from "../../actions/repos";
import { searchRepo } from "../../actions/search";
import { setCurrentPage } from "../../actions/pagination";
import { ReposList, SearchBox, Pagination } from "./components";
import "./ReposListContainer.css";

class ReposListContainer extends Component {
  componentDidMount() {
    this.props.loadRepos();
  }

  handleInput = event => {
    this.props.searchRepo(event.target.value);
  };

  render() {
    const { repos, search, time, setCurrentPage, pagination } = this.props;
    const currentPage = pagination;
    const reposPerPage = 10;
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const filteredRepos = search
      ? currentRepos.filter(repo =>
          repo.name.toLowerCase().includes(search.toLowerCase())
        )
      : currentRepos;
    return (
      <div className="container">
        <SearchBox search={search} handleInput={this.handleInput} time={time} />
        {repos && (
          <>
            <ReposList repos={filteredRepos} />
            <Pagination
              reposPerPage={reposPerPage}
              totalRepos={repos.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos === null ? null : Object.values(state.repos),
  search: state.search,
  time: state.time,
  pagination: state.pagination
});

export default connect(
  mapStateToProps,
  { loadRepos, searchRepo, setCurrentPage }
)(ReposListContainer);
