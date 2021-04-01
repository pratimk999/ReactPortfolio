import { Container, Grid } from "@material-ui/core";
import "./App.css";
import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { useDataLayerValue } from "./DataLayer";
import Fade from "react-reveal/Fade";
import Particle from "./components/Particle/Particle";
import FrontPage from "./pages/FrontPage/FrontPage";
import AOS from "aos";
// import { motion } from "framer-motion";
// import Bounce from "react-reveal/Bounce";

function App() {
  // const [activate, setActivate] = useState(darkmode.isActivated());
  const [{ darkJs }, dispatch] = useDataLayerValue();

  useEffect(() => {
    AOS.init({ duration: 600 });
    dispatch({
      type: "SET_OPTIONS",
      darkJs: darkJs,
    });
    // dispatch({
    //   type: "SET_AOS",
    //   AOS: AOS,
    // });
  }, [darkJs, dispatch, darkJs.isActivated()]);
  return (
    <>
      {darkJs.isActivated() ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Container className="app">
              <Particle />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                  <Profile toggle={darkJs} />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                  <Header toggle={darkJs} />
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/contact">
                    <Contact toggle={darkJs} />
                  </Route>
                  <Footer />
                </Grid>
              </Grid>
            </Container>
          </Switch>
        </Router>
      ) : (
        // <Fade top>
        <Router>
          <Switch>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Container className="app">
              <Particle />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                  <Profile toggle={darkJs} />
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                  <Header toggle={darkJs} />
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/resume">
                    <Resume />
                  </Route>
                  <Route path="/contact">
                    <Contact toggle={darkJs} />
                  </Route>
                  <Footer />
                </Grid>
              </Grid>
            </Container>
          </Switch>
        </Router>
        // {/* </Fade> */}
      )}
    </>
  );
}

export default App;
