import React, { useRef } from "react";
import "./Home.css";

import Abtgt from "../../Assets/case_studies/gt-holidays/about-gt.webp";
import Vid from "../../Assets/video.webp";
import Web from "../../Assets/web.webp";
import Seo from "../../Assets/seo.webp";

import img1 from "../../Assets/Service logo/social-media.png";
import img2 from "../../Assets/Service logo/movie-camera.png";
import img3 from "../../Assets/Service logo/website-codes.png";
import img4 from "../../Assets/Service logo/seo.png";
import img5 from "../../Assets/Service logo/branding.png";
import img6 from "../../Assets/Service logo/ppc.png";

const Service = () => {
  const socialMediaRef = useRef(null);
  const videoProductionRef = useRef(null);
  const websiteDevelopmentRef = useRef(null);
  const seoRef = useRef(null);
  const brandRef = useRef(null);
  const ppcref = useRef(null);

  // Scroll to section using scrollIntoView
  const scrollToSection = (e, ref) => {
    e.preventDefault();
    const element = ref.current;
    if (element) {
      // Scrolls the element into view with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the top of the viewport
      });
    }
  };

  const services = [
    {
      title: "BRANDING",
      route: brandRef,
      cnt: "Your brand is your identity — make it unforgettable. From logo design to compelling taglines, we create visual assets that help you stand out and position your brand as a leader in the market.",
      img: img5,
    },
    {
      title: "WEBSITE DEVELOPMENT",
      route: websiteDevelopmentRef,
      cnt: "Your website should be a powerful extension of your brand. We specialize in creating visually stunning, user-friendly websites that engage visitors and deliver seamless experiences.",
      img: img3,
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      route: socialMediaRef,
      cnt: "Unlock the power of social media with data-driven campaigns that elevate your brand. From dynamic PPC to influencer partnerships, we craft strategies that not only capture attention but also expand your reach and drive measurable results.",
      img: img1,
    },
    {
      title: "VIDEO PRODUCTION",
      route: videoProductionRef,
      cnt: "Bring your story to life with visuals that leave a lasting impression. Our expert photographers and videographers capture every moment with creativity and precision, ensuring your event is unforgettable.",
      img: img2,
    },

    {
      title: "SEARCH ENGINE OPTIMIZATION",
      route: seoRef,
      cnt: "Want to be the first business people see when they search for services like yours? We optimize your Google My Business profile and implement local SEO strategies that put you on the map — literally.",
      img: img4,
    },

    {
      title: "PPC",
      route: ppcref,
      cnt: "Maximize your brand's potential with targeted PPC campaigns. From compelling ad copy to visually stunning creatives, we optimize your ads to reach the right audience, boost conversions, and drive measurable results. Position your brand in front of potential customers and get noticed instantly.",
      img: img6,
    },
  ];

  return (
    <>
      {/* Service Section */}
      <section id="team-service" className="team-service-section">
        <div className="titlecontainer">
          <h2 className="serviceheader">
            Make your audience remind you all time
          </h2>
          <div className="team-service-wrapper">
            {services.map((service, index) => (
              <div key={index} className="service-box">
                <div className="team-service-innerbox position-relative text-center p-5">
                  <a
                    className="servicecnt"
                    onClick={(e) => scrollToSection(e, service.route)}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  >
                    <div className="team-service-title">
                      <h5>
                        {service.title}{" "}
                        <img
                          src={service.img}
                          alt={service.title}
                          className="team-service-title-img"
                        />
                      </h5>
                      <p>{service.cnt}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Main Service Section */}
      <section id="about-4" className="service-4">
        <div className="container">
          <div className="about-content-wrapper-4">
            {/* Social Media Marketing Section */}
            <div className="row" ref={socialMediaRef}>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey">
                      Make your{" "}
                      <b style={{ fontWeight: 600 }}>
                        audience <br /> remind you
                      </b>{" "}
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
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <a href="social-media-marketing.html">
                    <img
                      src={Abtgt}
                      style={{ paddingTop: "30px" }}
                      alt="Social Media"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Video Production Section */}
            <div className="row" ref={videoProductionRef}>
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src={Vid}
                    style={{ paddingTop: "130px" }}
                    alt="Video Production"
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
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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

            {/* Website Development Section */}
            <div className="row" ref={websiteDevelopmentRef}>
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
                        offer bespoke solutions ensuring maximum impact and
                        visibility.
                      </li>
                      <li>
                        Let us transform your online presence. Partner with us
                        to turn clicks into conversions and viewers into loyal
                        customers.
                      </li>
                    </ul>
                  </div>
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src={Web}
                    style={{ paddingTop: "100px" }}
                    alt="Website Development"
                  />
                </div>
              </div>
            </div>

            {/* SEO Optimization Section */}
            <div className="row" ref={seoRef}>
              <div className="col-lg-7">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src={Seo}
                    style={{ paddingTop: "106px", paddingRight: "90px" }}
                    alt="SEO"
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
                        Our team helps enhance and uphold your domain authority,
                        contributing to expanding your business and online
                        presence.
                      </li>
                    </ul>
                  </div>
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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

            {/* BRANDING Section */}
            <div className="row" ref={brandRef}>
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
                      <h3>Branding</h3>
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
                        offer bespoke solutions ensuring maximum impact and
                        visibility.
                      </li>
                      <li>
                        Let us transform your online presence. Partner with us
                        to turn clicks into conversions and viewers into loyal
                        customers.
                      </li>
                    </ul>
                  </div>
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src={Web}
                    style={{ paddingTop: "100px" }}
                    alt="Website Development"
                  />
                </div>
              </div>
            </div>

            {/* PPC Section */}
            <div className="row" ref={ppcref}>
              <div className="col-lg-7">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img
                    src={Seo}
                    style={{ paddingTop: "106px", paddingRight: "90px" }}
                    alt="SEO"
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
                      <h3 style={{ lineHeight: "70px" }}>PPC</h3>
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
                        Our team helps enhance and uphold your domain authority,
                        contributing to expanding your business and online
                        presence.
                      </li>
                    </ul>
                  </div>
                  <div className="btns-div">
                    <div className="taeled-btn text-center position-relative text-uppercase">
                      <a href="/socialmedia">Know More</a>
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
        </div>
      </section>
    </>
  );
};

export default Service;
