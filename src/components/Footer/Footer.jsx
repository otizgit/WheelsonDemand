import React, { useRef } from "react";
import "../../styles/footer.css";
import logoWhite from "../../assets/images/logos/logoWhite.png";
import { Link, NavLink } from "react-router-dom";
import playStoreImg from "../../assets/images/Download-Links/play-store.png";
import appStoreImg from "../../assets/images/Download-Links/app-store.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inputRef = useRef(null);

  function footerEmailSubmit() {
    if (inputRef.current.value === "") {
      toast.error("Please enter an email", {
        theme: "dark",
      });
    } else if (!inputRef.current.value.match(emailRegex)) {
      toast.error("Please enter a valid email", {
        theme: "dark",
      });
    } else {
      toast.success("Subscription successful, you'll start receiving emails.", {
        theme: "dark",
      });
    }
  }

  const date = new Date();
  return (
    <footer className="constant-padding">
      <div>
        <div className="header-margin">
          <Link to="/home">
            <img loading="lazy" className="logo" src={logoWhite} alt="logo" />
          </Link>
        </div>
        <div className="download-links-img">
          <p className="standard-fz sec-font-clr sub-header-margin">
            We Are Available On Mobile
          </p>
          <div className="img-wrapper">
            <button>
              <img
                loading="lazy"
                className="scale transition"
                src={playStoreImg}
                alt="play store"
                effect="blur"
              />
            </button>
            <button>
              <img
                loading="lazy"
                className="scale transition"
                src={appStoreImg}
                alt="app store"
                effect="blur"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex nav-wrapper">
        <nav className="footer-nav">
          <ul className="flex-main flex">
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/home"
              >
                <p className="sec-font standard-fz">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/about"
              >
                <p className="sec-font standard-fz">About</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/cars/All"
              >
                <p className="sec-font standard-fz">Browse Cars</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul className="flex-main flex">
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/blogs"
              >
                <p className="sec-font standard-fz">Blogs</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/about"
              >
                <p className="sec-font standard-fz">Our Team</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/FAQS"
              >
                <p className="sec-font standard-fz">FAQs</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <ul className="flex-main flex">
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/contact"
              >
                <p className="sec-font standard-fz">Contact</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/become-a-driver"
              >
                <p className="sec-font standard-fz">Become A Driver</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to="/privacy-policy"
              >
                <p className="sec-font standard-fz">Privacy Policy</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="sub-header-margin">
          <h2 style={{marginBottom: ".3em"}} className="sec-font3 standard-fz2">NewsLetter</h2>
          <p className="min-font sec-font-clr">
            Subscribe to our newsletter to stay updated on current information
          </p>
        </div>
        <div className="footer-input-container header-margin">
          <input
            ref={inputRef}
            className="footer-input"
            type="email"
            placeholder="Enter your email"
          />
          <button
            onClick={footerEmailSubmit}
            className="sec-font standard-fz pri-bg btn-padding scale transition"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div className="links sub-header-margin">
          <div className="social-handle scale transition">
            <a href="">
              <i className="fa-brands fa-facebook-f pri-bg standard-fz"></i>
            </a>
          </div>
          <div className="social-handle scale transition">
            <a href="">
              <i className="fa-brands fa-twitter pri-bg standard-fz"></i>
            </a>
          </div>
          <div className="social-handle scale transition">
            <a href="">
              <i className="fa-brands fa-linkedin-in pri-bg standard-fz"></i>
            </a>
          </div>
          <div className="social-handle scale transition">
            <a href="">
              <i className="fa-brands fa-pinterest-p pri-bg standard-fz"></i>
            </a>
          </div>
        </div>
        <div className="location">
          <p className="min-font sec-font-clr">
            <i className="fa-solid fa-copyright sec-font-clr standard-fz"></i>{" "}
            {date.getFullYear()}, home, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
