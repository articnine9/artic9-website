import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing
import Logo from "../../Assets/logo1.png";
import "./Header.css"; // Ensure this CSS file is imported

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link " to="/story" aria-current="page">
                Our Story
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
              >
                Case study
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/gtholiday">
                    GT Holidays
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/harrisnadar">
                    Harris Nadar Jewellery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tino">
                    Tino Engineering
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
              >
                Solutions
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/searchengine">
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/socialmedia">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/videoprod">
                    Video Production
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/websitedev">
                    Website Development
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
              >
                Sectors
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/design">
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/engineering">
                    Engineering & Technology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/facilities">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/finance">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/legal">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/marketing">
                    Marketing & Communications
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/people">
                    People
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales">
                    Sales, Service & Support
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact" aria-current="page">
                Work with us
              </Link>
            </li>
          </ul>
          <button className="button-with-icon">
            <svg
              className="icon"
              id="Arrow"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              width="550"
              height="550"
            >
              <path
                className="color000000 svgShape"
                fill="none"
                stroke="black"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 32h32M32 16l16 16-16 16"
              ></path>
            </svg>
            <span className="text">Connect with us</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
