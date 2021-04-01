import React, { useEffect, useState } from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomTimeline, {
  customTimelineSeparator,
} from "../../components/CustomTimeline/CustomTimeline";
import resumeData from "../../utils/resumeData";
import { Avatar, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Resume.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { Carousel } from "react-bootstrap";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@material-ui/core/styles";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDataLayerValue } from "../../DataLayer";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

const customTimelineItems = (title, text, link) => {
  return (
    <TimelineItem>
      {customTimelineSeparator()}
      <TimelineContent className="resume__customTimeline__content">
        {link ? (
          <Typography className="resume__customTimeline__text">
            <span>{title} :</span> <Link to={link}>{text}</Link>
          </Typography>
        ) : (
          <Typography className="resume__customTimeline__text">
            <div className="resume__element__header">{title} </div>
            <div className="time_Span">2010-Present</div>
            <div className="resume__text">{text}</div>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
function Resume() {
  const matches = useMediaQuery("(max-width:430px)");
  const [{ darkJs }, dispatch] = useDataLayerValue();

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(11),
      height: theme.spacing(11),
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }));

  const classes = useStyles();
  return (
    <>
      {darkJs.isActivated() ? (
        <>
          <div className="resume container_shadow">
            <div className="resume__top">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="resume__motion"
                data-aos="fade-right"
              >
                <div className="resume__top__left">
                  <CustomTimeline icon={<WorkIcon />} title="WORK EXPERIENCE">
                    {Object.keys(resumeData.work_experience).map((key) =>
                      customTimelineItems(key, resumeData.work_experience[key])
                    )}
                  </CustomTimeline>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="resume__motion"
                data-aos="fade-left"
              >
                <div className="resume__top__right">
                  <CustomTimeline icon={<SchoolIcon />} title="EDUCATION">
                    {Object.keys(resumeData.educations).map((key) =>
                      customTimelineItems(key, resumeData.educations[key])
                    )}
                  </CustomTimeline>
                </div>
              </motion.div>
            </div>
            <div className="resume__middle">
              <Typography
                variant="h6"
                className="darkMode"
                data-aos="fade-left"
              >
                PRODUCTION LEVEL SKILLS
              </Typography>
              <Swiper
                className="resume__middle__swiper"
                spaceBetween={matches ? 20 : 25}
                slidesPerView={6}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                data-aos="fade-right"
              >
                {resumeData.productLevelSkills.map((skill) => (
                  <SwiperSlide className="resume__middle__slide">
                    <Avatar
                      alt="Remy Sharp"
                      src={skill.img}
                      className={matches ? classes.small : classes.large}
                    />
                    <div>{skill.title}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="resume__bottom">
              <Typography
                variant="h6"
                className="darkMode"
                data-aos="fade-left"
              >
                CERTIFICATIONS
              </Typography>
              <Carousel
                className="resume__bottom__carousel"
                fade
                data-aos="fade-right"
              >
                {resumeData.certificates.map((certificate, i) => (
                  <Carousel.Item key={i} interval={3000}>
                    <img
                      className={
                        certificate.size
                          ? "d-block w-100 size__big"
                          : "d-block w-100"
                      }
                      src={certificate.img}
                      alt="certificateImage"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </>
      ) : (
        // <Fade right>
        <div className="resume container_shadow" data-aos="fade-left">
          <div className="resume__top">
            <div className="resume__top__left" data-aos="fade-right">
              <CustomTimeline icon={<WorkIcon />} title="WORK EXPERIENCE">
                {Object.keys(resumeData.work_experience).map((key) =>
                  customTimelineItems(key, resumeData.work_experience[key])
                )}
              </CustomTimeline>
            </div>
            <div className="resume__top__right" data-aos="fade-left">
              <CustomTimeline icon={<SchoolIcon />} title="EDUCATION">
                {Object.keys(resumeData.educations).map((key) =>
                  customTimelineItems(key, resumeData.educations[key])
                )}
              </CustomTimeline>
            </div>
          </div>
          <div className="resume__middle">
            <Typography variant="h6" className="darkMode" data-aos="fade-left">
              PRODUCTION LEVEL SKILLS
            </Typography>
            <Swiper
              className="resume__middle__swiper"
              spaceBetween={matches ? 20 : 25}
              slidesPerView={6}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              data-aos="fade-right"
            >
              {resumeData.productLevelSkills.map((skill) => (
                <SwiperSlide className="resume__middle__slide">
                  <Avatar
                    alt="Remy Sharp"
                    src={skill.img}
                    className={matches ? classes.small : classes.large}
                  />
                  <div>{skill.title}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="resume__bottom">
            <Typography variant="h6" className="darkMode" data-aos="fade-left">
              CERTIFICATIONS
            </Typography>
            <Carousel
              className="resume__bottom__carousel"
              fade
              data-aos="fade-right"
            >
              {resumeData.certificates.map((certificate, i) => (
                <Carousel.Item key={i} interval={3000}>
                  <img
                    className={
                      certificate.size
                        ? "d-block w-100 size__big"
                        : "d-block w-100"
                    }
                    src={certificate.img}
                    alt="certificateImage"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        // </Fade>
      )}
    </>
  );
}

export default Resume;
