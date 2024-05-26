import React, { useState } from "react";
import ava from "../../images/mainavatar.png";
import twitter from "../../images/twitter.svg";
import tiktok from "../../images/tiktok.svg";
import instagram from "../../images/instagram.svg";
import follow from "../../images/follow.svg";
import share from "../../images/share.svg";
import key from "../../images/key.svg";
import group from "../../images/group.svg";
import feed from "../../images/feed.svg";
import messages from "../../images/messages.svg";
import "./profile.css";
import { Footer } from "../../Components/Footer/Footer";

export const Profile = () => {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="profile">
        <section>
          <img src={ava} alt="" />
          <section>
            <div>
              <p>12 312</p>
              <span>Hub memebers</span>
            </div>
            <section>
              <div>
                <p>28 464</p>
                <span>followers</span>
              </div>
              <div>
                <p>14</p>
                following
              </div>
            </section>
          </section>
        </section>
        <section className="info">
          <h1>
            Lucas Scott
            <section>
              <figure>
                <img src={twitter} alt="" />
                Сonfirmed
              </figure>
              <figure>
                <img src={tiktok} alt="" />
              </figure>
              <figure>
                <img src={instagram} alt="" />
              </figure>
            </section>
          </h1>
          <h2
            className={more ? "active" : "more"}
            onClick={() => setMore(!more)}
          >
            Hello, I’m a beginner in content creation. Welcome to my ChatterHub
            profile. I’d love to chat with you all and Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Voluptas necessitatibus nostrum
            vero, expedita provident odio.
          </h2>
        </section>
        <section className="FAS">
          <button>
            <img src={follow} alt="" />
            Follow
          </button>
          <button>
            <img src={share} alt="" />
            Share
          </button>
        </section>
        <section className="holding">
          <p>You are holding</p>
          <span>
            <img src={key} alt="" />
            10
          </span>
        </section>
        <div className="assets">
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
        </div>
        <div className="buttons">
          <button>
            <img src={key} alt="" />
            Buy key
          </button>
        </div>

        <div className="buttons two">
          <button>Sell keys</button>
          <button>Buy keys</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
