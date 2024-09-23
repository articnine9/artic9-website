import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Home.css'; 

const AnotherSlider = () => {
  const [hoveredCarousel, setHoveredCarousel] = useState(null);

  const handleMouseEnter = (carouselNumber) => {
    setHoveredCarousel(carouselNumber);
  };

  const handleMouseLeave = () => {
    setHoveredCarousel(null);
  };

  return (
    <div className="sec-carousel">
      <div
        className="carousel-container car1"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <UncontrolledCarousel
          className="carousl carousel1" 
          items={[
            {
              key: 1,
              src: "https://picsum.photos/id/123/1200/600",
            },
            {
              key: 2,
              src: "https://picsum.photos/id/456/1200/600",
            },
            {
              key: 3,
              src: "https://picsum.photos/id/678/1200/600",
            },
          ]}
          controls={false}
        />
        {hoveredCarousel === 1 && (
          <div className="know-more-button">
            <button>Know More</button>
          </div>
        )}
      </div>

      <div
        className="carousel-container car2"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <UncontrolledCarousel
          className="carousl carousel2" 
          items={[
            {
              key: 1,
              src: "https://picsum.photos/id/123/1200/600",
            },
            {
              key: 2,
              src: "https://picsum.photos/id/456/1200/600",
            },
            {
              key: 3,
              src: "https://picsum.photos/id/678/1200/600",
            },
          ]}
          controls={false}
        />
        {hoveredCarousel === 2 && (
          <div className="know-more-button">
            <button>Know More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnotherSlider;
