import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import hero_image from "../assets/mm.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import { useEffect } from "react";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-l">
        <Header />
        {/* the best ad  */}
        <div className="best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS COACH IN THE TOWN</span>
        </div>
        {/* Hero heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span> Ideal body</span>
          </div>
          <div className="text">
            In here I will help you to shape and build your ideal body and live
            up your Dream
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <div>+100</div>
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <div>+50</div>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Buttons  */}
        <div className="buttons">
          <button className="btn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>{" "}
          </button>
          <button className="btn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>{" "}
          </button>
        </div>
      </div>
      {/* Right side */}
      <div className="hero-r">
        <button className="btn">
          <Link to="join" smooth={true}>
            Join Now
          </Link>
        </button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={heart} alt="heart" className="heart" />
          <img src={hero_image_back} alt="heart" className="hero_image_back" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="Hero" className="hero_image" />
        <motion.div
          className="stats"
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="calories" className="calories" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
