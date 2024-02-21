import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="intro-section">
      <div className="intro-text-section">
        <div>
          <h2 id="welcome2" className="header--two ish">
            What I Do?<span>01</span>
          </h2>
        </div>

        <div className="intro-par">
          <h3 className="body--text-2 div-line">
            My obsession is to deliver a digital experience that not only serves
            a great purpose but also gives your business an unfair advantage.
          </h3>

          <div>
            <span className="o2">02</span>
            <p className="body--text-2 div-line">
              My obsession is to deliver a digital experience that not only
              serves a great purpose but also gives your business an unfair
              advantage.
              <span>What's going on?</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
