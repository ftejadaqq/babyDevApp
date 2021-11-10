import React, { Component } from "react";
import { connect } from "react-redux";

class AccountButtons extends Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.dispatch({
              type: "SET_ACCOUNT_MODE",
              accountMode: 1,
            });
            this.props.dispatch({ type: "SET_SCREEN_MODE", screenMode: 1 });
          }}
        >
          SIGN UP
        </button>
        <br></br>
        {/* will amend br in final css run-through */}
        <button
          onClick={() => {
            // this.props.dispatch({
            //   type: "SET_ACCOUNT_MODE",
            //   accountMode: 0,
            // });
            this.props.dispatch({ type: "SET_SCREEN_MODE", screenMode: 7 });
          }}
        >
          NO LOGIN?
        </button>
      </>
    );
  }
}

export default connect()(AccountButtons);
// because I am not subscribing to the store (I don't want anything from it, just want to tell it stuff) I don't
// need mapStateToProps
