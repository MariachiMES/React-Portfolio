import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="porfolio" className="logo">
            davidOrtiz.
          </a>
          <div className="itemContainer">
            <span>210.265.7992</span>
          </div>
          <a href="#about-me">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right">This Is Right</div>
      </div>
    </div>
  );
}
