import React, { useEffect } from "react";
import "./FrontPage.css";
import Typewriter from "typewriter-effect/dist/core";
import { Button, Carousel } from "react-bootstrap";
import resumeData from "../../utils/resumeData";

function FrontPage() {
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["Web Developer", "Flutter Developer"],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div className="frontPage p-3 px-sm-5 py-sm-0">
      <div className="row py-5">
        <div className="col-12 col-sm-6 d-flex flex-column justify-content-center p-sm-5">
          <h3>Hello I am Pratim Kundu</h3>
          <p>
            I am a <span id="typewriter"></span>
          </p>
          <div className="row">
            <div className="col-6 col-md-5 col-lg-4 my-1 my-sm-3">
              <Button variant="outline-info button">HIRE ME</Button>
            </div>
            <div className="col-6 col-md-5 col-lg-4 my-1 my-sm-3">
              <Button variant="outline-info button">RESUME</Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 p-sm-5">
          <Carousel fade>
            {resumeData.frontPageImages?.map((item, i) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.src}
                  alt={`slide number ${i}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="frontPage__bottom">
        <a href="/home">
          <Button variant="primary">LET'S START </Button>
        </a>
      </div>
    </div>
  );
}

export default FrontPage;
