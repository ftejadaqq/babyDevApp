import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary1to3.css";
import BackArrow from "../images/icons/backArrow.svg";
import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1 from "../images/individualSVGs/card1/baby1.svg";
import Baby2 from "../images/individualSVGs/card1/baby2.svg";
import Baby3 from "../images/individualSVGs/card1/baby3.svg";
import Hand1 from "../images/individualSVGs/card1/hand1.svg";
import Hand2 from "../images/individualSVGs/card1/hand2.svg";
import Hand3 from "../images/individualSVGs/card1/hand3.svg";
import Toy1 from "../images/individualSVGs/card1/toy1.svg";
import Toy2 from "../images/individualSVGs/card1/toy2.svg";
import Toy3 from "../images/individualSVGs/card1/toy3.svg";
import Toy4 from "../images/individualSVGs/card1/toy4.svg";
import Toy5 from "../images/individualSVGs/card1/toy5.svg";
import Toy6 from "../images/individualSVGs/card1/toy6.svg";
import Toy7 from "../images/individualSVGs/card1/toy7.svg";
import Close from "../images/icons/close.svg";

// unique css (picAndDescription1) with that 1 due to svg not sizing like the other cards
//1to3 months screenmode 6 (Glossary), glossarymode 1

class Glossary1to3 extends Component {
  render() {
    return (
      <>
        <div className="glossary1to3-page">
          <div className="glossary1to3-heading">
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 5, //glossary buttons
                  });
                }}
                onKeyDown={this.handleKeyDown}
                src={BackArrow}
                alt="back arrow"
              ></img>
            </div>
            <div>
              <h1>0-3 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 2, //glossary4to6
                  });
                }}
                onKeyDown={this.handleKeyDown}
                src={ForwardArrow}
                alt="forward arrow"
              ></img>
            </div>
          </div>
          <div className="glossary1to3-listings">
            <div className="glossary1to3-listings 1month">
              <div className="1month-heading">
                <h2>1 Month</h2>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Baby1} alt="rotating baby"></img>
                </div>
                <div>
                  <p>Rotating</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Hand1} alt="instinctive grasping hand"></img>
                </div>
                <div>
                  <p>Instinctive grasping</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy1} alt="munari mobile"></img>
                </div>
                <div>
                  <p>Munari mobile</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy2} alt="octahedron mobile"></img>
                </div>
                <div>
                  <p>Octahedron mobile</p>
                </div>
              </div>
            </div>
            {/* 1 month */}

            <div className="glossary1to3-listings 2months">
              <div className="2month-heading">
                <h2>2 Months</h2>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Baby2} alt="holding head up baby"></img>
                </div>
                <div>
                  <p>Holding head up</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Hand2} alt="observing hands"></img>
                </div>
                <div>
                  <p>Observing hands</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy3} alt="bell on a ribbon"></img>
                </div>
                <div>
                  <p>Bell on a ribbon</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy4} alt="gobbi mobile"></img>
                </div>
                <div>
                  <p>Gobbi mobile</p>
                </div>
              </div>
            </div>
            {/* 2 months */}

            <div className="glossary1to3-listings 3months">
              <div className="3month-heading">
                <h2>3 months</h2>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Baby3} alt="slithering baby"></img>
                </div>
                <div>
                  <p>Slithering</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Hand3} alt="intentional hand grasping"></img>
                </div>
                <div>
                  <p>Intentional grasping starts</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy5} alt="fabric"></img>
                </div>
                <div>
                  <p>Fabric</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy6} alt="soft rattle"></img>
                </div>
                <div>
                  <p>Soft rattle</p>
                </div>
              </div>
              <div className="picAndDescription1">
                <div>
                  <img src={Toy7} alt="wooden grasping rings"></img>
                </div>
                <div>
                  <p>Wooden grasping rings</p>
                </div>
              </div>
            </div>
            {/* 3 months */}
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

export default connect()(Glossary1to3);
