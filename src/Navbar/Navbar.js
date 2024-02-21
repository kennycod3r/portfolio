import React, { useState, useEffect } from "react";
import "./Navbar.css";
import HamburgerMenu from "../Components/Hamburger";

export default function Navbar({ handleNavOpen, openNav }) {
  const [scrolledPastPoint, setScrolledPastPoint] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const heroSection = document.querySelector(".Hero"); // Adjust the selector as needed
      if (!heroSection) return; // Check if hero section is found

      // Get the height of the hero section
      const heroHeight = heroSection.getBoundingClientRect().height;

      // Determine if the user has scrolled past the hero section

      if (window.scrollY > heroHeight + 17) {
        setScrolledPastPoint(true);
      } else {
        setScrolledPastPoint(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolledPastPoint ? "sticky-header" : "absolute-header"}>
      <div className="inner-nav fsb">
        <div className="Knny-logo" style={scrolledPastPoint ? {display:"none"} : {display:"block"}}>KNNY</div>
        <HamburgerMenu handleNavOpen={handleNavOpen} openNav={openNav} />
      </div>
    </header>
  );
}
