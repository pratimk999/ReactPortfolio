import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import CustomButton from "../CustomButton/CustomButton";
import "./Header.css";
import { Switch } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

function Header(props) {
  const [{ darkJs }, dispatch] = useDataLayerValue();
  const [checked, setChecked] = useState(darkJs.isActivated());
  const [pathName, setPathName] = useState("/home");

  useEffect(() => {
    if (props) {
      if (props.location) {
        const path = props?.location?.pathname;
        setPathName(path);
      }
    }
  }, [props]);

  return (
    <Navbar
      expand="xl"
      className="header container_shadow"
      sticky="top"
      data-aos="fade-down"
    >
      <Nav.Link as={NavLink} to="/home" className="header__navLink">
        <Navbar.Brand className="header__home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="header__left ">
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={
              pathName === "/resume" ? "header__active" : "header__link"
            }
          >
            RESUME
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header__active" : "header__link"
            }
          >
            PORTFOLIO
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName === "/contact" ? "header__active" : "header__link"
            }
          >
            CONTACT
          </Nav.Link>
        </Nav>
        <div className="header__right">
          {Object.keys(resumeData.socials).map((key, index) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          {/* <CustomButton text="Hire me" icon={<Telegram />} mode={checked} /> */}
          {/* <Switch
            checked={checked}
            onChange={() => {
              props.toggle.toggle();
              setChecked(!checked);
              dispatch({
                type: "SET_OPTIONS",
                darkJs: props.toggle,
              });
            }}
          /> */}
          {darkJs.isActivated() ? (
            <Brightness7Icon
              onClick={() => {
                props.toggle.toggle();
                setChecked(!checked);
                dispatch({
                  type: "SET_OPTIONS",
                  darkJs: props.toggle,
                });
              }}
              className="darkMode_button"
            />
          ) : (
            <Brightness4Icon
              onClick={() => {
                props.toggle.toggle();
                setChecked(!checked);
                dispatch({
                  type: "SET_OPTIONS",
                  darkJs: props.toggle,
                });
              }}
              className="darkMode_button"
            />
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
