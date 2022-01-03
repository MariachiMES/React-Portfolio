import "./aboutme.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function AboutMe() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [" Web Developer", " Artist", " Musician", " Dad"],
    });
  }, []);
  return (
    <div className="about-me" id="about-me">
      <div className="left">
        <div className="image-container">
          <img src="assets/AboutMeCropped.png" alt="David Ortiz"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi.</h2>
          <h1> My name is David Ortiz.</h1>
          <h3>
            Professional
            <span ref={textRef}></span>
            <span></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
