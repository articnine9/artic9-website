import React from "react";
import legal from "../../../Assets/sectors/legal.png";
const Legal = () => {
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
        <div className="background_overlay"></div>
        <div className="container">
          <div className="bredcrumb-content position-relative">
            <div className="bredcrumb-title text-uppercase headline">
              <h2>Legal</h2>
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
                  <img src={legal} alt="Legal" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>Legal</h2>
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      Tackle the most important challenges of the information
                      age, like working with product and engineering teams to
                      understand the local implications of their work. From
                      contract negotiations to user experience, you'll create
                      innovative solutions to complex business issues. Legal and
                      policy teams are a vital part of White ino, shaping the
                      future of internet policy and law.
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

export default Legal;
