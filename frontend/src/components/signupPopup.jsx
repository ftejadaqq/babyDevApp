import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/timelinePopup.css"; // will replace this css

class SignupPopup extends Component {
  render() {
    return (
      <>
        <div className="popup-page">
          <div className="popup-container">
            <h1>Please enter a new email to create an account</h1>
            <p
              className="popup-exit"
              onClick={() =>
                this.props.dispatch({ type: "SET_SIGNUP_POPUP_ACTIVE" })
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

export default connect()(SignupPopup);
// this says, here is my component and here is what part
// of the store I require
