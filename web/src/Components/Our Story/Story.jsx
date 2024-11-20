import React from "react";
import "./Story.css";
import Preloader from "../Preloader/Preloader";
import Lead from "../../Assets/lead2.png";
import img from "../../Assets/Artic9 logo glow.png";
import "../Our Story/ServiceTabStory";
import ServiceTabStory from "../Our Story/ServiceTabStory";
const Story = () => {
  return (
    <Preloader>
      <>
        <section className="abt">
          <div className="storytitle">
            <h1>our story</h1>
          </div>
          <div className="storyimg">
            <div className="firstblurcnt">
              <div className="firstblur"></div>
            </div>
            <img src={img} alt="" />
            <div className="secondblur"></div>
          </div>
        </section>
        <ServiceTabStory />

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
                      We believe in the power of communication. Whether you have
                      a question, need a consultation, or just want to discuss
                      the latest trends in digital marketing, we're here to
                      help.
                      <br />
                      <br />
                      We're excited to connect with you and explore how we can
                      help elevate your digital presence. Let's start the
                      conversation today!
                    </div>

                    <div className="taeled-btn text-center position-relative">
                      <a href="/contact">Say Hi! 👋</a>
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
    </Preloader>
  );
};

export default Story;
