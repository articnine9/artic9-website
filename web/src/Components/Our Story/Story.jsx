import React from "react";
import "./Story.css";
// import Preloader from '../Preloader/Preloader'
import Shape1 from "../../Assets/brs1.png";
import Shape2 from "../../Assets/brs2.png";
import Lead from "../../Assets/lead2.png";

import ServiceTab from "./ServiceTab";
const Story = () => {
  return (
    <>
      {/* <Preloader/> */}

      <section
        id="taeled-bredcrumb"
        className="taeled-bredcrumb-section position-relative our-banner"
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
              <h2>Our Story</h2>
            </div>
          </div>
        </div>
      </section>

      <ServiceTab />

      <section id="about-4" className="about-section-4">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="about-text-wrapper">
                  <div className="section-title text-left headline">
                    <div className="td-faq-body td-faq-body-sub-content">
                      Talk <b style={{ fontWeight: 600 }}>With Us</b>
                    </div>
                  </div>

                  <div className="about-text-details">
                    We believe in the power of communication. Whether you have a
                    question, need a consultation, or just want to discuss the
                    latest trends in digital marketing, we're here to help.
                    <br />
                    <br />
                    We're excited to connect with you and explore how we can
                    help elevate your digital presence. Let's start the
                    conversation today!
                  </div>

                  <div className="taeled-btn text-center position-relative">
                    <a href="#">Say Hi! 👋</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-img text-center">
                  <img src={Lead} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
