import React from "react";
import { FaAnglesUp } from "react-icons/fa6";
import "./Preloader.css"; // Import a separate CSS file for styling if needed

const Scrollup = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="up">
      <button
        className="scrollup text-center"
        onClick={handleScrollToTop}
        aria-label="Scroll to top" // Optional for better accessibility
      >
        <FaAnglesUp className="scrollup" />
      </button>
    </div>
  );
};

export default Scrollup;
