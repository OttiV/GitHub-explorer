import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchUserSuccess } from "../../actions/usersActions";
import { Spinner } from "../Spinner";
const UserDetails = lazy(() => import("./UserDetails"));

class UserDetailsContainer extends Component {
  componentDidMount() {
    const { match, fetchUser } = this.props;
    const name = match.params.name;
    fetchUser(name);
  }

  render() {
    const { user, resetUser, time } = this.props;

    return (
      <Suspense fallback={<Spinner />}>
        <UserDetails user={user} resetUser={resetUser} time={time} />
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.value,
  time: state.time === 0 ? 0 : state.time
});
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    resetUser: value => dispatch(fetchUserSuccess(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsContainer);
