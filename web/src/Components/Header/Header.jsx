import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo1.png";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState({
    caseStudy: false,
    solutions: false,
    sectors: false,
  });

  const handlecontact = () => {
    nav("/contact");
  };

  const handleMouseEnter = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="gap"></div>
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
        <div className="collapse navbar-collapse navs" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/story" aria-current="page">
                Our Story
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('caseStudy')}
              onMouseLeave={() => handleMouseLeave('caseStudy')}
            >
              <Link className="nav-link dropdown-toggle" to="#" role="button">
                Case study
              </Link>
              {dropdownOpen.caseStudy && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/gtholiday"
                      onClick={handlecontact}
                    >
                      GT Holidays
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/harrisnadar"
                      onClick={handlecontact}
                    >
                      Harris Nadar Jewellery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/tino"
                      onClick={handlecontact}
                    >
                      Tino Engineering
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={() => handleMouseLeave('solutions')}
            >
              <Link className="nav-link dropdown-toggle" to="#" role="button">
                Solutions
              </Link>
              {dropdownOpen.solutions && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/searchengine"
                      onClick={handlecontact}
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/socialmedia"
                      onClick={handlecontact}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/videoprod"
                      onClick={handlecontact}
                    >
                      Video Production
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/websitedev"
                      onClick={handlecontact}
                    >
                      Website Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('sectors')}
              onMouseLeave={() => handleMouseLeave('sectors')}
            >
              <Link className="nav-link dropdown-toggle" to="#" role="button">
                Sectors
              </Link>
              {dropdownOpen.sectors && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/business"
                      onClick={handlecontact}
                    >
                      Business Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/design"
                      onClick={handlecontact}
                    >
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/engineering"
                      onClick={handlecontact}
                    >
                      Engineering & Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/facilities"
                      onClick={handlecontact}
                    >
                      Facilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/finance"
                      onClick={handlecontact}
                    >
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/legal"
                      onClick={handlecontact}
                    >
                      Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/marketing"
                      onClick={handlecontact}
                    >
                      Marketing & Communications
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/people"
                      onClick={handlecontact}
                    >
                      People
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/sales"
                      onClick={handlecontact}
                    >
                      Sales, Service & Support
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" aria-current="page">
                Work with us
              </Link>
            </li>
          </ul>
          <button className="button-with-icon" onClick={handlecontact}>
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
                stroke="#ffc107"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 32h32M32 16l16 16-16 16"
              ></path>
            </svg>
            <span className="text">Connect with us</span>
          </button>
        </div>
        <div className="gap"></div>
      </div>
    </nav>
  );
};

export default Header;
