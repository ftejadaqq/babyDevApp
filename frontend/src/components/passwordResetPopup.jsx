import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/timelinePopup.css"; // will replace this css

class PasswordResetPopup extends Component {
  render() {
    return (
      <>
        <div className="popup-page">
          <div className="popup-container">
            <h1>
              Thank you for resetting your password, please check your email and
              return to log in.
            </h1>
            <p
              className="popup-exit"
              onClick={() =>
                this.props.dispatch({ type: "SET_PASSWORD_RESET_POPUP_ACTIVE" })
              }
            >
              X
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(PasswordResetPopup);
// this says, here is my component and here is what part
// of the store I require
