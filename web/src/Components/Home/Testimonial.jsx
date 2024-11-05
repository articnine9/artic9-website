import React from "react";
import "./Home.css";
import Tst1 from "../../Assets/testimonial/tst1.jpg";
import Tst2 from "../../Assets/testimonial/tsn1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
const testimonials = [
  {
    img: Tst1,
    text: "We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly.",
    author: "Miranda H. Kilixer",
    role: "Founder",
  },
  {
    img: Tst2,
    text: "We are passionate about our work. Our designers stay ahead of the curve to provide engaging and user-friendly.",
    author: "Miranda H. Kilixer",
    role: "Founder",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial-2" className="testimonial-section-2">
      <div className="container">
        <div className="section-title text-center headline">
          <div className="td-faq-body td-faq-body-sub-content">
            Their <b style={{ fontWeight: 600 }}>Journey</b> with Us Client's{" "}
            <b style={{ fontWeight: 600 }}>Love</b>
          </div>
        </div>
        <div className="testimonial-content-wrapper-2 position-relative">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner relative-position">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="testimonial-inner-wrap position-relative clearfix">
                    <div className="testimonial-img float-left">
                      <img src={testimonial.img} alt="" />
                    </div>
                    <div className="testimonial-text d-inline-block position-relative">
                      <span>{testimonial.text}</span>
                      <div className="testimonial-author text-uppercase headline pera-content">
                        <h3>
                          {testimonial.author}
                        </h3>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-btn-2">
              <a
                className="testimonial-slider-btn2 carousel-control-prev mx-3"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <FcPrevious />
              </a>
              <a
                className="testimonial-slider-btn2 carousel-control-next mx-3"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
               <FcNext />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
