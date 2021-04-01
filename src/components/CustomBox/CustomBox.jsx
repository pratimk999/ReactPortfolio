import React from "react";
import "./CustomBox.css";
function CustomBox({ title, img, body }) {
  return (
    <div className="customBox container_shadow ">
      <div className="customBox__top">
        <img src={img} alt="" />
      </div>
      <div className="customBox__middle">{title}</div>
      <div className="customBox__bottom">{body}</div>
    </div>
  );
}

export default CustomBox;
