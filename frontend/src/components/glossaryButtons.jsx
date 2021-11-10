import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/glossaryButtons.css";
import Close from "../images/icons/close.svg";
// screenMode 5

class GlossaryButtons extends Component {
  render() {
    return (
      <>
        <div className="glossary-page">
          <div className="glossary-heading">
            <div>
              <h1>Glossary</h1>
            </div>
            <div>
              <p>For baby, hand and toy illustrations (0-24 months)</p>
            </div>
          </div>
          <div className="glossary-categories">
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 1, //glossary1to3
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                0-3 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 2, //glossary4to6
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                4-6 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 3, //glossary7to9
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                7-9 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 4, //glossary10to12
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                10-12 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 5, //glossary13to15
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                13-15 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 6, //glossary16to18
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                16-18 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 7, //glossary19to21
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                19-21 Months
              </h2>
            </div>
            <div className="category">
              <h2
                onClick={() => {
                  this.props.dispatch({
                    type: "SET_GLOSSARY_MODE",
                    glossaryMode: 8, //glossary22to24
                  });
                  this.props.dispatch({
                    type: "SET_SCREEN_MODE",
                    screenMode: 6, //glossary
                  });
                }}
                onKeyDown={this.handleKeyDown}
              >
                22-24 Months
              </h2>
            </div>
          </div>
          <div className="close-icon">
            <img
              onClick={() => {
                this.props.dispatch({
                  type: "SET_SCREEN_MODE",
                  screenMode: 2, //timeline
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

export default connect()(GlossaryButtons);
