import React from "react";
import Img1 from "../../Assets/our-story/what-we-do.png";
import Img2 from "../../Assets/our-story/client_approach.png";
import Img3 from "../../Assets/our-story/help_you.png";
import Img4 from "../../Assets/our-story/how_we_start.png";

const ServiceTab = () => {
  return (
    <>
      <section id="service-tab" className="service-tab-section">
        <div className="container">
          <div className="service-tab-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>What we do</h2>
                    <h5>
                      <i>Ok, you've got my attention, what next?</i>
                    </h5>
                  </div>
                  <br />
                  <div id="tabsContent2" className="tab-content">
                    <div className="td-faq-body td-faq-body-content">
                      We are a collection of creators, designers and developers
                      with cutting-edge technology essential for the success of
                      any business.
                      <br />
                      <br />
                      At Artic9, we believe that great work is the result of
                      attentive discipline and evolution in order to recognize
                      the best way to deliver products and experiences that ooze
                      both purpose and style.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-details-img">
                  <img src={Img1} alt="What we do" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-tab" className="service-tab-section">
        <div className="container">
          <div className="service-tab-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-details-img">
                  <img src={Img2} alt="Client Approach" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>What do most clients commonly approach you for?</h2>
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div className="td-faq-body td-faq-body-content">
                      At Artic9, we specialize in providing web and mobile app
                      development services. Our clients come to us in order to
                      improve customer satisfaction and loyalty through the
                      interaction with their product or service.
                      <br />
                      <br />
                      People turn to us when they wish to build a memorable
                      online experience that delights and engages their
                      customers.
                      <br />
                      <br />
                      Our services are designed for clients from every corner of
                      the globe—from startups to large corporations, and
                      government agencies to advertising agencies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-tab" className="service-tab-section">
        <div className="container">
          <div className="service-tab-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>Alright, I'm convinced, how can you help out?</h2>
                    <h6 style={{ fontWeight: 300, color: "#878787" }}>
                      <i>
                        We organize into small teams, and the team attached to
                        each project is responsible for executing the project.
                        Each team will consist of one team leader, while the
                        rest is made up of designers and developers.
                      </i>
                    </h6>
                    <br />
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      We may know the technology, but you’re the one who knows
                      your own business best. What we really aspire to be is a
                      true extension of your team. We’ll work together to create
                      a lasting and meaningful relationship using our fresh
                      thinking and smart work to articulate what matters to you.
                      We work with just the right balance of innovation and
                      usability.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-details-img">
                  <img src={Img3} alt="How can we help" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-tab" className="service-tab-section">
        <div className="container">
          <div className="service-tab-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-details-img">
                  <img src={Img4} alt="How we start" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>Sounds great! How do we start?</h2>
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      Oh, we’ve won you over and you’re ready to hit us up to
                      create something amazing? It just involves an initial
                      discussion, an agreement, and we are good to go! There are
                      two ways you can work with us:
                    </div>
                    <br />
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      <strong>Project basis:</strong> Research, design, and
                      implementation for a specific project.
                      <br />
                      <strong>project.Partnership basis</strong> Multiple
                      projects and/or a long-term business relationship.
                    </div>
                    <br />
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      Just drop an email to{" "}
                      <a
                        href="mailto:hi@artic9.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <u>hi@artic9.com</u>
                      </a>{" "}
                      and we’ll figure out the best way to get started!
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

export default ServiceTab;
