import React, { useEffect, useContext } from "react";
import "../styles/contact.css";
import SectionHeader from "../components/UI/SectionHeader";
import { ToggleContext } from "../App";

export default function Contact() {
  const setDisplayHeader = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDisplayHeader(true);
  }, []);

  return (
    <div>
      <SectionHeader title="CONTACT US" />
      <div className="header-margin">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6293451.805995024!2d-94.55487109401018!3d39.62777766944431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sng!4v1692974203177!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="constant-padding shadow constant-margin flex-main contact-wrapper">
        <div className="contact-div">
          <p className="standard-weight align pri-font-clr standard-fz2 header-margin">
            Contact Information
          </p>
          <div
            style={{ gap: ".5em" }}
            className="flex-plain standard-fz sec-font-clr header-margin"
          >
            <i className="fa-solid fa-envelope sec-font-clr2"></i>
            <a
              style={{ textDecoration: "none" }}
              className="sec-font-clr"
              href="mailto: info@wheelsondemand.com"
            >
              info@wheelsondemand.com
            </a>
          </div>
          <div
            style={{ gap: ".5em" }}
            className="flex-plain standard-fz sec-font-clr header-margin"
          >
            <i className="fa-solid fa-phone sec-font-clr2"></i>
            <a
              style={{ textDecoration: "none" }}
              className="sec-font-clr"
              href="tel:+12345678900"
            >
              +1-234-567-8900
            </a>
          </div>
          <div className="links">
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
        </div>
        <div className="contact-form-container">
          <p
            className="standard-weight align sec-font sec-font-clr standard-fz2 header-margin"
          >
            Send Us A Message
          </p>
          <form action="">
            <div
              style={{ gap: "1em" }}
              className="flex-main form-wrapper contact-div"
            >
              <input required type="text" placeholder="Enter your name" />
              <input required type="email" placeholder="Enter your email" />
            </div>
            <div
              className="form-wrapper"
            >
              <input required type="text" placeholder="Subject" />
            </div>
            <div className="form-wrapper">
              <textarea
                cols="30"
                rows="10"
                placeholder="Enter message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="pri-bg standard-weight transition"
            >
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
