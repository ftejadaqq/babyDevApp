import React, { Component } from "react";
import "../styles/timeline.css";

class TimelineDescriptionRowCard extends Component {
  render() {
    const { cardClass, title, description1, description2, description3 } =
      this.props.timelineDescriptionRowCard;

    return (
      <div className={cardClass}>
        <h2>{title}</h2>
        <ul>
          <li>{description1}</li>
          <li>{description2}</li>
          <li>{description3}</li>
        </ul>
      </div>
    );
  }
}

export default TimelineDescriptionRowCard;
