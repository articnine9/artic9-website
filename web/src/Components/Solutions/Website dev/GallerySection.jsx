import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Ae from "../../../Assets/technologies-logo/ae.png";
import Ai from "../../../Assets/technologies-logo/ai.png";
import Astra from "../../../Assets/technologies-logo/Astra.png";
import bootstrap from "../../../Assets/technologies-logo/bootstrap.png";
import css from "../../../Assets/technologies-logo/css.png";
import Elemenator from "../../../Assets/technologies-logo/Elementor.png";
import Envanto from "../../../Assets/technologies-logo/Envanto.png";
import hostgator from "../../../Assets/technologies-logo/hostgator.png";
import html from "../../../Assets/technologies-logo/html.png";
import Indesign from "../../../Assets/technologies-logo/Indesign.png";
import Jetpack from "../../../Assets/technologies-logo/Jet-Pack.png";
import meta from "../../../Assets/technologies-logo/meta.png";
import moz from "../../../Assets/technologies-logo/moz.png";
import Premier from "../../../Assets/technologies-logo/pemier-pro.png";
import Ps from "../../../Assets/technologies-logo/ps.png";
import Rank from "../../../Assets/technologies-logo/rank-tracker.png";
import Frog from "../../../Assets/technologies-logo/screaming-frog.png";
import semrush from "../../../Assets/technologies-logo/semrush.png";
import spyglass from "../../../Assets/technologies-logo/spyglass.png";
import Suite from "../../../Assets/technologies-logo/suite.png";
import Woo from "../../../Assets/technologies-logo/woo-commerce.png";
import Word from "../../../Assets/technologies-logo/Wordfence.png";
import Wordp from "../../../Assets/technologies-logo/wordpress.png";
import Wp from "../../../Assets/technologies-logo/wp-rocket.png";
import Zoho from "../../../Assets/technologies-logo/zoho.png";

import "./Web.css";
const GallerySection = () => {
  const [filter, setFilter] = useState("all");

  const technologies = [
    { src: Wordp, category: "web" },
    { src: Elemenator, category: "web" },
    { src: Envanto, category: "digital" },
    { src: Jetpack, category: "web" },
    { src: Woo, category: "web" },
    { src: Word, category: "web" },
    { src: Astra, category: "web" },
    { src: Ps, category: "digital" },
    { src: Premier, category: "digital" },
    { src: Ai, category: "digital" },
    { src: Indesign, category: "digital" },
    { src: Ae, category: "digital" },
    { src: Zoho, category: "seo" },
    { src: html, category: "web" },
    { src: css, category: "web" },
    { src: bootstrap, category: "web" },
    { src: hostgator, category: "web" },
    { src: meta, category: "digital" },
    { src: semrush, category: "seo" },
    { src: Wp, category: "seo" },
    { src: moz, category: "seo" },
    { src: Frog, category: "seo" },
    { src: Suite, category: "seo" },
    { src: Rank, category: "seo" },
    { src: spyglass, category: "seo" },
  ];

  const filteredTechnologies =
    filter === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === filter);
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="section-padding gallery-section" id="gallery">
        <div className="container">
          <div className="section-title text-center headline">
            <div className="td-faq-body td-faq-body-sub-content">
              <b style={{ fontWeight: 600 }}>Tools & Technologies</b> Used
            </div>
          </div>
          <br />

          <div id="btncontainer" className="filter">
            <button
              className={`btn ${filter === "all" ? "btn-active" : ""}`}
              onClick={() => handleFilterChange("all")}
            >
              ALL Technology
            </button>
            <button
              className={`btn ${filter === "digital" ? "btn-active" : ""}`}
              onClick={() => handleFilterChange("digital")}
            >
              Digital Marketing
            </button>
            <button
              className={`btn ${filter === "web" ? "btn-active" : ""}`}
              onClick={() => handleFilterChange("web")}
            >
              Web Development
            </button>
            <button
              className={`btn ${filter === "seo" ? "btn-active" : ""}`}
              onClick={() => handleFilterChange("seo")}
            >
              SEO
            </button>
          </div>

          <div className="gallery sets">
            {filteredTechnologies.map((tech, index) => (
              <a key={index} className={`all ${tech.category}`}>
                <img src={tech.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
