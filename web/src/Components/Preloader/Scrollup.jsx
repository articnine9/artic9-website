import React from "react";
import { FaAnglesUp } from "react-icons/fa6";
import "./Preloader.css"; // Import a separate CSS file for styling if needed

const Scrollup = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="up">
      <a href="#" className="scrollup text-center" onClick={handleScrollToTop}>
        <FaAnglesUp className="scrollup" />
      </a>
    </div>
  );
};

export default Scrollup;
