import { Tooltip } from "@material-ui/core";
import React, { useEffect } from "react";
import "./ColorBars.css";
import { Grow } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

function ColorBars({ width, title, data_aos }) {
  const [{ darkJs }, dispatch] = useDataLayerValue();
  // useEffect(() => {
  //   AOS.init({ duration: 500 });
  // }, []);
  return (
    <div className="colorBars">
      <Tooltip title={title} arrow>
        <div
          style={{
            width: `${width}`,
            backgroundColor: `${
              darkJs.isActivated() ? "var(--dark-Mode)" : "var(--main-color)"
            }`,
            borderRadius: "15px",
            textAlign: "center",
            paddingBottom: "2px",
            paddingTop: "2px",
          }}
          data-aos={data_aos}
        >
          <span className="colorBars__title">{title}</span>
        </div>
      </Tooltip>
    </div>
  );
}

export default ColorBars;
