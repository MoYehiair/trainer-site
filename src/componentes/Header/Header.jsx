import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo1.svg";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to={"home"}
              smooth={true}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to={"programs"}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to={"reasons"}
              smooth={true}
            >
              Why Me
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to={"plans"}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to={"testemonials"}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
