import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">EXPLORE MY</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => {
          return (
            <div className="categrory" key={program.heading}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
                  rel="noreferrer"
                >
                  Join Now
                </a>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
