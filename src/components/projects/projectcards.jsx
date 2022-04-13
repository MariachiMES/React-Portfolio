import React from "react";
import "./projectcards.scss";
import ReactPlayer from "react-player";

export default function Cards() {
  return (
    <div className="projects">
      <div className="project-cards" id="project">
        <h1>Projects</h1>
        <div className="row">
          <div className="col">
            <div className="feature-img">
              <ReactPlayer
                className="reunify"
                url={require("../../video/ReunifyUpdated.mov")}
                controls="true"
              />
            </div>
          </div>
          <div className="col">
            <div className="small-img-row">
              <div className="small-img">
                Reunify is a full-stack web application written to aid in the
                organization of data for processing Unacompanied Minors entering
                the southerin border, and seeking sponsorship through the Office
                of Refugee Resettlement. The application is a REST API, and
                utilizes a 3rd party Address Verification API. My role in the
                development of this application has been product management,
                UI/UX Design and programming both the front-end and back-end of
                the application.
              </div>
            </div>
            <div className="small-img-row">
              <div className="small-img">
                <p>-Restricted access managed by the program director</p>
                -Administrative privliges for Team Leads to create new cases,
                assign case managers to a case, view the Census of all cases,
                view a single case mamager's workload, assign them a team lead
                and manage their priviliges
                <br />
                -Caseload view for the logged in user to see an overview of
                their assigned cases
                <br />
                -A Dasbhoard view to view a single case, edit their
                demographics, sponsor information, utilize the address
                verification API, generate a automatically formatted release
                request as well as view a timeline of the case status, and enter
                exceptions for case coordination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
