import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="intro-section">
      <div className="intro-text-section">
        <div className="hero--text--box">
          <h2 id="welcome2" className="ish">
            What I Do?
          </h2>
        </div>

        <div className="intro-par">
          <div>
            <span className="o2">02</span>
            <p className="body--text-2 div-line">
              I help brands stand out in the digital world by creating <strong>engaging
              and purposeful web experiences</strong>. With a focus on design, coding,
              and user interaction, I offer services that give businesses a
              competitive advantage. 
            </p>
          </div>

          <div>
            <span className="o2">02</span>
            <p className="body--text-2 div-line">
              <strong>I specialize in crafting captivating and functional
              websites that leave a lasting impression.</strong> From intuitive user
              interfaces to seamless navigation, I prioritize user experience to
              ensure your audience stays engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
