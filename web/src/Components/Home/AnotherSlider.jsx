import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Home.css'; 

const AnotherSlider = () => {
  return (
    <>
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
    </>
  );
};

export default AnotherSlider;
