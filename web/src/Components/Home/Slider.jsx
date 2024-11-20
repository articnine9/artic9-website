import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import gtmain from "../../Assets/s11.png";
import gtlogo from "../../Assets/gt-logo.png";
import pst1 from '../../Assets/case_studies/gt-holidays/instagram01.webp'
import pst2 from '../../Assets/case_studies/gt-holidays/instagram02.webp'
import pst3 from '../../Assets/case_studies/gt-holidays/instagram03.webp'
const Slider = () => {
  const slides = [
    {
      image: gtmain,
      logo: gtlogo,
      cnt1: "Branding",
      cnt2: "UI & UX Designs",
      cnt3: "Product Development",
      cnt4: "Be the brand that stands out in business.",
      cnt5: "Learn More",
      img1:pst1,
      img2:pst2,
      img3:pst3,
    },
    {
      image: gtmain,
      logo: gtlogo,
      cnt1: "Branding",
      cnt2: "UI & UX Designs",
      cnt3: "Product Development",
      cnt4: "Be the brand that stands out in business.",
      cnt5: "Learn More",
      img1:pst1,
      img2:pst2,
      img3:pst3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init();

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFade(false);
        AOS.refresh();
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className={`slides ${fade ? "fade-out" : "fade-in"} col-lg-12`} >
        {/* Image Section */}
        <div className="slider-image" data-aos="fade-right">
          <img
            src={slides[currentSlide].image}
            alt="slider"
            // className="bg"
          />
        </div>

        {/* Content Section */}
        <div className="slider-content" data-aos="fade-left">
          <img
            src={slides[currentSlide].logo}
            alt="logo"
            className="logo-image"
          />
          <br /> <br />
          <div className="div flex">
            <span className="spn">
              {slides[currentSlide].cnt1} <b>|</b>
            </span>
            <span className="spn">
              {slides[currentSlide].cnt2} <b>|</b>
            </span>
            <span className="spn">{slides[currentSlide].cnt3}</span>
          </div>
          <br /> <br />
          <h2 className="gt-head">{slides[currentSlide].cnt4}</h2>
          <div className="posters">
            <img src={slides[currentSlide].img1} alt="Posters" className="pstr" />
            <img src={slides[currentSlide].img2} alt="Posters" className="pstr"/>
            <img src={slides[currentSlide].img3} alt="Posters" className="pstr"/>
          </div>
          <button className="carousel-btn">{slides[currentSlide].cnt5}</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
