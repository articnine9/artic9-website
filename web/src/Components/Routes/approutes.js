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
const Approutes = () => {
  return (
    <>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gtholiday" element={<Gtholiday />} />
          <Route path="/harrisnadar" element={<Harrisnadar />} />
          <Route path="/tino" element={<Tino />} />
          <Route path="/story" element={<Story />} />
          <Route path="/business" element={<Business />} />
          <Route path="/design" element={<Design />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/people" element={<People />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/searchengine" element={<Searchengine />} />
          <Route path="/socialmedia" element={<Socialmedia />} />
          <Route path="/videoprod" element={<Videoprod />} />
          <Route path="/websitedev" element={<Websitedev />} />
          <Route path="/contact" element={<Work />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Approutes;
