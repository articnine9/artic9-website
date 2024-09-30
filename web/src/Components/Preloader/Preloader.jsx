import React from "react";
import "./Preloader.css";
import Logo from "../../Assets/logo2.png";

const Preloader = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <div id="preloader">
          <div className="taeled-preloader">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="loader">
            <div className="row loader-area">
              {[...Array(4)].map((_, index) => (
                <div className="col-3 preloader-wrap" key={index}>
                  <div className="loader-bg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="content loaded">{children}</div>
      )}
    </>
  );
};

export default Preloader;
