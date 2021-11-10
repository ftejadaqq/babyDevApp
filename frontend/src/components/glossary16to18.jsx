import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary16to18.css";
import BackArrow from "../images/icons/backArrow.svg";
import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1card6 from "../images/individualSVGs/card6/baby1card6.svg";
import Baby2card6 from "../images/individualSVGs/card6/baby2card6.svg";
import Baby3card6 from "../images/individualSVGs/card6/baby3card6.svg";
import Toy1card6 from "../images/individualSVGs/card6/toy1card6.svg";
import Toy2card6 from "../images/individualSVGs/card6/toy2card6.svg";
import Toy3card6 from "../images/individualSVGs/card6/toy3card6.svg";
import Toy4card6 from "../images/individualSVGs/card6/toy4card6.svg";
import Close from "../images/icons/close.svg";

//16to18 months screenmode 6 (Glossary), glossarymode 6

class Glossary16to18 extends Component {
  render() {
    return (
      <>
        <div className="glossary16to18-page">
          <div className="glossary16to18-heading">
            <div>
              <img
                src={BackArrow}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 5, //glossary13to15
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>16-18 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 7, //glossary19to21
                  });
                }}
                src={ForwardArrow}
                alt="forward arrow"
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
          </div>
          <div className="glossary16to18-listings">
            <div className="glossary16to18-listings 16months">
              <div className="16months-heading">
                <h2>16 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card6} alt="Pouring a glass of water"></img>
                </div>
                <div>
                  <p>Pouring a glass of water</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card6} alt="shapes puzzle"></img>
                </div>
                <div>
                  <p>Shapes puzzle</p>
                </div>
              </div>
            </div>
            {/* 16 months */}

            <div className="glossary16to18-listings 17months">
              <div className="17months-heading">
                <h2>17 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card6} alt="starting to put shoes on"></img>
                </div>
                <div>
                  <p>Starting to get dressed alone</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card6} alt="clothing matching tray"></img>
                </div>
                <div>
                  <p>Clothing matching tray</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy3card6} alt="book about shoes"></img>
                </div>
                <div>
                  <p>Book about shoes</p>
                </div>
              </div>
            </div>
            {/* 17 months */}

            <div className="glossary16to18-listings 18months">
              <div className="18months-heading">
                <h2>18 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card6} alt="Drawing, painting"></img>
                </div>
                <div>
                  <p>Drawing, painting</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card6} alt="xylophone"></img>
                </div>
                <div>
                  <p>Xylophone</p>
                </div>
              </div>
            </div>
            {/* 18 months */}
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

export default connect()(Glossary16to18);
