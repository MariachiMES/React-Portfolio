import "./aboutme.scss";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="left">
        <div className="image-container">
          <img
            src="assets/AboutMeCropped.png"
            alt="Picture of David Ortiz"
          ></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>¡Hola!</h2>
          <h1> my name is david ortiz.</h1>
          <h3>
            Web Developer
            <span></span>
          </h3>
          <div className="down-arrow">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
