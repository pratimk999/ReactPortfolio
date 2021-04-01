import React, { useEffect } from "react";
import "./Home.css";
import resumeData from "../../utils/resumeData";
import CustomBox from "../../components/CustomBox/CustomBox";
import ColorBars from "../../components/ColorBars/ColorBars";
import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { useDataLayerValue } from "../../DataLayer";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
function Home() {
  const [{ darkJs }, dispatch] = useDataLayerValue();

  return (
    <>
      {darkJs.isActivated() ? (
        <div className="home container_shadow">
          <div className="home__top">
            <Typography variant="h6" className="home__header darkMode">
              ABOUT
            </Typography>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className="home__about">{resumeData.about}</div>
            </motion.div>
          </div>
          <div className="home__middle">
            <Typography variant="h6" className="home__header darkMode">
              SERVICES
            </Typography>
            <div className="home__services">
              {Object.keys(resumeData.key_qualities).map((key) => (
                <CustomBox
                  title={key}
                  body={resumeData.key_qualities[key].body}
                  img={resumeData.key_qualities[key].img}
                />
              ))}
            </div>
          </div>
          <div className="home__bottom">
            <div className="home__skills">
              <div className="home_skills__left">
                <Typography
                  variant="h6"
                  className="home__header darkMode"
                  data-aos="zoom-in"
                >
                  STRENGTH
                </Typography>
                <ColorBars width="80%" title="Html" data_aos="fade-right" />
                <ColorBars width="70%" title="css" data_aos="fade-right" />
                <ColorBars width="70%" title="js" data_aos="fade-right" />
                <ColorBars width="80%" title="Java" data_aos="fade-right" />
              </div>
              <div className="home_skills__right">
                <Typography
                  variant="h6"
                  className="home__header darkMode"
                  data-aos="zoom-in"
                >
                  CODING SKILLS
                </Typography>
                <ColorBars width="50%" title="c" data_aos="fade-left" />
                <ColorBars width="60%" title="C++" data_aos="fade-left" />
                <ColorBars width="80%" title="react" data_aos="fade-left" />
                <ColorBars width="65%" title="Flutter" data_aos="fade-left" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="home container_shadow" data-aos="fade-left">
          <div className="home__top">
            <Typography
              variant="h6"
              className="home__header darkMode"
              data-aos="zoom-in"
            >
              ABOUT
            </Typography>
            <div className="home__about">{resumeData.about}</div>
          </div>
          <div className="home__middle">
            <Typography
              variant="h6"
              className="home__header darkMode"
              data-aos="zoom-in"
            >
              SERVICES
            </Typography>
            <div className="home__services">
              {Object.keys(resumeData.key_qualities).map((key) => (
                <CustomBox
                  title={key}
                  body={resumeData.key_qualities[key].body}
                  img={resumeData.key_qualities[key].img}
                />
              ))}
            </div>
          </div>
          <div className="home__bottom">
            <div className="home__skills">
              <div className="home_skills__left">
                <Typography
                  variant="h6"
                  className="home__header darkMode"
                  data-aos="zoom-in"
                >
                  STRENGTH
                </Typography>
                <ColorBars width="80%" title="Html" data_aos="fade-right" />
                <ColorBars width="70%" title="css" data_aos="fade-right" />
                <ColorBars width="70%" title="js" data_aos="fade-right" />
                <ColorBars width="80%" title="Java" data_aos="fade-right" />
              </div>
              <div className="home_skills__right">
                <Typography
                  variant="h6"
                  className="home__header darkMode"
                  data-aos="zoom-in"
                >
                  CODING SKILLS
                </Typography>
                <ColorBars width="50%" title="c" data_aos="fade-left" />
                <ColorBars width="60%" title="C++" data_aos="fade-left" />
                <ColorBars width="80%" title="react" data_aos="fade-left" />
                <ColorBars width="65%" title="Flutter" data_aos="fade-left" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
