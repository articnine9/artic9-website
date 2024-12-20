import React, { useRef } from "react";
import "./Home.css";

import Boy from "../../Assets/boy1.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Client from "./Client";
import Testimonial from "./Testimonial";
// import Slider from "./Slider";
import ServiceTab from "./ServiceTab";
import Credits from "./Credits";
import Blog from "./Blog";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Credits />
      {/* <Slider /> */}
      <div className="home">
        {/* ----------------------------------------blog------------------------------------------ */}
        <Blog />{" "}
        {/* ----------------------------------Main-service sec--------------------------------------------------------- */}
        <Service />{" "}
        {/* ---------------------------------------Who are we ------------------------------------------------------- */}
        <section id="about-4" className="about-section-4">
          <div className="container">
            <div className="about-content-wrapper-4">
              <div className="row">
                <div className="col-lg-6 pt-5">
                  <div className="about-img text-center ball">
                    <img src={Boy} alt="About Us" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-text-wrapper">
                    <div className="section-title title-border gradiant-border headline">
                      <h2>
                        <b>Artic9</b> Creative Agency
                      </h2>
                    </div>
                    <div className="about-text-details">
                      We are passionate about our work. Our designers stay ahead
                      of the curve to provide engaging and user-friendly website
                      designs to make your business stand out with your business
                      pattern.
                    </div>
                    <div id="tabsContent2" className="tab-content">
                      <div
                        id="value"
                        className="tab-pane fade active show td-faq-body-content"
                      >
                        <ul>
                          <li style={{ fontSize: "16px" }}>
                            <b>Our Origin:</b> Founded in 2019, our digital
                            marketing company has quickly established itself as
                            a leader in the industry by emphasizing creativity
                            and innovation.
                          </li>
                          <br />
                          <li style={{ fontSize: "16px" }}>
                            <b>Our Expertise:</b> With a team of over 25
                            seasoned digital marketing experts, we bring a
                            wealth of knowledge and experience to every project,
                            ensuring top-notch service and results.
                          </li>
                          <br />
                          <li style={{ fontSize: "16px" }}>
                            <b>Be Unique:</b> We believe in the power of
                            uniqueness. Our strategies are tailored to highlight
                            the distinctive qualities of each client, setting
                            them apart in a crowded marketplace.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="btn-hover2 position-relative text-uppercase">
                      <a href="/">
                        <button className="know-more-btn">Know More</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------------------service tab------------------------------------------------ */}
        <ServiceTab />
        {/* ---------------------------------------------------Client---------------------------------- */}
        <Client />
        {/* --------------------------------------------------------Testimonial----------------------------------------- */}
        <Testimonial />
        {/* ---------------------------------------------------Team service----------------------------------------- */}
        <section id="team-service" className="team-service-section bg-light1">
          <div className="container">
            <div className="team-service-wrapper">
              <div className="row team-head">
                <div className="col-lg-12 col-md-12">
                  <div className="td-faq-body td-faq-body-sub-content text-center">
                    <b
                      style={{
                        fontWeight: 600,
                        color: "#000000",
                        fontSize: "45px",
                        lineHeight: "65px",
                      }}
                    >
                      "Together, we are committed to excellence, innovation, and
                      making a meaningful impact in the digital world"
                    </b>
                    <br />
                    <br />
                    <h3
                      style={{
                        color: "#000000",
                        fontWeight: 600,
                        fontSize: 50,
                      }}
                    >
                      <i>#BEUNIQUE</i>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ----------------------------------------------lets work ---------------------------------------------- */}
        <section id="team-page-area" class="team-page-section padding-tb-140">
          <div class="section-title text-center headline ">
            <div class="td-faq-body td-faq-body-sub-content-work font-large ">
              <b>Let's Work Together</b>
            </div>
            <br />
            <h3 className="mail-id">
              <a
                href="mailto:hi@artic9.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                hi@artic9.com
              </a>
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
