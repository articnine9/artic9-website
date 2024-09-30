import React from "react";
import people from '../../../Assets/sectors/people.png'
const People = () => {
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
              <h2>People</h2>
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
                  <img src={people} alt="People" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-tab-wrapper">
                  <div className="section-title headline">
                    <h2>People</h2>
                  </div>
                  <div id="tabsContent2" className="tab-content">
                    <div
                      id="value"
                      className="tab-pane fade active show td-faq-body-content"
                    >
                      Keep White ino going and growing. Our People Operations
                      team (known elsewhere as HR) and administrative staff are
                      the curious and creative colleagues that anchor us to our
                      foundations and help us shoot for the moon. The POps team
                      lives by the mantra "find them, grow them, keep them," and
                      is dedicated to staffing, development, and a distinct and
                      inclusive culture.
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

export default People;
