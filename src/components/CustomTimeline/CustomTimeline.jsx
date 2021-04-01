import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

// import WorkIcon from "@material-ui/icons/Work";

import "./CustomTimeline.css";

function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className="customTimeline ">
      {/* First one */}
      <TimelineItem className="customTimeline__firstItem ">
        <TimelineSeparator>
          <TimelineDot className="customTimeline__dot__header">
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h5 className="customTimeline__title ">{title}</h5>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
}

export const customTimelineSeparator = () => (
  <TimelineSeparator className="customTimeline__separator">
    <TimelineDot variant="outlined" className="customTimeline__dot" />
    <TimelineConnector />
  </TimelineSeparator>
);
export default CustomTimeline;
