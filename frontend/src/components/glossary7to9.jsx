import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary7to9.css";
import BackArrowDark from "../images/icons/backArrowDark.svg";
import ForwardArrowDark from "../images/icons/forwardArrowDark.svg";
import Baby1card3 from "../images/individualSVGs/card3/baby1card3.svg";
import Baby2card3 from "../images/individualSVGs/card3/baby2card3.svg";
import Baby3card3 from "../images/individualSVGs/card3/baby3card3.svg";
import Hand1card3 from "../images/individualSVGs/card3/hand1card3.svg";
import Hand2card3 from "../images/individualSVGs/card3/hand2card3.svg";
import Hand3card3 from "../images/individualSVGs/card3/hand3card3.svg";
import Toy1card3 from "../images/individualSVGs/card3/toy1card3.svg";
import Toy2card3 from "../images/individualSVGs/card3/toy2card3.svg";
import Toy3card3 from "../images/individualSVGs/card3/toy3card3.svg";
import Toy4card3 from "../images/individualSVGs/card3/toy4card3.svg";
import Close from "../images/icons/close.svg";

//7to9 months screenmode 6 (Glossary), glossarymode 3

class Glossary7to9 extends Component {
  render() {
    return (
      <>
        <div className="glossary7to9-page">
          <div className="glossary7to9-heading">
            <div>
              <img
                src={BackArrowDark}
                alt="back arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 2, //glossary4to6
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>7-9 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 4, //glossary10to12
                  });
                }}
                onKeyDown={this.handleKeyDown}
                src={ForwardArrowDark}
                alt="forward arrow"
              ></img>
            </div>
          </div>
          <div className="glossary7to9-listings">
            <div className="glossary7to9-listings 7months">
              <div className="7months-heading">
                <h2>7 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card3} alt="sitting baby"></img>
                </div>
                <div>
                  <p>Sitting</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand1card3} alt="hand to hand transfer"></img>
                </div>
                <div>
                  <p>Transferring between hands</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card3} alt="egg shakers"></img>
                </div>
                <div>
                  <p>Egg shakers</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card3} alt="drum set"></img>
                </div>
                <div>
                  <p>Drum</p>
                </div>
              </div>
            </div>
            {/* 7 months */}

            <div className="glossary7to9-listings 5months">
              <div className="8months-heading">
                <h2>8 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card3} alt="crawling"></img>
                </div>
                <div>
                  <p>Crawling</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand2card3} alt="Finger movement improving"></img>
                </div>
                <div>
                  <p>Finger movement improving</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img
                    src={Toy3card3}
                    alt="bar for pulling self to standing"
                  ></img>
                </div>
                <div>
                  <p>Bar for pulling self to stand</p>
                </div>
              </div>
            </div>
            {/* 8 months */}

            <div className="glossary7to9-listings 9months">
              <div className="9months-heading">
                <h2>9 months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card3} alt="pulling up"></img>
                </div>
                <div>
                  <p>Pulling up</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand3card3} alt="hand releasing"></img>
                </div>
                <div>
                  <p>Hand releasing</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card3} alt="object permanence box"></img>
                </div>
                <div>
                  <p>Object permanence box</p>
                </div>
              </div>
            </div>
            {/* 9 months */}
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

export default connect()(Glossary7to9);
