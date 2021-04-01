import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfilePic from "../../assets/images/profilepic.jpg";
import CustomTimeline, {
  customTimelineSeparator,
} from "../CustomTimeline/CustomTimeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../CustomButton/CustomButton";
import resume from "../../assets/pdf/PRATIM KUNDU.pdf";
import { useDataLayerValue } from "../../DataLayer";
import Fade from "react-reveal/Fade";

const customTimelineItems = (title, text, link) => {
  return (
    <TimelineItem>
      {customTimelineSeparator()}
      <TimelineContent className="profile__customTimeline__content">
        {link ? (
          <Typography className="profile__customTimeline__text">
            <span className="profile__customTimeline__text__span">
              {title} :
            </span>{" "}
            <Link to={link}>{text}</Link>
          </Typography>
        ) : (
          <Typography className="profile__customTimeline__text">
            <span className="profile__customTimeline__text__span">
              {title} :
            </span>{" "}
            <span className="profile__text">{text}</span>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
function Profile({ toggle }) {
  const [{ darkJs }, dispatch] = useDataLayerValue();

  return (
    <>
      {darkJs.isActivated() ? (
        <>
          <div className="profile container_shadow">
            <div className="profile__header">
              <Typography className="profile__name">
                {resumeData.name}
              </Typography>
              <Typography className="profile__title">
                {resumeData.title}
              </Typography>
            </div>
            <figure className="profile__image">
              <img src={ProfilePic} alt="" />
            </figure>
            <div className="profile__information">
              <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                {customTimelineItems("Name", resumeData.name)}
                {customTimelineItems("Job", resumeData.title)}
                {customTimelineItems("Email", resumeData.email)}
              </CustomTimeline>
              <div className="profile__buttonContainer">
                <a href={resume} download>
                  <CustomButton
                    text="Download Cv"
                    icon={<GetAppIcon />}
                    mode={darkJs?.isActivated()}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="profile container_shadow" data-aos="fade-right">
          <div className="profile__header">
            <Typography className="profile__name">{resumeData.name}</Typography>
            <Typography className="profile__title">
              {resumeData.title}
            </Typography>
          </div>
          <figure className="profile__image">
            <img src={ProfilePic} alt="" />
          </figure>
          <div className="profile__information">
            <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
              {customTimelineItems("Name", resumeData.name)}
              {customTimelineItems("Job", resumeData.title)}
              {customTimelineItems("Email", resumeData.email)}
            </CustomTimeline>
            <div className="profile__buttonContainer">
              <a href={resume} download>
                <CustomButton
                  text="Download Cv"
                  icon={<GetAppIcon />}
                  mode={darkJs?.isActivated()}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
