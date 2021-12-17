import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="porfolio" className="logo">
            davidOrtiz.
          </a>
          <div className="itemContainer">
            <i class="fas fa-phone" id="phone"></i>
            <span id="phone-number">210.265.7992</span>
            <i class="fas fa-envelope" id="envelope">
              <span id="email-address">davidoprodev@gmail.com</span>
            </i>
          </div>
          <a href="#about-me">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
