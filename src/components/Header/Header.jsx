import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../assets/images/logos/logoWhite.png";
import "../../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <header data-aos="fade" data-aos-delay= "600" className="flex-main constant-width constant-padding">
      <Link style={{ textDecoration: "none" }} to="/home">
        <img loading="lazy" className="logo" src={logoWhite} alt="logo" />
      </Link>
      <nav
        className={`top-nav transition ${!isOpen ? "close-nav" : "open-nav"}`}
      >
        <ul className="flex-main flex">
          <li onClick={toggleNav}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/home"
            >
              <p className="sec-font standard-fz">Home</p>
            </NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/about"
            >
              <p className="sec-font standard-fz">About</p>
            </NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/cars/All"
            >
              <p className="sec-font standard-fz">Browse Cars</p>
            </NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/blogs"
            >
              <p className="sec-font standard-fz">Blogs</p>
            </NavLink>
          </li>
          <li onClick={toggleNav}>
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to="/contact"
            >
              <p className="sec-font standard-fz">Contact</p>
            </NavLink>
          </li>
        </ul>
        <div className="user-wrapper flex">
          <Link
            style={{
              textDecoration: "none",
            }}
            onClick={toggleNav}
            className="sign-in sec-font standard-fz scale transition pri-font-clr"
            to="/sign-in"
          >
            Sign In
          </Link>
          <Link
            style={{
              textDecoration: "none",
              borderRadius: "5px",
            }}
            onClick={toggleNav}
            className="register sec-font standard-fz pri-bg btn-padding scale transition pri-font-clr"
            to="/register"
          >
            Register
          </Link>
        </div>
      </nav>
      <div onClick={toggleNav} className="hamburger sec-font-clr2 standard-fz3">
        <i className={`fa-solid ${!isOpen ? "fa-bars" : "fa-xmark"}`}></i>
      </div>
      <div
        onClick={toggleNav}
        className={`img-overlay ${
          !isOpen ? "close-img-overlay" : "open-img-overlay"
        } transition`}
      ></div>
    </header>
  );
}
