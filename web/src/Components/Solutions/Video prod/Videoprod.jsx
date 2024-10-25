import React from 'react'
import './Video.css'


import Vid from "../../../Assets/video.webp";
const Videoprod = () => {
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
              <h2>Video Production</h2>
            </div>
          </div>
        </div>
      </section>


      <section id="about-4" className="bg-light2">
      <div className="container">
        <div className="about-content-wrapper-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img text-center ease-in-out duration-300 zoom-in-out-box">
                <img
                  src={Vid}
                  style={{ paddingTop: '130px' }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text-wrapper">
                <div className="section-title title-border gradiant-border headline">
                  <div className="td-faq-body td-faq-body-sub-content color-grey ">
                    Make your
                    <b style={{ fontWeight: 600 }}>
                      audience <br />
                      remind You
                    </b>
                    all time
                  </div>
                  <div className="font-bold2">
                    <h3>VIDEO PRODUCTION</h3>
                  </div>
                  <hr
                    style={{
                      width: '30%',
                      textAlign: 'left',
                      marginLeft: 0,
                      border: '1px solid #454545',
                      marginTop: '-3px',
                    }}
                  />
                </div>

                <div className="about-text-details">
                  <ul>
                    <li>
                      Crafting videos for our clients is both an exhilarating and rewarding experience.
                    </li>
                    <li>
                      Engage consistently with your audience as you enter the digital world.
                    </li>
                    <li>
                      Create videos that highlight your brand creatively and effectively.
                    </li>
                    <li>
                      Help customers understand your brand and its vision better.
                    </li>
                    <li>
                      Make a striking visual impression with just one shot.
                    </li>
                  </ul>
                </div>
                <div className="taeled-btn text-center position-relative text-uppercase">
                  <a href="/contact">Call Us</a>
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

export default Videoprod
