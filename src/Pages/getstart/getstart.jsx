import React from "react";
import "./getstart.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

export const Getstart = () => {
  const navigate = useNavigate();
  return (
    <div className="getstart">
      <section>
        <img src={logo} alt="logo" />
        <h1>Welcome to ChatterHub!</h1>
        <p>Communicate, interact, get closer to your favorite creators</p>
      </section>
      <button onClick={() => navigate("/profileFoto")}>Get started</button>
    </div>
  );
};
