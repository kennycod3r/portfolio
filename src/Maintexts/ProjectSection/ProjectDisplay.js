import React, { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard";
import AboutMe from "../About-me/AboutMe";
import Services from "../MyService/Services";
import wifi from "../../img/wifiLogo.svg";
import "./ProjectDisplay.css";

const images = [
  {
    image: require("../../img/projectImg1.webp"),
    image2: require("../../img/projectImg2.webp"),
  },
  {
    image: require("../../img/Screenshot.webp"),
    image2: require("../../img/FigmaDes.webp"),
    gridSmall: true,
  },
  {
    image: require("../../img/projectImg1.webp"),
    image2: require("../../img/projectImg2.webp"),
  },
];

const ProjectDisplay = ({ localTime }) => {
  const [aboutSection, setAboutSection] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);

  const btnText = aboutSection ? (
    <p className="click-btn">
      Click <br /> to Go back
    </p>
  ) : (
    <p className="click-btn">
      Click <br /> to Load More
    </p>
  );

  let gridBgScreen = {
    display: "grid",
    gridTemplateColumns:"2fr 1.5fr",
    gridColumn: "auto",
    gap: "1em",
    overflow:"hidden"
  }

  useEffect(() => {
    function handleGrid() {
      if (window.innerWidth > 760) {
        setBigScreen(true);
      } else {
        setBigScreen(false);
      }
    }

    window.addEventListener("resize", handleGrid);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleGrid);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div className="project-section">
        <div className="phone-top">
          <div className="time-div">
            <span>{localTime}</span>
          </div>
          <div className="line"></div>
          <img className="svg wifi" src={wifi} alt="wifi-svg" />
        </div>
        <div className="project-wrapper">
          <div className="phone-line-div">
            <span className="div-line phone-line"></span>
          </div>
          {!aboutSection ? (
            <h1 className="header--two">
              Selected Works. <span className="o2">03</span>
            </h1>
          ) : null}
          <div className="projects">
            {!aboutSection ? (
              <>
                <div
                  className="grid-bg-screen"
                  style={bigScreen || window.innerWidth > 720 ? gridBgScreen : { display: "block" }}
                >
                  {images.map((item, index) => (
                    <ProjectCard
                      key={index}
                      image={item.image}
                      image2={item.image2}
                      gridSmall={item.gridSmall}
                    />
                  ))}
                </div>
                <p className="body--text link">Keep Exploring Projects?</p>
              </>
            ) : null}
            {aboutSection ? <AboutMe /> : null}
            <div className="phone-btn-div fC">
              <button
                className="phoneBtn fC"
                onClick={() => setAboutSection(!aboutSection)}
              >
                <div className="circle fC">
                  <div className="box"></div>
                </div>
              </button>
              {btnText}
            </div>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default ProjectDisplay;
