import React, { useState } from "react";
import "./Testemonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import righttArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testemonials = () => {
  const [selected, setSelected] = useState(0);
  const tLegth = testimonialsData.length;
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="testemonials" id="testemonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT ME</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLegth - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLegth - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={righttArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
