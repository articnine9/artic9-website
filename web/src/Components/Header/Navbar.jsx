import React, { useState } from "react";
import "./Navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../Assets/logo1.png";


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleOverlayMenu = () => {
    setIsActive(!isActive);
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="navcontainer">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/story">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <label
            htmlFor="active"
            className="menu-btn"
            onClick={toggleOverlayMenu}
          >
            <i className={`fas ${isActive ? "fa-times" : "fa-bars"}`}></i>
          </label>

          {/* Overlay menu */}
          <div className={`wrapper ${isActive ? "active" : ""}`}>
            <ul>
              <li>
                <a href="/story">About</a>
              </li>
              <li className="menu-item">
                <a href="#" onClick={() => toggleSubMenu("caseStudy")}>
                  Case Study
                </a>
                {activeSubMenu === "caseStudy" && (
                  <ul className="submenu right">
                    <li>
                      <a href="/harrisnadar">Harris Nadar Jewellery</a>
                    </li>
                    <li>
                      <a href="/tino">Tino Engineering</a>
                    </li>
                    <li>
                      <a href="/gtholiday">GT Holidays</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="menu-item">
                <a href="#" onClick={() => toggleSubMenu("services")}>
                  Services
                </a>
                {activeSubMenu === "services" && (
                  <ul className="submenu right">
                    <li>
                      <a href="/socialmedia">Social Media Marketing</a>
                    </li>
                    <li>
                      <a href="/videoprod">Video Production</a>
                    </li>
                    <li>
                      <a href="/websitedev">Website Development</a>
                    </li>
                    <li>
                      <a href="/searchengine">Search Engine Optimization</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="menu-item">
                <a href="#" onClick={() => toggleSubMenu("sectors")}>
                  Sectors
                </a>
                {activeSubMenu === "sectors" && (
                  <ul className="submenu right">
                    <li>
                      <a href="/engineering">Engineering & Technology </a>
                    </li>
                    <li>
                      <a href="/facilities">Finance</a>
                    </li>
                    <li>
                      <a href="/marketing">Marketing & Communications</a>
                    </li>
                    <li>
                      <a href="/business">Business Strategy</a>
                    </li>
                    <li>
                      <a href="/legal">Legal</a>
                    </li>
                    <li>
                      <a href="/facilities">Facilities</a>
                    </li>
                    <li>
                      <a href="/sales">Sales, Service & Support</a>
                    </li>
                    <li>
                      <a href="/people">People</a>
                    </li>
                    <li>
                      <a href="/design">Design</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
            <div className="socials">
              <div className="sociallist">
                <div className="sclbtn">Linked In</div>
                <div className="sclbtn">Google</div>
                <div className="sclbtn">Instagram</div>
                <div className="sclbtn">X</div>
                <div className="sclbtn">Facebook </div>
              </div>
            </div>
            <div className="details">
              <div className="cntct">
                <div className="num">
                  <div className="nums">
                    <h3>For Queries</h3>
                    <a href="tel:+919003442463" target="_blank">
                      +91 90034 42463
                    </a>
                    <br />
                    <a href="tel:+919500309310" target="_blank">
                      +91 95003 09310
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mail">
              <a href="mailto:hi@artic9.com"> hi@artic9.com</a>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
