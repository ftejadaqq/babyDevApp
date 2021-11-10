import React, { Component } from "react";
import "../styles/timeline.css";
import TimelineImage from "./timelineImage";
import Timeline_UpTo90 from "../images/timeline_upto90.svg";
import Timeline_UpTo180 from "../images/timeline_upto180.svg";
import Timeline_UpTo270 from "../images/timeline_upto270.svg";
import Timeline_UpTo360 from "../images/timeline_upto360.svg";
import Timeline_UpTo450 from "../images/timeline_upto450.svg";
import Timeline_UpTo540 from "../images/timeline_upto540.svg";
import Timeline_UpTo630 from "../images/timeline_upto630.svg";
import Timeline_UpTo720 from "../images/timeline_upto720.svg";

class TimelineRowCard extends Component {
  render() {
    const images = {
      timeline_upto90: Timeline_UpTo90,
      timeline_upto180: Timeline_UpTo180,
      timeline_upto270: Timeline_UpTo270,
      timeline_upto360: Timeline_UpTo360,
      timeline_upto450: Timeline_UpTo450,
      timeline_upto540: Timeline_UpTo540,
      timeline_upto630: Timeline_UpTo630,
      timeline_upto720: Timeline_UpTo720,
    };
    const currentTimelineImage =
      images[this.props.timelineRowCard.timelineImage]; //this is timelineRowCard.timelineImage
    // and not just timelineImage because this.props.timelineImage does not exist. timelineImage is inside timelineRowCard.
    // This is because thats' what you named it and the structure you sent in from the parent.
    // dynamic way to access image

    const { cardClass } = this.props.timelineRowCard;

    return (
      <div className={cardClass}>
        <TimelineImage currentTimelineImage={currentTimelineImage} />
      </div>
    );
  }
}

export default TimelineRowCard;
