import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer/reducer";
// import Particle from "./components/Particle/Particle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import "aos/dist/aos.css";

ReactDOM.render(
  <>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </>,
  document.getElementById("root")
);
