import React, { useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaHome,
  FaAddressCard,
  FaHamburger,
  FaUserAlt,
} from "react-icons/fa";

const Navbar = (index) => {
  const [isMobile, setisMobile] = useState(false);

  const navigate = useNavigate();

  //?----------------------useNavigate Links------------------*/

  const Menu = () => {
    navigate("/menu");
  };

  const Login = () => {
    navigate("/signin");
  };

  const Logo = () => {
    navigate("/home");
  };

  const Home = () => {
    navigate("/home");
  };

  const About = () => {
    navigate("/about");
  };

  return (
    <nav className="navbar">
      <div>
        <h3 className="nav-logo" onClick={Logo}>
          Rezz<span>Toran</span>
        </h3>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li className="nav-link" onClick={Home}>
          <FaHome className="fa-house" />
          Home
        </li>
        <li className="nav-link" onClick={About}>
          <FaAddressCard className="fa-house" />
          About
        </li>

        <li className="nav-link" onClick={Menu}>
          <FaHamburger className="fa-house" />
          Menu
        </li>

        <li className="nav-link" onClick={Login}>
          <FaUserAlt className="fa-house" />
          Login
        </li>
      </ul>

      <button className="nav-mobile-menu-icons">
        {isMobile ? (
          <FaTimes className="fa-times" onClick={() => setisMobile(false)} />
        ) : (
          <FaBars className="fa-bars" onClick={() => setisMobile(true)} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
