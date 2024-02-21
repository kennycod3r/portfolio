import profile from "../../img/profile.webp";
import "./AboutMe.css";
import Joke from "../joke/Joke";

export default function AboutMe() {
  return (
    <>
      <h1 className="header--two">About Me.</h1>

      <div>
        <div className="img-text-div">
          <img className="profile-img" src={profile} alt="profileImg" />
          <p className="body--text about-me-p img-text">
            <span className="o2">04</span>I help companies from all over the
            world with tailor-made solutions. With each project, I push my work
            to new horizons, always putting quality first.
          </p>
        </div>

        <div className="about-text-area">
          <h2 className="about-me-header header--three">
            Helping Brands Thrive in the Digital world
          </h2>

          <p className="body--text about-me-p">
            <span className="o2">05</span>I help companies from all over the
            world with tailor-made solutions. With each project, I push my work
            to new horizons, always putting quality first.
          </p>
          <p className="body--text about-me-header">I can help with</p>
        </div>

        <div className="recomendations">
          <div>
            <p className="about-me-p">
              <span className="o2">06</span>I help companies from all over the
              world with tailor-made solutions. With each project, I push my
              work to new horizons, always putting quality first.
            </p>
          </div>

          <div>
            <p className="about-me-p">
              <span className="o2">07</span>I help companies from all over the
              world with tailor-made solutions. With each project, I push my
              work to new horizons, always putting quality first.
            </p>
          </div>

        </div>
        <Joke />

        <p className="body--text">Keep Exploring?</p>
      </div>
    </>
  );
}
