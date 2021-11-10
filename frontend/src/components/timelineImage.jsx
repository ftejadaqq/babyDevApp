import React, { Component } from "react";

class TimelineImage extends Component {
  render() {
    return <img src={this.props.currentTimelineImage} alt="timeline pic"></img>;
  }
}

export default TimelineImage;
