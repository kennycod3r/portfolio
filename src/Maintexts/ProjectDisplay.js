import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import AboutMe from './About-me/AboutMe';
import Services from './MyServices/Services';
import wifi from '../img/wifiLogo.svg';
import './ProjectDisplay.css';

const images = [
  { image: require('../img/projectImg1.webp'), image2: require('../img/projectImg2.webp') },
  { image: require('../img/FigmaDesign2.webp'), image2: require('../img/FigmaDes.webp'), gridSmall:true },
  { image: require('../img/projectImg1.webp'), image2: require('../img/projectImg4.webp') }
];

const ProjectDisplay = () => {
  const [aboutSection, setAboutSection] = useState(false);

  const btnText = aboutSection ? (
    <p className="click-btn">Click <br /> to Go back</p>
  ) : (
    <p className="click-btn">Click <br /> to Load More</p>
  );

  return (
    <>
      <div className="project-section">
        <div>
          <div className="line"></div>
          <div className="phoneline"></div>
          <img className="svg wifi" src={wifi} alt="wifi-svg"></img>
        </div>

        <div className="project-wrapper">
          {!aboutSection && <h1 className='header--two'>Selected Works. <span className='o2'>03</span></h1>}

          <div className="projects">
            {!aboutSection && (
              <>
                <div className="grid-bg-screen">
                  {images.map((item, index) => (
                    <ProjectCard key={index} image={item.image} image2={item.image2}  gridSmall={item.gridSmall}/>
                  ))}
                </div>
                <p className="body--text link">Keep Exploring Projects?</p>
              </>
            )}

            {aboutSection && <AboutMe />}

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

      <div className="whitebtn-div">
        <div className="services-section">
          {['Web Development', 'Web Design', 'Seo', 'Branding'].map((text, index) => (
            <Services key={index} text={text} />
          ))}
        </div>
        <button className="info info-white button-font">More works</button>
      </div>
    </>
  );
};

export default ProjectDisplay;
