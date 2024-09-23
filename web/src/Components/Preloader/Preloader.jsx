import React from 'react';
import Logo from '../../Assets/logo1.png'; // Adjust the path to your logo image
import './Preloader.css'
const Preloader = () => {
  return (
    <div>
      <div id="preloader">
        <div className="taeled-preloader">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="loader">
          <div className="row loader-area">
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 preloader-wrap">
              <div className="loader-bg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="up">
        <a href="#" className="scrollup text-center">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Preloader;
