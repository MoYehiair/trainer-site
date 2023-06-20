import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur blur-plans-1"></div>
      <div className="blur blur-plans-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH ME</span>
      </div>
      <div className="cards">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              <div className="plan-details">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <span>See more benefits -&gt;</span>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
                rel="noreferrer"
                className="btn"
              >
                Join Now
              </a>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
