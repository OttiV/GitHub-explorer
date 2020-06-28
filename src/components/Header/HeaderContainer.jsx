import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoordinates, getTimeFromCoordinates } from "../../actions/location";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    const { getCoordinates } = this.props;
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
      } else {
        alert("Geolocation is not supported by this browser");
      }
    };
    getLocation();
  }

  componentDidUpdate() {
    const { latitude, longitude, getTimeFromCoordinates } = this.props;
    getTimeFromCoordinates(latitude, longitude);
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

export default connect(
  mapStateToProps,
  { getCoordinates, getTimeFromCoordinates }
)(HeaderContainer);
