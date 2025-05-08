import React from "react";
import logo from "../../assets/logo.jpeg";
import "./index.scss";
import ShinyText from "../StyledComponents/ShinyText";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container p-6 flex">
        <div className="navbar-logo">
          <a href="/">
          <img src={logo} alt="Logo" className="w-14 rounded-sm opacity-70" />
          </a>
        </div>
        <div className="navbar-links flex justify-center items-center">
          <a className="nav-links" href="/">
            {
              <ShinyText
                text="Home"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            }
          </a>
          <a className="nav-links" href="/about">
            {
              <ShinyText
                text="About me"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            }
          </a>
          <Link to="/#contact">
            {
              <ShinyText
                text="Contact me"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            }
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
