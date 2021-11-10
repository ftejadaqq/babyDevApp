import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/profile.css";
import Close from "../images/icons/close.svg";

class Profile extends Component {
  render() {
    return (
      // profile icon, takes you to profile/account where you will be able to edit stored data
      <>
        <div className="account-heading">
          <h1>Account</h1>
        </div>
        <div className="account-items">
          <div className="account-item name">
            <div>
              <p>Baby's name</p>
              <p>{this.props.babyName}</p>
            </div>
          </div>
          <div className="account-item dob">
            <div>
              <p>Baby's DOB</p>
              <p>{this.props.dOB}</p>
            </div>
          </div>
        </div>
        <div>
          {/* log out is temporarily here for local storage clearing purposes */}
          <div className="logout">
            <p
              onClick={() => {
                localStorage.clear();
                this.props.dispatch({
                  type: "SET_SCREEN_MODE",
                  screenMode: 0,
                });
              }}
              onKeyDown={this.handleKeyDown}
            >
              LOG OUT
            </p>
          </div>
        </div>
        <div className="close-icon">
          <img
            onClick={() => {
              this.props.dispatch({
                type: "SET_SCREEN_MODE",
                screenMode: 2,
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
    babyName: state.babyName,
    dOB: state.dOB,
  };
}
export default connect(mapStateToProps)(Profile);
