import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";
import { setSearch } from "../../actions/search";
import { setCurrentPage } from "../../actions/pagination";
import { SearchBox } from "../SearchBox";
import { Spinner } from "../Spinner";
import "./UsersListContainer.css";
const UsersList = lazy(() => import("./components/UsersList"));
const Pagination = lazy(() => import("../Pagination/Pagination"));

class UsersListContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  handleInput = event => {
    this.props.setSearch(event.target.value);
  };

  render() {
    const {
      users,
      search,
      time,
      setCurrentPage,
      pagination,
      loading
    } = this.props;
    const currentPage = pagination;
    const usersPerPage = 10;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const filteredUsers = users.filter(user =>
      user.login.toLowerCase().includes(search.toLowerCase())
    );
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const currentUsers = search ? filteredUsers : users;
    const totalUsers = currentUsers.length;
    const usersToDisplay = currentUsers.slice(
      indexOfFirstUser,
      indexOfLastUser
    );
    const timeText = time ? `${time}ms` : <Spinner small={true} />;

    return (
      <div className="container" data-cy="timeToLoadList">
        <div className="topContainer">
          <div className="time">Time to load: {timeText}</div>
        </div>
        <div className="wrapper">
          <SearchBox
            handleInput={this.handleInput}
            placeholder="Enter user name here..."
            search={search}
          />
          <Suspense fallback={<Spinner />}>
            <UsersList users={usersToDisplay} loading={loading} />
            <Pagination
              currentPage={currentPage}
              elementsPerPage={usersPerPage}
              paginate={paginate}
              totalElements={totalUsers}
            />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pagination: state.pagination,
  users: state.users.value,
  loading: state.users.loading,
  search: state.search.value,
  time: state.time
});
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    setSearch: value => dispatch(setSearch(value)),
    setCurrentPage: number => dispatch(setCurrentPage(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
