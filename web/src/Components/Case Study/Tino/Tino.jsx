import React from 'react'
import './Tino.css'

import Tinobanner from '../../../Assets/case_studies/tino-engineering/banner001.jpg'
import Tino1 from '../../../Assets/case_studies/tino-engineering/about-tino.webp'
import process1 from '../../../Assets/case_studies/tino-engineering/process01.png'
import process2 from '../../../Assets/case_studies/tino-engineering/process02.png'
import process3 from '../../../Assets/case_studies/tino-engineering/process03.png'
import process4 from '../../../Assets/case_studies/tino-engineering/process04.png'
;

import CounterSection from '../GT holidays/Countersection'
const Tino = () => {
  return (
    <>
      <div className='tino-banner'>
      <img
        class="fullscreen-tino"
        src={Tinobanner}
        alt="tino-enginerring-banner-image"
      />
    </div>


    <section id="service-about" className="service-about-section">
      <div className="container">
        <div className="service-about-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-about-img float-right position-relative animate-playstate-img">
                <img
                  src={Tino1}
                  alt="Tino Engineering"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-about-text-content">
                <div className="section-title headline">
                  <span>Let's Lookup</span>
                  <h2 style={{ color: '#05297e' }}>About Tino Engineering</h2>
                </div>
                <div className="service-about-details td-faq-body-content">
                  TINO® ENGINEERING PVT. LTD, founded in 1997 in Nagercoil
                  (Tamil Nadu, India), is a well-known manufacturer and supplier
                  of high-quality panel boards such as PLC AND SCADA, LT Panel
                  Fabricators, Harmonic Filter Panels, Automatic Capacitor
                  Panels, and Electrical Panel Boards.
                  <br /><br />
                  The products are produced with quality raw materials that
                  reflect our integrity and reliability in the market,
                  by international standards of excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="blog" className="blog-section-2 service-page-blog">
      <div className="container">
        <div className="section-title text-center headline">
          <h2 style={{ color: '#f1f1f1' }}>How We Create Traffic in Website</h2>
          <hr />
        </div>
        <div className="blog-content-wrap">
          <div className="portfolio-details-text td-faq-body-content">
            <article style={{ color: '#fff' }}>
              <h5>Organic Traffic Growth:</h5>
              Over the past month, we have seen a significant increase in
              organic traffic to your website. Our targeted SEO strategies
              and optimizations have resulted in a growth in organic sessions
              compared to the previous month.
              <br /><br />
              <h5>Keyword Ranking Improvements:</h5>
              Our team has been diligently working on improving your
              website's search engine rankings. We're delighted to report
              your target keywords have experienced positive movements, with
              2 keywords ranking on the first page of search results.
              <br /><br />
              <h5>Content Updates:</h5>
              Content continues to play a crucial role in SEO success. In
              Nov 2023, we published high-quality blog posts and optimized
              pages on your website. These efforts have contributed to
              improved search visibility and user engagement.
              <br /><br />
              <h5>Backlink Acquisition:</h5>
              Our link-building efforts have been fruitful, with a lot of
              high-quality backlinks acquired from authoritative websites.
              These backlinks enhance your website's authority and
              credibility in the eyes of search engines.
              <br /><br />
              <h5>Technical SEO Enhancements:</h5>
              We have conducted a comprehensive audit and made necessary
              technical SEO improvements to ensure your website's optimal
              performance. This includes addressing issues related to site
              speed, mobile-friendliness, and site architecture.
            </article>
          </div>
          <br />
          <div className="team-content-wrapper-2 clearfix">
            <div className="team-member-content-2">
              <div className="row">
                {[process1,process2,process3,process4].map((img, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="team-member-innerbox">
                      <div className="team-member-img position-relative img-border">
                        <img
                          src={img}
                          alt={`Process ${index + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <CounterSection/>


    </>
  )
}

export default Tino
