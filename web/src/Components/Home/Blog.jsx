import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Header/Header.css";

// Sample images for Blog Gallery
import pstr1 from "../../Assets/b4.png";
import pstr2 from "../../Assets/b4.png";
import pstr3 from "../../Assets/b4.png";
import pstr4 from "../../Assets/b4.png";
import pstr5 from "../../Assets/b4.png";

const blogImages = [
  { src: pstr1, alt: "Blog 1" },
  { src: pstr2, alt: "Blog 2" },
  { src: pstr3, alt: "Blog 3" },
  { src: pstr4, alt: "Blog 4" },
  { src: pstr5, alt: "Blog 5" },
];

const Blog = () => {
  const blogsetting1 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  };

  const blogsetting2 = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
    rtl: true,
  };
  return (
    <>
      <div className="blog-section-1">
        <div className="blog-cnt">
          <div className="blog-head">
            <div class="blog-title">
              Explore How We Catalyzed their <br /> Business's
              <b style={{ fontWeight: 600 }}> Digital Transformation</b>
            </div>
          </div>

          <div className="blog-swiper">
            <div className="swipers">
              <Slider {...blogsetting1}>
                {blogImages.map((blogImage, index) => (
                  <div key={index} className="swiperContainer">
                    <img
                      src={blogImage.src}
                      loading="lazy"
                      decoding="async"
                      alt={blogImage.alt}
                      className="pstrs"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="swipers">
              <Slider {...blogsetting2}>
                {blogImages.map((blogImage, index) => (
                  <div key={index} className="swiperContainer">
                    <img
                      src={blogImage.src}
                      loading="lazy"
                      decoding="async"
                      alt={blogImage.alt}
                      className="pstrs"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
