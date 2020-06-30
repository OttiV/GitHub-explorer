import React, { Component } from "react";
import { connect } from "react-redux";
import { requestToken } from "../../actions/authentication";
import "./Login.css";

class Login extends Component {
  componentDidMount() {
    // const params = new URL(document.location).searchParams;
    // const code = params.get("code");
    // requestToken(code);
  }

  render() {
    const params = new URL(document.location).searchParams;
    const code = params.get("code");
    return (
      <div className="loginContainer">
        <div className="loginText">LOGIN</div>
        <div>this is the temporary code: {code}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { requestToken }
)(Login);
