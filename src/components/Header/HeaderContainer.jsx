import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoordinates, getTimeFromCoordinates } from "../../actions/location";
import Header from "./Header";

class HeaderContainer extends Component {
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.props.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  render() {
    const { latitude, longitude, time, getTimeFromCoordinates } = this.props;
    const getUserTime = () => {
      getTimeFromCoordinates(latitude, longitude);
    };
    return (
      <div className="headerContainer">
        <Header
          latitude={latitude}
          longitude={longitude}
          getLocation={this.getLocation}
          getUserTime={getUserTime}
          time={time}
        />
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
