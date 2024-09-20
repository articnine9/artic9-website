import React from "react";
import "./Home.css";
import Slider from "./Slider";
import Boy from "../../Assets/boy1.png";
import Img from "../../Assets/platez.png";
import Harris from "../../Assets/harris2.png";
import Bfour from "../../Assets/b4.png";
import Snowch from "../../Assets/b2.png";
import AnotherSlider from "./AnotherSlider";
import ServiceTab from "./ServiceTab";
import Ab from "../../Assets/anantha-bavan.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Client from "./Client";
const Home = () => {
  const services = [
    { title: "Marketing Masters", number: "01" },
    { title: "Problem Solvers", number: "02" },
    { title: "Affordable Packages", number: "03" },
    { title: "Guaranteed Results", number: "04" },
  ];
  return (
    <>
      <Slider />

      <div className="sec-carousel">
        <AnotherSlider />
      </div>
      {/* ---------------------------------------About ------------------------------------------------------- */}
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
                          marketing company has quickly established itself as a
                          leader in the industry by emphasizing creativity and
                          innovation.
                        </li>
                        <br />
                        <li style={{ fontSize: "16px" }}>
                          <b>Our Expertise:</b> With a team of over 25 seasoned
                          digital marketing experts, we bring a wealth of
                          knowledge and experience to every project, ensuring
                          top-notch service and results.
                        </li>
                        <br />
                        <li style={{ fontSize: "16px" }}>
                          <b>Be Unique:</b> We believe in the power of
                          uniqueness. Our strategies are tailored to highlight
                          the distinctive qualities of each client, setting them
                          apart in a crowded marketplace.
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
      {/* ----------------------------------service sec--------------------------------------------------------- */}
      <section id="team-service" className="team-service-section">
        <div className="container">
          <div className="team-service-wrapper">
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6 ">
                  <div className="team-service-innerbox position-relative text-center p-5">
                    <div className="team-service-title headline">
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          textTransform: "none",
                        }}
                      >
                        <a
                          href="/"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          {service.title}
                        </a>
                      </h3>
                      <h3 style={{ fontSize: "70px" }}>
                        <a
                          href="/"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          {service.number}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------service tab------------------------------------------------ */}
      <ServiceTab />
      {/* ----------------------------------------blog------------------------------------------ */}
      <section id="blog" class="blog-section-1">
        <div class="container">
          <div class="blog-content-wrap">
            <div class="section-title text-center headline">
              <div class="td-faq-body td-faq-body-sub-content">
                Explore How We Catalyzed their <br /> Business's
                <b style={{ fontWeight: 600 }}> Digital Transformation</b>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="blog-feed-wrap">
                  <div class="blog-img-text">
                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner ">
                        <div class="carousel-item active">
                          <div class="blog-img-wrap img-border">
                            <a href="#">
                              <img src={Img} alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="blog-text-wrap headline">
                      <div class="blog-post-meta">
                        <a href="#" className="blog-mini-title">
                          business
                        </a>
                      </div>
                      <h3>
                        <a href="#" className="blog-cnt">
                          Be the brand that stands out. Meet our creative
                        </a>
                      </h3>
                    </div>

                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="blog-img-wrap img-border">
                            <a href="#">
                              <img src={Harris} alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="blog-feed-wrap">
                  <div class="blog-img-text">
                    <div class="blog-img-wrap img-border">
                      <a href="#">
                        <img src={Snowch} alt="img" />
                      </a>
                    </div>
                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="blog-text-wrap headline">
                            <div class="blog-post-meta">
                              <a href="#" className="blog-mini-title">
                                sss
                              </a>
                            </div>
                            <h3>
                              <a href="#" className="blog-cnt">
                                Be the brand that stands out. Meet our creative
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="blog-img-wrap img-border">
                      <a href="#">
                        <img src={Ab} alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="blog-feed-wrap">
                  <div class="blog-img-text">
                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="blog-img-wrap img-border">
                            <a href="#">
                              <img src={Bfour} alt="img" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="carouselExampleSlidesOnly"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="blog-text-wrap headline">
                            <div class="blog-post-meta">
                              <a href="#" className="blog-mini-title">
                                business
                              </a>
                            </div>
                            <h3>
                              <a href="#" className="blog-cnt">
                                Be the brand that stands out. Meet our creative
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------Client---------------------------------- */}
      <Client />

      {/* -----------------------------------Main-Service---------------------------------------------- */}

      <section id="about-4" className="service-4">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make your
                      <b style={{ fontWeight: 600 }}>
                        audience <br /> remind you
                      </b>
                      all time
                    </div>

                    <div className="font-bold">
                      <h3>SOCIAL MEDIA MARKETING</h3>
                    </div>
                    <hr
                      style={{
                        width: "30%",
                        textAlign: "left",
                        marginLeft: 0,
                        border: "1px solid #454545",
                        marginTop: "-3px",
                      }}
                    />
                  </div>

                  <div className="about-text-details">
                    <ul>
                      <li>
                        Take your brand to a whole new level with effective
                        social media marketing strategies and viral campaigns.
                      </li>
                      <li>
                        Develop a clear plan of action and conduct a detailed
                        competitor analysis.
                      </li>
                      <li>
                        Ensure your brand makes its presence on all social
                        platforms.
                      </li>
                      <li>
                        Ensure your brand's journey on social media is seamless,
                        creative, and engaging.
                      </li>
                      <li>
                        Embrace the digital world the right way! Partner with us
                        to elevate your brand's online presence!
                      </li>
                    </ul>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">Know More</a>
                  </div>
                  <div className="taeled-btn3 text-center position-relative text-uppercase">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919500309310&text=Hello!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <a href="social-media-marketing.html">
                    <img
                      src="assets/img/case_studies/gt-holidays/about-gt.webp"
                      style={{ paddingTop: "30px" }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src="assets/img/home/video.png"
                    style={{ paddingTop: "130px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make your{" "}
                      <b style={{ fontWeight: 600 }}>
                        audience <br /> remind You
                      </b>{" "}
                      all time
                    </div>

                    <div className="font-bold">
                      <h3>VIDEO PRODUCTION</h3>
                    </div>
                    <hr
                      style={{
                        width: "30%",
                        textAlign: "left",
                        marginLeft: 0,
                        border: "1px solid #454545",
                        marginTop: "-3px",
                      }}
                    />
                  </div>

                  <div className="about-text-details">
                    <ul>
                      <li>
                        Crafting videos for our clients is both an exhilarating
                        and rewarding experience.
                      </li>
                      <li>
                        Engage consistently with your audience as you enter the
                        digital world.
                      </li>
                      <li>
                        Create videos that highlight your brand creatively and
                        effectively.
                      </li>
                      <li>
                        Help customers understand your brand and its vision
                        better.
                      </li>
                      <li>
                        Make a striking visual impression with just one shot.
                      </li>
                    </ul>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">Know More</a>
                  </div>
                  <div className="taeled-btn3 text-center position-relative text-uppercase">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919500309310&text=Hello!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make Your{" "}
                      <b style={{ fontWeight: 600 }}>
                        brand <br /> credibility
                      </b>{" "}
                      among everyone
                    </div>

                    <div className="font-bold">
                      <h3>WEBSITE DEVELOPMENT</h3>
                    </div>
                    <hr
                      style={{
                        width: "30%",
                        textAlign: "left",
                        marginLeft: 0,
                        border: "1px solid #454545",
                        marginTop: "-3px",
                      }}
                    />
                  </div>

                  <div className="about-text-details">
                    <ul>
                      <li>
                        In the digital age, you have half a second to capture
                        attention. We specialize in keeping visitors engaged
                        right from the start.
                      </li>
                      <li>
                        A well-designed, user-friendly website is crucial to
                        keeping them engaged and converting visits into sales.
                      </li>
                      <li>
                        Our expertise web development team ensures you stand out
                        in the crowded digital landscape.
                      </li>
                      <li>
                        With years of experience and a proven track record, we
                        offers bespoke solutions ensuring maximum impact and
                        visibility.
                      </li>
                      <li>
                        Let us transform your online presence. Partner with us
                        to turn clicks into conversions and viewers into loyal
                        customers.
                      </li>
                    </ul>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">Know More</a>
                  </div>
                  <div className="taeled-btn3 text-center position-relative text-uppercase">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919500309310&text=Hello!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src="assets/img/home/web.webp"
                    style={{ paddingTop: "100px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src="assets/img/home/seo.webp"
                    style={{ paddingTop: "106px", paddingRight: "90px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make your{" "}
                      <b style={{ fontWeight: 600 }}>
                        brand <br /> stand top
                      </b>{" "}
                      of everyone
                    </div>

                    <div className="font-bold">
                      <h3 style={{ lineHeight: "70px" }}>
                        SEARCH ENGINE OPTIMIZATION
                      </h3>
                    </div>
                    <hr
                      style={{
                        width: "30%",
                        textAlign: "left",
                        marginLeft: 0,
                        border: "1px solid #454545",
                        marginTop: "-3px",
                      }}
                    />
                  </div>

                  <div className="about-text-details">
                    <ul>
                      <li>
                        Our detailed website analysis aims to uncover and fix
                        SEO issues, boosting visibility, traffic, and rankings
                        with our top-tier SEO services.
                      </li>
                      <li>
                        We monitor your website closely, conducting regular SEO
                        assessments to prevent ranking setbacks.
                      </li>
                      <li>
                        Our team helps enhance and uphold your domain authority
                        will contribute to expanding your business and online
                        presence.
                      </li>
                    </ul>
                  </div>
                  <div className="taeled-btn text-center position-relative text-uppercase">
                    <a href="#">Know More</a>
                  </div>
                  <div className="taeled-btn3 text-center position-relative text-uppercase">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919500309310&text=Hello!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
