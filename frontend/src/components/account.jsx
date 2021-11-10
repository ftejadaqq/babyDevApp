import React, { Component } from "react";
import Login from "./login";
import Signup from "./signup";
import PasswordReset from "./passwordReset";
import { connect } from "react-redux";

class Account extends Component {
  render() {
    return (
      <>
        {this.props.accountMode === 0 && <Login />}
        {this.props.accountMode === 1 && <Signup />}
        {this.props.accountMode === 2 && <PasswordReset />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    accountMode: state.accountMode,
    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(Account);
// this says, here is my component and here is what part
// of the store I require
