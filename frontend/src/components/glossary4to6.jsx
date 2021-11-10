import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossary4to6.css";
import BackArrow from "../images/icons/backArrow.svg";
import ForwardArrow from "../images/icons/forwardArrow.svg";
import Baby1card2 from "../images/individualSVGs/card2/baby1card2.svg";
import Baby2card2 from "../images/individualSVGs/card2/baby2card2.svg";
import Baby3card2 from "../images/individualSVGs/card2/baby3card2.svg";
import Hand1card2 from "../images/individualSVGs/card2/hand1card2.svg";
import Hand2card2 from "../images/individualSVGs/card2/hand2card2.svg";
import Toy1card2 from "../images/individualSVGs/card2/toy1card2.svg";
import Toy2card2 from "../images/individualSVGs/card2/toy2card2.svg";
import Toy3card2 from "../images/individualSVGs/card2/toy3card2.svg";
import Toy4card2 from "../images/individualSVGs/card2/toy4card2.svg";
import Toy5card2 from "../images/individualSVGs/card2/toy5card2.svg";
import Toy6card2 from "../images/individualSVGs/card2/toy6card2.svg";
import Toy7card2 from "../images/individualSVGs/card2/toy7card2.svg";
import Toy8card2 from "../images/individualSVGs/card2/toy8card2.svg";
import Close from "../images/icons/close.svg";

//4to6 months screenmode 6 (Glossary), glossarymode 2

class Glossary4to6 extends Component {
  render() {
    return (
      <>
        <div className="glossary4to6-page">
          <div className="glossary4to6-heading">
            <div>
              <img
                src={BackArrow}
                alt="arrow"
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 1, //glossary1to3
                  });
                }}
                onKeyDown={this.handleKeyDown}
              ></img>
            </div>
            <div>
              <h1>4-6 Months</h1>
            </div>
            <div>
              <img
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 3, //glossary7to9
                  });
                }}
                onKeyDown={this.handleKeyDown}
                src={ForwardArrow}
                alt="forward arrow"
              ></img>
            </div>
          </div>
          <div className="glossary4to6-listings">
            <div className="glossary4to6-listings 4months">
              <div className="4months-heading">
                <h2>4 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby1card2} alt="Turning over baby"></img>
                </div>
                <div>
                  <p>Turning over</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy1card2} alt="facial expressions book"></img>
                </div>
                <div>
                  <p>Facial expressions book</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy2card2} alt="grasping beads"></img>
                </div>
                <div>
                  <p>Grasping beads</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy3card2} alt="butterfly mobile"></img>
                </div>
                <div>
                  <p>Butterfly mobile</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy4card2} alt="interlocking discs"></img>
                </div>
                <div>
                  <p>Interlocking discs</p>
                </div>
              </div>
            </div>
            {/* 4 months */}

            <div className="glossary4to6-listings 5months">
              <div className="5months-heading">
                <h2>5 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby2card2} alt="slithering quickly"></img>
                </div>
                <div>
                  <p>Slithering quickly</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand1card2} alt="purposeful prehension"></img>
                </div>
                <div>
                  <p>Purposeful prehension</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy5card2} alt="sensory balls"></img>
                </div>
                <div>
                  <p>Sensory balls</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy6card2} alt="giraffe teething toy"></img>
                </div>
                <div>
                  <p>Giraffe teething toy</p>
                </div>
              </div>
            </div>
            {/* 5 months */}

            <div className="glossary4to6-listings 6months">
              <div className="6months-heading">
                <h2>6 Months</h2>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Baby3card2} alt="sitting with support"></img>
                </div>
                <div>
                  <p>Sitting with support</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Hand2card2} alt="manipulating"></img>
                </div>
                <div>
                  <p>Manipulating</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy7card2} alt="drum rattle"></img>
                </div>
                <div>
                  <p>Drum rattle</p>
                </div>
              </div>
              <div className="picAndDescription">
                <div>
                  <img src={Toy8card2} alt="ball roller"></img>
                </div>
                <div>
                  <p>Ball roller</p>
                </div>
              </div>
            </div>

            {/* 6 months */}
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

export default connect()(Glossary4to6);
