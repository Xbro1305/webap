import React from "react";
import "./profilefoto.css";
import img from "../../images/mainavatar.png";
import avatar from "../../images/addavatar.png";

export const Profilefoto = () => {
  return (
    <div className="profilefoto">
      <section className="tr">
        <img src={img} alt="" />
        <h1>Leave a picture from your Telegram profile?</h1>
        <p>You can always change it to a more suitable one</p>
      </section>
      <div className="buttons tr">
        <button>Yeah, leave it</button>
        <button> Replace with another</button>
      </div>

      <section className="fs">
        <img src={avatar} alt="" />
        <h1>Looks like you don't have a picture, upload one!</h1>
        <p>You can always change it to a more suitable one</p>
      </section>
      <div className="buttons fs">
        <button>Upload a photo</button>
      </div>
    </div>
  );
};
