import React from "react";
import "./projectcards.scss";

export default function Cards() {
  return (
    <div className="projects">
      <div className="project-cards" id="project">
        <h1>Projects</h1>
        <div className="row">
          <div className="col">
            <div className="feature-img">
              <img
                src={require("../../images/ReunifyLanding.png")}
                alt=""
                id="screen-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
