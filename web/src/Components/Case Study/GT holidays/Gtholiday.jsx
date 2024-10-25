import React from "react";
import "./Gt.css";

import Gtbanner from "../../../Assets/case_studies/gt-holidays/gt-banner.jpg";
import Abtgt from "../../../Assets/case_studies/gt-holidays/about-gt.webp";
import Id1 from "../../../Assets/case_studies/gt-holidays/identity-img.webp";
import Id2 from "../../../Assets/case_studies/gt-holidays/identity-img2.webp";
import Insta1 from "../../../Assets/case_studies/gt-holidays/instagram01.webp";
import Insta2 from "../../../Assets/case_studies/gt-holidays/instagram02.webp";
import Insta3 from "../../../Assets/case_studies/gt-holidays/instagram03.webp";
import nxt from "../../../Assets/nxt.png";
import prev from "../../../Assets/prev.png";
import CounterSection from "./Countersection";

const Gtholiday = () => {
  return (
    <div className="gt">
      <div className="gt-banner">
        <img
          className="fullscreen border-img-curve"
          src={Gtbanner}
          alt="GT Holidays banner"
        />
      </div>

      <section className="feature-video-section position-relative">
        <div className="container">
          <div className="row">
            {/* Video 1 */}
            <div className="col-lg-4 col-sm-6 vid">
              <div className="feature-video-img-text position-relative">
                <div className="feature-video-img">
                  <iframe
                    width="370"
                    height="300"
                    src="https://www.youtube.com/embed/EJPlq41Yfck?si=k0Z_EAHzJRSFRSjO&controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="col-lg-4 col-sm-6 vid">
              <div className="feature-video-img-text position-relative">
                <div className="feature-video-img">
                  <iframe
                    width="370"
                    height="300"
                    src="https://www.youtube.com/embed/Orh3rWsLZF4?si=A1-FkT3g7_6Ou2dJ&controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="col-lg-4 col-sm-12 vid">
              <div className="feature-video-img-text position-relative">
                <div className="feature-video-img">
                  <iframe
                    width="370"
                    height="300"
                    src="https://www.youtube.com/embed/LxVT5G5NZN0?si=ey2FwCFkBIxmEfOw&controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-4" className="about-section-4">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              {/* Image Section */}
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img src={Abtgt} alt="About GT Holidays" />
                </div>
              </div>

              {/* Text Section */}
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <h2 style={{ color: "#4c4c4c" }}>About GT Holidays</h2>
                  </div>
                  <div className="about-text-details">
                    <p>
                      Established in 1968, GT Holidays is owned and managed by
                      the Sangam Group of Hotels. The Sangam Group is recognized
                      as one of the largest hotel chains in Tamil Nadu. Along
                      with the Group, the GT Holidays strives hard for ultimate
                      success and innovation.
                    </p>
                    <p>
                      We are an ISO 9001: 2008 certified company that aims to
                      set clear goals, fix priorities, and organize the
                      resources effectively. GT Holidays enables you to discover
                      a new destination and offers unique ideas for your travel.
                    </p>
                    <p>
                      Our travel company offers a complete business travel
                      environment for MICE (Meetings, Incentives, Conferences,
                      and Events) services at an affordable cost. We provide a
                      wide range of holiday tour packages for all domestic and
                      international destinations worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-section-3 service-page-blog">
        <div className="container">
          <div className="section-title text-center headline blog-section-3">
            <h2>We Register Brand Identity To Get Unique</h2>
            <hr />
          </div>

          <div className="team-content-wrapper-2 clearfix">
            <div className="team-member-content-2">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <div className="team-member-innerbox">
                    <div className="team-member-img position-relative">
                      <img
                        className="border-img-curve"
                        src={Id1}
                        alt="Brand Identity 1"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="team-member-innerbox">
                    <div className="team-member-img position-relative">
                      <img
                        className="border-img-curve"
                        src={Id2}
                        alt="Brand Identity 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="blog-content-wrap">
            <div className="portfolio-details-text td-faq-body-content blog-section-3">
              <article>
                <h5>Organic Traffic Growth:</h5>
                <p>
                  Over the past month, we have seen a significant increase in
                  organic traffic to your website. Our targeted SEO strategies
                  and optimizations have resulted in a growth in organic
                  sessions compared to the previous month.
                </p>
                <br />

                <h5>Keyword Ranking Improvements:</h5>
                <p>
                  Our team has been diligently working on improving your
                  website's search engine rankings. We're delighted to report
                  your target keywords have experienced positive movements, with
                  2 keywords ranking on the first page of search results.
                </p>
                <br />

                <h5>Content Updates:</h5>
                <p>
                  Content continues to play a crucial role in SEO success. In
                  Nov 2023, we published high-quality blog posts and optimized
                  pages on your website. These efforts have contributed to
                  improved search visibility and user engagement.
                </p>
                <br />

                <h5>Backlink Acquisition:</h5>
                <p>
                  Our link-building efforts have been fruitful, with a lot of
                  high-quality backlinks acquired from authoritative websites.
                  These backlinks enhance your website's authority and
                  credibility in the eyes of search engines.
                </p>
                <br />

                <h5>Technical SEO Enhancements:</h5>
                <p>
                  We have conducted a comprehensive audit and made necessary
                  technical SEO improvements to ensure your website's optimal
                  performance. This includes addressing issues related to site
                  speed, mobile-friendliness, and site architecture.
                </p>
              </article>
            </div>

            <br />

            <div className="team-content-wrapper-2 clearfix">
              <div className="team-member-content-2">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
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
                  <div className="col-lg-4 col-sm-12">
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
                  <div className="col-lg-4 col-sm-12">
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

      <CounterSection />

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
    </div>
  );
};

export default Gtholiday;
