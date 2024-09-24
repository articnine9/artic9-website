import React from "react";
import Contact from "../../Assets/contact-img.png";
import Shape1 from "../../Assets/brs1.png";
import Shape2 from "../../Assets/brs2.png";

import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import "./Work.css";
const Work = () => {
  return (
    <>
      <section
        id="taeled-bredcrumb"
        className="taeled-bredcrumb-section position-relative contact-banner"
      >
        <div
          className="slider-deco1 position-absolute"
          style={{ transform: "translateY(100px) rotateY(500deg)" }}
        >
          <img src={Shape1} alt="" />
        </div>
        <div
          className="slider-deco2 position-absolute"
          style={{ transform: "translateY(-100px) rotateY(-200deg)" }}
        >
          <img src={Shape2} alt="" />
        </div>
        <div className="background_overlay"></div>
        <div className="container">
          <div className="bredcrumb-content position-relative">
            <div className="bredcrumb-title text-uppercase headline">
              <h2>Contact us</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section faq-contact-area">
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-right-img">
                  <div className="about-bottom-img position-relative float-right">
                    <img src={Contact} alt="Contact" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-left-text">
                  <div className="section-title headline">
                    <span>Get In Touch</span>
                    <h2>Contact us</h2>
                  </div>
                  <div className="contact-form-wrapper">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="contact-info position-relative">
                            <input
                              className="name"
                              name="name"
                              type="text"
                              placeholder="Enter your name"
                            />
                            <div className="icon-bg position-absolute">
                              <FaUser />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-info position-relative">
                            <input
                              className="email"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                            />
                            <div className="icon-bg position-absolute">
                              <IoMdMail />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-info position-relative">
                            <input
                              className="phone"
                              name="phone"
                              type="text"
                              placeholder="Enter your phone"
                            />
                            <div className="icon-bg position-absolute">
                              <FaPhone />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="contact-info position-relative">
                            <input
                              className="subject"
                              name="subject"
                              type="text"
                              placeholder="Enter Subject"
                            />
                            <div className="icon-bg position-absolute">
                              <FaArrowDown />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="contact-info position-relative">
                            <textarea
                              name="message"
                              placeholder="ENTER message"
                            ></textarea>
                            <div className="icon-bg position-absolute">
                              <FaEdit />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className="taeled-btn2 text-center position-relative text-uppercase"
                          type="submit"
                        >
                          Submit quote
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d246.8228141382225!2d77.42540667755222!3d8.186125409336519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3b04f1246b9aa969%3A0xfa80cd8763303aa8!2sArtic%20Nine%20Creative%20Agency%2C%2030A%2C%20Gnanai%20St%2C%20Nagercoil%2C%20Tamil%20Nadu%20629001!3m2!1d8.1861488!2d77.4254668!4m5!1s0x3b04f1246b9aa969%3A0xfa80cd8763303aa8!2sartic9%20maps!3m2!1d8.1861488!2d77.4254668!5e0!3m2!1sen!2sin!4v1708584002038!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </>
  );
};

export default Work;
