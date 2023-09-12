import React from "react";
import heroImage from "../../assets/images/hero-img2.jpg";
import "../../styles/hero.css";
import mobileHeroImage from "../../assets/images/heroMobile-img3.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="constant-margin">
      <div className="hero-content">
        <h1 className="hero-title sec-font2 pri-font-clr">
          UNLEASH YOUR <span className="sec-font2">DREAM</span> CAR
        </h1>
        <div className="hero-btn-container flex-plain">
          <Link
            to="/cars/All"
            style={{ textDecoration: "none" }}
            className="hero-btn min-font pri-font-clr"
            data-aos="fade-up" 
          >
            Hire Now <i className="fa-solid fa-car-side transition"></i>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="hero-btn min-font pri-font-clr"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Learn More <i className="fa-solid fa-angles-right transition"></i>
          </Link>
        </div>
      </div>
      <picture>
        <source media="(max-width: 1000px)" srcSet={mobileHeroImage} />
        <img loading="lazy" className="hero-img" src={heroImage} alt="hero car image" />
      </picture>
      <div className="hero-overlay"></div>
    </section>
  );
}
