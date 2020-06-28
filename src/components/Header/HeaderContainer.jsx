import React, { Component } from "react";
import { connect } from "react-redux";
import { getCoordinates } from "../../actions/location";
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
    const { latitude, longitude } = this.props;

    return (
      <div className="headerContainer">
        <Header
          latitude={latitude}
          longitude={longitude}
          getLocation={this.getLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude
});

export default connect(
  mapStateToProps,
  { getCoordinates }
)(HeaderContainer);
