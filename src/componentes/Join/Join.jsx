import React from "react";
import { useRef } from "react";
import "./Join.css";
// import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_253atky",
  //       "template_hzsmq6e",
  //       form.current,
  //       "XPhEUGuEvnZD5i6le"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="join" id="join">
      <div></div>
      <div className="join-text">
        <div>
          <span className="stroke-text">READY TO </span>
          <span> LEVEL UP </span>
        </div>
        <div>
          {" "}
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH ME?</span>
        </div>
      </div>
      <div className="input">
        <form ref={form}>
          <input
            placeholder="Enter Your Address Email Here"
            type="email"
            name="user_email"
          />{" "}
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
            rel="noreferrer"
          >
            Join Now
          </a>
        </form>
      </div>
    </div>
  );
};

export default Join;
