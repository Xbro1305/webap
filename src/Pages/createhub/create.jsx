import React, { useState } from "react";
import ava from "../../images/addavatar.png";
import group from "../../images/group.svg";
import feed from "../../images/feed.svg";
import key from "../../images/key.svg";
import messages from "../../images/messages.svg";
import "./create.css";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(false);
  return (
    <div className="create">
      <h1>Create a hub</h1>
      <section>
        <img src={ava} alt="" />
        <h2>Tap to add a photo</h2>
      </section>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Hub name"
        className="hubname"
      />
      <input
        type="text"
        placeholder="Description (optional)"
        name="description"
      />
      <h3>Select prices for your assets</h3>
      <p>
        Users’ll have to buy displayed amount of keys <br /> to get the asset
      </p>
      <div>
        <section>
          <figure>
            <img src={group} alt="" />
          </figure>
          Private group
        </section>
        <section>
          <figure>
            <img src={key} alt="" />
            10
          </figure>
          {">"}
        </section>
      </div>
      <div>
        <section>
          <figure>
            <img src={feed} alt="" />
          </figure>
          Private feed
        </section>
        <section>
          <figure>
            <img src={key} alt="" />
            50
          </figure>
          {">"}
        </section>
      </div>
      <div>
        <section>
          <figure>
            <img src={messages} alt="" />
          </figure>
          Private messages
        </section>
        <section>
          <figure>
            <img src={key} alt="" />
            100
          </figure>
          {">"}
        </section>
      </div>
      <button disabled={name ? false : true} onClick={() => navigate("/")}>
        Next
      </button>
    </div>
  );
};
