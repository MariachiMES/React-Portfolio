import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutMe/aboutme";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
