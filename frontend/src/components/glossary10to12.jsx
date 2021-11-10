import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary10to12.css";
import BackArrow from "../images/icons/backArrow.svg";
import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1card4 from "../images/individualSVGs/card4/baby1card4.svg";
import Baby2card4 from "../images/individualSVGs/card4/baby2card4.svg";
import Baby3card4 from "../images/individualSVGs/card4/baby3card4.svg";
import Hand2card4 from "../images/individualSVGs/card4/hand2card4.svg";
import Hand1card4 from "../images/individualSVGs/card4/hand1card4.svg";
import Toy1card4 from "../images/individualSVGs/card4/toy1card4.svg";
import Toy2card4 from "../images/individualSVGs/card4/toy2card4.svg";
import Toy3card4 from "../images/individualSVGs/card4/toy3card4.svg";
import Toy4card4 from "../images/individualSVGs/card4/toy4card4.svg";
import Toy5card4 from "../images/individualSVGs/card4/toy5card4.svg";
import Close from "../images/icons/close.svg";

//10to12 months screenmode 6 (Glossary), glossarymode 4

class Glossary10to12 extends Component {
  render() {
    return (
      <>
        <div className="glossary10to12-page">
          <div className="glossary10to12-heading">
            <div>
              <img
                src={BackArrow}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 3, //glossary7to9
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>10-12 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 5, //glossary13to15
                  });
                }}
                onKeyDown={this.handleKeyDown}
                src={ForwardArrow}
                alt="forward arrow"
              ></img>
            </div>
          </div>
          <div className="glossary10to12-listings">
            <div className="glossary10to12-listings 10months">
              <div className="10months-heading">
                <h2>10 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card4} alt="standing baby"></img>
                </div>
                <div>
                  <p>Standing</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand1card4} alt="varied movement both hands"></img>
                </div>
                <div>
                  <p>Varied simultaneous hand movement</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card4} alt="hammer"></img>
                </div>
                <div>
                  <p>Hammer</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card4} alt="egg in a cup"></img>
                </div>
                <div>
                  <p>Egg in a cup</p>
                </div>
              </div>
            </div>
            {/* 10 months */}

            <div className="glossary10to12-listings 11months">
              <div className="11months-heading">
                <h2>11 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card4} alt="walking with support"></img>
                </div>
                <div>
                  <p>Walking with support</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand2card4} alt="fine pincer movement"></img>
                </div>
                <div>
                  <p>Fine pincer movement</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy3card4} alt="walker wagon with puzzle"></img>
                </div>
                <div>
                  <p>Walker wagon and puzzle</p>
                </div>
              </div>
            </div>
            {/* 11 months */}

            <div className="glossary10to12-listings 12months">
              <div className="12months-heading">
                <h2>12 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card4} alt="walking"></img>
                </div>
                <div>
                  <p>Walking</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card4} alt="stacking rings"></img>
                </div>
                <div>
                  <p>Stacking rings</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy5card4} alt="alphabet book"></img>
                </div>
                <div>
                  <p>Alphabet book</p>
                </div>
              </div>
            </div>
            {/* 12 months */}
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

export default connect()(Glossary10to12);
