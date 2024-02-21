import BoysMeme from "../../img/boys.webp";
import './Joke.css';

export default function Joke() {
  return (
    <>
      <div className="jokes">
        <h2 className="header--three">
          In Summary<br></br>
          Why Employ Me....
        </h2>
        <img src={BoysMeme} alt="meme" className="profile-img"></img>
      </div>
    </>
  );
}
