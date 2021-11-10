import React, { Component } from "react";
import "../styles/signup.css";
import { connect } from "react-redux";
import axios from "axios";
import SignupPopup from "./signupPopup";

class Signup extends Component {
  // default data
  state = { month: 1, year: 2020, day: 1 };

  // dynamic user input
  onUserInput = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  // object you send is called the action
  // onSubmit sets state month, day, year, email etc for "SET_NEW_ACCOUNT"
  // onSubmit also sends thanks for signinup up email user is added to database
  onSubmit = async () => {
    const result = await axios.post(`${this.props.liveUrl}/signup`, {
      email: this.state.email,
      password: this.state.password,
    });

    if (result.data.user_added === true) {
      this.props.dispatch({
        type: "SET_NEW_ACCOUNT",
        month: Number(this.state.month),
        day: Number(this.state.day),
        year: Number(this.state.year),
        email: this.state.email,
        password: this.state.password,
        babyName: this.state.babyName,
      });
    } else {
      this.props.dispatch({
        type: "SET_SIGNUP_POPUP_ACTIVE",
      });
    }
    console.log(result);
  };

  render() {
    return (
      <>
        {/* this pop up will cover the screen when active */}
        {this.props.signupPopupActive === true && <SignupPopup />}
        {/* sign up form */}
        <div className="signup-page">
          <div onChange={this.onUserInput} className="signup-container">
            <h1 className="signup-heading">Sign up</h1>
            <div className="signup-form">
              <div className="signup-form-item">
                <label htmlFor="babyName"></label>
                <input
                  type="text"
                  id="babyName"
                  className="babyName"
                  placeholder="Baby name"
                />
              </div>
              <div className="signup-form-item">
                <label htmlFor="dob"></label>
                <select id="year" name="year">
                  <option value="-">Your</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
                <select id="month" name="month">
                  <option value="-">Baby's</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select id="day" name="day">
                  <option value="-">DOB</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div className="signup-form-item">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  className="email"
                  placeholder="Email"
                />
              </div>
              <div className="signup-form-item">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  className="password"
                  placeholder="Password"
                />
              </div>
              <div className="signup-form-button">
                <button
                  className="signup-submit-button"
                  onClick={this.onSubmit}
                  id="signup-button"
                >
                  SUBMIT
                </button>
              </div>
              {/* <div className="signup-go-to-login">
                <p
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
                  Already have an account? Go to the log in page.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    liveUrl: state.liveUrl,
    signupPopupActive: state.signupPopupActive,
    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(Signup);
// this says, here is my component and here is what part
// of the store I require
