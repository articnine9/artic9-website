import React from 'react'
import market from '../../../Assets/sectors/marketing.png'
const Marketing = () => {
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
              <h2>Marketing & Communications</h2>
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
                <img src={market} alt="Marketing & Communications" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-tab-wrapper">
                <div className="section-title headline">
                  <h2>Marketing & Communications</h2>
                </div>
                <div id="tabsContent2" className="tab-content">
                  <div id="value" className="tab-pane fade active show td-faq-body-content">
                    Deliver the analytical insights our leaders use to enable us to innovate. Whether it’s identifying acquisitions and investments, monetizing strategies for products, or developing partners in emerging markets such as Africa and India, Business Strategy ino anticipates opportunities and executes programs critical to White ino’s short- and long-term growth.
                  </div>
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

export default Marketing
