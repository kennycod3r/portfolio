import "./Footer.css";
import Button from "../Components/Button";

export default function Footer({localTime}) {
  
  return (
    <section className="Homefooter" id="Footer">
      <div className="footer--text">
        <p>Got a project? Need an unfair advantage?</p>
        <h1>Get in Touch.</h1>
      </div>

      <div className="fsb footer-links-div">
        <div className="footer-links body--text">
          <h3>INTERACTION</h3>
          <nav>
            <p>Resume</p>
            <p>Services</p>
          </nav>
        </div>

        <div className="footer-links body--text">
          <h3>SOCIALS</h3>
          <nav>
            <p>linkdin</p>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Github</p>
          </nav>
        </div>

        <div className="footer-links body--text hide-link">
          <h3>RESOURCES</h3>
          <nav>
            <p>react.js</p>
            <p>GSAP</p>
            <p>PillerStack</p>
            <p>Figma</p>
          </nav>
        </div>
      </div>

      <li className="arrow-up">
          <div>up arrow</div>
        </li>
      <div>

      </div>

      <div className="info--btns fC">
        <Button text="@oguntolakenny6@gmail.com" />
        <Button text="+ 234 0000 0000 " />
      </div>

      <div className="end--footer fsb">
        <a href="www.nowhere.com">version 2024</a>
        <a href="www.nowhere.com">localTime  {localTime}</a>
        <a href="www.nowhere.com">socials</a>
        <a href="www.nowhere.com">behance</a>
        <a href="www.nowhere.com">linkdin</a>
      </div>
    </section>
  );
}
