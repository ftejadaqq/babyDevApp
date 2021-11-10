import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/timelineInfo.css";
import Close from "../images/icons/close.svg";

class TimelineInfo extends Component {
  render() {
    return (
      <>
        <div className="timeline-info-heading">
          <h1>Information</h1>
        </div>
        <div className="timeline-info-items">
          <div className="timeline-info-item how-to-use">
            <h2>How to use this app</h2>
            <p>
              Upon signing up you input your baby's date of birth. This sets the
              timeline to always be at your child's age whenever you open the
              app, <b>until you logout</b> (please see a note on your data
              below).
            </p>
            <p>
              The timeline is divided into 3 month ages ranges. How a baby
              typically develops is on the top half of the timeline, and what
              toys would be developmentally appropriate are below. Every baby is
              of course unique and develops differently, and there are also many
              toys out there. This app serves to be a helpful frame of
              reference.{" "}
            </p>
            <p>
              Share the timeline with your friends and family, so they can learn
              about your baby's development and know what toys would be right to
              buy. This way your baby is more likely to use the toy and learning
              is optimised. Say goodbye to excess toys!
            </p>
          </div>
          <div className="timeline-info-item about-timeline">
            <h2>About the timeline</h2>
            <p>
              Our timeline is another adaptation of a psycho-motor development
              timeline, inspired by the Montessori method. The idea is children
              are absorbent beings from the beginning and have needs that change
              from one developmental stage to another. If we prepare their
              environment according to their development needs, we can guide
              them in their growth. Please note this timeline does not address
              the environment as a whole, but rather focuses on toys/activities.
            </p>
          </div>
          <div className="timeline-info-item data">
            <h2>My data</h2>
            <p>
              Montessori by Month appreciates your data is sensitive, especially
              when it comes to your baby, therefore we do not store your baby's
              name nor Date of Birth in our app's database. When you sign up,
              your data is stored locally on your computer and when you log out
              of the app you clear your data. We will only ever have visibilty
              to your email.
            </p>
          </div>
        </div>
        {/* style the below */}
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
    screenMode: state.screenMode,

    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(TimelineInfo);
