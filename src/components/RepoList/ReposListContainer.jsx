import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions/reposActions";
import { setSearch } from "../../actions/search";
import { setCurrentPage } from "../../actions/pagination";
import { SearchBox } from "../SearchBox";
import { Spinner } from "../Spinner";
import { BackLinkAndTime } from "../BackLinkAndTime";
import "./ReposListContainer.css";
const ReposList = lazy(() => import("./components/ReposList"));
const Pagination = lazy(() => import("../Pagination/Pagination"));

class ReposListContainer extends Component {
  componentDidMount() {
    this.props.fetchRepos();
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
        <BackLinkAndTime time={time} />
        <div className="wrapper">
          <SearchBox
            handleInput={this.handleInput}
            placeholder="Enter repo title here..."
            search={search}
          />
          <Suspense fallback={<Spinner />}>
            <ReposList repos={reposToDisplay} loading={loading} />
            <Pagination
              currentPage={currentPage}
              elementsPerPage={reposPerPage}
              paginate={paginate}
              totalElements={totalRepos}
            />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pagination: state.pagination,
  repos: state.repos.value,
  loading: state.repos.loading,
  search: state.search.value,
  time: state.time
});
const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: () => dispatch(fetchRepos()),
    setSearch: value => dispatch(setSearch(value)),
    setCurrentPage: number => dispatch(setCurrentPage(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposListContainer);
