import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary22to24.css";
import BackArrow from "../images/icons/backArrow.svg";
// import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1card8 from "../images/individualSVGs/card8/baby1card8.svg";
import Baby2card8 from "../images/individualSVGs/card8/baby2card8.svg";
import Baby3card8 from "../images/individualSVGs/card8/baby3card8.svg";
import Toy1card8 from "../images/individualSVGs/card8/toy1card8.svg";
import Toy2card8 from "../images/individualSVGs/card8/toy2card8.svg";
import Toy3card8 from "../images/individualSVGs/card8/toy3card8.svg";
import Toy4card8 from "../images/individualSVGs/card8/toy4card8.svg";
import Close from "../images/icons/close.svg";

//22to24 months screenmode 6 (Glossary), glossarymode 8

class Glossary22to24 extends Component {
  render() {
    return (
      <>
        <div className="glossary22to24-page">
          <div className="glossary22to24-heading">
            <div>
              <img
                src={BackArrow}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 7, //glossary19to21
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>22-24 Months</h1>
            </div>
            <div>
              {/* <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 9, //glossary25-27 in future. commenting out
                  });
                }}
                src={ForwardArrow}
                alt="forward arrow"
                onKeyDown={this.handleKeyDown}
              ></img> */}
            </div>
          </div>
          <div className="glossary22to24-listings">
            <div className="glossary22to24-listings 22months">
              <div className="22months-heading">
                <h2>22 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Baby1card8}
                    alt="Using cleavers/slicers to cut fruit"
                  ></img>
                </div>
                <div>
                  <p>Using cleavers/slicers to cut fruit</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card8} alt="latches and keys"></img>
                </div>
                <div>
                  <p>Latches and keys</p>
                </div>
              </div>
            </div>
            {/* 22 months */}

            <div className="glossary22to24-listings 23months">
              <div className="23months-heading">
                <h2>23 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card8} alt="washing up"></img>
                </div>
                <div>
                  <p>Washing up</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Toy2card8}
                    alt="Book about washing up, food prepping and getting dressed etc."
                  ></img>
                </div>
                <div>
                  <p>Book about practical life activities</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Toy3card8}
                    alt="New assortment of musical intruments"
                  ></img>
                </div>
                <div>
                  <p>New assortment of musical intruments</p>
                </div>
              </div>
            </div>
            {/* 23 months */}

            <div className="glossary22to24-listings 24months">
              <div className="24months-heading">
                <h2>24 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card8} alt="putting jacket on"></img>
                </div>
                <div>
                  <p>Putting jacket on</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Toy4card8}
                    alt="sand tray to practice pre-writing"
                  ></img>
                </div>
                <div>
                  <p>Sand tray to practice pre-writing</p>
                </div>
              </div>
            </div>
            {/* 24 months */}
          </div>
          <div className="close-icon">
            <img
              onClick={() => {
                this.props.dispatch({
                  type: "SET_SCREEN_MODE",
                  screenMode: 5, //glossary buttons
                });
              }}
              onKeyDown={this.handleKeyDown}
              src={Close}
              alt="close"
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Glossary22to24);
