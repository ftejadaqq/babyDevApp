import React, { Component } from "react";
import "../styles/passwordReset.css";
import { connect } from "react-redux";
import axios from "axios";
import PasswordResetPopup from "./passwordResetPopup";

class PasswordReset extends Component {
  // dynamic user input
  onUserInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  onResetPassword = async () => {
    const result = await axios.post(
      // when we deploy the app needs to point to this the correct liveUrl in index.js
      `${this.props.liveUrl}/password_reset`,
      {
        email: this.state.email,
      }
    );

    if (result.data.password_reset === true) {
      this.props.dispatch({
        type: "SET_PASSWORD_RESET_POPUP_ACTIVE",
      });
    }
    console.log(result);
  };

  render() {
    console.log(this.props.liveUrl);
    return (
      <>
        {/* this pop up will cover the screen when active */}
        {this.props.passwordResetPopupActive === true && <PasswordResetPopup />}

        <div onChange={this.onUserInput} className="password-reset-page">
          <h1>Find Your Account</h1>
          <p>
            Please enter your email address to have a new password sent to you.
          </p>
          <input type="text" id="email"></input>
          <div className="password-reset-buttons">
            <button onClick={this.onResetPassword}>Reset password</button>
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "SET_ACCOUNT_MODE",
                  accountMode: 0,
                });
                this.props.dispatch({
                  type: "SET_SCREEN_MODE",
                  screenMode: 1,
                });
              }}
            >
              Return to login
            </button>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    liveUrl: state.liveUrl,
    passwordResetPopupActive: state.passwordResetPopupActive,
    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(PasswordReset);
// this says, here is my component and here is what part
// of the store I require
