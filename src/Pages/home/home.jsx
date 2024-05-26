import React from "react";
import ava from "../../images/avatar.png";
import img from "../../images/postImg.png";
import "./home.css";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <section>
            <img className="avatar" src={ava} alt="avatar" />
          </section>
          <section>
            <h1>Christopher Vasquez</h1>
            <p>New publication</p>
            <span>
              In the quiet corners of forgotten dreams, where whispers of
              forgotten tales dance with the shadows, there lies a realm
              untouched by the hands of time. Here, amidst the ethereal glow of
              twilight, secrets long buried awaken, eager to unveil their
              mysteries to those who dare to wander.
            </span>
            <img src={img} alt="" />
            <button>Open publication</button>
          </section>
        </div>
        <div>
          <section>
            <img src={ava} alt="avatar" />
          </section>
          <section>
            <h1>Christopher Vasquez</h1>
            <p>New publication</p>
            <span>
              In the quiet corners of forgotten dreams, where whispers of
              forgotten tales dance with the shadows, there lies a realm
              untouched by the hands of time. Here, amidst the ethereal glow of
              twilight, secrets long buried awaken, eager to unveil their
              mysteries to those who dare to wander.
            </span>
            <button>Open publication</button>
          </section>
        </div>
        <div>
          <section>
            <img src={ava} alt="avatar" />
          </section>
          <section>
            <h1>Christopher Vasquez</h1>
            <p>New publication</p>
            <span>
              In the quiet corners of forgotten dreams, where whispers of
              forgotten tales dance with the shadows, there lies a realm
              untouched by the hands of time. Here, amidst the ethereal glow of
              twilight, secrets long buried awaken, eager to unveil their
              mysteries to those who dare to wander.
            </span>
            <img src={img} alt="" />
            <button>Open publication</button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
