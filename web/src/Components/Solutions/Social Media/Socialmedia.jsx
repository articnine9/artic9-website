import React from 'react'
import './Social.css'
import Shape1 from "../../../Assets/brs1.png";
import Shape2 from "../../../Assets/brs2.png";
import Abtgt from "../../../Assets/case_studies/gt-holidays/about-gt.webp";
import Insta1 from "../../../Assets/case_studies/gt-holidays/instagram01.webp";
import Insta2 from "../../../Assets/case_studies/gt-holidays/instagram02.webp";
import Insta3 from "../../../Assets/case_studies/gt-holidays/instagram03.webp";
import nxt from "../../../Assets/nxt.png";
import prev from "../../../Assets/prev.png";

const Socialmedia = () => {
  return (
    <>
      <section
        id="taeled-bredcrumb"
        className="taeled-bredcrumb-section position-relative"
        style={{
          backgroundImage: `url(${require("../../../Assets/Socialbanner.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
        }}
      >
        <div
          className="slider-deco1 position-absolute"
          data-parallax='{"y": 100, "rotateY": 500}'
        >
          <img src={Shape1} alt="shape" />
        </div>
        <div
          className="slider-deco2 position-absolute"
          data-parallax='{"y": -100, "rotateY": -200}'
        >
          <img src={Shape2} alt="shape" />
        </div>
        <div className="background_overlay"></div>
        <div className="container">
          <div className="bredcrumb-content position-relative">
            <div className="bredcrumb-title text-uppercase headline">
              <h2>Social Media Marketing</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about-4" className="about-section-4-whitebg">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <a href="social-media-marketing.html">
                    <img
                      src={Abtgt}
                      style={{ paddingTop: "30px" }}
                      alt="GT Holidays"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make your
                      <b style={{ fontWeight: 600 }}> audience remind you </b>
                      all time
                    </div>
                    <br />
                    <div className="font-bold">
                      <h3 style={{ color: "#454545" }}>
                        SOCIAL MEDIA MARKETING
                      </h3>
                    </div>
                  </div>
                  <br />
                  <div className="about-text-details">
                    Established in 1968, GT Holidays is owned and managed by the
                    Sangam Group of Hotels. The Sangam Group is recognized as
                    one of the largest hotel chains in Tamil Nadu. Along with
                    the Group, the GT Holidays strives hard for ultimate success
                    and innovation.
                    <br />
                    <br />
                    We are an ISO 9001:2008 certified company that aims to set
                    clear goals, fix priorities, and organize resources
                    effectively. GT Holidays enables you to discover a new
                    destination and offers unique ideas for your travel.
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="/contact">Call Us</a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="team-content-wrapper-2 clearfix">
              <div className="team-member-content-2">
                <div className="row socialpg">
                  <div className="col-lg-4 col-md-6">
                    <div className="team-member-innerbox">
                      <div className="team-member-img position-relative">
                        <img
                          className="border-img-curve"
                          src={Insta1}
                          alt="Instagram 1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="team-member-innerbox">
                      <div className="team-member-img position-relative">
                        <img
                          className="border-img-curve"
                          src={Insta2}
                          alt="Instagram 2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="team-member-innerbox">
                      <div className="team-member-img position-relative">
                        <img
                          className="border-img-curve"
                          src={Insta3}
                          alt="Instagram 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="design-section">
        <div className="section-title text-center headline">
          <div className="td-faq-body td-faq-body-sub-content">
            How We <b style={{ fontWeight: 600 }}>Plan?</b>
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-empty"></div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content card-body ">
            <h3>
              Step 01 <br />
              Understanding the Purpose
            </h3>
            <p class="mb-0 about-text-details1">
              We're all ears when it comes to listening to your brand's needs.
              Post listening,we come to a clear understanding of the type of
              content and communication that has to be put forth.
            </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>
              Step 02 <br />
              Strategizing As Per The Objective
            </h3>
            <p class="mb-0 about-text-details1">
              Having strategies is not all. Knowing where and how to use them to
              your advantage is what's needed the most. And guess what? Our team
              is highly experienced in implementing strategies to leverage your
              social media presence.
            </p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>

          <div class="timeline-empty"></div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3>
              Step 03 <br />
              Curating & Creating Content
            </h3>
            <p class="mb-0 about-text-details1">
              We do it right, and we do it best. We give you a complete content
              plan & content calendar for your brand with every bit of detail
              and assistance along the way.
            </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>
              Step 04 <br />
              Best Use Of Latest Tools
            </h3>
            <p class="mb-0 about-text-details1">
              We are constantly analyzing posts and campaigns to gain an
              understanding of what works best for your brand. We strive for
              optimal brand performance using tools to ensure that your brand is
              one step ahead of the competition.
            </p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>

          <div class="timeline-empty"></div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class=" timeline-component timeline-content">
            <h3>
              Step 05 <br />
              Reaching The Target Audience
            </h3>
            <p class="mb-0 about-text-details1">
              Our social media marketing approach connects your brand to its
              right target audience by creating a strong and compelling brand
              story. With creative content on the same lines, we build a strong
              brand image for new and existing customers.
            </p>
          </div>
        </div>
      </section>


      <section id="portfolio-details" className="portfolio-details-section">
        <div className="portfolio-details-content">
          <div className="portfolio-details-post-area">
            <div className="row">
              {/* Previous Project */}
              <div className="col-md-6 no-padding">
                <div className="portfolio-next-prev-post clearfix headline">
                  <div className="portfolio-np-img float-left">
                    <img src={prev} alt="Previous Project" />
                  </div>
                  <div className="portfolio-np-text">
                    <span>Prev Project</span>
                    <h3>Snowch</h3>
                  </div>
                </div>
              </div>

              {/* Next Project */}
              <div className="col-md-6 no-padding">
                <div className="portfolio-next-prev-post clearfix headline">
                  <div className="portfolio-np-img float-right">
                    <img src={nxt} alt="Next Project" />
                  </div>
                  <div className="portfolio-np-text text-right">
                    <a href="/gtholiday">
                      <span>Next Project</span>
                      <h3>GT Holidays</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Socialmedia
