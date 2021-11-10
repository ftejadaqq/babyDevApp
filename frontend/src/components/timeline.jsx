import React, { Component } from "react";
// import TimelinePopup from "./timelinePopup";
import { connect } from "react-redux";
import "../styles/timeline.css";
import TimelineDescriptionRowCard from "./timelineDescriptionRowCard";
import TimelineRowCard from "./timelineRowCard";
import ShareIcon from "../images/icons/share.svg";
import InfoIcon from "../images/icons/info.svg";
import ProfileIcon from "../images/icons/profile.svg";

class Timeline extends Component {
  state = { targetCard: ".upto90" };
  componentDidMount() {
    // if the window.location.search.substr(1)'s length is greater than 1
    // the targetCard equals the window.location.search.substr(1) and scrolls into view
    // else the targetCard equals the className (based on daysOld) and scrolls into view
    // AKA looks for the url, if there is something in the url then jumps to that class
    var targetCard;

    var url = window.location.href;

    if (url.search(".upto") !== -1) {
      // if (window.location.search.substr(1).length > 0) {
      console.log("the timeline is using the url");

      var classID = url.split("/");
      // targetCard = document.querySelector(window.location.search.substr(1));
      console.log(classID);
      targetCard = document.querySelector(classID[3]);
      // scrolls to correct bit on timeline
      targetCard.scrollIntoView();
    } else {
      var className = "";

      switch (true) {
        case this.props.daysOld < 90:
          className = ".upto90";
          break;
        case this.props.daysOld > 90 && this.props.daysOld < 180:
          className = ".upto180";
          break;
        case this.props.daysOld > 180 && this.props.daysOld < 270:
          className = ".upto270";
          break;
        case this.props.daysOld > 270 && this.props.daysOld < 360:
          className = ".upto360";
          break;
        case this.props.daysOld > 360 && this.props.daysOld < 450:
          className = ".upto450";
          break;
        case this.props.daysOld > 450 && this.props.daysOld < 540:
          className = ".upto540";
          break;
        case this.props.daysOld > 540 && this.props.daysOld < 630:
          className = ".upto630";
          break;
        case this.props.daysOld > 630:
          className = ".upto720";
          break;
        default:
          className = ".upto90";
      }
      targetCard = document.querySelector(className);
      targetCard.scrollIntoView();
      this.setState({ targetCard: className }); // used for setting the url pathname to be the classname upon clicking the Share button
    }
  }

  render() {
    console.log(this.props.timelinePopupActive, this.props.daysOld);
    return (
      <>
        {/* this pop up will cover the screen when active - not using for now so commented it out*/}
        {/* {this.props.timelinePopupActive === true && <TimelinePopup />} */}

        <header>
          <div className="timeline-heading">
            <div className="timeline-heading-title">
              <div>
                <h1>Timeline</h1>
              </div>
              <div>
                <p>Development and stage based toys</p>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="scrollable-container">
            <div className="container">
              <div className="timeline-description-row">
                {this.props.timelineDescriptionData.map(
                  (timelineDescriptionRowCard, index) => {
                    return (
                      <div key={index}>
                        <TimelineDescriptionRowCard
                          timelineDescriptionRowCard={
                            timelineDescriptionRowCard
                          }
                        />
                      </div>
                    );
                  }
                )}
              </div>
              <div className="timeline-row">
                {this.props.timelineData.map((timelineRowCard, index) => {
                  return (
                    <div key={index}>
                      <TimelineRowCard timelineRowCard={timelineRowCard} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <footer className="timeline-footer">
          <div className="timeline-icons">
            <div className="timeline-icons-profile">
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 3, // profile page
                  });
                }}
                src={ProfileIcon}
                alt="profile icon"
              ></img>
            </div>
            <div className="timeline-icons-tips">
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 4,
                  });
                }}
                src={InfoIcon}
                alt="info icon"
              ></img>
            </div>
            <div className="timeline-icons-share">
              <a
                href={
                  "whatsapp://send?text=https://www.montessoribymonth.com/" +
                  this.state.targetCard
                }
                data-action="share/whatsapp/share"
              >
                <img src={ShareIcon} alt="share icon"></img>
                {/*  my domain name/[className] */}
              </a>
            </div>
            <div className="timeline-icons-glossary">
              <p
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 5,
                  });
                }}
              >
                GLOSSARY
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    timelinePopupActive: state.timelinePopupActive,
    timelineData: state.timelineData,
    daysOld: state.daysOld,
    timelineDescriptionData: state.timelineDescriptionData,
    screenMode: state.screenMode,
    babyNameInitial: state.babyNameInitial,

    // this is where what I want from the store
    // goes
  };
}

export default connect(mapStateToProps)(Timeline);
// this says, here is my component and here is what part
// of the store I require
