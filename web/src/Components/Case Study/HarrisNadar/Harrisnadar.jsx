import React from "react";
import "./Harris.css";
import Harris1 from "../../../Assets/about (3).png";
import glry1 from "../../../Assets/case_studies/harris_nadar/case01.webp";
import glry2 from "../../../Assets/case_studies/harris_nadar/case02.webp";
import glry3 from "../../../Assets/case_studies/harris_nadar/case04.webp";
import glry4 from "../../../Assets/case_studies/harris_nadar/case06.webp";
import glry5 from "../../../Assets/case_studies/harris_nadar/case05.webp";
import glry6 from "../../../Assets/case_studies/harris_nadar/case03.webp";
import grid1 from "../../../Assets/case_studies/harris_nadar/grid-1.png";
import grid2 from "../../../Assets/case_studies/harris_nadar/2.png";
import grid3 from "../../../Assets/case_studies/harris_nadar/gird-3.png";
import nxt from "../../../Assets/nxt.png";
import prev from "../../../Assets/prev.png";

const Harrisnadar = () => {
  return (
    <>
      <section
        id="taeled-bredcrumb"
        className="taeled-bredcrumb-section position-relative harris-banner"
      >
        <div className="background_overlay"></div>
        <div className="container">
          <div className="bredcrumb-content position-relative"></div>
        </div>
      </section>

      <section id="service-about" className="service-about-section sec ">
        <div className="container">
          <div className="service-about-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-about-img float-right position-relative">
                  <img src={Harris1} alt="About Us" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-about-text-content">
                  <div className="section-title headline">
                    <span>What We Create?</span>
                    <h2>Simple! We Create Brand Awareness!</h2>
                  </div>
                  <div className="service-about-details td-faq-body-content">
                    We are passionate about our work. Our designers stay ahead
                    of the curve to provide engaging and user-friendly website
                    designs to make your business stand out with your business
                    pattern.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    veniam ipsam magnam blanditiis minus maiores excepturi,
                    libero eveniet officiis, exercitationem necessitatibus
                    nostrum qui corporis optio explicabo! Recusandae illo
                    facilis repellat.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="service-about-content">
            <div className="row">
              {[glry1, glry2, glry3, glry4, glry5, glry6].map((src, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="service-about-img position-relative">
                    <img src={src} alt={`Case Study ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-section-1 service-page-blog">
        <div className="container">
          <div className="section-title text-center headline">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="blog-content-wrap pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="blog-feed-wrap">
                  <div className="blog-img-text">
                    <div className="blog-img-wrap">
                      <img src={grid1} alt="Blog Image 1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-feed-wrap">
                  <div className="blog-img-text">
                    <div className="blog-img-wrap">
                      <img src={grid2} alt="Blog Visual 2" />
                    </div>
                    <br />
                    <div className="blog-img-wrap">
                      <img src={grid3} alt="Blog Visual 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="portfolio-details-text td-faq-body-content pb-5">
              <article>
                We are passionate about our work. Our designers stay ahead of
                the curve to provide engaging and user-friendly website designs
                to make your business stand out with your business pattern.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Lorem ipsum dolor sit amet.
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="blog"
        className="blog-section-1 service-page-blog"
        style={{ backgroundColor: "azure" }}
      >
        <div className="container">
          <div className="portfolio-details-video position-relative">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ib6u9aV4ldo?si=l4xwZDS_8BugE_iK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer;muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <br />
          <div className="blog-content-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="blog-feed-wrap">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/CDdQJkPRUZU?si=yMOnyRO6Q71Q63D3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer;muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="blog-feed-wrap">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/GejKLiZOVxk?si=lXC-JFrr7g1FbpEg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer;muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
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
  );
};

export default Harrisnadar;
