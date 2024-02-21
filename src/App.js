import "./App.css";
import {useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Maintexts/Main/Main";
import Hero from "./Maintexts/Hero/Hero";
import ProjectDisplay from "./Maintexts/ProjectDisplay";

const App = () => {
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

  // let classList = openNav ? "fC side-nav" : "fC side-nav side-nav-active"

  function handleNavOpen() {
    setOpenNav(!openNav);
  }

  /*
 function  toggle () {
    if (openNav) {
      this.classList.remove("active");
      openSlidein();
    } else {
      this.classList.add("active");
      closeSlideIn();
    }
    isOpen = !isOpen;
  };



  function openSlidein(){
    let sioa = gsap.context(() =>{
      const timelineOpen = gsap.timeline();
      timeline.to('#sideNav',{
        xPercent:"100",
        duration:.8,
        ease: Elastic
      })
    })

    return sioa;
  }

  function openSlidein(){
    let sica = gsap.context(()=>{
    let timelineClose = gsap.timeline();

    return () => sioa.revert();
    



    //timelineClose.to('#sideNav', {})
    //closeTimeline.staggerFromTo(".navbar ul li",0.5,{ y: 0, opacity: 1, delay: 0.5 },{ y: 25, opacity: 0 },-0.1);
    //closeTimeline.to("#bg-circle", 1, {scale: 0,ease: Expo.easeInOut,delay: -0.5});
    //closeTimeline.to(".navbar", 0, { display: "none" });
    })
  };*/

  useLayoutEffect(() => {
    let sioa;

    if (openNav) {
      sioa = gsap.context(() => {
        const timelineOpen = gsap.timeline();
        timelineOpen.to("#sideNav", {
          xPercent: "-100",
          duration: 0.9,
          delay: 0.1,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius:0,
          ease: "cubic-bezier(.7, 0, .3, 1);",
        }).to(".Nav", {
          yPercent: "-50",
          opacity:1,
          ease:"ease",
          duration: 1,
          delay: .1,
          stagger: .5,

        });
      }, comp);
    }else {
      sioa = gsap.context(() =>{
        const timelineClose = gsap.timeline();
        timelineClose.to('#sideNav', {
          xPercent: "0",
          duration: 1,
          ease: "cubic-bezier(.7, 0, .3, 1);"
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
            <div
              id="sideNav"
              className={
                "fC side-nav" /*!openNav ? "fC side-nav" : "fC side-nav side-nav-active"*/
              }
              ref={sideBarComp}
            >
              <div className="Nav">Home</div>
              <div className="Nav">About</div>
              <div className="Nav">services</div>
              <div className="Nav">Works</div>
              <div className="Nav">Reviews</div>
              <div className="Nav">Contact</div>
            </div>
          )}
        </>

        <main>
          <Hero/>
          <Main />
          <ProjectDisplay />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
