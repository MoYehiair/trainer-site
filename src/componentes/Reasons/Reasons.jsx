import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import tick from "../../assets/tick.png";
// import nb from "../../assets/nb.png";
// import adidas from "../../assets/adidas.png";
// import nike from "../../assets/nike.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="images">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="some-reasons">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY </span>
          <span>CHOOSE ME?</span>
        </div>
        <div className="details">
          <div>
            <img src={tick} alt=""></img>
            <span>ONLINE FOLLOWING 24/7</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>CUSTOMIZED PROGRAM MADE FOR YOU</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>GUARANTEED RESULTS</span>
          </div>
          {/* <span
            style={{
              color: "var(--gray)",
              fontWeight: "normal",
              fontSize: "1.1rem",
            }}
          >
            OUR PARTNERS
          </span> */}
          {/* <div className="icons">
            <img src={nb} alt="" />
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
