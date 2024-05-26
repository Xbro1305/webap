import React from "react";
import "./member.css";
import avatar from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";

export const Members = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="members">
      <p onClick={goBack}> {"<"} Back</p> <h1>Hub members </h1>
      <input type="text" placeholder="Search" />
      <div className="list">
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section className="followed">✓ Followed</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section className="followed">✓ Followed</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
        <div>
          <section>
            <img src={avatar} alt="" />
            <div>
              <p>Christopher Vasquez</p>
              <span>903 members</span>
            </div>
          </section>
          <section>+ Follow</section>
        </div>
      </div>
    </div>
  );
};
