import React from "react";
import { useEffect } from "react";
import Scrollup from "./Scrollup";

const ScrollupWrapper = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUpButton = document.querySelector(".scrollup");
      if (window.scrollY > 300) {
        scrollUpButton.classList.add("show");
      } else {
        scrollUpButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {children}
      <Scrollup />
    </>
  );
};

export default ScrollupWrapper;
