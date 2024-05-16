import React, { useState } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const [en, setEn] = useState(false);

  const handleMouseEnter = () => {
    setEn(true);
  };

  const handleMouseLeave = () => {
    setEn(false);
  };

  return (
    <div className="Hero fC">
      <div className="hero-line"></div>
      <div
        className="hello-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 id="welcome" className="innerDiv hello-hero header--one">
          Hi There, <br />
          <span>
            Im K<em>e</em>nny.
          </span>
        </h1>
        <div className="unemployed-div">
          <p className="hero-p2">
            a freelance Frontend Developer and Web Designer.{" "}
          </p>
        </div>
      </div>
      <div className="small-text">
        <div
          className={`ken-mail fC`}
          style={en ? { animation: "rubberBand 1.5s" } : null}
        >
          <span>kenny.lj</span>
          <span>@kennyCod3r</span>
          <span>
          <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </div>
      </div>
    </div>
  );
}
