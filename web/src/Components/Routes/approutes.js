import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Gtholiday from "../Case Study/GT holidays/Gtholiday";
import Harrisnadar from "../Case Study/HarrisNadar/Harrisnadar";
import Tino from "../Case Study/Tino/Tino";
import Story from "../Our Story/Story";
import Business from "../Sectors/Business/Business";
import Design from "../Sectors/Design/Design";
import Engineering from "../Sectors/Engineering/Engineering";
import Facilities from "../Sectors/Facilities/Facilities";
import Finance from "../Sectors/Finance/Finance";
import Legal from "../Sectors/Legal/Legal";
import Marketing from "../Sectors/Marketing/Marketing";
import People from "../Sectors/People/People";
import Sales from "../Sectors/Sales and service/Sales";
import Searchengine from "../Solutions/Search Engine/Serachengine";
import Socialmedia from "../Solutions/Social Media/Socialmedia";
import Videoprod from "../Solutions/Video prod/Videoprod";
import Websitedev from "../Solutions/Website dev/Websitedev";
import Work from "../Work with us/Work";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PreloaderWrapper from "../Preloader/PreloaderWrapper";
import ScrollupWrapper from "../Preloader/ScrollupWrapper";
import '../../App.css'
const Approutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Home className="home"/>
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/gtholiday"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Gtholiday />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/harrisnadar"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Harrisnadar />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/tino"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Tino />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/story"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Story />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/business"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Business />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/design"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Design />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/engineering"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Engineering />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/facilities"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Facilities />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/finance"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Finance />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/legal"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Legal />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/marketing"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Marketing />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/people"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <People />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/sales"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Sales />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/searchengine"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Searchengine />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/socialmedia"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Socialmedia />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/videoprod"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Videoprod />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/websitedev"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Websitedev />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Work />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Approutes;
