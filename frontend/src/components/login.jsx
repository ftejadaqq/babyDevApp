import React, { Component } from "react";
import "../styles/login.css";
import { connect } from "react-redux";
import axios from "axios";

class Login extends Component {
  state = {};

  // dynamic user input
  onUserInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  // object you send is called the action
  // onSubmit sets state email and password for then axios checks if the details match what
  // was saved at the signup stage in the database
  onSubmit = async () => {
    const result = await axios.post(`${this.props.liveUrl}/login`, {
      email: this.state.email,
      password: this.state.password,
    });

    if (result.data.user_authenticated === true) {
      this.props.dispatch({
        type: "SET_SCREEN_MODE",
        screenMode: 2,
      });
      // this.props.dispatch({
      //   type: "SET_EXISTING_ACCOUNT",
      // });
      // console.log("sending msg to store");
    } else {
      alert("Incorrect login details, try again"); // edit to not an alert
      // redirect back to login page
    }
    console.log(result);
  };

  render() {
    return (
      // login form
      <div className="login-page">
        <div onChange={this.onUserInput} className="login-container">
          <h1 className="login-heading">Log in</h1>
          <h2
            onClick={() => {
              this.props.dispatch({
                type: "SET_ACCOUNT_MODE",
                accountMode: 1,
              });
              this.props.dispatch({
                type: "SET_SCREEN_MODE",
                screenMode: 1,
              });
            }}
          >
            New? Sign up for free.
          </h2>
          <div className="login-form">
            <div className="login-form-item">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className="email"
                placeholder="Email"
              />
            </div>
            <div className="login-form-item">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Password"
              />
            </div>

            <div className="login-form-button">
              <button
                className="login-submit-button"
                onClick={this.onSubmit}
                id="login-button"
              >
                SUBMIT
              </button>
            </div>
            <div className="login-form-forgotten-account">
              <p
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_ACCOUNT_MODE",
                    accountMode: 2,
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 1,
                  });
                }}
              >
                Forgotten account?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    liveUrl: state.liveUrl,
    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(Login);
// this says, here is my component and here is what part
// of the store I require
