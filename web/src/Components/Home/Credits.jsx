import React from 'react';
import './Credits.css';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Credits = () => {
  return (
    <>
      <div className="credits" style={{ position: 'relative', zIndex: 1 }}>
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
        <hr className='divider' />
        <div className="cmpnyname">
          <h1>#beUnique</h1>
        </div>
      </div>
    </>
  );
}

export default Credits;
