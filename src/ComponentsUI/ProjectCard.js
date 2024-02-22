import { useState } from "react";
import Circle from "./Circle";

export default function ProjectCard({ image, image2, gridSmall }) {
  const [hovered, setHovered] = useState(false); // Changed default state to false

  function handleHover() {
    setHovered(!hovered);
  }

  let btnText = gridSmall ? "Design -" : "Design and Development.";

  return (
    <div className="Ac-card">
      <a href="www.nowhere.com" className="back-color">
        <div
          className="project-img"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{
            backgroundImage: hovered ? `url(${image})` : `url(${image2})`,
            transition: "all 0.4s cubic-bezier(0.7, 0, 0.3, 1)",
          }}
        />
        <Circle className="flexCenter shop-circle" />
        {/* Changed className assignment */}
      </a>

      <div className="ac-card-details">
        <h3 className="show-bg header--two">Mother</h3>

        <div className="fsb DisDev">
          <button>{btnText}</button>
          <button className="btn23">2023</button>
        </div>
      </div>
    </div>
  );
}
