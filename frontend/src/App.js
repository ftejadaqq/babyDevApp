import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Home from "./components/home";
import Account from "./components/account";
import Timeline from "./components/timeline";
import Profile from "./components/profile";
import TimelineInfo from "./components/timelineInfo";
import GlossaryButtons from "./components/glossaryButtons";
import Glossary from "./components/glossary";
import NoLoginInfo from "./components/noLoginInfo";

class App extends Component {
  componentDidMount() {
    // detect if user has come from whatsapp, if so, automatically send them to the timeline
    // console.log("this if statement ran", window.location.href);
    var url = window.location.href;

    // the below says if .upto is in the url, it means go to the timeline screen
    // that way a user doesn't have to log in - the -1 means it doesn't exist/can't
    // find .upto in the url
    if (url.search(".upto") !== -1) {
      console.log("this worked");
      this.props.dispatch({
        type: "SET_SCREEN_MODE",
        screenMode: 2,
      });
    }
  }

  render() {
    // const live = window.location.pathname;
    // if (live !== "/beaches") {
    //   return (
    //     <div>
    //       <h1>Sorry this site is not yet live!</h1>
    //     </div>
    //   );
    // }
    // the live site contains the pathname /beaches so while I am
    // debugging my site etc, I do not want others to see it deployed
    // so if I want to see my live deployed site I have to add /beaches
    // to the url
    // delete or comment out when ready to go live
    return (
      <>
        {this.props.screenMode === 0 && <Home />}
        {/* if mode is 0 show home component */}
        {this.props.screenMode === 1 && <Account />}
        {this.props.screenMode === 2 && <Timeline />}
        {this.props.screenMode === 3 && <Profile />}
        {this.props.screenMode === 4 && <TimelineInfo />}
        {this.props.screenMode === 5 && <GlossaryButtons />}
        {this.props.screenMode === 6 && <Glossary />}
        {this.props.screenMode === 7 && <NoLoginInfo />}
        {/* this is sending a msg to the store asking for 
                  what I want via type */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    screenMode: state.screenMode,
    // this is where what I want from the store
    //  will go
  };
}
export default connect(mapStateToProps)(App);
// this says, here is my component and here is what part
// of the store I require
