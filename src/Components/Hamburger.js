//import { useState } from "react";

export default function HamburgerMenu({handleNavOpen, openNav , className}) {


  let openClass = openNav
    ? "hamburger hamburger--3dx is-active" 
    : "hamburger hamburger--3dx";


    console.log(openClass)
  return (
    <div className={className}>
      <button className={openClass} type="button" onClick={handleNavOpen}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
}
