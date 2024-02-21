import { useState } from "react";

export default function ServiceCard(props) {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand((prevState) => !prevState);
  }
  return (
    <>
      <div className="service-div">
        <div className="header-expand fsb">
          <h3 onClick={handleExpand}>{props.text}</h3>
          <p className="click-icon">Expand</p>
        </div>
        {expand ? (
          <p className="body--text-2">
            My obsession is to deliver a digital experience that not only serves
            a great purpose, but give your business an unfair advantage.
          </p>
        ) : null}
      </div>
    </>
  );
}
