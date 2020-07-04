import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoords, getTimeFromCoords } from "../../actions/location";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getCoords();
  }

  componentDidUpdate() {
    const { latitude, longitude, getTimeFromCoords } = this.props;
    getTimeFromCoords(latitude, longitude);
  }

  render() {
    const { time } = this.props;
    return (
      <div className="headerContainer">
        <Header time={time} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  time: state.location.time
});
const mapDispatchToProps = dispatch => {
  return {
    getCoords: () => dispatch(getCoords()),
    getTimeFromCoords: (lat, lng) => dispatch(getTimeFromCoords(lat, lng))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
