import React, { Component } from "react";
import { connect } from "react-redux";
import Glossary1to3 from "./glossary1to3";
import Glossary4to6 from "./glossary4to6";
import Glossary7to9 from "./glossary7to9";
import Glossary10to12 from "./glossary10to12";
import Glossary13to15 from "./glossary13to15";
import Glossary16to18 from "./glossary16to18";
import Glossary19to21 from "./glossary19to21";
import Glossary22to24 from "./glossary22to24";

class Glossary extends Component {
  render() {
    return (
      <>
        {this.props.glossaryMode === 1 && <Glossary1to3 />}
        {this.props.glossaryMode === 2 && <Glossary4to6 />}
        {this.props.glossaryMode === 3 && <Glossary7to9 />}
        {this.props.glossaryMode === 4 && <Glossary10to12 />}
        {this.props.glossaryMode === 5 && <Glossary13to15 />}
        {this.props.glossaryMode === 6 && <Glossary16to18 />}
        {this.props.glossaryMode === 7 && <Glossary19to21 />}
        {this.props.glossaryMode === 8 && <Glossary22to24 />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    glossaryMode: state.glossaryMode,

    // this is where what I want from the store
    // will go
  };
}

export default connect(mapStateToProps)(Glossary);
// this says, here is my component and here is what part
// of the store I require
