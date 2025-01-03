import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import "./Credits.css";

const Credits = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textStyle = {
    backgroundPosition: `center ${scrollY * 1.5}px`,
  };

  return (
    <>
      <div className="credits">
        <div className="story">
          <div className="desc">
            <span>
              Creating stories that speak to the heart of your
              <b style={{ color: "black" }}> audience</b>
            </span>
          </div>
          <div className="founder">
            <h2>Directors</h2>
            <a
              href="https://www.linkedin.com/in/subingnanaselvam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="founderlink"
            >
              Subin Gnanaselvam <BsArrowUpRightCircle />
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/nishwinissac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="founderlink"
            >
              Nishwin Issac <BsArrowUpRightCircle />
            </a>
          </div>
        </div>

        {/* Divider and Text */}
        <div className="scrollmove">
          <hr className="divider" />
          <div className="cmpnyname">
            <h1 style={textStyle}>#beUnique</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credits;
