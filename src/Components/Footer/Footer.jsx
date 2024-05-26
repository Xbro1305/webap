import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import home from "../../images/home.svg";
import discover from "../../images/dicscover.svg";
import assets from "../../images/assets.svg";
import profile from "../../images/profile.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to={"/"}>
        <img src={home} alt="" />
        Home
      </NavLink>
      <NavLink to={"/discover"}>
        <img src={discover} alt="" />
        Discover
      </NavLink>
      <NavLink to={"/assets"}>
        <img src={assets} alt="" />
        My assets
      </NavLink>
      <NavLink to={"/profile"}>
        <img src={profile} alt="" />
        Profile
      </NavLink>
    </footer>
  );
};
