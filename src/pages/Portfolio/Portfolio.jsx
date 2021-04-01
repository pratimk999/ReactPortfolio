import {
  Card,
  CardContent,
  CardMedia,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Container,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";
import { useTheme } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { useDataLayerValue } from "../../DataLayer";
import "./Portfolio.css";

function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  const [{ darkJs }, dispatch] = useDataLayerValue();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = (project) => {
    setOpen(true);
    setCurrentProject(project);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProject({});
  };

  // console.log("📖", currentProject);

  const showDialog = () => (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullScreen={fullScreen}
        className={
          darkJs.isActivated()
            ? "portfolio__modal darkMode_modal"
            : "portfolio__modal"
        }
      >
        <Container>
          <DialogTitle id="alert-dialog-slide-title">
            {currentProject.title}
          </DialogTitle>
          <DialogContent>
            <img
              src={currentProject.img}
              alt=""
              className="portfolio__modal__image"
            />
            <DialogContentText
              id="alert-dialog-slide-description"
              className="portfolio__modal__description"
            >
              {currentProject.desc}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {currentProject?.links?.map((link, i) => (
              <a href={link.link} target="_blank" rel="noreferrer" key={i}>
                {link.icon}
              </a>
            ))}
            <Button onClick={handleClose} variant="outlined" color="primary">
              Close
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </>
  );

  return (
    <>
      {darkJs.isActivated() ? (
        <>
          <div className="portfolio container_shadow">
            <Grid container className="portfolio__container" spacing={2}>
              <Grid item className="portfolio__title">
                <Typography
                  variant="h6"
                  className="portfolio__title__text darkMode"
                >
                  PORTFOLIO
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Tabs
                  value={tabValue}
                  indicatorColor="white"
                  className="portfolio__custom__tab"
                  onChange={(e, newValue) => setTabValue(newValue)}
                >
                  <Tab
                    label="All"
                    value="All"
                    className={
                      tabValue === "All"
                        ? "portfolio__custom__tab__active portfolio__custom__tabItem"
                        : "portfolio__custom__tabItem"
                    }
                  />
                  {[
                    ...new Set(resumeData.projects.map((item) => item.tag)),
                  ].map((tag) => (
                    <Tab
                      label={tag}
                      value={tag}
                      className={
                        tabValue === tag
                          ? "portfolio__custom__tab__active portfolio__custom__tabItem"
                          : "portfolio__custom__tabItem"
                      }
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={12} className="portfolio__projects">
                <Grid container spacing={4}>
                  {resumeData.projects.map((project, i) => (
                    <>
                      {tabValue === project.tag || tabValue === "All" ? (
                        <Grid item key={i} className="portfolio__grid">
                          <Grow in timeout={1000}>
                            <Card
                              className="portfolio__customCard"
                              onClick={(e) => handleClickOpen(project)}
                            >
                              <CardMedia
                                image={project.img}
                                title={project.title}
                                className="portfolio__customCard__image"
                              />
                              <CardContent>
                                <Typography className="portfolio__typography">
                                  {project.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  className="portfolio__caption"
                                >
                                  {project.caption}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grow>
                        </Grid>
                      ) : null}
                    </>
                  ))}
                </Grid>
              </Grid>
              {showDialog()}
            </Grid>
          </div>
        </>
      ) : (
        // <Fade right>
        <div className="portfolio container_shadow" data-aos="fade-left">
          <Grid container className="portfolio__container" spacing={2}>
            <Grid item className="portfolio__title">
              <Typography
                variant="h6"
                className="portfolio__title__text darkMode"
              >
                PORTFOLIO
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Tabs
                value={tabValue}
                indicatorColor="white"
                className="portfolio__custom__tab"
                onChange={(e, newValue) => setTabValue(newValue)}
              >
                <Tab
                  label="All"
                  value="All"
                  className={
                    tabValue === "All"
                      ? "portfolio__custom__tab__active portfolio__custom__tabItem"
                      : "portfolio__custom__tabItem"
                  }
                />
                {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                  (tag) => (
                    <Tab
                      label={tag}
                      value={tag}
                      className={
                        tabValue === tag
                          ? "portfolio__custom__tab__active portfolio__custom__tabItem"
                          : "portfolio__custom__tabItem"
                      }
                    />
                  )
                )}
              </Tabs>
            </Grid>
            <Grid item xs={12} className="portfolio__projects">
              <Grid container spacing={4}>
                {resumeData.projects.map((project, i) => (
                  <>
                    {tabValue === project.tag || tabValue === "All" ? (
                      <Grid item key={i} className="portfolio__grid">
                        <Grow in timeout={1000}>
                          <Card
                            className="portfolio__customCard"
                            onClick={(e) => handleClickOpen(project)}
                          >
                            <CardMedia
                              image={project.img}
                              title={project.title}
                              className="portfolio__customCard__image"
                            />
                            <CardContent>
                              <Typography className="portfolio__typography">
                                {project.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="portfolio__caption"
                              >
                                {project.caption}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grow>
                      </Grid>
                    ) : null}
                  </>
                ))}
              </Grid>
            </Grid>
            {showDialog()}
          </Grid>
        </div>
        // </Fade>
      )}
    </>
  );
}

export default Portfolio;
