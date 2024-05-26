import React from "react";
import "./profilefoto.css";
import img from "../../images/mainavatar.png";
import avatar from "../../images/addavatar.png";
import { useNavigate } from "react-router-dom";

export const Profilefoto = () => {
  const navigate = useNavigate();

  return (
    <div className="profilefoto">
      <section className="tr">
        <img src={img} alt="" />
        <h1>Leave a picture from your Telegram profile?</h1>
        <p>You can always change it to a more suitable one</p>
      </section>
      <div className="buttons tr">
        <button onClick={() => navigate("/name")}>Yeah, leave it</button>
        <button onClick={() => navigate("/name")}> Replace with another</button>
      </div>

      <section className="fs">
        <img src={avatar} alt="" />
        <h1>Looks like you don't have a picture, upload one!</h1>
        <p>You can always change it to a more suitable one</p>
      </section>
      <div className="buttons fs">
        <button onClick={() => navigate("/name")}>Upload a photo</button>
      </div>
    </div>
  );
};
