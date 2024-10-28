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

  const handleContact = () => {
    nav("/contact");
  };

  const handleMouseEnter = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
  };

  const handleDropdownClick = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
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
              <Link className="nav-link dropdown-toggle" to="#" onClick={handleDropdownClick} role="button">
                Case study
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen.caseStudy ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/gtholiday" onClick={handleContact}>
                    GT Holidays
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/harrisnadar" onClick={handleContact}>
                    Harris Nadar Jewellery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tino" onClick={handleContact}>
                    Tino Engineering
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={() => handleMouseLeave('solutions')}
            >
              <Link className="nav-link dropdown-toggle" to="#" onClick={handleDropdownClick} role="button">
                Solutions
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen.solutions ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/searchengine" onClick={handleContact}>
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/socialmedia" onClick={handleContact}>
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/videoprod" onClick={handleContact}>
                    Video Production
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/websitedev" onClick={handleContact}>
                    Website Development
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleMouseEnter('sectors')}
              onMouseLeave={() => handleMouseLeave('sectors')}
            >
              <Link className="nav-link dropdown-toggle" to="#" onClick={handleDropdownClick} role="button">
                Sectors
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen.sectors ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="/business" onClick={handleContact}>
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/design" onClick={handleContact}>
                    Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/engineering" onClick={handleContact}>
                    Engineering & Technology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/facilities" onClick={handleContact}>
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/finance" onClick={handleContact}>
                    Finance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/legal" onClick={handleContact}>
                    Legal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/marketing" onClick={handleContact}>
                    Marketing & Communications
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/people" onClick={handleContact}>
                    People
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sales" onClick={handleContact}>
                    Sales, Service & Support
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" aria-current="page">
                Work with us
              </Link>
            </li>
          </ul>
        </div>
        
        <button className="button-with-icon" onClick={handleContact}>
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
              stroke="#000"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 32h32M32 16l16 16-16 16"
            ></path>
          </svg>
          <span className="text">Connect with us</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
