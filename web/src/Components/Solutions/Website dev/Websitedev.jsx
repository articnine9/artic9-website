import React from "react";
import "./Web.css";

import Web from "../../../Assets/web.webp";
import Webb from "../../../Assets/webb.png";
import Tick from "../../../Assets/tick.png";
import Web1 from "../../../Assets/web/web-development.jpg";
import Web2 from "../../../Assets/web/web-content.jpg";
import Web3 from "../../../Assets/web/payment-gateway.jpg";
import Web4 from "../../../Assets/web/crm.jpg";
import Web5 from "../../../Assets/web/ssl.jpg";
import Web6 from "../../../Assets/web/email.jpg";
import GallerySection from "./GallerySection";

import Website1 from "../../../Assets/web/website1.webp";
import Website2 from "../../../Assets/web/website2.webp";
import Website3 from "../../../Assets/web/website3.webp";
import Website4 from "../../../Assets/web/website4.webp";
import Website5 from "../../../Assets/web/website5.webp";
import Website6 from "../../../Assets/web/website6.webp";
import Website7 from "../../../Assets/web/website7.webp";
import Lead from "../../../Assets/lead2.png";

const statistics = [
  { count: "150+", label: "Websites Designed" },
  { count: "120+", label: "Websites Hosting" },
  { count: "90+", label: "Domains Transferred" },
  { count: "80+", label: "Business Email Setup" },
  { count: "40+", label: "Website Migrations" },
  { count: "50+", label: "Website Audits" },
];

const projects = [
  {
    title: "Sheffield Suits & Blazers",
    subtitle: "Website Development",
    description:
      "From sleek design to seamless user experience, we help elevate your brand online and attract discerning customers.",
    imgSrc: Website1,
  },
  {
    title: "Delano Residency",
    subtitle: "Website Development",
    description:
      "Creating outstanding websites for Delano Residency, focusing on delivering websites that not only look stunning but also provide a seamless user experience.",
    imgSrc: Website2,
  },
  {
    title: "Faizal Travels",
    subtitle: "Website Development",
    description:
      "Creating customized websites for Faizal Travels, a premier travel agency that capture the essence of Faizal Travels and inspire wanderlust.",
    imgSrc: Website3,
  },
  {
    title: "AllforOne HR Services",
    subtitle: "Website Development",
    description:
      "Creating professional, user-friendly websites for AllforOne HR Services, highlights HR expertise, while intuitive navigation for seamless access to resources.",
    imgSrc: Website4,
  },
  {
    title: "Shree Akshaya Catering & Events",
    subtitle: "Website Development",
    description:
      "Responsive designs that perform perfectly across all devices that enhance visibility and attract more clients in the catering and events industry.",
    imgSrc: Website5,
  },
  {
    title: "VPR Constructions",
    subtitle: "Website Development",
    description:
      "Creating robust websites for VPR Construction Company to increase visibility and attract potential clients.",
    imgSrc: Website6,
  },
  {
    title: "Dr Pratap's Clear Eye Clinic",
    subtitle: "Website Development",
    description:
      "Creating tailored websites for Dr Pratap's Clear Eye Clinic to improve online visibility and attract individuals seeking quality eye care.",
    imgSrc: Website7,
  },
];

const Websitedev = () => {
  return (
    <>
      <section id="about-4" className="bg-light1 padding-t80">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                  <img src={Web} style={{ paddingTop: "100px" }} alt="Web" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title title-border gradiant-border headline">
                    <div className="td-faq-body td-faq-body-sub-content color-grey web-head">
                      Make Your
                      <b style={{ fontWeight: 600 }}>
                        brand <br /> credibility
                      </b>
                      among everyone
                    </div>
                    <div className="font-bold">
                      <h3 style={{ color: "#454545" }}>WEBSITE DEVELOPMENT</h3>
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
            <h3>01 &nbsp; Study</h3>
            <p className="mb-0 about-text-details1">
              Our experts will begin by conducting an in-depth analysis of your
              requirements, along with the nature of your business and industry.
            </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>02 &nbsp; Plan</h3>
            <p className="mb-0 about-text-details1">
              As the next step in our process as a website development is to
              create a wireframe and finalize the theme and sitemap for your
              website.
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
            <h3>03 &nbsp; Draft</h3>
            <p className="mb-0 about-text-details1">
              Next, we will draft the design and content for all pages,
              arranging them within the approved layout.
            </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>04 &nbsp; Execute</h3>
            <p className="mb-0 about-text-details1">
              Once the draft has been revised, it's time for execution! We will
              host the wireframe, prioritizing mobile compatibility and fast
              page load times.
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
          <div class="timeline-component timeline-content card-body ">
            <h3>05 &nbsp; Testing</h3>
            <p className="mb-0 about-text-details1">
              Before launching, we will thoroughly test the website to ensure it
              always operates at peak performance.
            </p>
          </div>
          <div class="timeline-component timeline-content">
            <h3>06 &nbsp; Delivery</h3>
            <p className="mb-0 about-text-details1">
              Once the website has been executed, tested and received your
              approval, we will finalize the delivery and launch it live!
            </p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
        </div>
      </section>

      <section id="about-4">
        <div className="container">
          <div className="about-content-wrapper-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img text-center">
                  <img src={Webb} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text-wrapper">
                  <div className="section-title text-left headline">
                    <div className="td-faq-body td-faq-body-sub-content">
                      Unique and Innovative <br />
                      <b style={{ fontWeight: 600 }}>Web Developing Services</b>
                    </div>
                  </div>

                  <div className="about-text-details web-details">
                    Looking for top-notch website development in Nagercoil? We
                    offer a variety of services to choose from:
                  </div>

                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      <img src={Tick} width="25" alt="tick" />
                      <b>Responsive Websites</b>
                      <br />
                      <br />
                      <img src={Tick} width="25" alt="tick" />

                      <b>Ecommerce Websites</b>
                      <br />
                      <br />
                      <img src={Tick} width="25" alt="tick" />

                      <b>WordPress Websites</b>
                      <br />
                      <br />
                      <img src={Tick} width="25" alt="tick" />

                      <b>Web-Hosting & Domain Registration</b>
                      <br />
                      <br />
                      <img src={Tick} width="25" alt="tick" />

                      <b>Web-Hosting & Domain Registration</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial-3" className="testimonial-section-3">
        <div className="container text-center my-3">
          <div className="section-title text-center headline">
            <div className="td-faq-body td-faq-body-sub-content">
              What <b style={{ fontWeight: 600 }}>You Will Get</b>
            </div>
          </div>
          <div className="row mx-auto my-auto">
            <div
              id="myCarousel"
              className="carousel slide w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item py-5 active">
                  <div className="row">
                    {[
                      {
                        imgSrc: Web1,
                        title: "Web Development",
                      },
                      {
                        imgSrc: Web2,
                        title: "Web Content",
                      },
                      {
                        imgSrc: Web3,
                        title: "Payment Gateway Integration",
                      },
                      {
                        imgSrc: Web4,
                        title: "CRM Integration",
                      },
                    ].map((item, index) => (
                      <div className="col-sm-3" key={index}>
                        <div className="card">
                          <div className="card-body">
                            <img
                              src={item.imgSrc}
                              alt=""
                              style={{ borderRadius: "20px" }}
                            />
                            <br />
                            <br />
                            <div className="title-font">{item.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-item py-5">
                  <div className="row">
                    {[
                      {
                        imgSrc: Web5,
                        title: "SSL (Secure Sockets Layer)",
                      },
                      {
                        imgSrc: Web6,
                        title: "Emails",
                      },
                      {
                        imgSrc: Web1,
                        title: "Web Development",
                      },
                      {
                        imgSrc: Web2,
                        title: "Web Content",
                      },
                    ].map((item, index) => (
                      <div className="col-sm-3" key={index}>
                        <div className="card">
                          <div className="card-body">
                            <img
                              src={item.imgSrc}
                              alt="Images"
                              style={{ borderRadius: "20px" }}
                            />
                            <br />
                            <br />
                            <div className="title-font">{item.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                }}
              >
                <span
                  className="carousel-control-prev-icon"
                  style={{ backgroundColor: "black" }}
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  style={{ backgroundColor: "black" }}
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <GallerySection />

      <section id="testimonial-3" className="testimonial-section-3">
        <div className="container">
          <div className="testimonial-content-wrapper-3">
            <div className="row">
              {statistics.map((stat, index) => (
                <div className="col-lg-4 col-md-6 mt-5 " key={index}>
                  <div className="testimonial-inner-wrapper position-relative">
                    <div className="testimonial-inner-text text-center text-uppercase">
                      <div className="testimonial-name-degi headline font-medium text-uppercase">
                        <h3 className="cntr-head">{stat.count}</h3>
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="intro-video-section position-relative">
        <div className="section-title title-padding text-center headline">
          <div className="td-faq-body td-faq-body-sub-content font-normal padding-tb-90">
            <b>Things we've made</b>
          </div>
        </div>

        <div className="container-fluid">
          {projects.map((project, index) => (
            <div className="intro-video-content web1-padding" key={index}>
              <div className="row">
                <div className="col-lg-6 ball">
                  <img src={project.imgSrc} alt={project.title} />
                </div>
                <div className="col-lg-6">
                  <div className="intro-video-wrap">
                    <div className="section-title title-border gradiant-border headline">
                      <div className="td-faq-body td-faq-body-sub-content color-grey">
                        <b className="responsive-title">{project.title}</b>
                        <br />
                        <b className="responsive-subtitle">
                          {project.subtitle}
                        </b>
                      </div>
                    </div>
                    <div className="about-text-details paragraph-text ">
                      <p>{project.description}</p>
                      <div className="web-btn">
                        <div className="taeled-btn text-center position-relative text-uppercase responsive-btn">
                          <a href="/websitedev">Read More</a>
                        </div>
                        <div className="taeled-btn-black2 text-center position-relative text-uppercase responsive-btn-black">
                          <a
                            href="https://api.whatsapp.com/send?phone=+919500309310&text=Hello!"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Connect Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="web-hr"/>
            </div>
          ))}
        </div>
      </section>

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
  );
};

export default Websitedev;
