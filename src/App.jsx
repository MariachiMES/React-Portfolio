import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/aboutMe/aboutme";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
