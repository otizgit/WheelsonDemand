import React from "react";
import "../../styles/hero.css";
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
        <source
          media="(max-width: 1000px)"
          srcSet="https://ik.imagekit.io/zusxqcpbw/tr:w-600/heroMobile-img3.jpg?updatedAt=1694598394593"
        />
        <img
          loading="lazy"
          className="hero-img"
          src="https://ik.imagekit.io/zusxqcpbw/tr:w-1600/hero-img2.jpg?updatedAt=1694598115983"
          alt="hero car image"
        />
      </picture>
      <div className="hero-overlay"></div>
    </section>
  );
}
