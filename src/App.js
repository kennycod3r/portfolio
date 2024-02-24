import "./App.css";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Maintexts/Main/Main";
import Hero from "./Maintexts/Hero/Hero";
import ProjectDisplay from "./Maintexts/ProjectSection/ProjectDisplay";

const App = () => {

  const hrs= new Date().getHours();
  const min= new Date().getMinutes();
  let localTime = `${hrs}:${min}`;
  const comp = useRef(null);
  const sideBarComp = useRef(null);

  const [openNav, setOpenNav] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  function handleNavOpen() {
    setOpenNav(!openNav);
  }

  useLayoutEffect(() => {
    let sioa;

    if (openNav) {
      sioa = gsap.context(() => {
        const timelineOpen = gsap.timeline();
        timelineOpen
          .to("#sideNav", {
            xPercent: "-100",
            duration: 0.7,
            delay: 0.1,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            ease: "cubic-bezier(.7, 0, .3, 1);",
          })
          .to(".Nav", {
            opacity: 1,
            ease: "elastic.in",
            duration: 0.7,
            delay: .1,
            stagger: 0.3,
          });
      }, comp);
    } else {
      sioa = gsap.context(() => {
        const timelineClose = gsap.timeline();
        timelineClose.to("#sideNav", {
          xPercent: "0",
          duration: 1,
          ease: "cubic-bezier(.7, 0, .3, 1);",
        });
      }, comp);
    }

    return () => {
      if (sioa) {
        sioa.revert();
      }
    };
  }, [openNav]);

  return (
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="over-screen">
        <h1 id="title-1">Kenny.</h1>
        <p id="title-2">@Folio2024</p>
      </div>

      <div className="outerDiv">
        <Navbar handleNavOpen={handleNavOpen} openNav={openNav} />

        <>
          {openNav && (
            <div id="sideNav" className={"fC side-nav"} ref={sideBarComp}>
              <div className="resume-div"><span className="o2">.resume</span>
              <span className="o2">.Linkdin</span>
              <span className="o2">.email</span></div>
              <div className="header--two Nav div-line"><span className="o2">09</span>Home</div>
              <div className="header--two Nav">About</div>
              <div className="header--two Nav">services</div>
              <div className="header--two Nav">Works</div>
              <div className="header--two Nav">Contact</div>
            </div>
          )}
        </>

        <main>
          <Hero />
          <Main />
          <ProjectDisplay localTime={localTime} />
          <Footer localTime={localTime}/>
        </main>
      </div>
    </div>
  );
};

export default App;
