import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary19to21.css";
import BackArrow from "../images/icons/backArrow.svg";
import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1card7 from "../images/individualSVGs/card7/baby1card7.svg";
import Baby2card7 from "../images/individualSVGs/card7/baby2card7.svg";
import Baby3card7 from "../images/individualSVGs/card7/baby3card7.svg";
import Toy1card7 from "../images/individualSVGs/card7/toy1card7.svg";
import Toy2card7 from "../images/individualSVGs/card7/toy2card7.svg";
import Toy3card7 from "../images/individualSVGs/card7/toy3card7.svg";
import Toy4card7 from "../images/individualSVGs/card7/toy4card7.svg";
import Close from "../images/icons/close.svg";

//19to21 months screenmode 6 (Glossary), glossarymode 7

class Glossary19to21 extends Component {
  render() {
    return (
      <>
        <div className="glossary19to21-page">
          <div className="glossary19to21-heading">
            <div>
              <img
                src={BackArrow}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 6, //glossary16to18
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>19-21 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 8, //glossary22to24
                  });
                }}
                src={ForwardArrow}
                alt="forward arrow"
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
          </div>
          <div className="glossary19to21-listings">
            <div className="glossary19to21-listings 19months">
              <div className="19months-heading">
                <h2>19 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card7} alt="climbing"></img>
                </div>
                <div>
                  <p>Climbing</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card7} alt="stacking pegs"></img>
                </div>
                <div>
                  <p>Stacking pegs</p>
                </div>
              </div>
            </div>
            {/* 19 months */}

            <div className="glossary19to21-listings 20months">
              <div className="20months-heading">
                <h2>20 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card7} alt="brushing teetch"></img>
                </div>
                <div>
                  <p>Brushing teeth</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card7} alt="climbing structure"></img>
                </div>
                <div>
                  <p>Climbing structure</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy3card7} alt="second climbing structure"></img>
                </div>
                <div>
                  <p>Climbing ladder</p>
                </div>
              </div>
            </div>
            {/* 20 months */}

            <div className="glossary19to21-listings 21months">
              <div className="21months-heading">
                <h2>21 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card7} alt="potty training"></img>
                </div>
                <div>
                  <p>Potty training</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card7} alt="potty training books"></img>
                </div>
                <div>
                  <p>Potty training books</p>
                </div>
              </div>
            </div>
            {/* 21 months */}
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

export default connect()(Glossary19to21);
