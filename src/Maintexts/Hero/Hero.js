import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  let [en, setEn] = useState(false);

  return (
    <div className="Hero fC">
      <div className="hero-line"></div>
      <div
        className="hello-text"
        onMouseEnter={() => setEn(!en)}
        onMouseLeave={() => setEn(!en)}
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
          className="ken-mail fC"
          style={en ? { animation: "rubberBand 2s" } : null}
        >
          <span>kenny.lj</span>
         <span> @kennyCod3r</span>
         
        </div>
      </div>
    </div>
  );
}
