import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/timelineInfo.css";
import Close from "../images/icons/close.svg";

// screenMode 7
// I do not need a Login bc I'n not saving the baby's name nor DOB,
//    this is being stored locally and when the user logs out, erases from their device
//      the user should avoid logging out or keep signing up

class NoLoginInfo extends Component {
  render() {
    return (
      <>
        <div className="timeline-info-heading">
          <h1>Logins and your data</h1>
        </div>
        <div className="timeline-info-items">
          <div className="timeline-info-item how-to-use">
            <p>
              Upon signing up you input your baby's date of birth. This sets the
              timeline to always be at your child's age whenever you open the
              app, <b>until you logout</b>.
            </p>
            <p>
              Montessori by Month appreciates your data is sensitive, especially
              when it comes to your baby, therefore we do not store your baby's
              name nor Date of Birth in our app's database. When you sign up,
              your data is stored locally on your device and when you log out of
              the app you clear your data. We will only ever have visibilty to
              your email.
            </p>
          </div>
        </div>
        {/* style the below */}
        <div className="close-icon">
          <img
            onClick={() => {
              this.props.dispatch({
                type: "SET_SCREEN_MODE",
                screenMode: 0, //home
              });
            }}
            onKeyDown={this.handleKeyDown}
            src={Close}
            alt="close"
          ></img>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    screenMode: state.screenMode,

    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(NoLoginInfo);
