import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { getRepos } from "../../actions/repos";
import { setSearch } from "../../actions/search";
import { setCurrentPage } from "../../actions/pagination";
import { clientId } from "../../constants";
import { SearchBox } from "./components";
import "./ReposListContainer.css";
const ReposList = lazy(() => import("./components/ReposList"));
const Pagination = lazy(() => import("./components/Pagination"));

class ReposListContainer extends Component {
  componentDidMount() {
    this.props.getRepos();
  }

  handleInput = event => {
    this.props.setSearch(event.target.value);
  };

  render() {
    const {
      repos,
      search,
      time,
      setCurrentPage,
      pagination,
      loading
    } = this.props;
    const currentPage = pagination;
    const reposPerPage = 10;
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const filteredRepos = repos.filter(repo =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const currentRepos = search ? filteredRepos : repos;
    const totalRepos = currentRepos.length;
    const reposToDisplay = currentRepos.slice(
      indexOfFirstRepo,
      indexOfLastRepo
    );

    return (
      <div className="container" data-cy="timeToLoadList">
        {time > 0 ? (
          <div className="time">Time to load: {time}ms</div>
        ) : (
          <div className="time">Loading...</div>
        )}
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
        >
          Sign in with GitHub
        </a>
        <div className="wrapper">
          <SearchBox search={search} handleInput={this.handleInput} />
          <Suspense fallback={<div>Loading...</div>}>
            <ReposList repos={reposToDisplay} loading={loading} />
            <Pagination
              reposPerPage={reposPerPage}
              totalRepos={totalRepos}
              paginate={paginate}
            />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  pagination: state.pagination,
  repos: state.repos === null ? null : Object.values(state.repos),
  search: state.search,
  time: state.time
});

export default connect(
  mapStateToProps,
  { getRepos, setSearch, setCurrentPage }
)(ReposListContainer);
