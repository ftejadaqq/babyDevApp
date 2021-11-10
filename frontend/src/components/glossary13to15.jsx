import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary13to15.css";
import BackArrowDark from "../images/icons/backArrowDark.svg";
import ForwardArrowDark from "../images/icons/forwardArrowDark.svg";
import Baby1card5 from "../images/individualSVGs/card5/baby1card5.svg";
import Baby2card5 from "../images/individualSVGs/card5/baby2card5.svg";
import Baby3card5 from "../images/individualSVGs/card5/baby3card5.svg";
import Toy1card5 from "../images/individualSVGs/card5/toy1card5.svg";
import Toy2card5 from "../images/individualSVGs/card5/toy2card5.svg";
import Toy3card5 from "../images/individualSVGs/card5/toy3card5.svg";
import Toy4card5 from "../images/individualSVGs/card5/toy4card5.svg";
import Toy5card5 from "../images/individualSVGs/card5/toy5card5.svg";
import Close from "../images/icons/close.svg";

//13to15 months screenmode 6 (Glossary), glossarymode 5

class Glossary13to15 extends Component {
  render() {
    return (
      <>
        <div className="glossary13to15-page">
          <div className="glossary13to15-heading">
            <div>
              <img
                src={BackArrowDark}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 4, //glossary10to12
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>13-15 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 6, //glossary16to18
                  });
                }}
                src={ForwardArrowDark}
                alt="forward arrow"
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
          </div>
          <div className="glossary13to15-listings">
            <div className="glossary13to15-listings 13months">
              <div className="13months-heading">
                <h2>13 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card5} alt="Walking up and down steps"></img>
                </div>
                <div>
                  <p>Walking up and down steps</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card5} alt="rainbow stacker"></img>
                </div>
                <div>
                  <p>Rainbow stacker</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card5} alt="draws to open and close"></img>
                </div>
                <div>
                  <p>Draws to open and close</p>
                </div>
              </div>
            </div>
            {/* 13 months */}

            <div className="glossary13to15-listings 14months">
              <div className="14months-heading">
                <h2>14 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Baby2card5}
                    alt="Climbing/walking holding on to objects"
                  ></img>
                </div>
                <div>
                  <p>Climbing/walking holding objects</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy3card5} alt="horizontal stacking rings"></img>
                </div>
                <div>
                  <p>Horizontal stacking rings</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card5} alt="animal matching tray"></img>
                </div>
                <div>
                  <p>Animal matching tray</p>
                </div>
              </div>
            </div>
            {/* 14 months */}

            <div className="glossary13to15-listings 15months">
              <div className="15months-heading">
                <h2>15 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Baby3card5}
                    alt="Improved categorising and stacking"
                  ></img>
                </div>
                <div>
                  <p>Improved categorising and stacking</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy5card5} alt="threading beads"></img>
                </div>
                <div>
                  <p>Threading</p>
                </div>
              </div>
            </div>
            {/* 15 months */}
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

export default connect()(Glossary13to15);
