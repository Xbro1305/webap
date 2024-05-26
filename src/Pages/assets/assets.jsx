import React from "react";
import "./assets.css";
import eye from "../../images/eye.svg";
import notcoin from "../../images/notcoin.svg";
import avatar from "../../images/avatar.png";
import { Footer } from "../../Components/Footer/Footer";

export const Assets = () => {
  return (
    <div className="assets">
      <div>
        <span>
          Total assets value <img src={eye} alt="" />
        </span>
        <h1>
          2 359,42 <p>TON</p>
        </h1>
        <h2>≈ 630 USD</h2>
      </div>
      <section>
        <div>
          <section>
            <img src={notcoin} alt="" />2 000
          </section>
          <p>Assets value</p>
        </div>
        <div>
          <section>
            <img src={notcoin} alt="" />
            359,42
          </section>
          <p>Earned on commissions</p>
        </div>
      </section>
      <button>Export balance</button>
      <div className="list">
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 memberss</span>
            </div>
          </section>
          <section>2 assets</section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
