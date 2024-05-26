import React from "react";
import "./choosing.css";
import pencil from "../../images/pencil.svg";
import fan from "../../images/fan.svg";

export const Choosing = () => {
  return (
    <div className="choosing">
      <h1>So who are you?</h1>
      <p>Choose what describes you</p>
      <div>
        <h2>
          <img src={pencil} alt="" />
          I’m a creator
        </h2>
      </div>
      <div>
        <h2>
          <img src={fan} alt="" />
          I’m a fan
        </h2>
      </div>
    </div>
  );
};
