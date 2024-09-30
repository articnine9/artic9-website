import React from "react";
import facilitiy from '../../../Assets/sectors/facilities.png'
const Facilities = () => {
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
              <h2>Facilities</h2>
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
                  <img
                    src={facilitiy}
                    alt="Facilities"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>Facilities</h2>
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      Fuel our moonshots by devising innovative solutions to
                      complex problems in forecasting, accounting, compliance,
                      and project management. From advising our product teams to
                      managing day-to-day balance sheets, you’ll help keep our
                      business on track to meet (or, better yet, exceed) our
                      goals.
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

export default Facilities;
