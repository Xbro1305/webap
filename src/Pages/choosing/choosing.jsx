import React from "react";
import "./choosing.css";
import pencil from "../../images/pencil.svg";
import fan from "../../images/fan.svg";
import { useNavigate } from "react-router-dom";

export const Choosing = () => {
  const navigate = useNavigate();
  return (
    <div className="choosing">
      <h1>So who are you?</h1>
      <p>Choose what describes you</p>
      <div onClick={() => navigate("/create")}>
        <h2>
          <img src={pencil} alt="" />
          I’m a creator
        </h2>
      </div>
      <div onClick={() => navigate("/create")}>
        <h2>
          <img src={fan} alt="" />
          I’m a fan
        </h2>
      </div>
    </div>
  );
};
