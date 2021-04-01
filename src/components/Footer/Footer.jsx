import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <Typography className="footer__left__name">Pratim Kundu</Typography>
      </div>
      <div className="footer__right">
        <Typography className="footer__right__name">
          ©️ 2021 Designed by ❤️
          <a
            href="https://www.linkedin.com/in/pratim-kundu-946a851a4/"
            target="_blank"
            rel="noreferrer"
          >
            Pratim Kundu
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
